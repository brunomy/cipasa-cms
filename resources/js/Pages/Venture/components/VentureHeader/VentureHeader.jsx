import './VentureHeader.scss';
import { Box } from '@mui/material';
import TitleBreadcrumbs from '../../../../components/TitleBreadcrumbs/TitleBreadcrumbs';

import banner from './images/banner[1920x400].png';
import logo from './images/logo[160x160].png';
import { Butterfly1 } from '../../../Home/components/BannerCarousel/BannerCarousel';
import { Butterfly2 } from '../../../Home/components/BannerCarousel/BannerCarousel';

export default function VentureHeader() {
  return (
    <Box className="venture_header" component="section">
      <Box className="content">
        <Box className="top">
          <TitleBreadcrumbs title={<>Verana Condomínio Fechado</>} breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Empreendimentos', href: '/empreendimentos' }]} />
          <Butterfly1 />
          <Butterfly2 />
        </Box>
        <Box className="bottom">
          <Box className="logo">
            <img src={logo} alt="Logo Verana Condomínio Fechado" />
          </Box>
          <Box className="image">
            <img src={banner} alt="Verana Condomínio Fechado" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}