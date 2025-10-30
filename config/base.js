export default {
  rollupOptions: {
    external: [
      'lit',
      'lit/decorators.js',
      'lit/directives/repeat.js',
      'lit/directives/unsafe-html.js',
      'animejs',
      '@floating-ui/dom',
    ],
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
};
