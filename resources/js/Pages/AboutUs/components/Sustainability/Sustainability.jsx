import './Sustainability.scss';
import { Box } from '@mui/material';

import banner from './images/banner[1920x300].png';
import img from './images/image[170x170].png';
import icon from './icons/icon.svg';

export default function Sustainability() {
  return (
    <Box component="section" className="sustainability">
      <Box className="banner">
        <Box><img src={banner} /></Box>
      </Box>
      <Box className="content">
        <Box className="left">
          <h2>Sustentabilidade para <b>você viver melhor</b></h2>
          <Box className="icon">
            <img src={icon} />
          </Box>
        </Box>
        <Box className="right">
          <Box className="text">
            <p>
              A Cipasa acredita que somente poderá prosperar em uma sociedade que também prospere. Por isso, na concepção urbanística dos empreendimentos e durante o processo de desenvolvimento dos projetos, a empresa contempla diretrizes de sustentabilidade.
              <br /><br />
              O modelo do residencial Reserva Ibirapitanga (Santa Isabel, SP), implementado em 2004, que tem 4 milhões de m² de reserva ambiental, foi uma das inspirações da Cipasa para desenvolver sua Estratégia de Sustentabilidade com base em três pilares. Juntos, eles traduzem o modo como a empresa faz negócios e cria empreendimentos.
            </p>
          </Box>
          <Box className="img">
            <img src={img} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
