import './HeaderBanner.scss';
import { Box } from '@mui/material';
import HeaderPadding from '../HeaderPadding/HeaderPadding';
import HeaderDescription from '../HeaderDescription/HeaderDescription';

export default function HeaderBanner({ title, breadcrumbs, right, banner }) {
  return (
    <Box className="header_banner">
      <HeaderPadding >
        <Box className="content">
          <HeaderDescription
            title={title}
            breadcrumbs={breadcrumbs}
            right={right}
          />
        </Box>
        { banner &&
          <Box className="banner">
            <Box className="image">
              <img src={banner} />
            </Box>
          </Box>
        }
      </HeaderPadding>
    </Box>
  );
}