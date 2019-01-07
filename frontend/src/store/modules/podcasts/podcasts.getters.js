import { orderBy, isNil, difference } from 'lodash';

export default {
  /**
   * Podcasts ordered by field
   * @param {Object} state
   */
  podcastsOrderedBy: state => (field, opt) =>
    orderBy(state.podcastsList, field, opt),

  /**
   * Get a podcast by id
   * @param {Object} state
   */
  podcastById: state => podcastId =>
    state.podcastsList
      ? state.podcastsList.find(podcast => podcast.id === podcastId)
      : null,

  /**
   * Check if podcast is new for user
   * @param {Object} state
   * @param {Object} getters
   * @param {Object} rootState
   */
  isPodcastNew: (state, getters, rootState) => podcastId => {
    if (isNil(rootState.authentication.userInfos)) return false;
    return isNil(
      rootState.authentication.userInfos.podcastsSeen.find(
        podcastSeenId => podcastSeenId === podcastId
      )
    );
  },

  /**
   * Get all new podcasts id
   * @param {Object} state
   * @param {Object} getters
   * @param {Object} rootState
   */
  newPodcasts: (state, getters, rootState) => {
    if (isNil(state.podcastsList)) {
      return null;
    }

    if (isNil(rootState.authentication.userInfos)) {
      return [];
    }

    const podcastsIds = state.podcastsList.map(podcast => podcast.id);
    const newPodcastsIds = difference(
      podcastsIds,
      rootState.authentication.userInfos.podcastsSeen
    );

    return state.podcastsList.filter(podcast =>
      newPodcastsIds.includes(podcast.id)
    );
  }
};
