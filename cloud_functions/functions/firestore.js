const admin = require('firebase-admin');

admin.initializeApp();
const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

module.exports = firestore;
