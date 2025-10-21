import { Box } from '@mui/material';
import HaveLandHeader from './components/HaveLandHeader/HaveLandHeader';
import HowDoWeWork from './components/HowDoWeWork/HowDoWeWork';
import HaveLandForm from './components/HaveLandForm/HaveLandForm';

export default function HaveLand() {
  return (
    <Box className="container">
      <HaveLandHeader />
      <HowDoWeWork />
      <HaveLandForm />
    </Box>
  );
}