import './AboutVentures.scss';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Box, Button } from '@mui/material';
import { Pagination } from 'swiper/modules';
import { useState } from "react";
import { Link } from '@inertiajs/react';

import img1 from './../../../Home/components/BannerCarousel/images/banner1.png';
import img2 from './../../../Home/components/BannerCarousel/images/banner2.png';
import img3 from './../../../Home/components/BannerCarousel/images/banner3.png';
import img4 from './../../../Home/components/Highlights/images/image1[1250x450].png';

import logo1 from './../../../Home/components/Projects/images/logo1.png';
import logo2 from './../../../Home/components/Projects/images/logo2.png';
import logo3 from './../../../Home/components/Projects/images/logo3.png';
import logo4 from './../../../Home/components/Projects/images/logo4.png';

import icon1 from './icons/icon1.svg'


export default function AboutVentures() {
  const [items, setItems] = useState([
    { image: img1, logo: logo1, url: '/teste'},
    { image: img2, logo: logo2, url: '/teste'},
    { image: img3, logo: logo3, url: '/teste'},
    { image: img4, logo: logo4, url: '/teste'}
  ]);

  return (
    <Box className="about_ventures" component="section">
      <Box className="content">
        <Box className="top">
          <h2>Tipos de <b>Empreendimentos</b></h2>
          <p>Pode parecer muita ambição, mas sabemos que podemos impactar positivamente o mundo. Por isso, acreditamos que a nossa missão como desenvolvedora de projetos imobiliários urbanos é aliar a alta qualidade urbanística ao respeito às características locais e à natureza. Desta forma, por meio de nossos empreendimentos, contribuimos com o aumento da qualidade de vida de nossos clientes e com o desenvolvimento do seu entorno.</p>
        </Box>
        <Box className="bottom">
          <Swiper
            modules={[Pagination]}
            freeMode={true}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
          >
            { items.map((item, index) => <SwiperSlide><Item item={item} key={index} /></SwiperSlide>)}
          </Swiper>
        </Box>
        <img src={icon1} className="icon" />
      </Box>
    </Box>
  )
}

function Item({ item }) {
  return (
    <Button className="item" component={Link} href={item.url}>
      <Box className="logo">
        <Box><img src={item.logo} /></Box>
      </Box>
      <Box className="image"><img src={item.image} /></Box>
    </Button>
  )
}