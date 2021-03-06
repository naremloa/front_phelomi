import Vue from 'vue';
import './plugins/vuetify';
import './plugins/vueLazyload';
import App from './App.vue';
import router from './router';
import store from './store';
// import './registerServiceWorker';
// import
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import '@/theme/index.styl';

import './permission';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
}).$mount('#app');
