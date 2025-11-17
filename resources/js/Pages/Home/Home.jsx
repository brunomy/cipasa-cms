import AppLayout from '../../AppLayout';
import { Box } from '@mui/material';
import { usePage, Head } from '@inertiajs/react';
import BannerCarousel from './components/BannerCarousel/BannerCarousel';
import Blog from './components/Blog/Blog';
import ContactBanner from './components/ContactBanner/ContactBanner';
import Highlights from './components/Highlights/Highlights';
import InfoData from './components/InfoData/InfoData';
import Projects from './components/Projects/Projects';
import ProjectsMap from './components/ProjectsMap/ProjectsMap';
import Ventures from './components/Ventures/Ventures';

function Home({ banners, info, list_1, list_2, states, construtoras, blog, seo }) {
  const title       = seo?.meta_title || 'Cipasa Urbanismo';
  const description = seo?.breve_descricao || '';
  const keywords    = Array.isArray(seo?.keywords) ? seo.keywords.join(', ') : '';
  const robots      = seo?.meta_robots || 'index,follow';
  const ogImageUrl  = seo?.og_image?.permalink || seo?.og_image?.url || seo?.og_image?.path;
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
      <h1 style={{ display: 'none' }}>{title}</h1>
      <Box className="container">
        <BannerCarousel banners={banners} />
        <InfoData info={info} />
        <Highlights list={list_1} />
        <ProjectsMap states={states} />
        <Projects list={construtoras} />
        <Ventures list={list_2} construtoras={construtoras} />
        <ContactBanner />
        <Blog blog={blog} />
      </Box>
    </>
  );
}

Home.layout = (page) => <AppLayout>{page}</AppLayout>;

export default Home;