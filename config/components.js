import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/js/components.ts',
      name: '__COMPONENTS__',
      fileName: 'js/hwc-components',
      formats: ['iife'],
    },
    rollupOptions: {
      external: ['lit', 'lucide', 'apexcharts'],
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
