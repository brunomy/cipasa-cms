import './VentureInfo.scss';
import { Box } from '@mui/material';

import pin from './icons/pin.svg';
import Button1 from '../../../../components/Buttons/Button1/Button1';
import { smoothScrollTo } from './../../../../Util';

export default function VentureInfo({ venture }) {
  const handleScrollToContact = () => {
    if (typeof window === 'undefined') return;

    const el = document.querySelector('.contact_form');
    if (!el) return;

    // se tiver header fixo, pode ajustar com um offset, ex: -80
    const y = el.getBoundingClientRect().top + window.scrollY - 300;

    smoothScrollTo(y);
  };

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
          <Button1 onClick={handleScrollToContact}>Tenho interesse</Button1>
        </Box>
      </Box>
    </Box>
  )
}