import { isNil } from 'lodash';
import { SET_TRACKS, SET_TRACKS_LISTENER } from './mutation-types';

export default {
  setTracks: ({ commit }, tracks) => commit(SET_TRACKS, tracks),
  setTracksListener: ({ commit }, value) => commit(SET_TRACKS_LISTENER, value),
  unsubscribeTracksListener: ({ dispatch, state }) => {
    if (isNil(state.tracksListener)) return;
    state.tracksListener();
    dispatch('setTracksListener', null);
  }
};
