import AppLayout from '../../AppLayout';
import { Box } from '@mui/material';
import { usePage } from '@inertiajs/react';
import AboutHeader from './components/AboutHeader/AboutHeader';
import AboutData from './components/AboutData/AboutData';
import MissionVisionValues from './components/MissionVisionValues/MissionVisionValues';
import AboutVentures from './components/AboutVentures/AboutVentures';
import Sustainability from './components/Sustainability/Sustainability';

export default function AboutUs({ dados, contato }) {
  return (
    <AppLayout contato={contato}>
      <Box className="container">
        <AboutHeader sobre={dados} />
        <AboutData sobre={dados} />
        <MissionVisionValues sobre={dados} />
        <AboutVentures sobre={dados} />
        <Sustainability sobre={dados} />
      </Box>
    </AppLayout>
  );
}
