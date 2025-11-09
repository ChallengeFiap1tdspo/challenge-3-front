import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/', 
  plugins: [
    react(),       
    tailwindcss()  
  ],
  build: {
    outDir: 'dist',       
    emptyOutDir: true,   
    sourcemap: false,   
    rollupOptions: {
      output: {
        manualChunks(id) {
      
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  server: {
    port: 5173,      
    open: true,        
    strictPort: true  
  },
  resolve: {
    alias: {
      '@': '/src'      
    }
  }
});
