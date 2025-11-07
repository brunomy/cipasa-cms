import './VentureHeader.scss';
import { Box } from '@mui/material';
import TitleBreadcrumbs from '../../../../components/TitleBreadcrumbs/TitleBreadcrumbs';

import logo from './images/logo[160x160].png';
import { Butterfly1 } from '../../../Home/components/BannerCarousel/BannerCarousel';
import { Butterfly2 } from '../../../Home/components/BannerCarousel/BannerCarousel';

export default function VentureHeader({ venture }) {
  return (
    <Box className="venture_header" component="section">
      <Box className="content">
        <Box className="top">
          <TitleBreadcrumbs title={<>{venture.title}</>} breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Empreendimentos', href: '/empreendimentos' }]} />
          <Butterfly1 />
          <Butterfly2 />
        </Box>
        <Box className="bottom">
          <Box className="logo">
            <img src={venture.construtora.logo.permalink} alt={venture.construtora.title} />
          </Box>
          <Box className="image">
            <img src={venture.banner.permalink} alt={venture.title} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}