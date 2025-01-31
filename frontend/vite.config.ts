import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/miniature-website/',
  server: {
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
});
