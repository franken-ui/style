import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/js/runtime.ts',
      name: '__RUNTIME__',
      fileName: 'js/frankenstyle',
      formats: ['iife'],
    },
  },
  esbuild: {
    legalComments: 'none',
    drop: ['console'],
  },
});
