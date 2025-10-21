import './Ventures.scss'
import { Box, Button } from '@mui/material';
import { Link } from '@inertiajs/react';
import { useState, useRef } from 'react';
import Button1 from './../../../../components/Buttons/Button1/Button1'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from '../BannerCarousel/images/banner1.png';
import img4 from '../BannerCarousel/images/banner2.png';
import img5 from '../BannerCarousel/images/banner3.png';

import verana from './images/verana.png';
import altavis from './images/altavis.png';
import alvora from './images/alvora.png';

import flower from './icons/flower.svg';
import arrow from './icons/arrow.svg';
import { VentureItem } from '../../../Ventures/components/VenturesList/VenturesList';

export default function Ventures() {
  const swiperRef = useRef(null);

  const [ventures, setVentures] = useState([
    {
      id: 0, 
      image: img1,
      logo: verana,
      title: "Verana Condomínio Fechado",
      category: "Residencial/loteamento",
      meters: 300,
      location: "Várzea Grande - MT"
    },
    { id: 1, image: img2, logo: altavis, title: "Altavis Aldeia", category: "Residencial/loteamento", meters: 300, location: "Várzea Grande - MT" },
    { id: 2, image: img3, logo: alvora, title: "Reserva do Cipó", category: "Residencial/loteamento", meters: 300, location: "Brumadinho - MG" },
    { id: 3, image: img4, logo: alvora, title: "Loteamento Alphaville", category: "Residencial/loteamento", meters: 300, location: "Cuiabá - MT" },
    { id: 4, image: img5, logo: alvora, title: "Loteamento Alphaville 2", category: "Residencial/loteamento", meters: 300, location: "Cuiabá - MT" }
  ]);

  return (
    <Box className="ventures" component="section">
      <Box className="content">
        <Box className="left">
          <h2>
            Espaços para <br/>
            <b>Viver e Investir</b>
          </h2>
          <p>Empreendimentos sob medida com assinatura de alto padrão.</p>
          <Button1>ver empreendimentos</Button1>
        </Box>
        <Box className="right">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Pagination, Navigation]}
              freeMode={true}
              slidesPerView={'auto'}
              pagination={{ clickable: true }}
            >
            {ventures.map((item, index) =>  <SwiperSlide className="item"><VentureItem item={item} key={index} /></SwiperSlide> )}
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
        <img src={flower} className="flower" />
      </Box>
    </Box>
  )
}

