import './VentureInfo.scss';
import { Box } from '@mui/material';

import pin from './icons/pin.svg';
import Button1 from '../../../../components/Buttons/Button1/Button1';

export default function VentureInfo({ venture }) {
  return (
    <Box className="venture_info" component="section">
      <Box className="content">
        <Box className="left">
          <p className="locale">
            <img src={pin} />
            {venture.cidade} - {venture.estado.value}
          </p>
          <h2>{venture.subtitulo}</h2>
          <p className="description">
            {venture.descricao}
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