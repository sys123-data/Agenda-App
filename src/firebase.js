// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD33G1qCAWVVJv_Pak6tXj4Lgwc01XFt9I",
  authDomain: "agenda-153b4.firebaseapp.com",
  projectId: "agenda-153b4",
  storageBucket: "agenda-153b4.appspot.com",
  messagingSenderId: "448538458270",
  appId: "1:448538458270:web:341f7d8757d0e5f3b0e38f",
  measurementId: "G-HRGDLZDVEF"
  });

const db = firebaseApp.firestore();

export default db;