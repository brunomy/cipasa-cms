import Logo from '../../Logo/Logo';
import './Footer.scss'
import { Box, Button, Snackbar, Alert } from '@mui/material';
import { Link, router } from '@inertiajs/react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { smoothScrollTo } from '../../../Util';
import { useState } from 'react';
import { route } from 'ziggy-js';

export default function Footer({ contato, ref }) {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState('success');

  const handleToastClose = (_, reason) => {
    if (reason === 'clickaway') return;
    setToastOpen(false);
  };

  const handleSubmitNewsletter = (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setToastMessage('');
    setToastSeverity('success');

    const emailTrimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailTrimmed || !emailRegex.test(emailTrimmed)) {
      setToastMessage('Informe um e-mail válido.');
      setToastSeverity('error');
      setToastOpen(true);
      setSending(false);
      return;
    }

    router.post(
      route('contato.newsletter'),
      { email: emailTrimmed },
      {
        preserveScroll: true,
        onError: (errors) => {
          setToastMessage(errors.email || 'Não foi possível cadastrar seu e-mail.');
          setToastSeverity('error');
          setToastOpen(true);
        },
        onSuccess: () => {
          setToastMessage('Obrigado por se inscrever em nossa newsletter!');
          setToastSeverity('success');
          setToastOpen(true);
          setEmail('');
        },
        onFinish: () => setSending(false),
      }
    );
  };

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
                <Button component={Link} href="/blog">Blog</Button>
                <Button component={Link} href="/sobre">Sobre nós</Button>
                <Button component={Link} href="/tenho-uma-area">Tenho uma área </Button>
                <Button component={Link} href="/contato">Contato</Button>
              </Box>
              <Box className="has_in_menu">
                <h4>Fazer login</h4>
                { contato.cliente && 
                  <Button component={'a'} target="_blank" href={contato.cliente}>Cliente</Button>
                }
                { contato.parceiro && 
                  <Button component={'a'} target="_blank" href="https://parceiro.cipasa.com/">Parceiro</Button>
                }
                { contato.corretor && 
                  <Button component={'a'} target="_blank" href={contato.corretor}>Corretor</Button>
                }
              </Box>
              <Box>
                <h4>Quero Comprar</h4>
                <Button component={Link} href="/empreendimentos?order=recentes&state=&status=&type=0">Emp. Comercial</Button>
                <Button component={Link} href="/empreendimentos?order=recentes&state=&status=&type=1">Incorporação</Button>
                <Button component={Link} href="/empreendimentos?order=recentes&state=&status=&type=2">Uso misto</Button>
              </Box>
              {(contato?.facebook || contato?.instagram || contato?.linkedin) &&
                <Box className="social">
                  <h4>Redes sociais</h4>
                  <Box>
                    {contato?.facebook &&
                      <Button component={"a"} target="_blank" href={contato?.facebook}><FacebookRoundedIcon /></Button>
                    }
                    {contato?.instagram &&
                      <Button component={"a"} target="_blank" href={contato?.instagram}><InstagramIcon /></Button>
                    }
                    {contato?.linkedin &&
                      <Button component={"a"} target="_blank" href={contato?.linkedin}><LinkedInIcon /></Button>
                    }
                  </Box>
                </Box>
              }
            </Box>
            <Box className="newsletter">
              <Box>
                <h4>Notícias</h4>
                <form onSubmit={handleSubmitNewsletter}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" disabled={sending}>
                    {sending ? 'Enviando...' : 'Enviar'}
                  </Button>
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
            <Button onClick={() => smoothScrollTo(0)}>
              Voltar para o topo <span className="icon"><ExpandLessRoundedIcon /></span>
            </Button>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={toastOpen}
        autoHideDuration={4000}
        onClose={handleToastClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{
          '& .MuiPaper-root': {
            maxWidth: 360,
            width: '100%',
            borderRadius: 2,
          },
        }}
      >
        <Alert
          onClose={handleToastClose}
          severity={toastSeverity}
          variant="filled"
          sx={{
            width: '100%',
            boxShadow: 3,
            whiteSpace: 'pre-line',
            textAlign: 'left',
          }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </footer>
  );
}
