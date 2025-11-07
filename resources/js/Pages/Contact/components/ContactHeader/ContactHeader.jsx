import './ContactHeader.scss';
import { Box, Button } from '@mui/material';
import { Link } from '@inertiajs/react';
import HeaderBanner from './../../../../components/HeaderBanner/HeaderBanner';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function ContactHeader(){
  return (
    <Box className="contact_header" component="section">
      <Box className="content">
        <HeaderBanner
          title={<>Fale <b>Conosco</b></>}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Fale Conosco' }
          ]}
          right={
            <Box className="right_content">
              <Box className="phone_content">
                <Box className="item">
                  <Box className="icon">
                    <LocalPhoneIcon />
                  </Box>
                  <Box className="text_content">
                    <h4>São Paulo</h4>
                    <p>(11) 4195-9000</p>
                  </Box>
                </Box>
                <Box className="item">
                  <Box className="icon">
                    <LocalPhoneIcon />
                  </Box>
                  <Box className="text_content">
                    <h4>Goiânia</h4>
                    <p>(11) 4195-9000</p>
                  </Box>
                </Box>
              </Box>
              
              <Box className="social">
                <h4>Redes sociais</h4>
                <Box>
                  <Button component={Link} target="_blank" href="/sobre"><FacebookRoundedIcon /></Button>
                  <Button component={Link} target="_blank" href="/servicos"><InstagramIcon /></Button>
                  <Button component={Link} target="_blank" href="/contato"><LinkedInIcon /></Button>
                </Box>
              </Box>

              <Box className="email">
                <Box className="icon">
                  <AlternateEmailIcon />
                </Box>
                <Box className="text_content">
                  <h4>Email</h4>
                  <p>contato@cipasa.com.br</p>
                </Box>
              </Box>

              <Box className="addres">
                <h4>Endereço</h4>
                <p>Edifício Ministro Jesuíno Cardoso, Rua Ministro Jesuíno Cardoso, 633, 10º andar, Sala 102, Vila Olímpia, São Paulo/SP - CEP: 04544-051</p>
              </Box>
            </Box>
          }
        />
      </Box>
    </Box>
  )
}
