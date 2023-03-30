export default defineNuxtConfig({
  modules: [
    'nuxt-monaco-editor'
  ],
  css:[
    'primevue/resources/themes/saga-blue/theme.css', //テーマカラーは色々あります。
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
    // '/node_modules/primeflex/primeflex.css', //Flexをインストールした場合
  ],
  build: {
    transpile: ['primevue']
  }
})