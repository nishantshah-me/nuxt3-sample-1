// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','nuxt-icon'],
  css: [
    '/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  routeRules: {
    '/github': { redirect: 'https://github.com/hexafoldtech' },
},

})
