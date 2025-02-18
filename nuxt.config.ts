// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false,

  css: [
    '~/assets/css/blog.css',
    '~/assets/css/style.css',
    'bootstrap/dist/css/bootstrap.min.css',
  ],

  runtimeConfig: {
    public: {
      baseURL: 'https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/',
    },
  },

  hooks: {
    'prerender:routes'({ routes }) {
      routes.clear(); // Do not generate any routes (except the defaults)
    },
  },

  router: {
    options: {
      hashMode: true,
    },
  },

  modules: ['@nuxt/eslint'],
});
