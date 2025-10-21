import './NotFound.scss';
import { Box } from '@mui/material';

export default function NotFound() {
  return (
    <Box className="not_found">
      <Box className="container">
        <h1>404</h1>
        <p>A página que você está procurando não existe ou foi movida.</p>
      </Box>
    </Box>
  )
}