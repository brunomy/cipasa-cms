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

export default function Venture() {
  const { props: { venture, related, categoriesDif } } = usePage();

  return (
    <AppLayout>
      <Box className="container">
        <VentureHeader venture={venture} />
        <VentureInfo venture={venture} />
        <VentureGalery venture={venture} />
        <VentureDifferences venture={venture} categoriesDif={categoriesDif} />
        <VentureStatus venture={venture} />
        <VentureMap position={[venture.latitude, venture.longitude]} />
        <VentureContact venture={venture} related={related} />
      </Box>
    </AppLayout>
  );
}
