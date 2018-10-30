import { SET_PODCASTS } from './mutation-types';

export default {
  [SET_PODCASTS]: (state, podcasts) => (state.podcastsList = podcasts)
};
