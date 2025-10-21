import { Box } from '@mui/material';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactForm from './components/ContactForm/ContactForm';

export default function Contact() {
  return (
    <Box className="contact">
      <Box className="container">
        <ContactHeader />
        <ContactForm />
      </Box>
    </Box>
  )
}