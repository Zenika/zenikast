import {
  SET_NEW_CONTENT_AVAILABLE,
  SET_NETWORK_ONLINE,
  SET_SCREEN_ORIENTATION
} from './config.mutations';

export default {
  setNewContentAvailable: ({ commit }, value) =>
    commit(SET_NEW_CONTENT_AVAILABLE, value),
  reloadApp: () => window.location.reload(),
  setNetworkOnLine: ({ commit }, value) => commit(SET_NETWORK_ONLINE, value),
  setScreenOrientation: ({ commit }, value) =>
    commit(SET_SCREEN_ORIENTATION, value)
};
