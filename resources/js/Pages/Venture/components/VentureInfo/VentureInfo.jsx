import './VentureInfo.scss';
import { Box } from '@mui/material';

import pin from './icons/pin.svg';
import Button1 from '../../../../components/Buttons/Button1/Button1';

export default function VentureInfo() {
  return (
    <Box className="venture_info" component="section">
      <Box className="content">
        <Box className="left">
          <p className="locale">
            <img src={pin} />
            Várzea Grande - MT
          </p>
          <h2>Natureza e lazer em cada detalhe</h2>
          <p className="description">
            O Verana Várzea Grande prioriza espaços planejados e arborizados em todo o condomínio. O sistema de lazer contempla um clube com mais de 10 mil m² com piscinas adulto e infantil, quadras, fitness, quiosque com churrasqueira e trilha no bosque com árvores frutíferas e nativas da região. E ainda, praças com estações de ginástica, alongamento e playground com mais de 3 mil m². Um condomínio diferenciado com lotes a partir de 250m².
          </p>
        </Box>
        <Box className="right">
          <h3>Quer saber mais sobre?</h3>
          <Button1>Tenho interesse</Button1>
        </Box>
      </Box>
    </Box>
  )
}