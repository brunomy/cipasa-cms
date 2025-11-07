import IconLogo from '../../../../components/IconLogo/IconLogo';
import './ProjectsMap.scss';
import { Box, Button } from '@mui/material';
import mapa from './icons/map.svg'
import logo from './icons/logo_bg.svg'
import { Link } from '@inertiajs/react';

export default function ProjectsMap() {
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
            <select name="estado" id="">
              <option value="">Estados</option>
              <option value="GO">GO</option>
            </select>

            <select name="cidade" id="">
              <option value="">Cidades</option>
              <option value="Goiânia">Goiânia</option>
            </select>
          </Box>
        </Box>
        <Box className="right">
          <BrazilMap />
        </Box>
      </Box>
    </Box>
  );
}

function BrazilMap() {
  return (
    <Box className="brazil_map">
      <img src={mapa} alt="Mapa do Brasil" />
      <Box className="pin_content">
        <Button className="RS" component={Link} href="/"><IconLogo /></Button>
        <Button className="SC" component={Link} href="/"><IconLogo /></Button>
        <Button className="PR" component={Link} href="/"><IconLogo /></Button>
        <Button className="SP" component={Link} href="/"><IconLogo /></Button>
        <Button className="RJ" component={Link} href="/"><IconLogo /></Button>
        <Button className="ES" component={Link} href="/"><IconLogo /></Button>
        <Button className="MG" component={Link} href="/"><IconLogo /></Button>
        <Button className="MS" component={Link} href="/"><IconLogo /></Button>
        <Button className="GO" component={Link} href="/"><IconLogo /></Button>
        <Button className="DF" component={Link} href="/"><IconLogo /></Button>
        <Button className="MT" component={Link} href="/"><IconLogo /></Button>
        <Button className="BA" component={Link} href="/"><IconLogo /></Button>
        <Button className="RO" component={Link} href="/"><IconLogo /></Button>
        <Button className="AC" component={Link} href="/"><IconLogo /></Button>
        <Button className="AM" component={Link} href="/"><IconLogo /></Button>
        <Button className="RR" component={Link} href="/"><IconLogo /></Button>
        <Button className="PA" component={Link} href="/"><IconLogo /></Button>
        <Button className="AP" component={Link} href="/"><IconLogo /></Button>
        <Button className="TO" component={Link} href="/"><IconLogo /></Button>
        <Button className="MA" component={Link} href="/"><IconLogo /></Button>
        <Button className="PI" component={Link} href="/"><IconLogo /></Button>
        <Button className="CE" component={Link} href="/"><IconLogo /></Button>
        <Button className="RN" component={Link} href="/"><IconLogo /></Button>
        <Button className="PB" component={Link} href="/"><IconLogo /></Button>
        <Button className="PE" component={Link} href="/"><IconLogo /></Button>
        <Button className="AL" component={Link} href="/"><IconLogo /></Button>
        <Button className="SE" component={Link} href="/"><IconLogo /></Button>
      </Box>
    </Box>
  );
}