import './registerServiceWorker';
import './firebase';
import 'vuetify/src/stylus/app.styl';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import misc from '@/services/miscellaneous';
import Vuetify from 'vuetify/lib';
import VueAnalytics from 'vue-analytics';

import { bindPodcasts } from './firebase/podcasts';

Vue.use(Vuetify);

if (process.env.NODE_ENV === 'production') {
  Vue.use(VueAnalytics, {
    id: 'UA-126886254-2',
    router
  });
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.addEventListener('load', () => {
  misc.handleNetworkStatus();
  store.dispatch('podcasts/setPodcastsListener', bindPodcasts());
});
