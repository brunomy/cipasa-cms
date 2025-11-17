import { Box } from '@mui/material';
import AppLayout from '../../AppLayout';
import { useEffect, useState } from 'react';
import { usePage, Head } from '@inertiajs/react';

import Blog from '../Home/components/Blog/Blog';
import VenturesHeader from './components/VenturesHeader/VenturesHeader';
import VenturesList from './components/VenturesList/VenturesList';

function Ventures({ dados, construtoras, states, blog, currentFilters, seo }) {
  const title       = seo?.meta_title || 'Cipasa Urbanismo';
  const description = seo?.breve_descricao || '';
  const keywords    = Array.isArray(seo?.keywords) ? seo.keywords.join(', ') : '';
  const robots      = seo?.meta_robots || 'index,follow';
  const ogImageUrl  = seo?.og_image?.permalink || seo?.og_image?.url || seo?.og_image?.path
  const canonical   = seo?.canonical || seo?.url || null;
  const url         = seo?.url || canonical || null;

  const [data, setData] = useState({
    ventures: dados.filter(v => v.published === true) ?? [],
    construtoras: construtoras ?? [],
  });

  useEffect(() => {
    setData({
      ventures: dados ?? [],
      construtoras: construtoras ?? [],
    });
  }, [dados, construtoras]);

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
        <VenturesHeader
          ventures={data.ventures}
          states={states}
          setData={setData}
          currentFilters={currentFilters}
        />
        <VenturesList
          ventures={data.ventures}
          construtoras={data.construtoras}
        />
        <Blog blog={blog} />
      </Box>
    </>
  );
}

Ventures.layout = (page) => <AppLayout>{page}</AppLayout>;

export default Ventures;