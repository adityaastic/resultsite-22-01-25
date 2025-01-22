// // vite.config.ts
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: '/', // Adjust this if deploying in a subdirectory
// });



import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative paths
  build: {
    outDir: 'dist', // Output directory
  },
});
