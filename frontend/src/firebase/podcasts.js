import firebase from 'firebase/app';
import store from '@/store';

/**
 * Bind firestore tracks collection to track list from store
 */
export const bindPodcasts = () =>
  firebase
    .firestore()
    .collection('tracks')
    .onSnapshot(querySnapshot => {
      const tracks = [];
      querySnapshot.forEach(doc => tracks.push({ id: doc.id, ...doc.data() }));
      tracks.forEach(
        track => (track.createTimestamp = track.createTimestamp.toDate())
      );
      store.dispatch('podcasts/setPodcasts', tracks);
    });
