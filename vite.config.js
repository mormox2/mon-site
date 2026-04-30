import { defineConfig } from 'vite'

export default defineConfig({
  base: '/mon-site/',
  
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // point d'entrée explicite
    },
  },

  server: {
    open: true, // ouvre le navigateur automatiquement en dev
  },
})