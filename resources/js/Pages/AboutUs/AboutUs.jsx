import { Box } from '@mui/material';
import AboutHeader from './components/AboutHeader/AboutHeader';
import AboutData from './components/AboutData/AboutData';
import MissionVisionValues from './components/MissionVisionValues/MissionVisionValues';
import AboutVentures from './components/AboutVentures/AboutVentures';
import Sustainability from './components/Sustainability/Sustainability';

export default function AboutUs() {
  return (
    <Box className="container">
      <AboutHeader />
      <AboutData />
      <MissionVisionValues />
      <AboutVentures />
      <Sustainability />
    </Box>
  );
}
