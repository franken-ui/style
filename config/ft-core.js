import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/js/ft-core.ts',
      name: '__FT_CORE__',
      fileName: 'js/ft-core',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom/client': 'ReactDOM',
          'motion/react': 'Motion',
        },
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  esbuild: {
    legalComments: 'none',
  },
});
