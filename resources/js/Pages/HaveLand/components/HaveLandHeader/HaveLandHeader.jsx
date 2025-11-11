import HeaderDescription from '../../../../components/HeaderDescription/HeaderDescription';
import HeaderPadding from '../../../../components/HeaderPadding/HeaderPadding';
import { Box } from '@mui/material';

import HeaderBanner from '../../../../components/HeaderBanner/HeaderBanner';

export default function HaveLandHeader({ dados }) {
  return (
    <Box className="have_land_header" component="section">
      <HeaderBanner
        title={<>Tenho <b>uma área</b></>}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tenho uma área' }]}
        right={<div dangerouslySetInnerHTML={{ __html: dados?.text_1 || '' }} />}
        banner={dados?.banner?.permalink || ''}
      />
    </Box>
  );
}