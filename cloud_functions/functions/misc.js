const firestore = require('./firestore');

/**
 * Get all users infos
 */
exports.getUsersInfos = () =>
  firestore
    .collection('usersInfos')
    .get()
    .then(result => result.docs.map(ref => ({ id: ref.id, ...ref.data() })));

/**
 * Get user infos from userId
 * @param {String} userId
 */
exports.updateUserInfos = userInfos =>
  firestore
    .collection('usersInfos')
    .doc(userInfos.userId)
    .set(userInfos);
