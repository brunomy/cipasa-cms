import './VenturesList.scss';
import { Box, Button, Pagination } from '@mui/material';
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

import category from './icons/category.svg';
import meters from './icons/meters.svg';
import location from './icons/location.svg';
import buttonArrow from './icons/button_arrow.svg';

export default function VenturesList({ ventures, construtoras }) {
  const [page, setPage] = useState(1);
  const itensPerPage = 9;
  const handleChange = (event, value) => {
    setPage(value);
  };

  const venturesPage = () => {
    const start = (page - 1) * itensPerPage;
    const end = start + itensPerPage;
    return ventures?.slice(start, end);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <Box className="ventures_list" component="section">
      <Box className="content">
        <Box className="list_content">
          {venturesPage()?.map((item, index) =>  <VentureItem item={item} construtora={construtoras.filter(c => c.id === item?.construtora.id)} key={index} /> )}
        </Box>
        <Box className="pagination_content">
          <Pagination count={Math.ceil(ventures?.length / itensPerPage)} page={page} onChange={handleChange} shape="rounded" />
        </Box>
      </Box>
    </Box>
  )
}

export function VentureItem({ item, construtora }) {
  return (
    <Box className="venture_item">
      <Button component={Link} href={item.permalink} className="image">
        <img src={item.banner.permalink} alt={item.title} />
        <Box className="logo">
          <img src={construtora[0]?.logo?.permalink} alt="" />
        </Box>
      </Button>
      <Box className="item_content">
        <h3>{item.title}</h3>
        <Box className="info">
          <Box>
            <Box className="icon"><img src={category} /></Box>
            <p>{item.tipo.label}</p>
          </Box>
          <Box>
            <Box className="icon"><img src={meters} /></Box>
            <p>Lotes a partir de {item.meters_min}m²</p>
          </Box>
          <Box>
            <Box className="icon"><img src={location} /></Box>
            <p>{item.cidade}/{item.estado.value}</p>
          </Box>
        </Box>
        <Box className="button_content">
          <Button component={Link} href={item.permalink}><img src={buttonArrow} /> Conheça</Button>
        </Box>
      </Box>
    </Box>
  )
}