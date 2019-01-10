import { orderBy, isNil, difference } from 'lodash';

export default {
  /**
   * Tracks ordered by field
   * @param {Object} state
   */
  tracksOrderedBy: state => (field, opt) =>
    orderBy(state.trackList, field, opt),

  /**
   * Get a track by id
   * @param {Object} state
   */
  trackById: state => trackId =>
    state.trackList
      ? state.trackList.find(track => track.id === trackId)
      : null,

  /**
   * Check if a track is new for user
   * @param {Object} state
   * @param {Object} getters
   * @param {Object} rootState
   */
  isTrackNew: (state, getters, rootState) => trackId => {
    if (isNil(rootState.authentication.userInfos)) return false;
    return isNil(
      rootState.authentication.userInfos.tracksSeen.find(
        trackSeenId => trackSeenId === trackId
      )
    );
  },

  /**
   * Get all new tracks id
   * @param {Object} state
   * @param {Object} getters
   * @param {Object} rootState
   */
  newTracks: (state, getters, rootState) => {
    if (isNil(state.trackList)) {
      return null;
    }

    if (isNil(rootState.authentication.userInfos)) {
      return [];
    }

    const tracksIds = state.trackList.map(track => track.id);
    const newTracksIds = difference(
      tracksIds,
      rootState.authentication.userInfos.tracksSeen
    );

    return state.trackList.filter(track => newTracksIds.includes(track.id));
  }
};
