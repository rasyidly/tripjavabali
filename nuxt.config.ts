// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/content', '@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-16',

  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US', dir: 'ltr' },
      { code: 'id', name: 'Indonesian', language: 'id-ID', dir: 'ltr' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
  }
})