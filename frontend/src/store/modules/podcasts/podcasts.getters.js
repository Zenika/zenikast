import { orderBy } from 'lodash';

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
    state.podcastsList.find(podcast => podcast.id === podcastId)
};
