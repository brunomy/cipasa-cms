import './HaveLandForm.scss';

import { useState, useRef, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  useMap,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import Button1 from '../../../../components/Buttons/Button1/Button1';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';

export default function HaveLandForm() {
  const [arquivos, setArquivos] = useState([]);
  const [celular, setCelular] = useState("");

  const handleFilesChange = (e) => {
    const novosArquivos = Array.from(e.target.files);
    setArquivos((prev) => {
      const nomes = new Set(prev.map((a) => a.name));
      return [...prev, ...novosArquivos.filter((a) => !nomes.has(a.name))];
    });
  };
  
  const removerArquivo = (index) => {
    setArquivos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    arquivos.forEach((file) => data.append('documentos[]', file));

    router.post(route('tenho-uma-area.send'), data, {
      forceFormData: true,
      onSuccess: () => {},
    });
  };

  const maskCelular = (value) => {
    const d = value.replace(/\D/g, '').slice(0, 11);
    const isCell = d.length > 10; // 11 = celular
    const dd = d.slice(0, 2);
    const p2 = isCell ? d.slice(2, 7) : d.slice(2, 6);
    const p3 = isCell ? d.slice(7, 11) : d.slice(6, 10);

    if (d.length === 0) return '';
    if (d.length <= 2) return `(${dd}`;
    if (d.length <= (isCell ? 7 : 6)) return `(${dd}) ${d.slice(2)}`;
    return `(${dd}) ${p2}-${p3}`;
  };

  return (
    <Box className="have_land_form" component="section">
      <Box className="content">
        <h2>Seja <b>nosso parceiro</b></h2>
        <p>Preencha o formulário abaixo e faça a demarcação do terreno.</p>

        <form onSubmit={handleSubmit}>
          <Box className="info_content">
            <input type="text" name="nome" placeholder="Nome Completo" />
            <input type="text" name="celular" value={celular} onChange={(e) => setCelular(maskCelular(e.target.value))} placeholder="Celular" />
            <input type="text" name="email" placeholder="E-mail" />
          </Box>

          <Box className="address_content">
            <h3><b>Demarcação</b> do terreno</h3>
            <AreaMap />
          </Box>

          <Box className="document_content">
            <h3><b>Documentação</b> necessária</h3>
            <p>- Ponto de localização no Google Earth (arquivo KMZ)</p>
            <p>- Matrícula atualizada e/ou escritura de compra e venda</p>
            <p>- Levantamento planialtimétrico (caso possua)</p>
            <p>- Planta oficial (Prefeitura)</p>
            <p>- Imagens</p>
            <p>- Outros documentos</p>

            <Box className="document_list">
              {arquivos.length > 0 ? (
                arquivos.map((file, index) => (
                  <Box className="document_item" key={index}>
                    <Typography variant="body2">
                      {file.name}{" "}
                      <span>
                        ({(file.size / 1024).toFixed(1)} KB)
                      </span>
                    </Typography>

                    <Button
                      size="small"
                      color="error"
                      onClick={() => removerArquivo(index)}
                    >
                      <DeleteIcon fontSize="small" />
                    </Button>
                  </Box>
                ))
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Nenhum documento adicionado ainda.
                </Typography>
              )}
            </Box>
            <Box className="input_file">
              <label htmlFor="file">Anexar documento</label>
              <input
                id="file"
                type="file"
                multiple
                onChange={handleFilesChange}
                hidden
              />
            </Box>
          </Box>

          <textarea className="informacoes" name="informacoes" placeholder="Informações complementares"></textarea>

          <Button1
            type="submit"
            className="submit_button"
          >
            Enviar
          </Button1>
        </form>
      </Box>
    </Box>
  );
}

function SearchControl({ onResult }) {
  const [query, setQuery] = useState("");
  const [cep, setCep] = useState("");
  const map = useMap();
  const provider = new OpenStreetMapProvider();

  const handleSearchCep = async () => {
    const sanitizedCep = cep.replace(/\D/g, "");
    if (sanitizedCep.length !== 8) {
      alert("CEP inválido! Digite no formato 00000-000");
      return;
    }

    try {
      const res = await fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`);
      const data = await res.json();
      if (data.erro) {
        alert("CEP não encontrado!");
        return;
      }

      const endereco = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
      const results = await provider.search({ query: endereco });

      if (results.length > 0) {
        const { x, y } = results[0];
        map.setView([y, x], 17);
        onResult(endereco);
      } else {
        alert("Não foi possível localizar o CEP no mapa.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box className="search_control">
      <Box>
        <input type="text" value={cep} name="cep" hidden />
        <Stack direction="row" spacing={1}>
          <TextField
            size="small"
            placeholder="CEP"
            value={cep}
            onChange={(e) =>
              setCep(
                e.target.value
                  .replace(/\D/g, "") 
                  .replace(/(\d{5})(\d)/, "$1-$2") 
                  .substring(0, 9)
              )
            }
            fullWidth
            inputProps={{ maxLength: 9 }}
          />
          <Button variant="contained" onClick={handleSearchCep} size="small" sx={{ background: "#62bb46" }}>
            <SearchIcon fontSize="small" />
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export function AreaMap() {
  const [area, setArea] = useState(null);
  const [address, setAddress] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);
  const mapRef = useRef();
  const featureGroupRef = useRef();
  const drawControlRef = useRef();

  const onCreated = (e) => {
    const layer = e.layer;
    const areaMeters = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
    const hectares = (areaMeters / 10000).toFixed(2);
    setArea(hectares);
    setIsDrawing(false);
  };

  const onDeleted = () => setArea(null);

  const clearPolygons = () => {
    const fg = featureGroupRef.current;
    if (fg) fg.clearLayers();
    setArea(null);
  };

  // Ativa o modo de desenho manualmente
  const startDrawing = () => {
    const map = mapRef.current;
    if (!map || !drawControlRef.current) return;
    const drawer = new L.Draw.Polygon(map, drawControlRef.current.options.draw.polygon);
    drawer.enable();
    setIsDrawing(true);
  };
  
  function triggerDrawPolygon() {
    clearPolygons();

    const btn = document.querySelector(".leaflet-draw-draw-polygon");
    if (btn) {
      btn.click();
    } else {
      console.warn("Botão de desenho de polígono não encontrado.");
    }
  }

  return (
    <Box>
      <Paper className="area_map">
        <Box className="map">
          <MapContainer
            
            center={[-15.78, -47.93]}
            zoom={14}
            whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; Google Maps'
              url="https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />
            <FeatureGroup ref={featureGroupRef}>
              <EditControl
                ref={drawControlRef}
                position="topright"
                onCreated={onCreated}
                onDeleted={onDeleted}
                draw={{
                  rectangle: false,
                  circle: false,
                  circlemarker: false,
                  polyline: false,
                  marker: false,
                }}
              />
            </FeatureGroup>
            <SearchControl onResult={setAddress} />
          </MapContainer>
        </Box>
      </Paper>

      <Box className="controllers_content">
        {area ? (
          <Typography variant="h6" color="green" className="meter_info">
            TAMANHO DA ÁREA: <b>{area}</b> hectares
          </Typography>
        ) : (
          <Typography color="text.secondary" className="info_text">
            Desenhe uma área no mapa para calcular.
          </Typography>
        )}

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 3 }}
          className="action_buttons"
        >
          <Button1
            onClick={triggerDrawPolygon}
            disabled={isDrawing}
          >
            Desenhar
          </Button1>
          <Button1 onClick={clearPolygons} className="error">
            Limpar
          </Button1>
        </Stack>
      </Box>
      <input
        hidden
        type="text"
        name="coordenadas"
        value={
          featureGroupRef.current && featureGroupRef.current.getLayers().length > 0
            ? JSON.stringify(
                featureGroupRef.current
                  .getLayers()[0]
                  .getLatLngs()[0]
                  .map((p) => ({ lat: p.lat, lng: p.lng }))
              )
            : ""
        }
      />
      <input hidden type="text" name="tamanho_area" value={area || ""} />
    </Box>
  );
}