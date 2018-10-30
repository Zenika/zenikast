export const SET_NEW_CONTENT_AVAILABLE = 'SET NEW CONTENT AVAILABLE';
export const SET_NETWORK_ONLINE = 'SET NETWORK ONLINE';
export const SET_SCREEN_ORIENTATION = 'SET SCREEN ORIENTATION';

export default {
  [SET_NEW_CONTENT_AVAILABLE]: (state, value) =>
    (state.newContentAvailable = value),
  [SET_NETWORK_ONLINE]: (state, value) => (state.networkOnLine = value),
  [SET_NETWORK_ONLINE]: (state, value) => (state.networkOnLine = value),
  [SET_SCREEN_ORIENTATION]: (state, value) => (state.screenOrientation = value)
};
