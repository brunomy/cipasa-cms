import AppLayout from '../../AppLayout';
import { Box } from '@mui/material';
import { usePage } from '@inertiajs/react';
import BannerCarousel from './components/BannerCarousel/BannerCarousel';
import Blog from './components/Blog/Blog';
import ContactBanner from './components/ContactBanner/ContactBanner';
import Highlights from './components/Highlights/Highlights';
import InfoData from './components/InfoData/InfoData';
import Projects from './components/Projects/Projects';
import ProjectsMap from './components/ProjectsMap/ProjectsMap';
import Ventures from './components/Ventures/Ventures';

export default function Home({ banners, info, list_1, list_2, states, construtoras, contato, blog }) {
  return (
    <AppLayout contato={contato}>
      <Box className="container">
        <BannerCarousel banners={banners} />
        <InfoData info={info} />
        <Highlights list={list_1} />
        <ProjectsMap states={states} />
        <Projects list={construtoras} />
        <Ventures list={list_2} construtoras={construtoras} />
        <ContactBanner />
        <Blog blog={blog} />
      </Box>
    </AppLayout>
  );
}
