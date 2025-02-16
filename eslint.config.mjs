import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  { files: ['**/*.{js,ts,vue}'] },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-undef': 'off',
    },
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/.nuxt/**',
      '**/dist/**',
      '**/.output/**',
      '**/.github/**',
    ],
  }
);
