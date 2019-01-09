import { isNil } from 'lodash';
import { SET_PODCASTS, SET_PODCASTS_LISTENER } from './mutation-types';

export default {
  setPodcasts: ({ commit }, podcasts) => commit(SET_PODCASTS, podcasts),
  setPodcastsListener: ({ commit }, value) =>
    commit(SET_PODCASTS_LISTENER, value),
  unsubscribePodcastsListener: ({ dispatch, state }) => {
    if (isNil(state.podcastsListener)) return;
    state.podcastsListener();
    dispatch('setPodcastsListener', null);
  }
};
