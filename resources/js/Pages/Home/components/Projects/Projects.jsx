import './Projects.scss';
import { useState, useEffect, useRef } from "react";
import { Box, Button } from '@mui/material';
import { Link } from '@inertiajs/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination  } from 'swiper/modules';

import icon from './icons/icon.svg';

import img1 from '../BannerCarousel/images/banner1.png';
import img2 from '../BannerCarousel/images/banner2.png';
import img3 from '../BannerCarousel/images/banner3.png';
import img4 from '../Highlights/images/image1[1250x450].png';

import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';


export default function Projects() {
  const [items, setItems] = useState([
    { image: img1, logo: logo1, url: '/teste', description: "Quero investir em qualidade de vida e retorno garantido" },
    { image: img2, logo: logo2, url: '/teste', description: "Quero investir em um loteamento exclusivo e promissor" },
    { image: img3, logo: logo3, url: '/teste', description: "Quero um terreno onde meu investimento e meu tempo rendem" },
    { image: img4, logo: logo4, url: '/teste', description: "Quero um loteamento com propósito e valorização" }
  ]);

  return (
    <Box component="section" className="projects">
      <Box className="content">
        <Box className="left">
            <Swiper
              modules={[Pagination]}
              freeMode={true}
              slidesPerView={'auto'}
              pagination={{ clickable: true }}
            >
             
            {items.map((item, index) =>  <SwiperSlide className="item"><Item item={item} key={index} /></SwiperSlide> )}
            </Swiper>
        </Box>
        <Box className="right">
          <h2>
            Encontre <br />
            <b>o Projeto Ideal</b>
          </h2>
          <img src={icon} />
        </Box>
      </Box>
    </Box>
  )
}


function Item({ item, key }) {
  return (
    <Button className="item" key={key} component={Link} to={item.url} draggable={false}>
      <Box className="image">
        <img src={item.image} alt="" />
      </Box>
      <Box className="item_content">
        <Box className="logo">
          <img src={item.logo} alt="" />
        </Box>
        <p>{item.description}</p>
      </Box>
    </Button>
  )
}