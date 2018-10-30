import firebase from 'firebase/app'

/**
 * Fetch podcasts
 */
export const fetchPodcasts = () =>
  firebase
    .firestore()
    .collection('podcasts')
    .get()
    .then(result => result.docs.map(ref => ({ id: ref.id, ...ref.data() })))
