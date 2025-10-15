import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/css/site.css',
        'resources/js/site.js',
        'resources/js/cp.js',
      ],
      refresh: true,
    }),
    vue(),
  ],
  build: {
    outDir: 'public/build',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
})
