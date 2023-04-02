export default defineNuxtConfig({
  modules: [
    'nuxt-monaco-editor'
  ],

  css:[
    'primevue/resources/themes/saga-blue/theme.css', //テーマカラーは色々あります。
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
    '~/assets/css/reset.css', //Custom Prime Flex
    '~/assets/css/primeflex.css', //Custom Prime Flex
  ],
  build: {
    transpile: ['primevue']
  }
})