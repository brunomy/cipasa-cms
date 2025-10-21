import HeaderDescription from '../../../../components/HeaderDescription/HeaderDescription';
import HeaderPadding from '../../../../components/HeaderPadding/HeaderPadding';
import { Box } from '@mui/material';

import banner from './images/banner[1920x400].png';
import HeaderBanner from '../../../../components/HeaderBanner/HeaderBanner';

export default function HaveLandHeader() {
  return (
    <Box className="have_land_header" component="section">
      <HeaderBanner
        title={<>Tenho <b>uma área</b></>}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tenho uma área' }]}
        right={<>
          <p><b>O SUCESSO DE SEUS NEGÓCIOS ESTÁ EM UMA PARCERIA COM A CIPASA</b></p>
          <br />
          <p>
            Quando a Cipasa começa a desenvolver um novo empreendimento, ela enxerga um projeto de vida para muitas pessoas e um projeto de futuro para as cidades. Isso acontece porque a Cipasa vê o urbanismo como um grande agente transformador de áreas. O urbanismo inteligente que faz a vida das pessoas muito melhor.
          </p>
        </>}
        banner={banner}
      />
    </Box>
  );
}