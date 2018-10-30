const misc = require('./misc');

const FCM_TOKEN_ERROR_MSG = 'messaging/registration-token-not-registered';

/**
 * Get expired tokens from the 'SendToDevice' function response
 * @param {Object} sendToDeviceResp
 * @param {Array} cloudMessagingTokens
 */
const getFCMExpiredTokensFromSendToDeviceResp = (
  sendToDeviceResp,
  cloudMessagingTokens
) => {
  const expiredFCMTokensIndexes = [];
  sendToDeviceResp.results.forEach((it, index) => {
    if (it.error && it.error.code === FCM_TOKEN_ERROR_MSG)
      expiredFCMTokensIndexes.push(index);
  });

  const expiredFCMTokens = cloudMessagingTokens.filter((token, index) =>
    expiredFCMTokensIndexes.includes(index)
  );

  return expiredFCMTokens;
};

/**
 * Update user infos by removing expired tokens
 * @param {Array} expiredTokens
 * @param {Object} userInfos
 */
const removeRCMExpiredTokensFromUserInfos = (expiredTokens, userInfos) => {
  const validTokens = userInfos.cloudMessagingTokens.filter(
    cmt => !expiredTokens.includes(cmt)
  );

  const newUserInfos = {
    ...userInfos,
    cloudMessagingTokens: validTokens
  };

  misc.updateUserInfos(newUserInfos);
};

/**
 * Handle expired fcm tokens from user
 * @param {Object} sendToDeviceResp
 * @param {Object} userInfos
 */
exports.removeExpiredFCMTokensFromUser = (sendToDeviceResp, userInfos) => {
  // Get expired fcm tokens
  const expiredTokens = getFCMExpiredTokensFromSendToDeviceResp(
    sendToDeviceResp,
    userInfos.cloudMessagingTokens
  );

  // Remove expired fcm tokens from user (if any)
  if (expiredTokens.length)
    removeRCMExpiredTokensFromUserInfos(expiredTokens, userInfos);
};
