import AppLayout from '../../AppLayout';
import { Box } from '@mui/material';
import { usePage } from '@inertiajs/react';
import AboutHeader from './components/AboutHeader/AboutHeader';
import AboutData from './components/AboutData/AboutData';
import MissionVisionValues from './components/MissionVisionValues/MissionVisionValues';
import AboutVentures from './components/AboutVentures/AboutVentures';
import Sustainability from './components/Sustainability/Sustainability';

export default function AboutUs() {
    const { props: { 
    sobre,
  } } = usePage();

  return (
    <AppLayout>
      <Box className="container">
        <AboutHeader sobre={sobre} />
        <AboutData sobre={sobre} />
        <MissionVisionValues sobre={sobre} />
        <AboutVentures sobre={sobre} />
        <Sustainability sobre={sobre} />
      </Box>
    </AppLayout>
  );
}
