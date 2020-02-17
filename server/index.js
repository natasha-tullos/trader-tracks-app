var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/database");

var firebaseConfig = {
  apiKey: PROCESS.ENV.API_KEY,
  authDomain: PROCESS.ENV.AUTH_DOMAIN,
  databaseURL: PROCESS.ENV.DATABASE_URL,
  projectId: PROCESS.ENV.PROJECT_ID,
  storageBucket: PROCESS.ENV.STORAGE_BUCKET,
  messagingSenderId: PROCESS.ENV.MESSAGING_SENDER_ID,
  appId: PROCESS.ENV.APP_ID,
  measurementId: PROCESS.ENV.MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);