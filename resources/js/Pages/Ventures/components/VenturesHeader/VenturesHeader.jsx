import './VenturesHeader.scss';
import { useState, useRef, useMemo, useEffect } from 'react';
import { Box, Button, TextField, Autocomplete } from '@mui/material';
import { router } from '@inertiajs/react';
import TitleBreadcrumbs from '../../../../components/TitleBreadcrumbs/TitleBreadcrumbs';
import HeaderPadding from '../../../../components/HeaderPadding/HeaderPadding';

function useDebouncedEffect(fn, deps, delay = 300) {
  useEffect(() => {
    const id = setTimeout(fn, delay);
    return () => clearTimeout(id);
  }, [...deps, delay]);
}

export default function VenturesHeader({ ventures, states, setData, currentFilters = {} }) {
  return (
    <Box className="ventures_header" component="section">
      <HeaderPadding>
        <Box className="content">
          <Box className="left">
            <TitleBreadcrumbs
              title={<>Nossos <b>Empreendimentos</b></>}
              breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Nossos Empreendimentos' }]}
            />
          </Box>
          <Box className="right">
            <Filter states={states} currentFilters={currentFilters} />
          </Box>
        </Box>
      </HeaderPadding>
    </Box>
  );
}

function Filter({ states, currentFilters = {} }) {
  const orderList = [
    { label: 'Mais recentes', value: 'recentes' },
    { label: 'Nome A-Z', value: 'nome-az' },
    { label: 'Nome Z-A', value: 'nome-za' },
    { label: 'Menor área', value: 'menor-area' },
    { label: 'Maior área', value: 'maior-area' },
  ];
  const [selectedOrder, setSelectedOrder] =
    useState(orderList.find(o => o.value === currentFilters.order) ?? orderList[0]);

  const statusList = [
    { label: 'Em andamento', value: 0 },
    { label: 'Pronto para construir', value: 1 },
  ];
  const typeList = [
    { label: 'Comercial', value: 0 },
    { label: 'Incorporação', value: 1 },
    { label: 'Uso misto', value: 2 },
  ];

  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState({
    status: statusList.find(s => s.value === currentFilters.status) ?? null,
    state:  states?.find(s => s.value === currentFilters.state)     ?? null,
    type:   typeList.find(t => t.value === currentFilters.type)    ?? null,
  });

  const firstRun = useRef(true);
  useDebouncedEffect(() => {
    if (firstRun.current) { firstRun.current = false; return; }

    const params = {
      order:  selectedOrder?.value,
      state:  filter.state?.value  ?? '',
      status: filter.status?.value ?? '',
      type:   filter.type?.value   ?? '',
    };

    router.get('/empreendimentos', params, {
      preserveScroll: true,
      preserveState: true,
      replace: true,
      only: ['ventures', 'currentFilters'],
    });
  }, [selectedOrder, filter]);

  return (
    <Box className="filter">
      <Button className="filtrar" onClick={() => setFilterOpen(!filterOpen)}>Filtrar</Button>

      <Box className="order_content">
        <Autocomplete
          className="order_filter"
          disablePortal
          options={orderList}
          value={selectedOrder}
          size="small"
          onChange={(e, v) => v && setSelectedOrder(v)}
          isOptionEqualToValue={(o, v) => o.value === v.value}
          renderInput={(params) => <TextField {...params} label="" />}
        />
      </Box>

      <Box className={'dropdown ' + (filterOpen ? 'open' : '')}>
        {(filter.status || filter.state || filter.type) && (
          <Button className="clear" onClick={() => { setFilter({ status: null, state: null, type: null }); setFilterOpen(false); }}>
            Limpar
          </Button>
        )}

        <Box className="item">
          <Autocomplete
            disablePortal
            options={statusList}
            value={filter.status}
            size="small"
            onChange={(e, v) => setFilter(f => ({ ...f, status: v ?? null }))}
            isOptionEqualToValue={(o, v) => o?.value === v?.value}
            renderInput={(p) => <TextField {...p} placeholder="Andamento da obra" size="small" />}
          />
        </Box>
        <Box className="item">
          <Autocomplete
            disablePortal
            options={states}
            value={filter.state}
            size="small"
            onChange={(e, v) => setFilter(f => ({ ...f, state: v ?? null }))}
            isOptionEqualToValue={(o, v) => o?.value === v?.value}
            renderInput={(p) => <TextField {...p} placeholder="Estado" size="small" />}
          />
        </Box>
        <Box className="item">
          <Autocomplete
            disablePortal
            options={typeList}
            value={filter.type}
            size="small"
            onChange={(e, v) => setFilter(f => ({ ...f, type: v ?? null }))}
            isOptionEqualToValue={(o, v) => o?.value === v?.value}
            renderInput={(p) => <TextField {...p} placeholder="Tipo" size="small" />}
          />
        </Box>
      </Box>
    </Box>
  );
}