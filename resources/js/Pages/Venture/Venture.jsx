import { Box } from '@mui/material';
import { usePage, Head } from '@inertiajs/react';

import AppLayout from '../../AppLayout';

import VentureHeader from './components/VentureHeader/VentureHeader';
import VentureInfo from './components/VentureInfo/VentureInfo';
import VentureGalery from './components/VentureGalery/VentureGalery';
import VentureDifferences from './components/VentureDifferences/VentureDifferences';
import VentureStatus from './components/VentureStatus/VentureStatus';
import VentureContact from './components/VentureContact/VentureContact';
import VentureMap from './components/VentureMap/VentureMap';

function Venture({ dados, related, categoriesDif, seo }) {
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
        <VentureHeader venture={dados} />
        <VentureInfo venture={dados} />
        <VentureGalery venture={dados} />
        <VentureDifferences venture={dados} categoriesDif={categoriesDif} />
        <VentureStatus venture={dados} />
        <VentureMap position={[dados.latitude, dados.longitude]} />
        <VentureContact venture={dados} related={related} />
      </Box>
    </>
  );
}

Venture.layout = (page) => <AppLayout>{page}</AppLayout>;

export default Venture;