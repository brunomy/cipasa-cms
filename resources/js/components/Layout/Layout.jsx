import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Layout.scss';
import { Box } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';

export default function Layout({ children }) {
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const updateHeights = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updateHeights();
    });

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }
    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }

    updateHeights();

    window.addEventListener('resize', updateHeights);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeights);
    };
  }, []);

  return (
    <Box className="layout">
      <Header ref={headerRef} />
      <Box className="layout_content" sx={{ minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)` }}>
        {children}
      </Box>
      <Footer ref={footerRef} />
    </Box>
  );
}