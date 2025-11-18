import './Ventures.scss'
import { Box, Button } from '@mui/material';
import { Link } from '@inertiajs/react';
import { useState, useRef } from 'react';
import Button1 from './../../../../components/Buttons/Button1/Button1'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import flower from './icons/flower.svg';
import arrow from './icons/arrow.svg';
import { VentureItem } from '../../../Ventures/components/VenturesList/VenturesList';

export default function Ventures({ list, construtoras, dados }) {
  const swiperRef = useRef(null);

  return (
    <Box className="ventures" component="section">
      <Box className="content">
        <Box className="left">
          <h2>
            Espaços para <br/>
            <b>Viver e Investir</b>
          </h2>
          <div className="text" dangerouslySetInnerHTML={{ __html: dados?.text_espacos }} />
          <Button1 component={Link} href="/empreendimentos">Ver empreendimentos</Button1>
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
            {list.map((item, index) =>  <SwiperSlide className="item"><VentureItem item={item} construtora={construtoras.filter(c => c.id === item.construtora[0])} key={index} /></SwiperSlide> )}
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

