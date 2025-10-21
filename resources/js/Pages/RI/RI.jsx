import { useState, useEffect } from "react";
import { Box } from '@mui/material';
import RiHeader from './RiHeader/RiHeader';
import GeneralDocuments from './GeneralDocuments/GeneralDocuments';
import ModalLogin from './ModalLogin/ModalLogin';

export default function RI() {
  const [open, setOpen] = useState(false);
  const [urlDownload, setUrlDownload] = useState('');

  useEffect(() => {
    if(!urlDownload){
      setOpen(false);
       return;
    }

    setOpen(true);
  }, [urlDownload]);

  const handeClose = () => {
    setOpen(false);
    setUrlDownload('');
  }

  return (
    <Box className="RI">
      <Box className="container">
        <RiHeader setUrlDownload={setUrlDownload} />
        <GeneralDocuments setUrlDownload={setUrlDownload} />
        <ModalLogin open={open} onClose={() => handeClose()} />
      </Box>
    </Box>
  )
}