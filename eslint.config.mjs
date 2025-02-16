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

// import globals from 'globals';
// import pluginJs from '@eslint/js';
// import pluginNuxt from 'eslint-plugin-nuxt';
// import pluginVue from 'eslint-plugin-vue';
// import eslintConfigPrettier from 'eslint-config-prettier';
// import pluginPrettier from 'eslint-plugin-prettier';

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   // { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
//   // { languageOptions: { globals: globals.browser } },
//   // pluginJs.configs.recommended,
//   // ...tseslint.configs.recommended,
//   // ...pluginVue.configs['flat/essential'],
//   // {
//   //   files: ['**/*.vue'],
//   //   languageOptions: { parserOptions: { parser: 'typescript-eslint-parser' } },
//   // },
//   // {
//   //   plugins: {
//   //     pluginPrettier,
//   //   },
//   //   rules: {
//   //     'prettier/prettier': ['warn', { endOfLine: 'auto' }],
//   //     'vue/multi-word-component-names': 'off',
//   //     'no-undef': 'off',
//   //   },
//   // },
//   // prettier,
//   {
//     plugins: {
//       nuxt: pluginNuxt,
//       vue: pluginVue,
//       prettier: pluginPrettier,
//     },
//   },
//   {
//     ignores: [
//       '**/node_modules/**',
//       '**/.nuxt/**',
//       '**/dist/**',
//       '**/.output/**',
//       '**/.github/**',
//     ],
//   },
//   pluginJs.configs.recommended,
//   {
//     languageOptions: {
//       globals: { ...globals.browser, ...globals.node, ...globals.es2021 },
//       parserOptions: { parser: pluginNuxt },
//     },
//   },
//   {
//     files: ['**/*.{js,ts,vue}'],
//     rules: {
//       'prettier/prettier': ['warn', { endOfLine: 'auto' }],
//       'vue/multi-word-component-names': 'off',
//       'no-undef': 'off',
//     },
//   },
//   eslintConfigPrettier,
// ];
