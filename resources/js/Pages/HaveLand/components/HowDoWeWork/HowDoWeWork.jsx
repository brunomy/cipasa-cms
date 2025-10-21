import Button1 from '../../../../components/Buttons/Button1/Button1';
import './HowDoWeWork.scss';
import { Box, Typography } from '@mui/material';

import icon from './icons/logo.svg';

export default function HowDoWeWork() {
  const itens = [
    {
      title: 'Escolha do terreno',
      description: 'A beleza da região, a acessibilidade e o contexto são analisados pela área de Novos Negócios que, junto com a equipe de Urbanismo, deﬁnem qual é o produto.'
    },
    {
      title: 'Desenvolvimento do projeto',
      description: 'Engenheiros, urbanistas, arquitetos e paisagistas se unem para criar o futuro da área.'
    },
    {
      title: 'Comercialização',
      description: 'Após o licenciamento e o registro do projeto, a campanha de marketing e as vendas são iniciadas.'
    },
    {
      title: 'Obras de Infraestrutura',
      description: 'Em paralelo à comercialização, são realizadas as obras de infraestrutura.'
    },
    {
      title: 'Obras complementares',
      description: 'Construção dos equipamentos de lazer, muro de fechamento e portaria, de acordo com cada projeto.'
    },
    {
      title: 'Relacionamento com o cliente',
      description: 'A emoção é o sentimento principal na entrega. O primeiro passo que se mantém por meio da área de Relacionamento com o Cliente.'
    },
  ];


  return (
    <Box className="how_do_we_work" component="section">
      <Box className="content">
        <Box className="left">
          <h2>
            Como <br /><b>nós atuamos</b>
          </h2>
          <p>O pensamento que guia o urbanismo da Cipasa pode ser encontrado em quatro grandes tipos de projetos. Cada um tem suas características próprias e atende a um determinado perfil de público.</p>
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