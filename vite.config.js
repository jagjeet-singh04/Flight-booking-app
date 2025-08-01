import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss() , 
    react()],
    resolve: {
       extensions: ['.js', '.jsx', '.ts', '.tsx'], // add .jsx if not there
    alias: {
       '@': '/src'
    }
  }, 
  build: {
    rollupOptions: {
      external: [
        /^node:.*/,
      ]
    }
  }
});
