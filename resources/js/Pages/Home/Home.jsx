import AppLayout from '../../AppLayout';
import { Box } from '@mui/material';
import BannerCarousel from './components/BannerCarousel/BannerCarousel';
import Blog from './components/Blog/Blog';
import ContactBanner from './components/ContactBanner/ContactBanner';
import Highlights from './components/Highlights/Highlights';
import InfoData from './components/InfoData/InfoData';
import Projects from './components/Projects/Projects';
import ProjectsMap from './components/ProjectsMap/ProjectsMap';
import Ventures from './components/Ventures/Ventures';

export default function Home() {
  return (
    <AppLayout>
      <Box className="container">
        <BannerCarousel />
        <InfoData />
        <Highlights />
        <ProjectsMap />
        <Projects />
        <Ventures />
        <ContactBanner />
        <Blog />
      </Box>
    </AppLayout>
  );
}
