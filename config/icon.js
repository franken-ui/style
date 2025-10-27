import { defineConfig } from 'vite';
import shared from './base.js';

export default defineConfig({
  build: {
    emptyOutDir: false,
    ...shared,
    lib: {
      entry: 'src/js/icon.ts',
      name: '__ICON__',
      fileName: 'js/hwc-icon',
      formats: ['iife'],
    },
  },
  esbuild: {
    legalComments: 'none',
  },
});
