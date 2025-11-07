import './VentureStatus.scss';
import { Box } from '@mui/material';

const formatDate = (dateString) => {
  if (!dateString) return '-';

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString('pt-BR');
};

export default function VentureStatus({ venture }) {
  const status = [
    {
      title: 'Terraplanagem',
      percentage: venture.terraplanagem,
    },
    {
      title: 'Drenagem',
      percentage: venture.drenagem,
    },
    {
      title: 'Saneamento',
      percentage: venture.saneamento,
    },
    {
      title: 'Pavimentação',
      percentage: venture.pavimentacao,
    },
    {
      title: 'Rede elétrica',
      percentage: venture.rede_eletrica,
    },
    {
      title: 'Obras civis',
      percentage: venture.obras_civis,
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
            empreendimento={venture.title}
            dataLancamento={formatDate(venture.lancamento)}
            areaBruta={venture.area_bruta}
            areaLotes={venture.area_de_lotes}
            numeroLotes={`${venture.numero_residenciais} lotes residenciais e ${venture.numero_comerciais} comerciais`}
            tamanhoLotes={`${venture.meters_min}m² a ${venture.meters_max}m²`}
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
          <p>A partir de {tamanhoLotes}</p>
        </Box>
      </Box>
    </Box>
  )
}