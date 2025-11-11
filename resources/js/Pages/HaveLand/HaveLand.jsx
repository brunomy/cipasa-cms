import AppLayout from '../../AppLayout';
import { Box } from '@mui/material';
import HaveLandHeader from './components/HaveLandHeader/HaveLandHeader';
import HowDoWeWork from './components/HowDoWeWork/HowDoWeWork';
import HaveLandForm from './components/HaveLandForm/HaveLandForm';

export default function HaveLand({ dados, contato }) {
  return (
    <AppLayout contato={contato}>
      <Box className="container">
        <HaveLandHeader dados={dados} />
        <HowDoWeWork dados={dados} />
        <HaveLandForm />
      </Box>
    </AppLayout>
  );
}