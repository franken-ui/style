import { defineConfig } from 'vite';
import shared from './base.js';

export default defineConfig({
  build: {
    emptyOutDir: false,
    ...shared,
    lib: {
      entry: 'src/js/chart.ts',
      name: '__CHART__',
      fileName: 'js/hwc-chart',
      formats: ['iife'],
    },
  },
  esbuild: {
    legalComments: 'none',
  },
});
