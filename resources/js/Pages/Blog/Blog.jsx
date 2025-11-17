import { Box } from '@mui/material';
import AppLayout from '../../AppLayout';
import { useEffect, useState } from 'react';
import { usePage, Head } from '@inertiajs/react';
import BlogHeader from './components/BlogHeader/BlogHeader';
import BlogList from './components/BlogList/BlogList';

function Blog({ dados, seo }) {
  const blogList = (dados ?? []).map((item) => ({
    id: item.id,
    data: item.created_at,
    title: item.title,
    description: item.descricao,
    image: item.imagem?.permalink ?? null,
    link: item.link ?? null,
  }));

  const title       = seo?.meta_title || 'Cipasa Urbanismo';
  const description = seo?.breve_descricao || '';
  const keywords    = Array.isArray(seo?.keywords) ? seo.keywords.join(', ') : '';
  const robots      = seo?.meta_robots || 'index,follow';
  const ogImageUrl  = seo?.og_image?.permalink || seo?.og_image?.url || seo?.og_image?.path
  const canonical   = seo?.canonical || seo?.url || null;
  const url         = seo?.url || canonical || null;

  return (
    <>
      <Head title={title}>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        {robots && <meta name="robots" content={robots} />}
        {canonical && <link rel="canonical" href={canonical} />}
        <meta property="og:type" content="website" />
        {url && <meta property="og:url" content={url} />}
        <meta property="og:title" content={title} />
        {description && <meta property="og:description" content={description} />}
        {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        {description && <meta name="twitter:description" content={description} />}
        {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}

        {seo?.scripts && (
          <script
            dangerouslySetInnerHTML={{ __html: seo.scripts?.code }}
          />
        )}
      </Head>
      <Box className="container">
        <BlogHeader />
        <BlogList dados={blogList} />
      </Box>
    </>
  );
}

Blog.layout = (page) => <AppLayout>{page}</AppLayout>;

export default Blog;