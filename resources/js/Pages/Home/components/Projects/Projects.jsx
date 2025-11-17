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


export default function Projects({ list }) {
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
             
            {list.map((item, index) =>  <SwiperSlide className="item"><Item item={item} key={index} /></SwiperSlide> )}
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


function Item({ item }) {
  return (
    <Button className="item" component="a" draggable={false}>
      <Box className="image">
        <img src={item.banner.permalink} alt="" />
      </Box>
      <Box className="item_content">
        <Box className="logo">
          <img src={item.logo.permalink} alt="" />
        </Box>
        <p>{item.descricao}</p>
      </Box>
    </Button>
  )
}