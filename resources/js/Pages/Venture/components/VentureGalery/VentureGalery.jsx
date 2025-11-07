import './VentureGalery.scss';
import { Box, Button } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper/modules';

import arrow from './icons/arrow.svg';
import logo from './icons/logo.svg';

import ButtonFilter from '../../../../components/Buttons/ButtonFilter/ButtonFilter';

export default function VentureGalery({ venture }) {
  const swiperRef = useRef(null);

  const [selectedGalery, setSelectedGalery] = useState(null);

  const [images, setImages] = useState([]);
  
  useEffect(() => {
    const arr = (venture?.galeria ?? []).flatMap(g =>
      (g?.imagens ?? [])
        .filter(img => img && (img.permalink || img.url))
        .map(img => ({
          id: `${g.id}:${img.id ?? img.path}`,
          img: img.permalink ?? img.url,
          title: img.alt ?? '',
          id_galery: g.id,
          name_galery: g.nome_da_galeria ?? '',
        }))
    );

    setImages(arr);
  }, [venture]);

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
      { item.title && <p>{item.title}</p> }
    </Box>
  )
}