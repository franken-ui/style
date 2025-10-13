export default {
  rollupOptions: {
    external: [
      'lit',
      'lit/decorators.js',
      'lit/directives/repeat.js',
      'lit/directives/unsafe-html.js',
    ],
    output: {
      globals: {
        lit: 'Lit',
        'lit/decorators.js': 'LitDecorators',
        'lit/directives/repeat.js': 'LitRepeat',
        'lit/directives/unsafe-html.js': 'LitUnsafeHTML',
        lucide: 'Lucide',
        ApexCharts: 'ApexCharts',
      },
    },
  },
};
