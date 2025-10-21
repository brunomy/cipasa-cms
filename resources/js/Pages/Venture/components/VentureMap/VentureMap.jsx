import './VentureMap.scss';
import { Box } from '@mui/material';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import pin from './icons/pin.png'

const customIcon = new L.Icon({
  iconUrl: pin,
  iconSize: [38, 38],
});


export default function VentureMap({ position = [-23.55052, -46.633308] }) {
  
  return (
    <Box className="venture_map" component="section">
      <Box className="content">
        <Box className="map">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: '400px', width: '100%', borderRadius: '12px' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>Verana Condomínio Fechado</Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Box>
    </Box>
  )
}