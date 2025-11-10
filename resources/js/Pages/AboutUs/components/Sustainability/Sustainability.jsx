import './Sustainability.scss';
import { Box } from '@mui/material';

import banner from './images/banner[1920x300].png';
import img from './images/image[170x170].png';
import icon from './icons/icon.svg';
import { decodeBasic } from '../../../../Util';

export default function Sustainability({ sobre }) {
  return (
    <Box component="section" className="sustainability">
      <Box className="banner">
        <Box><img src={ sobre?.banner_2?.permalink } /></Box>
      </Box>
      <Box className="content">
        <Box className="left">
          <h2>Sustentabilidade para <b>você viver melhor</b></h2>
          <Box className="icon">
            <img src={icon} />
          </Box>
        </Box>
        <Box className="right">
          <div className="text" dangerouslySetInnerHTML={{ __html: decodeBasic(sobre?.text_3 || '') }} />
          <Box className="img">
            <img src={ sobre?.text_3_image?.permalink } />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
