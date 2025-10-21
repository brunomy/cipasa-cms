import './AboutData.scss';
import { Box } from '@mui/material';

import icon1 from './icons/icon1.svg';
import icon2 from './icons/icon2.svg';
import icon3 from './icons/icon3.svg';
import icon4 from './icons/icon4.svg';

export default function AboutData() {
  return (
    <Box className="about_data">
      <Box className="content">
        <Box className="item">
          <Box className="icon"><img src={icon1} /></Box>
          <Box className="text">
            <h3>anos de história</h3>
            <p>33</p>
          </Box>
        </Box>
        <Box className="item">
          <Box className="icon"><img src={icon2} /></Box>
          <Box className="text">
            <h3>projetos lançados ou em desenvolvimento</h3>
            <p>+120</p>
          </Box>
        </Box>
        <Box className="item">
          <Box className="icon"><img src={icon3} /></Box>
          <Box className="text">
            <h3>estados</h3>
            <p>23</p>
          </Box>
        </Box>
        <Box className="item">
          <Box className="icon"><img src={icon4} /></Box>
          <Box className="text">
            <h3>milhões de m² urbanizados</h3>
            <p>125</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}