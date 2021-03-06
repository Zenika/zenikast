import { SET_USER, SET_USER_INFOS } from './authentication.mutations';
import * as firebaseUserInfos from '@/firebase/users-infos';
import { isNil } from 'lodash';

export default {
  setUser: ({ commit }, value) => commit(SET_USER, value),
  setUserInfos: ({ commit }, value) => commit(SET_USER_INFOS, value),

  createNewUserInfos: async ({ dispatch }, user) => {
    const providerData = user.providerData[0];
    const { displayName, photoURL, email } = providerData;
    const userInfos = {
      displayName,
      photoURL,
      email,
      userId: user.uid,
      cloudMessagingTokens: [],
      tracksSeen: []
    };
    const createdUserInfos = await firebaseUserInfos.createUserInfos(userInfos);
    dispatch('setUserInfos', createdUserInfos);
  },

  updateUserInfos: async ({ dispatch, state }, value) => {
    const updatedUserInfos = {
      ...state.userInfos,
      ...value
    };
    const newUserInfos = await firebaseUserInfos.updateUserInfos(
      updatedUserInfos
    );
    dispatch('setUserInfos', newUserInfos);
  },

  addTrackSeenToUser: ({ state, dispatch }, trackId) => {
    const isTrackNotSeen = isNil(
      state.userInfos.tracksSeen.find(trackSeenId => trackSeenId === trackId)
    );
    if (isTrackNotSeen) {
      dispatch('updateUserInfos', {
        tracksSeen: [...state.userInfos.tracksSeen, trackId]
      });
    }
  }
};
