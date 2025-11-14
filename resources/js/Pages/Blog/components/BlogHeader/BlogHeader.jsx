import './VenturesHeader.scss';
import { useState, useRef, useMemo, useEffect } from 'react';
import { Box, Button, TextField, Autocomplete } from '@mui/material';
import { router } from '@inertiajs/react';
import TitleBreadcrumbs from '../../../../components/TitleBreadcrumbs/TitleBreadcrumbs';
import HeaderPadding from '../../../../components/HeaderPadding/HeaderPadding';

function useDebouncedEffect(fn, deps, delay = 300) {
  useEffect(() => {
    const id = setTimeout(fn, delay);
    return () => clearTimeout(id);
  }, [...deps, delay]);
}

export default function BlogHeader() {
  return (
    <Box className="ventures_header" component="section">
      <HeaderPadding>
        <Box className="content">
          <Box className="left">
            <TitleBreadcrumbs
              title={<><b>Cipasa</b> na mídia</>}
              breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
            />
          </Box>
        </Box>
      </HeaderPadding>
    </Box>
  );
}