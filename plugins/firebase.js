import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBcZWD1CGGw2nRyHC_ipPiOK1szWb52Al8',
  authDomain: 'zenikast-a6114.firebaseapp.com',
  databaseURL: 'https://zenikast-a6114.firebaseio.com',
  projectId: 'zenikast-a6114',
  storageBucket: 'zenikast-a6114.appspot.com',
  messagingSenderId: '863526141805'
}

/* Firebase init */
try {
  firebase.initializeApp(config)
} catch (err) {
  console.log(err)
}

firebase.firestore().settings({ timestampsInSnapshots: true })
