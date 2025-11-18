import "./VentureMap.scss";
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import "leaflet/dist/leaflet.css";
import pin from "./icons/pin.png";

export default function VentureMap({
  position = [-23.55052, -46.633308],
  popupText = "Verana Condomínio Fechado",
}) {
  const [libsReady, setLibsReady] = useState(false);
  const libsRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let cancelled = false;

    async function loadLibs() {
      try {
        const [reactLeaflet, leaflet] = await Promise.all([
          import("react-leaflet"),
          import("leaflet"),
        ]);

        if (cancelled) return;

        const L = leaflet.default || leaflet;

        const customIcon = new L.Icon({
          iconUrl: pin,
          iconSize: [38, 38],
        });

        libsRef.current = {
          MapContainer: reactLeaflet.MapContainer,
          TileLayer: reactLeaflet.TileLayer,
          Marker: reactLeaflet.Marker,
          Popup: reactLeaflet.Popup,
          customIcon,
        };

        setLibsReady(true);
      } catch (error) {
        console.error("Erro ao carregar as bibliotecas do Leaflet:", error);
      }
    }

    loadLibs();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!libsReady) {
    return (
      <Box className="venture_map" component="section">
        <Box className="content">
          <Box className="map">
            <div
              style={{
                height: "400px",
                width: "100%",
                borderRadius: "12px",
                background: "#eee",
              }}
            >
              Carregando mapa…
            </div>
          </Box>
        </Box>
      </Box>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, customIcon } =
    libsRef.current;

  return (
    <Box className="venture_map" component="section">
      <Box className="content">
        <Box className="map">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%", borderRadius: "12px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>{popupText}</Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Box>
    </Box>
  );
}
