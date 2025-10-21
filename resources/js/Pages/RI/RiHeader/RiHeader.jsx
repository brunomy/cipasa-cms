import './RiHeader.scss';
import { Box, TextField, Autocomplete } from '@mui/material';
import HeaderBanner from '../../../components/HeaderBanner/HeaderBanner';

export default function RiHeader({ setUrlDownload }) {
  const years = [
    { label: '2025', id: 5, url: 'https://example.com/2025' },
    { label: '2024', id: 4, url: 'https://example.com/2024' },
    { label: '2023', id: 3, url: 'https://example.com/2023' },
    { label: '2022', id: 2, url: 'https://example.com/2022' },
    { label: '2021', id: 1, url: 'https://example.com/2021' },
    { label: '2020', id: 0, url: 'https://example.com/2020' },
  ];

  return (
    <Box className="ri_header" component="section">
      <HeaderBanner
        title={<>Cipasa <b>Investidores</b></>}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cipasa Investidores' }
        ]}
        right={
          <>
            <p style={{ marginBottom: '10px' }}><b>Demonstrativo Financeiro:</b></p>
            <Autocomplete
              sx={{ maxWidth: '450px' }}
              disablePortal
              options={years}
              onChange={(event, newValue) => {
                if (newValue && newValue.url) {
                  setUrlDownload(newValue.url);
                } else {
                  setUrlDownload(null);
                }
              }}
              renderInput={(params) => (
                <TextField {...params} label="Selecione o ano" />
              )}
            />
          </>
        }
      />
    </Box>
  );
}
