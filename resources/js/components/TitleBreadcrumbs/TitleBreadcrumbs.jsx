import './TitleBreadcrumbs.scss';
import { Box, Button } from '@mui/material';
import { Link } from '@inertiajs/react';

export default function TitleBreadcrumbs({ title, breadcrumbs }) {
  return (
    <Box className="title_breadcrumbs">
      <h1>{title}</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className={`breadcrumb-item${crumb.href ? '' : ' disabled'}`}>
              {!crumb.href ? (
                crumb.label
              ) : (
                <Button component={Link} href={crumb.href}>{crumb.label}</Button>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </Box>
  );
}