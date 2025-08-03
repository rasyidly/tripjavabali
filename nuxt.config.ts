// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/content', '@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-16',

  i18n: {
    locales: [
      { code: 'id', name: 'Indonesian', language: 'id-ID', dir: 'ltr', file: 'id.json' },
      { code: 'en', name: 'English', language: 'en-US', dir: 'ltr', file: 'en.json' },
    ],
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    defaultLocale: 'id',
  }
})