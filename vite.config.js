import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.JPG'], // Add this line to handle .JPG files
  plugins: [react()],
  base: './',
})
