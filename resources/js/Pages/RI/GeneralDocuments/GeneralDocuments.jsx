import './GeneralDocuments.scss';
import { Box, Button } from '@mui/material';

export default function GeneralDocuments({ setUrlDownload }) {
  const documents = [
    {
      title: '06/novembro/2018',
      desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".',
      link: 'https://link.com'
    },
    { title: '06/novembro/2018', desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: 'https://link.com' },
    { title: '06/novembro/2018', desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: 'https://link.com' },
    { title: '06/novembro/2018', desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: 'https://link.com' },
    { title: '06/novembro/2018', desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: 'https://link.com' },
    { title: '06/novembro/2018', desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: 'https://link.com' },
    { title: '06/novembro/2018', desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: 'https://link.com' },
    { title: '06/novembro/2018', desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: 'https://link.com' },
    { title: '06/novembro/2018', desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: 'https://link.com' },
    { title: '06/novembro/2018', desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: 'https://link.com' },
    { title: '06/novembro/2018', desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: 'https://link.com' },
  ]

  return (
    <Box className="general_documents">
      <Box className="content">
        <h2>Documentos <b>Gerais</b></h2>
        <Box className="document_list">
          {documents.map((doc, index) => (
            <DocumentItem key={index} {...doc} setUrlDownload={setUrlDownload} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function DocumentItem({ title, desc, link, setUrlDownload }) {
  return (
    <Button className="document_item" onClick={() => setUrlDownload(link)}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </Button>
  );
}
