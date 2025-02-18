import withNuxt from './.nuxt/eslint.config.mjs';
import ESLintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default withNuxt(
  { files: ['**/*.{js,ts,vue}'] },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-undef': 'off',
    },
  },
  ESLintConfigPrettier,
  { plugins: { prettier: prettierPlugin } },
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
