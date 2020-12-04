import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhf1Wcy948a1Q3kGNUheEy_aMZ3_GNTU8",
    authDomain: "challenge-e1635.firebaseapp.com",
    databaseURL: "https://challenge-e1635.firebaseio.com",
    projectId: "challenge-e1635",
    storageBucket: "challenge-e1635.appspot.com",
    messagingSenderId: "450335606764",
    appId: "1:450335606764:web:d65ff4dfb91cb5272722c9",
    measurementId: "G-77HQYG7T06"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export { db, auth };