import './VenturesHeader.scss';
import { useState, useEffect } from 'react';
import { Box, Button, TextField, Autocomplete } from '@mui/material';
import TitleBreadcrumbs from '../../../../components/TitleBreadcrumbs/TitleBreadcrumbs';
import HeaderPadding from '../../../../components/HeaderPadding/HeaderPadding';



export default function VenturesHeader() {
  return (
    <Box className="ventures_header" component="section">
      <HeaderPadding>
        <Box className="content">
          <Box className="left">
            <TitleBreadcrumbs title={<>Nossos <b>Empreendimentos</b></>} breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Nossos Empreendimentos' }]} />
          </Box>
          <Box className="right">
            <Filter />
          </Box>
        </Box>
      </HeaderPadding>
    </Box>
  )
}

function Filter() {
  const orderList = [
    { label: 'Mais recentes', value: 'recentes' },
    { label: 'Nome A-Z', value: 'nome-az' },
    { label: 'Nome Z-A', value: 'nome-za' },
    { label: 'Menor área', value: 'menor-area' },
    { label: 'Maior área', value: 'maior-area' },
  ];
  const [selectedOrder, setSelectedOrder] = useState(orderList[0]);

  const stateList = [
    { label: 'Estado', value: '' },
    { label: 'Goiás', value: 'GO' },
    { label: 'São Paulo', value: 'SP' },
    { label: 'Minas Gerais', value: 'MG' },
    { label: 'Rio de Janeiro', value: 'RJ' },
  ];
  const statusList = [
    { label: 'Em andamento', value: 'andamento' },
    { label: 'Pronto para construir', value: 'pronto' },
  ];

  const typeList = [
    { label: 'Comercial', value: 'comercial' },
    { label: 'Incorporação', value: 'incorporacao' },
    { label: 'Uso misto', value: 'uso-misto' },
  ];

  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState({
    status: null,
    state: null,
    type: null,
  });

  return (
    <Box className="filter">
      <Button className="filtrar" onClick={() => setFilterOpen(!filterOpen)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_531_496" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect x="0.341797" y="0.389359" width="23.4734" height="23.4734" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_531_496)">
          <path d="M5.23199 19.9506V13.1042H3.27588V11.148H9.14423V13.1042H7.18811V19.9506H5.23199ZM5.23199 9.19193V4.30164H7.18811V9.19193H5.23199ZM9.14423 9.19193V7.23581H11.1003V4.30164H13.0565V7.23581H15.0126V9.19193H9.14423ZM11.1003 19.9506V11.148H13.0565V19.9506H11.1003ZM16.9687 19.9506V17.0164H15.0126V15.0603H20.8809V17.0164H18.9248V19.9506H16.9687ZM16.9687 13.1042V4.30164H18.9248V13.1042H16.9687Z" fill="white"/>
          </g>
        </svg>
        Filtrar
      </Button>
      <Box className="order_content">
        <Autocomplete
          className="order_filter"
          disablePortal
          options={orderList}
          value={selectedOrder}
          size="small"
          onChange={(e, newValue) => {
            if(!newValue) return;
            setSelectedOrder(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="" />}
        />
      </Box>
      <Box className={"dropdown " + (filterOpen ? 'open' : '')}>
        {
          (filter.status || filter.state) && (<Button className="clear" onClick={() => { setFilter({ status: null, state: null }); setFilterOpen(false); }}>Limpar</Button>)
        }
        
        <Box className="item">
          <Autocomplete
            disablePortal
            options={statusList}
            value={filter.status}
            size="small"
            onChange={(e, newValue) => {
              if(!newValue){
                setFilter({ ...filter, status: null }); return;
              }
              setFilter({ ...filter, status: newValue });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Andamento da obra"
                size="small"
              />
            )}
          />
        </Box>
        <Box className="item">
          <Autocomplete
            disablePortal
            options={stateList}
            value={filter.state}
            size="small"
            onChange={(e, newValue) => {
              if(!newValue){
                setFilter({ ...filter, state: null }); return;
              }
              setFilter({ ...filter, state: newValue });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Estado"
                size="small"
              />
            )}
          />
        </Box>
        <Box className="item">
          <Autocomplete
            disablePortal
            options={typeList}
            value={filter.type}
            size="small"
            onChange={(e, newValue) => {
              if(!newValue){
                setFilter({ ...filter, type: null }); return;
              }
              setFilter({ ...filter, type: newValue });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Tipo"
                size="small"
              />
            )}
          />
        </Box>
      </Box>
    </Box>
  )
}