import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
 transformia/convert-react-code-to-modern-landing-page/2025-10-22-00-22-49
    globals: true,
    setupFiles: './vitest.setup.ts',
    coverage: {
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage'
    }
=======
    setupFiles: './vitest.setup.ts',
    css: true
 main
  }
});
