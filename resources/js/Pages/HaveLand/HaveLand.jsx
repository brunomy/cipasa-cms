import AppLayout from '../../AppLayout';
import { Box } from '@mui/material';
import HaveLandHeader from './components/HaveLandHeader/HaveLandHeader';
import HowDoWeWork from './components/HowDoWeWork/HowDoWeWork';
import HaveLandForm from './components/HaveLandForm/HaveLandForm';
import { Head } from '@inertiajs/react';

function HaveLand({ dados }) {
  return (
    <>
      <Head title="Cipasa - Tenho uma área" />
      <Box className="container">
        <HaveLandHeader dados={dados} />
        <HowDoWeWork dados={dados} />
        <HaveLandForm />
      </Box>
    </>
  );
}

HaveLand.layout = (page) => <AppLayout>{page}</AppLayout>;

export default HaveLand;