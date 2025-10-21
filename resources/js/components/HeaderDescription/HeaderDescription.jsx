import './HeaderDescription.scss';
import { Box } from '@mui/material';
import TitleBreadcrumbs from '../TitleBreadcrumbs/TitleBreadcrumbs';
import { Butterfly1, Butterfly2 } from './../../Pages/Home/components/BannerCarousel/BannerCarousel';


export default function HeaderDescription({ title, breadcrumbs, right }) {
  return (
    <Box className="header_description">
      <Box className="left">
        <TitleBreadcrumbs title={title} breadcrumbs={breadcrumbs} />
        <Butterfly1 />
        <Butterfly2 />
      </Box>
      <Box className="right">
        <Box className="text_content">
          {right}
        </Box>
      </Box>
    </Box>
  )
}