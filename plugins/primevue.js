import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';

// import TabView from 'primevue/tabview';
// import TabPanel from 'primevue/tabpanel';

// import Editor from 'primevue/editor';
import Sidebar from 'primevue/sidebar';


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component('Button', Button);
  // nuxtApp.vueApp.component('TabView', TabView);
  // nuxtApp.vueApp.component('TabPanel', TabPanel);
  // nuxtApp.vueApp.component('Editor', Editor);
  nuxtApp.vueApp.component('Sidebar', Sidebar);


});
