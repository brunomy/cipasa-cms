import { Box } from '@mui/material';
import AppLayout from '../../AppLayout';
import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';

import Blog from '../Home/components/Blog/Blog';
import VenturesHeader from './components/VenturesHeader/VenturesHeader';
import VenturesList from './components/VenturesList/VenturesList';

export default function Ventures() {
  const { props: { ventures, construtoras, states, currentFilters } } = usePage();

  const [data, setData] = useState({
    ventures: ventures.filter(v => v.published === true) ?? [],
    construtoras: construtoras ?? [],
  });

  useEffect(() => {
    setData({
      ventures: ventures ?? [],
      construtoras: construtoras ?? [],
    });
  }, [ventures, construtoras]);

  return (
    <AppLayout>
      <Box className="container">
        <VenturesHeader
          ventures={data.ventures}
          states={states}
          setData={setData}
          currentFilters={currentFilters}
        />
        <VenturesList
          ventures={data.ventures}
          construtoras={data.construtoras}
        />
        <Blog />
      </Box>
    </AppLayout>
  );
}