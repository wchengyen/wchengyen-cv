import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// `base` is set to '/wchengyen-cv/' for GitHub Pages project-site deploys.
// When self-hosting (custom domain or user site), change to '/' or ''.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/wchengyen-cv/',
  build: {
    target: 'es2022',
    cssCodeSplit: true,
  },
})
