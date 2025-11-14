import './Blog.scss';
import { Box, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react';
import { Pagination } from 'swiper/modules';
import { Link } from '@inertiajs/react';

import img1 from '../BannerCarousel/images/banner1.png';
import img2 from '../BannerCarousel/images/banner2.png';
import img3 from '../BannerCarousel/images/banner3.png';  
import Button1 from '../../../../components/Buttons/Button1/Button1';

export default function Blog({ blog }) {
  const blogList = (blog ?? []).map((item) => ({
    id: item.id,
    data: item.created_at,
    title: item.title,
    description: item.descricao,
    image: item.imagem?.permalink ?? null,
    link: item.link ?? null,
  }));

  return (
    <Box className="blog_home" component="section">
      <Box className="content">
        <h2>Cipasa na mídia</h2>
        <Swiper
          className="swiper_content"
          modules={[Pagination]}
          freeMode={true}
          slidesPerView={'auto'}
          pagination={{ clickable: true }}
        >
          {blogList.map((item) => (
            <SwiperSlide key={item.id} className="slide">
              <BlogItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button1 className="link_blog" component={Link} href="/blog">Ver todas postagens</Button1>
        </Box>
      </Box>
    </Box>
  )
}

export function BlogItem({ item }) {
  // Função para formatar a data
  function formatDate(dateString) {
    const meses = [
      'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    const [ano, mes, dia] = dateString.split('-');
    return `${parseInt(dia, 10)} de ${meses[parseInt(mes, 10) - 1]} de ${ano}`;
  }

  return (
    <Box className="item">
      <Button component={'a'} target="_blank" href={item.link} className="image"><img src={item.image} alt={item.title} /></Button>
      <p className="data">{formatDate(item.data)}</p>
      <h3 className="title">{item.title}</h3>
      <p className="description">{item.description}</p>
      <Button component={'a'} target="_blank" href={item.link}>Leia mais</Button>
    </Box>
  )
}