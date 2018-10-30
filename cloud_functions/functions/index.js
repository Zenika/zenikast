const functions = require('firebase-functions');
const admin = require('firebase-admin');
const fcmTokensTools = require('./fcm-tokens-tools');
const misc = require('./misc');

/**
 * Send new podcast notifications to all users
 * @param {Object} usersInfos
 */
const sendNewPodcastNotificationToUsers = (podcast, usersInfos) => {
  usersInfos.forEach(async userInfos => {
    const response = await admin
      .messaging()
      .sendToDevice(userInfos.cloudMessagingTokens, {
        notification: {
          title: 'Nouvelle émission disponible !',
          body: podcast.name,
          icon: 'img/icons/mstile-150x150.png',
          click_action: 'https://zenikast-a6114.firebaseapp.com/#/podcasts'
        }
      });

    fcmTokensTools.removeExpiredFCMTokensFromUser(response, userInfos);
  });
};

exports.createContractNotification = functions.firestore
  .document('podcasts/{podcastId}')
  .onCreate(async snap => {
    const podcast = snap.data();
    const usersInfos = await misc.getUsersInfos();

    sendNewPodcastNotificationToUsers(podcast, usersInfos);
  });
