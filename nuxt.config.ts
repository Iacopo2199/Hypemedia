// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  runtimeConfig: {
    openaiApiKey: process.env.VUE_APP_OPENAI_API_KEY || 'defaultApiKey'
  },
  devtools: { enabled: true },
  css: ['assets/css/general.css']
  // Additional Nuxt configuration options
})