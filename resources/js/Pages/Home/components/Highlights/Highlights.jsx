import './Highlights.scss';
import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import Carousel, { Dots } from '../../../../components/Carousel/Carousel';

import arrow from './icons/arrow.svg'
import arrow_carousel from './icons/arrow_carousel.svg'
import locale from './icons/locale.svg'
import meters from './icons/meters.svg'
import icon from './icons/icon.svg'

export default function Highlights({ list }) {
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

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
          <Box className="locale"><Box className="icon"><img src={locale} alt="" /></Box><span>{data.cidade}/{data.estado.value}</span></Box>
          <Box className="meters"><Box className="icon"><img src={meters} alt="" /></Box><span>Lotes a partir de <b>{data.meters_min}m²</b></span></Box>
        </Box>
        <Button component={Link} href={data?.permalink}><span className="icon"><img src={arrow} alt="" /></span> Conheça</Button>
      </Box>
      <Box className="image_content">
        <img src={data.banner?.permalink} alt="" />
      </Box>
    </Box>
  )
}