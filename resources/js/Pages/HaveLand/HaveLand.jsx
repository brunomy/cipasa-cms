import AppLayout from '../../AppLayout';
import { Box } from '@mui/material';
import HaveLandHeader from './components/HaveLandHeader/HaveLandHeader';
import HowDoWeWork from './components/HowDoWeWork/HowDoWeWork';
import HaveLandForm from './components/HaveLandForm/HaveLandForm';
import { Head } from '@inertiajs/react';

export default function HaveLand({ dados, contato }) {
  return (
    <AppLayout contato={contato}>
      <Head title="Cipasa - Tenho uma área" />
      <Box className="container">
        <HaveLandHeader dados={dados} />
        <HowDoWeWork dados={dados} />
        <HaveLandForm />
      </Box>
    </AppLayout>
  );
}