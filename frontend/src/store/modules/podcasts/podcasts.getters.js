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
    state.podcastsList.find(podcast => podcast.id === podcastId),

  /**
   * Check if podcast is new for user
   * @param {Object} state
   * @param {Object} getters
   * @param {Object} rootState
   */
  isPodcastNew: (state, getters, rootState) => podcastId =>
    isNil(
      rootState.authentication.userInfos.podcastsSeen.find(
        podcastSeenId => podcastSeenId === podcastId
      )
    ),

  /**
   * Get all new podcasts id
   * @param {Object} state
   * @param {Object} getters
   * @param {Object} rootState
   */
  newPodcasts: (state, getters, rootState) => {
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
