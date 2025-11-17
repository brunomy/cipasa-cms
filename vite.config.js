// vite.config.js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

// IMPORTANTE: importe o path da stdlib do Node (ESM)
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// polyfill de __dirname em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/main.jsx', 'resources/js/cp.js', 'resources/css/cp.css'],
      ssr: 'resources/js/ssr.jsx',
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),
      '@css': path.resolve(__dirname, 'resources/css'),
    },
  },
});
