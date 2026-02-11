import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Set output directory
    minify: 'terser', // Use Terser for minification
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Custom chunking
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  define: {
    'process.env': {
      NODE_ENV: process.env.NODE_ENV || 'development'
    },
  },
});
