import { Box } from '@mui/material';
import AppLayout from '../../AppLayout';
import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';

import Blog from '../Home/components/Blog/Blog';
import VenturesHeader from './components/VenturesHeader/VenturesHeader';
import VenturesList from './components/VenturesList/VenturesList';

export default function Ventures({ dados, construtoras, states, blog, contato, currentFilters }) {
  const [data, setData] = useState({
    ventures: dados.filter(v => v.published === true) ?? [],
    construtoras: construtoras ?? [],
  });

  useEffect(() => {
    setData({
      ventures: dados ?? [],
      construtoras: construtoras ?? [],
    });
  }, [dados, construtoras]);

  return (
    <AppLayout contato={contato}>
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
        <Blog blog={blog} />
      </Box>
    </AppLayout>
  );
}