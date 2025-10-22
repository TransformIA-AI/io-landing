import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  plugins: [react()],
  base: isPages ? '/io-landing/' : '/',
  server: {
    port: 5173,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  }
});
