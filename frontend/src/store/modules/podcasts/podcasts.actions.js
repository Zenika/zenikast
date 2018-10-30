import { SET_PODCASTS } from './mutation-types';

export default {
  setPodcasts: ({ commit }, podcasts) => commit(SET_PODCASTS, podcasts)
};
