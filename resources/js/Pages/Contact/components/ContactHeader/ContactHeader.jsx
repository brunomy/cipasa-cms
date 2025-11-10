import './ContactHeader.scss';
import { Box, Button } from '@mui/material';
import { Link } from '@inertiajs/react';
import HeaderBanner from './../../../../components/HeaderBanner/HeaderBanner';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function ContactHeader({ contato }){
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
                { contato?.telefone_goiania &&
                  <Box className="item">
                    <Box className="icon">
                      <LocalPhoneIcon />
                    </Box>
                    <Box className="text_content">
                      <h4>São Paulo</h4>
                      <p>{contato?.telefone_sao_paulo}</p>
                    </Box>
                  </Box>
                }
                { contato?.telefone_goiania &&
                  <Box className="item">
                    <Box className="icon">
                      <LocalPhoneIcon />
                    </Box>
                    <Box className="text_content">
                      <h4>Goiânia</h4>
                      <p>{contato?.telefone_goiania}</p>
                    </Box>
                  </Box>
                }
              </Box>

              { (contato?.facebook || contato?.instagram || contato?.linkedin) &&
                <Box className="social">
                  <h4>Redes sociais</h4>
                  <Box>
                    { contato?.facebook &&
                      <Button component={"a"} target="_blank" href={contato?.facebook}><FacebookRoundedIcon /></Button>
                    }
                    { contato?.instagram &&
                      <Button component={"a"} target="_blank" href={contato?.instagram}><InstagramIcon /></Button>
                    }
                    { contato?.linkedin &&
                      <Button component={"a"} target="_blank" href={contato?.linkedin}><LinkedInIcon /></Button>
                    }
                  </Box>
                </Box>
              }

              { contato?.e_mail &&
                <Box className="email">
                  <Box className="icon">
                    <AlternateEmailIcon />
                  </Box>
                  <Box className="text_content">
                    <h4>Email</h4>
                    <p>{contato?.e_mail}</p>
                  </Box>
                </Box>
              }

              <Box className="addres">
                <h4>Endereço</h4>
                <p>{contato?.rua}, {contato?.numero}, {contato?.complemento}, {contato?.bairro}, {contato?.cidade}/{contato?.estado?.value} - CEP: {contato?.cep}</p>
              </Box>
            </Box>
          }
        />
      </Box>
    </Box>
  )
}
