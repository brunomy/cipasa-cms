import { Box } from '@mui/material';
import AppLayout from '../../AppLayout';
import { useEffect, useState } from 'react';
import { usePage, Head } from '@inertiajs/react';
import BlogHeader from './components/BlogHeader/BlogHeader';
import BlogList from './components/BlogList/BlogList';

function Blog({ dados }) {
  const blogList = (dados ?? []).map((item) => ({
    id: item.id,
    data: item.created_at,
    title: item.title,
    description: item.descricao,
    image: item.imagem?.permalink ?? null,
    link: item.link ?? null,
  }));

  return (
    <>
      <Head title="Cipasa - Blog" />
      <Box className="container">
        <BlogHeader />
        <BlogList dados={blogList} />
      </Box>
    </>
  );
}

Blog.layout = (page) => <AppLayout>{page}</AppLayout>;

export default Blog;