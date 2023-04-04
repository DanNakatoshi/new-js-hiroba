export default defineNuxtConfig({
  modules: [
    'nuxt-monaco-editor'
  ],

  css:[
    'primevue/resources/themes/vela-green/theme.css', 
    // 'primevue/resources/themes/arya-green/theme.css', //Dark
    // 'primevue/resources/themes/saga-green/theme.css', 
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
    '~/assets/css/global.css', 
    '~/assets/css/reset.css', 
    '~/assets/css/primeflex.css', 
  ],
  build: {
    transpile: ['primevue']
  }
})