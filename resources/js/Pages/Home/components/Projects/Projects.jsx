import './Projects.scss';
import { useState, useEffect, useRef } from "react";
import { Box, Button } from '@mui/material';
import { Link } from '@inertiajs/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination  } from 'swiper/modules';

import icon from './icons/icon.svg';

export default function Projects({ list, dados }) {
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
    <Button className="item" draggable={false}>
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