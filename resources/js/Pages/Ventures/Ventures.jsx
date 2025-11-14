import { Box } from '@mui/material';
import AppLayout from '../../AppLayout';
import { useEffect, useState } from 'react';
import { usePage, Head } from '@inertiajs/react';

import Blog from '../Home/components/Blog/Blog';
import VenturesHeader from './components/VenturesHeader/VenturesHeader';
import VenturesList from './components/VenturesList/VenturesList';

function Ventures({ dados, construtoras, states, blog, currentFilters }) {
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
    <>
      <Head title="Cipasa - Empreendimentos" />
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
    </>
  );
}

Ventures.layout = (page) => <AppLayout>{page}</AppLayout>;

export default Ventures;