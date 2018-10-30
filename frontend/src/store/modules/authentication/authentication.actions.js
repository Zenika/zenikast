import { SET_USER, SET_USER_INFOS } from './authentication.mutations';
import { createUserInfos } from '@/firebase/users-infos';

export default {
  setUser: ({ commit }, value) => commit(SET_USER, value),
  setUserInfos: ({ commit }, value) => commit(SET_USER_INFOS, value),
  createNewUserInfos: async ({ dispatch }, user) => {
    const userInfos = {
      userId: user.uid,
      cloudMessagingTokens: []
    };

    const createdUserInfos = await createUserInfos(userInfos);
    dispatch('setUserInfos', createdUserInfos);
  }
};
