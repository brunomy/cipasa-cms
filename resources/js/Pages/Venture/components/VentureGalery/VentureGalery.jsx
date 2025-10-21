import './VentureGalery.scss';
import { Box, Button } from '@mui/material';
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper/modules';

import arrow from './icons/arrow.svg';
import logo from './icons/logo.svg';

import img1 from './images/img1[900x450].png';
import img2 from './images/img2[900x450].png';
import img3 from './images/img3[900x450].png';
import img4 from './images/img4[900x450].png';
import img5 from './images/img5[900x450].png';
import img6 from './images/img6[900x450].png';
import img7 from './images/img7[900x450].png';
import img8 from './images/img8[900x450].png';
import img9 from './images/img9[900x450].png';
import img10 from './images/img10[900x450].png';
import img11 from './images/img11[900x450].png';
import img12 from './images/img12[900x450].png';
import ButtonFilter from '../../../../components/Buttons/ButtonFilter/ButtonFilter';

export default function VentureGalery() {
  const swiperRef = useRef(null);

  const [selectedGalery, setSelectedGalery] = useState(null);

  const [images, setImages] = useState([
    {
      id: 0,
      img: img1,
      title: 'Imagem 1',
      id_galery: 1,
      name_galery: 'Perspectivas'
    },
    { id: 1, img: img2, title: 'Imagem 2', id_galery: 1, name_galery: 'Perspectivas' },
    { id: 2, img: img3, title: 'Imagem 3', id_galery: 1, name_galery: 'Perspectivas' },
    { id: 3, img: img4, title: 'Imagem 4', id_galery: 1, name_galery: 'Perspectivas' },
    { id: 4, img: img5, title: 'Imagem 5', id_galery: 1, name_galery: 'Perspectivas' },
    { id: 5, img: img6, title: 'Imagem 6', id_galery: 1, name_galery: 'Perspectivas' },
    { id: 6, img: img7, title: 'Imagem 7', id_galery: 1, name_galery: 'Perspectivas' },
    { id: 7, img: img8, title: 'Imagem 8', id_galery: 2, name_galery: 'Lazer' },
    { id: 8, img: img9, title: 'Imagem 9', id_galery: 2, name_galery: 'Lazer' },
    { id: 9, img: img10, title: 'Imagem 10', id_galery: 2, name_galery: 'Lazer' },
    { id: 10, img: img11, title: 'Imagem 11', id_galery: 2, name_galery: 'Lazer' },
    { id: 11, img: img12, title: 'Imagem 12', id_galery: 2, name_galery: 'Lazer' },
  ]);

  const uniqueGaleries = images.reduce((acc, current) => {
    const exists = acc.find(item => item.id_galery === current.id_galery);
    if (!exists) {
      acc.push({
        id_galery: current.id_galery,
        name_galery: current.name_galery
      });
    }
    return acc;
  }, []).sort((a, b) => a.id_galery - b.id_galery);



  return (
    <Box className="venture_galery" component="section">
      <Box className="content">
        <Box className="left">
          <h2>Imagens</h2>
          <Box className="filters">
            <ButtonFilter isActive={selectedGalery === null} onClick={() => setSelectedGalery(null)}>Todas</ButtonFilter>
            {uniqueGaleries.map(galery => (
              <ButtonFilter key={galery.id_galery} isActive={selectedGalery === galery.id_galery} onClick={() => setSelectedGalery(galery.id_galery)}>
                {galery.name_galery}
              </ButtonFilter>
            ))}
          </Box>
        </Box>
        <Box className="right">
          <Box className="galery_content">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop={true}
              modules={[Pagination, Navigation, EffectFade]}
              freeMode={true}
              slidesPerView={'auto'}
              pagination={{ clickable: true }}
            >
              {images.filter(img => selectedGalery === null || img.id_galery === selectedGalery).map(image => (
                <SwiperSlide className="swiper_item" key={image.id}>
                  <Item item={image} />
                </SwiperSlide>
              ))}
            </Swiper>

            <Box className="arrows">
              <Button className="prev" onClick={() => swiperRef.current.slidePrev()}>
                <img src={arrow} alt="" />
              </Button>

              <Button className="next" onClick={() => swiperRef.current.slideNext()}>
                <img src={arrow} alt="" />
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="logo">
          <img src={logo} />
        </Box>
      </Box>
    </Box>
  )
}

function Item({ item }) {
  return (
    <Box className="item">
      <img src={item.img} alt={item.title} />
      <p>{item.title}</p>
    </Box>
  )
}