import Button1 from '../../../../components/Buttons/Button1/Button1';
import './HowDoWeWork.scss';
import { Box, Typography } from '@mui/material';

import icon from './icons/logo.svg';

export default function HowDoWeWork({ dados }) {
  const itens = dados?.step_by_step?.map(item => ({
    title: item.step_title,
    description: item.step_text
  })) || [];

  return (
    <Box className="how_do_we_work" component="section">
      <Box className="content">
        <Box className="left">
          <h2>
            Como <br /><b>nós atuamos</b>
          </h2>
          <p>{dados?.text_2}</p>
          <Button1>Venda seu terreno</Button1>
        </Box>
        <Box className="right">
          {itens.map((item, index) => (
            <Item key={index} index={index} title={item.title} description={item.description} />
          ))}
          <img src={icon} className="icon" />
        </Box>
      </Box>
    </Box>
  );
}

function Item({ title, description, index }) {
  return (
    <Box className="item">
      <Box>
        <p className="index">{ index + 1 < 10 ? `0${index + 1}` : index + 1 }</p>
        <h3>{title}</h3>
      </Box>
      <p className="description">{description}</p>
    </Box>
  );
}