import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({

  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    minify: false, 
    sourcemap: true, 
    rollupOptions: {
      output: {
    
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
  server: {
    port: 5173
  }
})
