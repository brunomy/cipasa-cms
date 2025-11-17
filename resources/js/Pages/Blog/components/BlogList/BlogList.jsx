import './BlogList.scss';
import { Box, Button, Pagination } from '@mui/material';
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

import category from './icons/category.svg';
import meters from './icons/meters.svg';
import location from './icons/location.svg';
import buttonArrow from './icons/button_arrow.svg';
import Blog from '../../Blog';
import { BlogItem } from '../../../Home/components/Blog/Blog';

export default function BlogList({ dados }) {
  const [page, setPage] = useState(1);
  const itensPerPage = 9;
  const handleChange = (event, value) => {
    setPage(value);
  };

  const dadosPage = () => {
    const start = (page - 1) * itensPerPage;
    const end = start + itensPerPage;
    return dados?.slice(start, end);
  }

  useEffect(() => {
    window?.scrollTo(0, 0);
  }, [page]);

  return (
    <Box className="blog_list" component="section">
      <Box className="content">
        <Box className="list_content">
          {dadosPage()?.map((item, index) => <Box className="blog_item"><BlogItem item={item} key={index} /></Box> )}
        </Box>
        <Box className="pagination_content">
          <Pagination count={Math.ceil(dados?.length / itensPerPage)} page={page} onChange={handleChange} shape="rounded" />
        </Box>
      </Box>
    </Box>
  )
}