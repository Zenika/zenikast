import { initAuthHandling } from './firebase-auth';
import { initCloudMessaging } from './firebase-cloud-messaging';
import * as is from 'is_js';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {};

if (process.env.NODE_ENV === 'production') {
  config.apiKey = 'AIzaSyBcZWD1CGGw2nRyHC_ipPiOK1szWb52Al8';
  config.authDomain = 'zenikast-a6114.firebaseapp.com';
  config.databaseURL = 'https://zenikast-a6114.firebaseio.com';
  config.projectId = 'zenikast-a6114';
  config.storageBucket = 'zenikast-a6114.appspot.com';
  config.messagingSenderId = '863526141805';
} else {
  config.apiKey = 'AIzaSyDKb67XEkQuyZK9gQqGfALbOFOAFIUUj-E';
  config.authDomain = 'zenikast-dev.firebaseapp.com';
  config.databaseURL = 'https://zenikast-dev.firebaseio.com';
  config.projectId = 'zenikast-dev';
  config.storageBucket = 'zenikast-dev.appspot.com';
  config.messagingSenderId = '785046092748';
}

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
