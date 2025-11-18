import './MissionVisionValues.scss';
import { Box } from '@mui/material';
import icon1 from './icons/icon1.svg';
import icon2 from './icons/icon2.svg';
import { decodeBasic } from '../../../../Util';

export default function MissionVisionValues({ sobre }) {
  return (
    <Box component="section" className="mission_vision_values">
      <Box className="content">
        <Mission sobre={sobre} />
        <Vision sobre={sobre} />
        <Values sobre={sobre} />
      </Box>
    </Box>
  )
}

function Mission({ sobre }) {
  return (
    <Box className="mission">
      <Box className="text">
        <Box>
          <h2>Missão</h2>
          <div dangerouslySetInnerHTML={{ __html: decodeBasic(sobre?.missao || '') }} />
        </Box>
        <img src={icon1} />
      </Box>
      <Box className="image">
        <img src={sobre?.missao_banner?.permalink} />
      </Box>
    </Box>
  )
}

function Vision({ sobre }) {
  return (
    <Box className="vision">
      <Box className="image">
        <img src={sobre?.visao_banner?.permalink} alt="" />
      </Box>
      <Box className="text">
        <Box>
          <h2>Visão</h2>
          <div dangerouslySetInnerHTML={{ __html: decodeBasic(sobre?.visao || '') }} />
        </Box>
      </Box>
      <img src={icon2} className="icon" />
    </Box>
  )
}

function Values({ sobre }) {
  return (
    <Box className="values">
      <Box className="text">
        <Box>
          <h2>Valores</h2>
          <p>{sobre?.valores}</p>
        </Box>
      </Box>
      <Box className="list_itens">
        <Box className="item">
          <Box className="icon">
            <img src={sobre?.icone_1?.permalink} />
          </Box>
          <p>{sobre?.valor_1}</p>
        </Box>
        <Box className="item">
          <Box className="icon">
            <img src={sobre?.icone_2?.permalink} />
          </Box>
          <p>{sobre?.valor_2}</p>
        </Box>
        <Box className="item">
          <Box className="icon">
            <img src={sobre?.icone_3?.permalink} />
          </Box>
          <p>{sobre?.valor_3}</p>
        </Box>
      </Box>
    </Box>
  )
}