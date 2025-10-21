import './VentureStatus.scss';
import { Box } from '@mui/material';

export default function VentureStatus() {
  const status = [
    {
      title: 'Terraplanagem',
      percentage: 100,
    },
    {
      title: 'Drenagem',
      percentage: 90,
    },
    {
      title: 'Saneamento',
      percentage: 75,
    },
    {
      title: 'Pavimentação',
      percentage: 40,
    },
    {
      title: 'Rede elétrica',
      percentage: 50,
    },
    {
      title: 'Obras civis',
      percentage: 65,
    },
  ]

  const geral_status = Math.floor(status.reduce((acc, item) => acc + item.percentage, 0) / status.length);

  return (
    <Box className="venture_status" component="section">
      <Box className="content">
        <Box className="left">
          <h2>Status</h2>
          <p>Confira o andamento de cada etapa de execução das obras do empreendimento.</p>
          <Box className="list_status">
            <Item item={{ title: 'Status Geral da obra', percentage: geral_status }} />
            {status.map(item => (
              <Item key={item.title} item={item} />
            ))}
          </Box>
        </Box>
        <Box className="right">
          <TechnicalSheet
            empreendimento="Verana Condomínio Fechado"
            dataLancamento="11/2015"
            areaBruta="5262.699"
            areaLotes="126.604"
            numeroLotes="464 lotes residenciais e 4 comerciais"
            tamanhoLotes="250 m² a 400 m²"
          />
        </Box>
      </Box>
    </Box>
  )
}

function Item({ item }){
  return (
    <Box className="item">
      <Box className="progress" style={{ width: `${item.percentage}%` }}></Box>
      <p className="title">{item.title}</p>
      <p className="percentage">{item.percentage}%</p>
    </Box>
  )
}

function TechnicalSheet({ empreendimento, dataLancamento, areaBruta, areaLotes, numeroLotes, tamanhoLotes }){
  return (
    <Box className="technical_sheet">
      <h3>Ficha Técnica</h3>
      <Box className="list">
        <Box className="item">
          <h4>Empreendimento:</h4>
          <p>{empreendimento}</p>
        </Box>
        <Box className="item">
          <h4>Data de lançamento:</h4>
          <p>{dataLancamento}</p>
        </Box>
        <Box className="item">
          <h4>Área bruta:</h4>
          <p>{areaBruta}m²</p>
        </Box>
        <Box className="item">
          <h4>Área de lotes:</h4>
          <p>{areaLotes}m²</p>
        </Box>
        <Box className="item">
          <h4>Número de lotes:</h4>
          <p>{numeroLotes}</p>
        </Box>
        <Box className="item">
          <h4>Tamanho dos lotes:</h4>
          <p>A partir de {tamanhoLotes}m²</p>
        </Box>
      </Box>
    </Box>
  )
}