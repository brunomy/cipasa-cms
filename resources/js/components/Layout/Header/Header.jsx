import Logo from '../../Logo/Logo';
import './Header.scss';
import { Box, Button } from '@mui/material';
import { Link, usePage } from '@inertiajs/react';

import { useState, useEffect } from 'react';
import portal_icon from './../../../assets/icons/portal_icon.svg';
import bottom_arrow from './../../../assets/icons/bottom_arrow.svg';

export default function Header({ ref }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window?.scrollY > 0);
    };

    window?.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { url } = usePage();

  const isActive = (path) => url.includes(path);

  return (
    <header className="header" ref={ref}>
      <Box className={`header_fixed ${scrolled ? 'scrolled' : ''}`}>
        <Box className={"container" + (open ? " open" : " closed")}>
          <Button onClick={() => setOpen(false)} component={Link} href="/" className="logo_content">
            <Logo />
          </Button>
          <Box className="content">
            <Button onClick={() => setOpen(false)} component={Link} className={isActive('/empreendimentos') || isActive('/empreendimento') ? 'active' : ''} href="/empreendimentos">Empreendimentos</Button>
            <Button onClick={() => setOpen(false)} component={Link} className={isActive('/blog') || isActive('/blog') ? 'active' : ''} href="/blog">Blog</Button>
            <Button onClick={() => setOpen(false)} component={Link} className={isActive('/sobre') ? 'active' : ''} href="/sobre">Sobre nós</Button>
            <Button onClick={() => setOpen(false)} component={Link} className={isActive('/tenho-uma-area') ? 'active' : ''} href="/tenho-uma-area">Tenho uma área</Button>
            {/* <Button onClick={() => setOpen(false)} component={Link} className={isActive('/ri') ? 'active' : ''} href="/ri">R.I</Button> */}
            <Button onClick={() => setOpen(false)} component={Link} className={isActive('/contato') ? 'active' : ''} href="/contato">Contato</Button>
            <PortalButton />
          </Box>
          <Button className="menu" onClick={() => setOpen(!open)}>
            <span></span>
          </Button>
        </Box>
      </Box>
    </header>
  );
}

function PortalButton() {
  const { contato } = usePage().props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      // Close dropdown if click is outside the portal_content
      if (!event.target.closest('.portal_content')) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <Box className="portal_content">
      <Button className="portal_button" onClick={() => setOpen(!open)}>
        <img src={portal_icon} />
        Fazer login
        <img src={bottom_arrow} />
      </Button>

      <Box className={`portal_dropdown ${open ? 'open' : 'closed'}`}>
        { contato.cliente && 
          <Button onClick={() => setOpen(false)} component={'a'} target="_blank" href={contato.cliente}>Cliente</Button>
        }
        { contato.parceiro && 
          <Button onClick={() => setOpen(false)} component={'a'} target="_blank" href="https://parceiro.cipasa.com/">Parceiro</Button>
        }
        { contato.corretor && 
          <Button onClick={() => setOpen(false)} component={'a'} target="_blank" href={contato.corretor}>Corretor</Button>
        }
      </Box>
    </Box>
  );
}