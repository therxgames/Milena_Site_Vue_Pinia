import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'pathe'

export default defineNuxtConfig({
  devtools: {
    enabled: false
  },

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/image'],

  css: ['@/assets/css/main.scss'],

  nitro: {
    devProxy: {
      '/api': {
        target: `${process.env.API_BASE_URL}/api`,
        changeOrigin: true,
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL,
    },
  },

  alias: {
    '@views': resolve(__dirname, 'components/views'),
    '@ui': resolve(__dirname, 'components/ui'),
    '@config': resolve(__dirname, 'config'),
    '@app-types': resolve(__dirname, 'types'),
  },

  compatibilityDate: '2025-02-15',
});
