import { isNil } from 'lodash';

export default {
  /**
   * Returns true if the current user is logged in, else false.
   * @param {Object} state
   * @param {Object} getters
   * @param {Object} rootState
   */
  isUserLoggedIn: state => {
    return !isNil(state.userInfos);
  }
};
