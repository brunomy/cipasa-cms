import './ContactBanner.scss';
import { Box } from '@mui/material';
import Button1 from './../../../../components/Buttons/Button1/Button1';
import { Link } from '@inertiajs/react';

import banner from './image/banner[940x495].png';

import icon from './icon/icon.svg'

export default function ContactBanner() {

  return (
    <Box className="contact_banner" component="section">
      <Box className="content">
        <Box className="left">
          <Box className="image">
            <img src={banner} />
          </Box>
        </Box>
        <Box className="right">
          <h2>
            Não encontrou <br />
            <b>o que procurava?</b>
          </h2>
          <p>Não se preocupe! Estamos aqui para ajudar você a encontrar a solução perfeirta</p>
          <Button1 component={Link} to="/contato">Entre em contato</Button1>
        </Box>
        <Box className="icon"><img src={icon} /></Box>
      </Box>
    </Box>
  )
}