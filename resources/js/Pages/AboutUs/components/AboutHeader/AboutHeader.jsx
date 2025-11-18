import TitleBreadcrumbs from '../../../../components/TitleBreadcrumbs/TitleBreadcrumbs';
import { Butterfly1, Butterfly2 } from '../../../Home/components/BannerCarousel/BannerCarousel';
import { Box } from '@mui/material';

import HeaderDescription from '../../../../components/HeaderDescription/HeaderDescription';
import HeaderPadding from '../../../../components/HeaderPadding/HeaderPadding';
import HeaderBanner from '../../../../components/HeaderBanner/HeaderBanner';
import { decodeBasic } from '../../../../Util';

export default function AboutHeader({ sobre }) {
  return (
    <Box className="about_header" component="section">
      <HeaderBanner
        title={<>Nossa <b>História</b></>}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Sobre nós' }]}
        right={<div dangerouslySetInnerHTML={{ __html: decodeBasic(sobre?.text_1 || '') }} />}
        banner={sobre?.banner_1?.permalink}
      />
    </Box>
  );
}