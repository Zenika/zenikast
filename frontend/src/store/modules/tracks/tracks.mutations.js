import { SET_PODCASTS, SET_PODCASTS_LISTENER } from './mutation-types';

export default {
  [SET_PODCASTS]: (state, podcasts) => (state.podcastsList = podcasts),
  [SET_PODCASTS_LISTENER]: (state, value) => (state.podcastsListener = value)
};
