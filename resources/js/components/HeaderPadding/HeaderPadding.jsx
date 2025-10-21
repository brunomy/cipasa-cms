import './HeaderPadding.scss';
import { Box } from '@mui/material';

export default function HeaderPadding({ children }) {
  return (
    <Box className="header_padding">
      {children}
    </Box>
  )
}