import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const projectRoot = new URL('.', import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@services': path.resolve(projectRoot, 'src/services'),
      '@components': path.resolve(projectRoot, 'src/components'),
      '@utils': path.resolve(projectRoot, 'src/utils'),
      // Ajoute d'autres alias si nécessaire
    }
  }
})
