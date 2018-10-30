import { initAuthHandling } from './firebase-auth';
import { initCloudMessaging } from './firebase-cloud-messaging';
import * as is from 'is_js';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBcZWD1CGGw2nRyHC_ipPiOK1szWb52Al8',
  authDomain: 'zenikast-a6114.firebaseapp.com',
  databaseURL: 'https://zenikast-a6114.firebaseio.com',
  projectId: 'zenikast-a6114',
  storageBucket: 'zenikast-a6114.appspot.com',
  messagingSenderId: '863526141805'
};

/* Firebase init */
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.firestore().enablePersistence();

initAuthHandling();

if (is.edge() || is.firefox() || is.chrome()) {
  import('firebase/messaging').then(() => {
    if (firebase.messaging()) {
      initCloudMessaging();
    }
  });
}
