import './Highlights.scss';
import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import img1 from './images/image1[1250x450].png';
import img2 from './images/image2[1250x450].png';
import img3 from './images/image3[1250x450].png';
import banner3 from '../BannerCarousel/images/banner3.png';
import Carousel, { Dots } from '../../../../components/Carousel/Carousel';

import arrow from './icons/arrow.svg'
import arrow_carousel from './icons/arrow_carousel.svg'
import locale from './icons/locale.svg'
import meters from './icons/meters.svg'
import icon from './icons/icon.svg'

export default function Highlights() {
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  const [list, setList] = useState([
    {
      image: img1,
      title: 'Verdana condomínio fechado',
      locale: 'Várzea Grande - MT',
      meters: '300',
      url: '/teste',
    },
    {
      image: img2,
      title: 'Altavis Aldeia',
      locale: 'Goiânia - GO',
      meters: '300',
      url: '/teste2',
    },
    {
      image: img3,
      title: 'Alvorá parque novo',
      locale: 'Nova Iguaçu - RJ',
      meters: '300',
      url: '/teste3',
    },
  ]);

  const next = () => {
    setCurrent((current + 1) % list.length);
  }
  const prev = () => {
    setCurrent((current - 1 + list.length) % list.length)
  }

  return (
    <Box component="section" className={"highlights "+(loaded ? 'loaded' : 'notLoaded')}>
      <Box className="content">
        <Carousel list={list} Component={Item} current={current} setCurrent={setCurrent} autoplay={false} />
        <Box className="arrows">
          <Button className="prev" onClick={prev}><img src={arrow_carousel} alt="" /></Button>
          <Button className="next" onClick={next}><img src={arrow_carousel} alt="" /></Button>
        </Box>
        <img src={icon} alt="" className="icon" />
        <Dots array={list} activeIndex={current} setFunction={setCurrent} className="dots" />
      </Box>
    </Box>
  )
}

function Item({ data }) {
  return (
    <Box className="item">
      <h2>{data.title}</h2>
      <Box className="dados">
        <Box>
          <Box className="locale"><Box className="icon"><img src={locale} alt="" /></Box><span>{data.locale}</span></Box>
          <Box className="meters"><Box className="icon"><img src={meters} alt="" /></Box><span>Lotes a partir de <b>{data.meters}m²</b></span></Box>
        </Box>
        <Button component={Link} to={data.url}><span className="icon"><img src={arrow} alt="" /></span> Conheça</Button>
      </Box>
      <Box className="image_content">
        <img src={data.image} alt="" />
      </Box>
    </Box>
  )
}