import { Box } from '@mui/material';
import AppLayout from '../../AppLayout';
import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import BlogHeader from './components/BlogHeader/BlogHeader';
import BlogList from './components/BlogList/BlogList';

export default function Blog({ dados, contato }) {
  const blogList = (dados ?? []).map((item) => ({
    id: item.id,
    data: item.created_at,
    title: item.title,
    description: item.descricao,
    image: item.imagem?.permalink ?? null,
    link: item.link ?? null,
  }));

  return (
    <AppLayout contato={contato}>
      <Box className="container">
        <BlogHeader />
        <BlogList dados={blogList} />
      </Box>
    </AppLayout>
  );
}