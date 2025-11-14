import AppLayout from '../../AppLayout';
import { Box } from '@mui/material';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactForm from './components/ContactForm/ContactForm';
import { Head } from '@inertiajs/react';

export default function Contact({ contato }) {
  return (
    <AppLayout contato={contato}>
      <Head title="Cipasa - Contato" />
      <Box className="contact">
        <Box className="container">
          <ContactHeader contato={contato} />
          <ContactForm contato={contato} />
        </Box>
      </Box>
    </AppLayout>
  )
}