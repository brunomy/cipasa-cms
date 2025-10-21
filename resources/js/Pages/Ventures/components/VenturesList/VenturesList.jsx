import './VenturesList.scss';
import { Box, Button, Pagination } from '@mui/material';
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

import img1 from './../../../Home/components/Ventures/images/img1.png';
import img2 from './../../../Home/components/Ventures/images/img2.png'
import img3 from './../../../Home/components/BannerCarousel/images/banner1.png';
import img4 from './../../../Home/components/BannerCarousel/images/banner2.png';
import img5 from './../../../Home/components/BannerCarousel/images/banner3.png';

import verana from './../../../Home/components/Ventures/images/verana.png';
import altavis from './../../../Home/components/Ventures/images/altavis.png';
import alvora from './../../../Home/components/Ventures/images/alvora.png';

import category from './icons/category.svg';
import meters from './icons/meters.svg';
import location from './icons/location.svg';
import buttonArrow from './icons/button_arrow.svg';

export default function VenturesList() {
  const [page, setPage] = useState(1);
  const itensPerPage = 6;
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [ventures, setVentures] = useState([
    {
      id: 0, 
      image: img1,
      logo: verana,
      title: "Verana Condomínio Fechado",
      category: "Residencial/loteamento",
      meters: 300,
      location: "Várzea Grande - MT"
    },
    { id: 1, image: img2, logo: altavis, title: "Altavis Aldeia", category: "Residencial/loteamento", meters: 300, location: "Várzea Grande - MT" },
    { id: 2, image: img3, logo: alvora, title: "Reserva do Cipó", category: "Residencial/loteamento", meters: 300, location: "Brumadinho - MG" },
    { id: 3, image: img4, logo: alvora, title: "Loteamento Alphaville", category: "Residencial/loteamento", meters: 300, location: "Cuiabá - MT" },
    { id: 4, image: img5, logo: alvora, title: "Loteamento Alphaville 2", category: "Residencial/loteamento", meters: 300, location: "Cuiabá - MT" },
    { id: 5, image: img1, logo: verana, title: "Verana Condomínio Fechado", category: "Residencial/loteamento", meters: 300, location: "Várzea Grande - MT" },
    { id: 6, image: img2, logo: altavis, title: "Altavis Aldeia", category: "Residencial/loteamento", meters: 300, location: "Várzea Grande - MT" },
    { id: 7, image: img3, logo: alvora, title: "Reserva do Cipó", category: "Residencial/loteamento", meters: 300, location: "Brumadinho - MG" },
    { id: 8, image: img4, logo: alvora, title: "Loteamento Alphaville", category: "Residencial/loteamento", meters: 300, location: "Cuiabá - MT" },
  ]);

  const venturesPage = () => {
    const start = (page - 1) * itensPerPage;
    const end = start + itensPerPage;
    return ventures.slice(start, end);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <Box className="ventures_list" component="section">
      <Box className="content">
        <Box className="list_content">
          {venturesPage().map((item, index) =>  <VentureItem item={item} key={index} /> )}
        </Box>
        <Box className="pagination_content">
          <Pagination count={Math.ceil(ventures.length / itensPerPage)} page={page} onChange={handleChange} shape="rounded" />
        </Box>
      </Box>
    </Box>
  )
}

export function VentureItem({ item, key }) {
  return (
    <Box className="venture_item" key={key}>
      <Button component={Link} to={`/empreendimento/${item.id}/${item.title}`} className="image">
        <img src={item.image} alt={item.title} />
        <Box className="logo">
          <img src={item.logo} alt="" />
        </Box>
      </Button>
      <Box className="item_content">
        <h3>{item.title}</h3>
        <Box className="info">
          <Box>
            <Box className="icon"><img src={category} /></Box>
            <p>{item.category}</p>
          </Box>
          <Box>
            <Box className="icon"><img src={meters} /></Box>
            <p>Lotes a partir de {item.meters}m²</p>
          </Box>
          <Box>
            <Box className="icon"><img src={location} /></Box>
            <p>{item.location}</p>
          </Box>
        </Box>
        <Box className="button_content">
          <Button component={Link} to={`/ventures/${item.id}`}><img src={buttonArrow} /> Conheça</Button>
        </Box>
      </Box>
    </Box>
  )
}