import './MissionVisionValues.scss';
import { Box } from '@mui/material';

import icon1 from './icons/icon1.svg';
import icon2 from './icons/icon2.svg';
import value1 from './icons/value_1.svg';
import value2 from './icons/value_2.svg';
import value3 from './icons/value_3.svg';

import image1 from './images/banner1[1250x350].png';
import image2 from './images/banner2[585x350].png';


export default function MissionVisionValues() {
  return (
    <Box component="section" className="mission_vision_values">
      <Box className="content">
        <Mission />
        <Vision />
        <Values />
      </Box>
    </Box>
  )
}

function Mission() {
  return (
    <Box className="mission">
      <Box className="text">
        <Box>
          <h2>Missão</h2>
          <h3><b>Nosso propósito é transformar</b> o mundo em um lugar melhor</h3>
          <p>Pode parecer muita ambição, mas sabemos que podemos impactar positivamente o mundo. Por isso, acreditamos que a nossa missão como desenvolvedora de projetos imobiliários urbanos é aliar a alta qualidade urbanística ao respeito às características locais e à natureza. Desta forma, por meio de nossos empreendimentos, contribuimos com o aumento da qualidade de vida de nossos clientes e com o desenvolvimento do seu entorno.</p>
        </Box>
        <img src={icon1} />
      </Box>
      <Box className="image">
        <img src={image1} />
      </Box>
    </Box>
  )
}

function Vision() {
  return (
    <Box className="vision">
      <Box className="image">
        <img src={image2} alt="" />
      </Box>
      <Box className="text">
        <Box>
          <h2>Visão</h2>
          <h3>Ser sinônimo de <b>vida melhor</b></h3>
          <p>A busca pela excelência é nossa prioridade, sempre respeitando o meio ambiente, as comunidades locais e os anseios dos clientes. Com produtos cada vez melhores, nosso objetivo é nos tornarmos referência para o mercado e uma marca desejada para todos que se relacionam conosco</p>
        </Box>
      </Box>
      <img src={icon2} className="icon" />
    </Box>
  )
}

function Values() {
  return (
    <Box className="values">
      <Box className="text">
        <Box>
          <h2>Valores</h2>
          <p>A essência do que nos move</p>
        </Box>
      </Box>
      <Box className="list_itens">
        <Box className="item">
          <Box className="icon">
            <img src={value1} />
          </Box>
          <p>Pessoas estão acima de tudo</p>
        </Box>
        <Box className="item">
          <Box className="icon">
            <img src={value2} />
          </Box>
          <p>Fazer o amanhã ser melhor do que hoje</p>
        </Box>
        <Box className="item">
          <Box className="icon">
            <img src={value3} />
          </Box>
          <p>Agir de maneira ética e sustentável</p>
        </Box>
      </Box>
    </Box>
  )
}