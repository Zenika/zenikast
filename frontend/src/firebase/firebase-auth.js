import { bindPodcasts } from './podcasts';
import { fetchUserInfos } from './users-infos';
import { handleUserCloudMessagingTokens } from './firebase-cloud-messaging';
import firebase from 'firebase/app';
import store from '@/store';

/**
 * Callback fired on user login
 * @param {Object} user
 */
const login = async user => {
  const userInfos = await fetchUserInfos(user.uid);

  userInfos
    ? store.dispatch('authentication/setUserInfos', userInfos)
    : await store.dispatch('authentication/createNewUserInfos', user);

  if (firebase.messaging) {
    handleUserCloudMessagingTokens();
  }
};

const listenPodcasts = () => {
  const podcastListener = bindPodcasts();
  store.dispatch('podcasts/setPodcastsListener', podcastListener);
};

/**
 * Callback fire on user logout
 */
const logout = () => {
  store.dispatch('authentication/setUserInfos', null);
};

/**
 * Init authentication handling
 */
export const initAuthHandling = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      login(user);
    } else {
      logout();
    }
    listenPodcasts();
  });
};
