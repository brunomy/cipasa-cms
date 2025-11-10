import './VentureContact.scss';
import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';

export default function VentureContact({ venture }) {
  return (
    <Box className="venture_contact" component="section">
      <Box className="content">
        <h2>Tenho Interesse</h2>
        <p>Preencha seus dados e receba um contato de um de nossos especialistas.</p>
        <ContactForm venture={venture} />
      </Box>
    </Box>
  )
}

function ContactForm({ venture }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

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

  function validate() {
    const e = {};
    if (!name.trim()) e.name = 'Informe seu nome';
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 11) e.phone = 'Telefone inválido';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'E-mail inválido';
    const cepDigits = cep.replace(/\D/g, '');
    if (cepDigits && cepDigits.length !== 8) e.cep = 'CEP inválido';
    if (!accepted) e.accepted = 'É necessário aceitar os termos';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;

    setSending(true);
    router.post(
      route('empreendimentos.leads.store'),
      {
        venture_id: venture?.id ?? null,
        venture_slug: venture?.slug ?? null,
        venture_name: venture?.title ?? null,
        name: name.trim(),
        phone: phone.replace(/\D/g, ''),
        email: email.trim(),
        cep: cep.replace(/\D/g, ''),
        accepted: true,
      },
      {
        onError: (serverErrors) => {
          setErrors((prev) => ({ ...prev, ...serverErrors }));
          setSending(false);
        },
        onSuccess: () => {
          setSuccess(true);
          setSending(false);
          setName(''); setPhone(''); setEmail(''); setCep(''); setAccepted(false);
          setTimeout(() => setSuccess(false), 4000);
        },
      }
    );
  }

  return (
    <form className="contact_form" onSubmit={handleSubmit} noValidate>
      <Box className="form_content">
        <input type="text" placeholder="NOME" value={name} onChange={e => setName(e.target.value)} />
        {errors.name && <small className="error">{errors.name}</small>}

        <input type="text" placeholder="TELEFONE" value={phone} onChange={handlePhoneChange} maxLength={15} />
        {errors.phone && <small className="error">{errors.phone}</small>}

        <input type="email" placeholder="EMAIL" value={email} onChange={e => setEmail(e.target.value)} />
        {errors.email && <small className="error">{errors.email}</small>}

        <input type="text" placeholder="SEU CEP" value={cep} onChange={handleCepChange} maxLength={9} />
        {errors.cep && <small className="error">{errors.cep}</small>}

        <Button type="submit" disabled={sending}>
          {sending ? 'Enviando...' : 'Enviar'}
        </Button>
      </Box>

      <Box className="checkbox_content">
        <input type="checkbox" id="terms" checked={accepted} onChange={e => setAccepted(e.target.checked)} />
        <label htmlFor="terms">
          Li e concordo com a Política de Privacidade e os Termos de Uso.
        </label>
      </Box>
      {errors.accepted && <small className="error">{errors.accepted}</small>}

      {success && (
        <div className="ok">Recebemos seus dados. Em breve entraremos em contato.</div>
      )}
    </form>
  );
}