import AppLayout from '../../AppLayout';
import { Box } from '@mui/material';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactForm from './components/ContactForm/ContactForm';
import { Head } from '@inertiajs/react';

function Contact({ contato }) {
  return (
    <>
      <Head title="Cipasa - Contato" />
      <Box className="contact">
        <Box className="container">
          <ContactHeader contato={contato} />
          <ContactForm contato={contato} />
        </Box>
      </Box>
    </>
  )
}

Contact.layout = (page) => <AppLayout>{page}</AppLayout>;

export default Contact;