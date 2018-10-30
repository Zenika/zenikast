// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
/* eslint-disable-next-line no-undef */
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
/* eslint-disable-next-line no-undef */
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
/* eslint-disable-next-line no-undef */
firebase.initializeApp({
  messagingSenderId: '863526141805'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
/* eslint-disable-next-line no-undef */
firebase.messaging();
