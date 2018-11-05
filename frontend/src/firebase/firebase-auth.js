import { bindPodcasts } from './podcasts';
import { fetchUserInfos } from './users-infos';
import { handleUserCloudMessagingTokens } from './firebase-cloud-messaging';
import firebase from 'firebase/app';
import store from '@/store';
import router from '@/router';

null;

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

  const podcastListener = bindPodcasts();
  store.dispatch('podcasts/setPodcastsListener', podcastListener);
};

/**
 * Callback fire on user logout
 */
const logout = () => {
  router.push('/login');
  store.dispatch('podcasts/setPodcasts', null);
  store.dispatch('podcasts/unsubscribePodcastsListener');
  store.dispatch('authentication/setUserInfos', null);
};

/**
 * Init authentication handling
 */
export const initAuthHandling = () =>
  firebase.auth().onAuthStateChanged(user => (user ? login(user) : logout()));
