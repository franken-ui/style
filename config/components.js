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
      external: ['lit', 'animejs', 'lucide', 'apexcharts', '@floating-ui/dom'],
      output: {
        globals: {
          lit: 'Lit',
          'lit/decorators.js': 'LitDecorators',
          'lit/directives/repeat.js': 'LitRepeat',
          'lit/directives/unsafe-html.js': 'LitUnsafeHTML',
          lucide: 'Lucide',
          apexcharts: 'ApexCharts',
          animejs: 'AnimeJS',
          '@floating-ui/dom': 'FloatingUI',
        },
      },
    },
  },
  esbuild: {
    legalComments: 'none',
  },
});
