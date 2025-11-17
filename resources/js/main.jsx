import React from 'react';
import { createInertiaApp, router } from '@inertiajs/react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import '@fontsource/montserrat/100.css'
import '@fontsource/montserrat/200.css'
import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

import './index.css';

router.on('navigate', () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
});

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
    return pages[`./Pages/${name}.jsx`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
    hydrateRoot(el, <App {...props} />);
  },
});
