import AppLayout from '../../AppLayout';
import { Box } from '@mui/material';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactForm from './components/ContactForm/ContactForm';

export default function Contact({ contato }) {
  return (
    <AppLayout contato={contato}>
      <Box className="contact">
        <Box className="container">
          <ContactHeader contato={contato} />
          <ContactForm contato={contato} />
        </Box>
      </Box>
    </AppLayout>
  )
}