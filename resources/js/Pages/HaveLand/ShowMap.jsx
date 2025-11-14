import AppLayout from '../../AppLayout';
import { Box, Typography } from '@mui/material';
import { useMemo, useRef, useState } from 'react';
import { Head } from '@inertiajs/react';

import { MapContainer, TileLayer, FeatureGroup, Polygon } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';

import HeaderBanner from './../../components/HeaderBanner/HeaderBanner';
import HaveLandHeader from './components/HaveLandHeader/HaveLandHeader';


import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

export default function ShowMap({
  name,
  phone,
  email,
  cep,
  coords = [],
  center,
  area,
  created,
  contato,
  canEdit = false,
}) {
  const initialPolygon = useMemo(
    () =>
      Array.isArray(coords)
        ? coords.map((c) => [c.lat, c.lng])
        : [],
    [coords]
  );

  const initialCenter = useMemo(() => {
    if (Array.isArray(center) && center.length === 2) {
      return center;
    }

    if (initialPolygon.length) {
      const lat =
        initialPolygon.reduce((sum, p) => sum + p[0], 0) / initialPolygon.length;
      const lng =
        initialPolygon.reduce((sum, p) => sum + p[1], 0) / initialPolygon.length;
      return [lat, lng];
    }

    // fallback genérico (Brasil)
    return [-15.78, -47.93];
  }, [center, initialPolygon]);

  const [polygon, setPolygon] = useState(initialPolygon);

  const mapRef = useRef(null);
  const featureGroupRef = useRef(null);

  const handleCreated = (e) => {
    if (e.layerType === 'polygon') {
      const latlngs = e.layer.getLatLngs()[0] ?? [];
      setPolygon(latlngs.map((ll) => [ll.lat, ll.lng]));
    }
  };

  const handleDeleted = () => {
    setPolygon([]);
  };

  return (
    <AppLayout contato={contato}>
      <Head title="Cipasa - Área cadastrada" />
      <Box className="map" component="section">
        <Box className="container">
          {/* <HeaderBanner
            title={<>Área <b>cadastrada</b></>}
            breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Área cadastrada' }]}
            right={<LeadData name={name} phone={phone} email={email} cep={cep} />}
          /> */}
          <Box className="container have_land_show_map">
            <Box sx={{ my: 3 }}>
              {area && (
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Área informada: <strong>{area}</strong> hectares
                </Typography>
              )}

              <MapContainer
                center={initialCenter}
                zoom={15}
                whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
                style={{ height: '500px', width: '100%' }}
              >
                <TileLayer
                  attribution="&copy; Google Maps"
                  url="https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                  subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                />

                <FeatureGroup ref={featureGroupRef}>
                  {polygon.length > 0 && <Polygon positions={polygon} />}

                  {canEdit && (
                    <EditControl
                      position="topright"
                      onCreated={handleCreated}
                      onDeleted={handleDeleted}
                      edit={{
                        featureGroup: featureGroupRef.current,
                      }}
                      draw={{
                        rectangle: false,
                        circle: false,
                        circlemarker: false,
                        polyline: false,
                        marker: false,
                        polygon: polygon.length ? false : true,
                      }}
                    />
                  )}
                </FeatureGroup>
              </MapContainer>
            </Box>
          </Box>
        </Box>
      </Box>
    </AppLayout>
  );
}

function LeadData({ name, phone, email, cep }) {
  return (
    <Box sx={{ mb: 3 }}>
      {name && (<DataComponent label="Nome:" value={name} />)}
      {phone && (<DataComponent label="Telefone:" value={phone} />)}
      {email && (<DataComponent label="E-mail:" value={email} />)}
      {cep && (<DataComponent label="CEP:" value={cep} />)}
    </Box>
  );
}

function DataComponent({ label, value }) {
  return (
    <Box sx={{
      '& h3': { margin: 0, fontSize: '1rem', fontWeight: 600 },
      '& p': { margin: '0 0 10px !important', fontSize: '.5 rem' },
    }}>
      <h3>{label}</h3>
      <p>{value}</p>
    </Box>
  );
}