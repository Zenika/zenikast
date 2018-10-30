import { bindPodcasts } from './podcasts';
import { fetchUserInfos } from './users-infos';
import { handleUserCloudMessagingTokens } from './firebase-cloud-messaging';
import firebase from 'firebase/app';
import store from '@/store';
import router from '@/router';

/**
 * Callback fired on user login
 * @param {Object} user
 */
const login = async user => {
  store.dispatch('authentication/setUser', user);

  const userInfos = await fetchUserInfos(user.uid);

  userInfos
    ? store.dispatch('authentication/setUserInfos', userInfos)
    : await store.dispatch('authentication/createNewUserInfos', user);

  if (firebase.messaging) {
    handleUserCloudMessagingTokens();
  }

  router.push('/podcasts');

  bindPodcasts();
};

/**
 * Callback fire on user logout
 */
const logout = () => {
  store.dispatch('authentication/setUser', null);
  store.dispatch('authentication/setUserInfos', null);
  router.push('/login');
};

/**
 * Init authentication handling
 */
export const initAuthHandling = () =>
  firebase.auth().onAuthStateChanged(user => (user ? login(user) : logout()));
