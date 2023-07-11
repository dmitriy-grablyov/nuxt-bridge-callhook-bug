import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
bridge: {

    // -- Opt-in features --

    // Use Vite as the bundler instead of webpack 4
    vite: true,

    // Enable Nuxt 3 compatible useHead
    meta: false,

    // -- Default features --

    // Use legacy server instead of Nitro
    nitro: true,

    // (!) Disable Nuxt 3 compatible `nuxtApp` interface
    app: true,

    // Disable Composition API support
    capi: false,

    // ... or just disable legacy Composition API support
    // capi: {
    //   legacy: false
    // },

    // Do not transpile modules
    transpile: true,

    // Disable <script setup> support
    scriptSetup: false,

    // Disable composables auto importing
    imports: false,

    // Do not warn about module incompatibilities
    constraints: false,

    // (!) Disable typescript support
    typescript: false,
  },
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-bug',
    title: 'nuxt-bug',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],



});
