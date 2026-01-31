import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/js/core.ts',
      name: '__CORE__',
      fileName: 'js/hwc-core',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        globals: {
          lit: 'Lit',
          'lit/decorators.js': 'LitDecorators',
          'lit/directives/repeat.js': 'LitRepeat',
          'lit/directives/unsafe-html.js': 'LitUnsafeHTML',
          lucide: 'Lucide',
          apexcharts: 'ApexCharts',
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
