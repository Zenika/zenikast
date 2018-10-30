import './registerServiceWorker';
import '@/router/router.interceptor';
import './firebase';
import 'vuetify/src/stylus/app.styl';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import misc from '@/services/miscellaneous';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.addEventListener('load', () => {
  misc.handleNetworkStatus();
});
