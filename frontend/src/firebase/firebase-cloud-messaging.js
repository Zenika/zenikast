import store from '@/store';
import firebase from 'firebase/app';
import { updateUserInfos } from './users-infos';
import { cloneDeep } from 'lodash';

/**
 * Handle users cloud messaging tokens
 */
export const handleUserCloudMessagingTokens = async () => {
  const userInfos = store.state.authentication.userInfos;
  const messaging = firebase.messaging();
  const messagingToken = await messaging.getToken();

  if (
    messagingToken &&
    !userInfos.cloudMessagingTokens.includes(messagingToken)
  ) {
    const userInfosToUpdate = cloneDeep(userInfos);
    userInfosToUpdate.cloudMessagingTokens.push(messagingToken);

    const updatedUserInfos = await updateUserInfos(userInfosToUpdate);
    store.dispatch('authentication/setUserInfos', updatedUserInfos);
  }
};

/**
 * Init firebase cloud messaging config
 */
export const initCloudMessaging = () => {
  const messaging = firebase.messaging();
  messaging.usePublicVapidKey(
    'BKasEr3_oRGKC0Hmzv3tssWddcmvynZgMeJ9_Lbky8stIMjJ9x-fxpYiSqvCqzPOvXxWwEAIoi-Ja7caFVNP2jc'
  );

  messaging.requestPermission();
  messaging.onTokenRefresh(handleUserCloudMessagingTokens);

  messaging.onMessage(data =>
    store.dispatch('misc/pushMsg', {
      text: data.notification.body,
      type: 'success'
    })
  );
};
