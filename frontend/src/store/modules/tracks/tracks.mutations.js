import { SET_TRACKS, SET_TRACKS_LISTENER } from './mutation-types';

export default {
  [SET_TRACKS]: (state, tracks) => (state.trackList = tracks),
  [SET_TRACKS_LISTENER]: (state, value) => (state.tracksListener = value)
};
