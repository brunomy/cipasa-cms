import AppLayout from '../../AppLayout';
import { Box } from '@mui/material';
import { usePage, Head } from '@inertiajs/react';
import AboutHeader from './components/AboutHeader/AboutHeader';
import AboutData from './components/AboutData/AboutData';
import MissionVisionValues from './components/MissionVisionValues/MissionVisionValues';
import AboutVentures from './components/AboutVentures/AboutVentures';
import Sustainability from './components/Sustainability/Sustainability';

function AboutUs({ dados, seo }) {
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
        <AboutHeader sobre={dados} />
        <AboutData sobre={dados} />
        <MissionVisionValues sobre={dados} />
        <AboutVentures sobre={dados} />
        <Sustainability sobre={dados} />
      </Box>
    </>
  );
}

AboutUs.layout = (page) => <AppLayout>{page}</AppLayout>;

export default AboutUs;