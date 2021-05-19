import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyDJMeBYTvR76j2iD7uCfcMA0xqEHY2QOWM",
    authDomain: "barter-system-a7f13.firebaseapp.com",
    databaseURL: "https://barter-system-a7f13.firebaseio.com",
    projectId: "barter-system-a7f13",
    storageBucket: "barter-system-a7f13.appspot.com",
    messagingSenderId: "874302085160",
    appId: "1:874302085160:web:5d66fd30b42ba74b54fd1d"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();