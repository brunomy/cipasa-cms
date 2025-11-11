import { Box } from '@mui/material';
import { usePage } from '@inertiajs/react';

import AppLayout from '../../AppLayout';

import VentureHeader from './components/VentureHeader/VentureHeader';
import VentureInfo from './components/VentureInfo/VentureInfo';
import VentureGalery from './components/VentureGalery/VentureGalery';
import VentureDifferences from './components/VentureDifferences/VentureDifferences';
import VentureStatus from './components/VentureStatus/VentureStatus';
import VentureContact from './components/VentureContact/VentureContact';
import VentureMap from './components/VentureMap/VentureMap';

export default function Venture({ dados, related, categoriesDif, contato }) {
  return (
    <AppLayout contato={contato}>
      <Box className="container">
        <VentureHeader venture={dados} />
        <VentureInfo venture={dados} />
        <VentureGalery venture={dados} />
        <VentureDifferences venture={dados} categoriesDif={categoriesDif} />
        <VentureStatus venture={dados} />
        <VentureMap position={[dados.latitude, dados.longitude]} />
        <VentureContact venture={dados} related={related} />
      </Box>
    </AppLayout>
  );
}
