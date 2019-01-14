import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './modules/authentication';
import config from './modules/config';
import tracks from './modules/tracks';
import misc from './modules/misc';

Vue.use(Vuex);

export const storeConfig = {
  modules: {
    authentication,
    tracks,
    config,
    misc
  }
};

export default new Vuex.Store(storeConfig);
