import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@interfaces': '/src/interfaces',
      '@store': '/src/store',
      '@routes': '/src/routes',
      '@utils': '/src/utils',
    },
  },
});
