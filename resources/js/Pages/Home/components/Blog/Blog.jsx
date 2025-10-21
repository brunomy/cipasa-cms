import './Blog.scss';
import { Box, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react';
import { Pagination } from 'swiper/modules';
import { Link } from '@inertiajs/react';

import img1 from '../BannerCarousel/images/banner1.png';
import img2 from '../BannerCarousel/images/banner2.png';
import img3 from '../BannerCarousel/images/banner3.png';  

export default function Blog() {
  const [blogList, setBlogList] = useState([
    {
      id: 0,
      data: '2025-08-15',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet consectetur. Diam vestibulum pharetra nisi egestas morbi ipsum.',
      image: img1
    },
    {
      id: 1,
      data: '2025-07-10',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet consectetur. Diam vestibulum pharetra nisi egestas morbi ipsum.',
      image: img2
    },
    {
      id: 2,
      data: '2025-01-28',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet consectetur. Diam vestibulum pharetra nisi egestas morbi ipsum.',
      image: img3
    },
  ]);

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
              <Item item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}

function Item({ item }) {
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
      <Box className="image"><img src={item.image} alt={item.title} /></Box>
      <p className="data">{formatDate(item.data)}</p>
      <h3 className="title">{item.title}</h3>
      <p className="description">{item.description}</p>
      <Button component={Link} to={`/blog/${item.id}`}>Leia mais</Button>
    </Box>
  )
}