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
import { decodeBasic } from '../../../../Util';


export default function AboutVentures({ sobre }) {
  const items = (sobre?.construtoras ?? [])
    .map(c => ({
      image: c.banner?.permalink ?? c.banner?.url ?? c.banner?.[0]?.permalink ?? null,
      logo:  c.logo?.permalink  ?? c.logo?.url  ?? c.logo?.[0]?.permalink  ?? null,
    }))
    .filter(i => i.image || i.logo);

  return (
    <Box className="about_ventures" component="section">
      <Box className="content">
        <Box className="top">
          <h2>Tipos de <b>Empreendimentos</b></h2>
          <div dangerouslySetInnerHTML={{ __html: decodeBasic(sobre?.text_2 || '') }} />
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
    <Button className="item">
      <Box className="logo">
        <Box><img src={item.logo} /></Box>
      </Box>
      <Box className="image"><img src={item.image} /></Box>
    </Button>
  )
}