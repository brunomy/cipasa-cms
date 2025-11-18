import './ContactBanner.scss';
import { Box } from '@mui/material';
import Button1 from './../../../../components/Buttons/Button1/Button1';
import { Link } from '@inertiajs/react';

import icon from './icon/icon.svg'

export default function ContactBanner({ dados }) {

  return (
    <Box className="contact_banner" component="section">
      <Box className="content">
        <Box className="left">
          <Box className="image">
            <img src={dados.imagem_contato?.permalink} />
          </Box>
        </Box>
        <Box className="right">
          <h2>
            Não encontrou <br />
            <b>o que procurava?</b>
          </h2>
          <div className="text" dangerouslySetInnerHTML={{ __html: dados?.text_contact }} />
          <Button1 component={Link} href="/contato">Entre em contato</Button1>
        </Box>
        <Box className="icon"><img src={icon} /></Box>
      </Box>
    </Box>
  )
}