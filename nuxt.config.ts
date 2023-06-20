// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss','nuxt-icon', '@element-plus/nuxt'],
  css: [
    '/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/scss/global.scss'
  ],
  routeRules: {
    '/github': { redirect: 'https://github.com/hexafoldtech' },
},

})
