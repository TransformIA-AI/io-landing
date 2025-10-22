import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

 transformia/convert-react-code-to-modern-landing-page/2025-10-22-00-22-49
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
=======
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  preview: {
    port: 4173
 main
  }
});
