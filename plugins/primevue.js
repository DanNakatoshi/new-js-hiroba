import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.component('Splitter', Splitter);
  nuxtApp.vueApp.component('SplitterPanel', SplitterPanel);
  nuxtApp.vueApp.component('TabView', TabView);
  nuxtApp.vueApp.component('TabPanel', TabPanel);
});
