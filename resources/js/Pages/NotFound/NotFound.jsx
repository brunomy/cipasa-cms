import './NotFound.scss';
import { Box } from '@mui/material';
import AppLayout from '../../AppLayout';
import { Head } from '@inertiajs/react';

function NotFound() {
  return (
    <>
      <Head title="Página não encontrada" />
      <Box className="not_found">
        <Box className="container">
          <h1>404</h1>
          <p>A página que você está procurando não existe ou foi movida.</p>
        </Box>
      </Box>
    </>
  )
}

NotFound.layout = (page) => <AppLayout>{page}</AppLayout>;

export default NotFound;