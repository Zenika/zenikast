import firebase from 'firebase/app';

/**
 * Create a new userInfos for a user
 * @param {Object} userInfos
 */
export const createUserInfos = userInfos => {
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp();

  return firebase
    .firestore()
    .collection('usersInfos')
    .doc(userInfos.userId)
    .set({
      ...userInfos,
      createTimestamp: timeStamp,
      updateTimestamp: timeStamp
    })
    .then(() => ({
      ...userInfos,
      createTimestamp: new Date(),
      updateTimestamp: new Date()
    }));
};

/**
 * Update an existing userInfos
 * @param {Object} userInfos
 */
export const updateUserInfos = userInfos =>
  firebase
    .firestore()
    .collection('usersInfos')
    .doc(userInfos.userId)
    .set({
      ...userInfos,
      updateTimestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => ({
      ...userInfos,
      updateTimestamp: new Date()
    }));

/**
 * Fetch userInfos from a user
 * @param {String} userId
 */
export const fetchUserInfos = userId =>
  firebase
    .firestore()
    .collection('usersInfos')
    .doc(userId)
    .get()
    .then(result => (result.exists ? result.data() : null))
    // Transform timestamp to date
    .then(userInfos => {
      if (userInfos) {
        userInfos.updateTimestamp = userInfos.updateTimestamp.toDate();
        userInfos.createTimestamp = userInfos.createTimestamp.toDate();
      }
      return userInfos;
    });
