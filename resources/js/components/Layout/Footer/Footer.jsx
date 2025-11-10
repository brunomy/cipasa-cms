import Logo from '../../Logo/Logo';
import './Footer.scss'
import { Box, Button } from '@mui/material';
import { Link } from '@inertiajs/react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { smoothScrollTo } from '../../../Util';

export default function Footer({ contato, ref }) {
  return (
    <footer className="footer" ref={ref}>
      <Box className="footer_top">
        <Box className="container">
          <Box className="left">
            <Box className="logo_content"><Logo /></Box>
            <p>{contato?.rua}, {contato?.numero}, {contato?.complemento}, {contato?.bairro}, {contato?.cidade}/{contato?.estado?.value} - CEP: {contato?.cep}</p>
            <Box className="contato">
              <Box className="item">
                <p>Entre em contato - São Paulo</p>
                <h3>{contato?.telefone_sao_paulo}</h3>
              </Box>
              <Box className="item">
                <p>Entre em contato - Goiânia</p>
                <h3>{contato?.telefone_goiania}</h3>
              </Box>
            </Box>
          </Box>

          <Box className="right">
            <Box className="pages">
              <Box className="has_in_menu">
                <h4>Mapa do site</h4>
                <Button component={Link} href="/empreendimentos">Empreendimentos</Button>
                <Button component={Link} href="/sobre">Sobre nós</Button>
                <Button component={Link} href="/tenho-uma-area">Tenho uma área </Button>
                <Button component={Link} href="/ri">R.I</Button>
                <Button component={Link} href="/contato">Contato</Button>
              </Box>
              <Box className="has_in_menu">
                <h4>Portal do cliente</h4>
                <Button component={Link} href="/sobre">Cliente</Button>
                <Button component={Link} href="/servicos">Parceiro</Button>
                <Button component={Link} href="/contato">Corretor</Button>
              </Box>
              <Box>
                <h4>Quero Comprar</h4>
                <Button component={Link} href="/sobre">Condomínios Fechados</Button>
                <Button component={Link} href="/servicos">Loteamento fechado </Button>
                <Button component={Link} href="/contato">Loteamentos</Button>
              </Box>
              { (contato?.facebook || contato?.instagram || contato?.linkedin) &&
                <Box className="social">
                  <h4>Redes sociais</h4>
                  <Box>
                    { contato?.facebook &&
                      <Button component={"a"} target="_blank" href={contato?.facebook}><FacebookRoundedIcon /></Button>
                    }
                    { contato?.instagram &&
                      <Button component={"a"} target="_blank" href={contato?.instagram}><InstagramIcon /></Button>
                    }
                    { contato?.linkedin &&
                      <Button component={"a"} target="_blank" href={contato?.linkedin}><LinkedInIcon /></Button>
                    }
                  </Box>
                </Box>
              }
            </Box>
            <Box className="newsletter">
              <Box>
                <h4>Notícias</h4>
                <form>
                  <input type="text" placeholder="Digite seu e-mail" />
                  <Button>Enviar</Button>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="footer_bottom">
        <Box>
          <Box className="container">
            <p>CIPASA URBANISMO® 00.000.000-0000 • © 2025</p>
            <Button onClick={() => smoothScrollTo(0)}>Voltar para o topo <span className="icon"><ExpandLessRoundedIcon /></span></Button>
          </Box>
        </Box>
      </Box>
    </footer>
  )
}