import firebase from 'firebase/app';
import store from '@/store';

/**
 * Bind firestore podcasts collection to podcasts list from store
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
