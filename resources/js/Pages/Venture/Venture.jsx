import { Box } from '@mui/material';
import VentureHeader from './components/VentureHeader/VentureHeader';
import VentureInfo from './components/VentureInfo/VentureInfo';
import VentureGalery from './components/VentureGalery/VentureGalery';
import VentureDifferences from './components/VentureDifferences/VentureDifferences';
import VentureStatus from './components/VentureStatus/VentureStatus';
import VentureContact from './components/VentureContact/VentureContact';
import VentureMap from './components/VentureMap/VentureMap';

export default function Venture() {
  return (
    <Box className="venture">
      <Box className="container">
        <VentureHeader />
        <VentureInfo />
        <VentureGalery />
        <VentureDifferences />
        <VentureStatus />
        <VentureMap />
        <VentureContact />
      </Box>
    </Box>
  )
}