import './VentureContact.scss';
import { useState } from 'react';
import { Box, Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
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

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState('error');

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

  const handleToastClose = (_, reason) => {
    if (reason === 'clickaway') return;
    setToastOpen(false);
  };

  function validate() {
    const e = {};
    const msgs = [];

    if (!name.trim()) {
      e.name = 'Informe seu nome';
      msgs.push(e.name);
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      e.phone = 'Telefone inválido';
      msgs.push(e.phone);
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = 'E-mail inválido';
      msgs.push(e.email);
    }

    const cepDigits = cep.replace(/\D/g, '');
    if (cepDigits.length !== 8) {
      e.cep = 'CEP inválido';
      msgs.push(e.cep);
    }

    if (!accepted) {
      e.accepted = 'É necessário aceitar os termos';
      msgs.push(e.accepted);
    }

    setErrors(e);

    if (msgs.length) {
      setToastMessage(msgs.join('\n'));
      setToastSeverity('error');
      setToastOpen(true);
      return false;
    }

    return true;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (sending) return;

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
          setToastMessage('Não foi possível enviar seus dados. Verifique os campos e tente novamente.');
          setToastSeverity('error');
          setToastOpen(true);
          setSending(false);
        },
        onSuccess: () => {
          setSuccess(true);
          setToastMessage('Recebemos seus dados. Em breve entraremos em contato.');
          setToastSeverity('success');
          setToastOpen(true);

          setName('');
          setPhone('');
          setEmail('');
          setCep('');
          setAccepted(false);
          setErrors({});
          setSending(false);

          setTimeout(() => setSuccess(false), 4000);
        },
      }
    );
  }

  return (
    <>
      <form className="contact_form" onSubmit={handleSubmit} noValidate>
        <Box className="form_content">
          <input
            type="text"
            placeholder="NOME"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="TELEFONE"
            name="celular"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={15}
          />

          <input
            type="email"
            placeholder="EMAIL"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="SEU CEP"
            name="cep"
            value={cep}
            onChange={handleCepChange}
            maxLength={9}
          />

          <Button type="submit" disabled={sending}>
            {sending ? 'Enviando...' : 'Enviar'}
          </Button>
        </Box>

        <Box className="checkbox_content">
          <input
            type="checkbox"
            id="terms"
            checked={accepted}
            onChange={e => setAccepted(e.target.checked)}
          />
          <label htmlFor="terms">
            Li e concordo com a Política de Privacidade e os Termos de Uso.
          </label>
        </Box>

        {success && (
          <div className="ok">
            Recebemos seus dados. Em breve entraremos em contato.
          </div>
        )}
      </form>

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
    </>
  );
}
