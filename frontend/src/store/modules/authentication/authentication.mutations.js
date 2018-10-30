export const SET_USER = 'SET USER';
export const SET_USER_INFOS = 'SET USER INFOS';

export default {
  [SET_USER]: (state, value) => (state.user = value),
  [SET_USER_INFOS]: (state, value) => (state.userInfos = value)
};
