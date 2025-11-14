import IconLogo from '../../../../components/IconLogo/IconLogo';
import './ProjectsMap.scss';
import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import mapa from './icons/map.svg'
import logo from './icons/logo_bg.svg'
import { Link, router } from '@inertiajs/react';

export default function ProjectsMap({ states }) {
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    if (selectedState) {
      router.get('/empreendimentos', {
        order: 'recentes',
        state: selectedState,
        status: '',
        type: '',
      }, {
        preserveScroll: true,
        preserveState: true,
        replace: true,
      });
    }
  }, [selectedState]);

  return (
    <Box component="section" className="projects_map">
      <img className="logo_bg" src={logo} alt="" />
      <Box className="content">
        <Box className="left">
          <h2>
            Descubra nossos<br />
            <b>projetos por todo Brasil</b>
          </h2>
          <p>
            Descubra os nossos projetos pelo Brasil e, especialmente, aqueles mais próximos de você. 
            <br /><br />
            Clique em um estado para explorar nossos projetos próximos a você
          </p>
          <Box className="selectors">
            <select name="estado" id="" value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">Estados</option>
              { states?.map((state) => (
                <option key={state.value} value={state.value}>{state.label}</option>
              ))}
            </select>
          </Box>
        </Box>
        <Box className="right">
          <BrazilMap states={states} />
        </Box>
      </Box>
    </Box>
  );
}

function BrazilMap({ states }) {
  return (
    <Box className="brazil_map">
      <img src={mapa} alt="Mapa do Brasil" />
      <Box className="pin_content">
        { states?.map((state) => (
          <Button 
            key={state.value} 
            className={state.value} 
            component={Link} 
            href={`http://127.0.0.1:8000/empreendimentos?order=recentes&state=${state.value}&status=&type=`}
          >
            <IconLogo />
          </Button>
        ))
        }
      </Box>
    </Box>
  );
}