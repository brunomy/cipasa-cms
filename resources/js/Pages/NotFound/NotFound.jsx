import './NotFound.scss';
import { Box } from '@mui/material';
import AppLayout from '../../AppLayout';

export default function NotFound({ contato }) {
  return (
    <AppLayout contato={contato}>
      <Box className="not_found">
        <Box className="container">
          <h1>404</h1>
          <p>A página que você está procurando não existe ou foi movida.</p>
        </Box>
      </Box>
    </AppLayout>
  )
}