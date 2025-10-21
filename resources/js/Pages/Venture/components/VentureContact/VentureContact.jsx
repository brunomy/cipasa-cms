import './VentureContact.scss';
import { useState } from 'react';
import { Box, Button } from '@mui/material';

export default function VentureContact() {
  return (
    <Box className="venture_contact" component="section">
      <Box className="content">
        <h2>Tenho Interesse</h2>
        <p>Preencha seus dados e receba um contato de um de nossos especialistas.</p>
        <ContactForm />
      </Box>
    </Box>
  )
}

function ContactForm() {
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');

  function handlePhoneChange(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    value = value.slice(0, 15);
    setPhone(value);
  }

  function handleCepChange(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    value = value.slice(0, 9);
    setCep(value);
  }

  return (
    <form className="contact_form">
      <Box className="form_content">
        <input type="text" placeholder="Nome" />
        <input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
        />
        <input type="text" placeholder="Email" />
        <input
          type="text"
          placeholder="SEU CEP"
          value={cep}
          onChange={handleCepChange}
          maxLength={9}
        />
        <Button>Enviar</Button>
      </Box>
      <Box className="checkbox_content">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">Li e concordo com a Política de Privacidade e os Termos de Uso.</label>
      </Box>
    </form>
  )
}