import firebase from 'firebase/app';
import store from '@/store';

/**
 * Bind podcasts list to firestore podcasts collection
 */
export const bindPodcasts = () =>
  firebase
    .firestore()
    .collection('podcasts')
    .onSnapshot(querySnapshot => {
      const podcasts = [];
      querySnapshot.forEach(doc =>
        podcasts.push({ id: doc.id, ...doc.data() })
      );

      podcasts.forEach(
        podcast => (podcast.createTimestamp = podcast.createTimestamp.toDate())
      );

      store.dispatch('podcasts/setPodcasts', podcasts);
    });
