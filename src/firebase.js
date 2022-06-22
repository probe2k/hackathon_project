import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdEvLmG1CsBhRmVHed-QuQeZKGtYb4ekM",
  authDomain: "project-test-e8a43.firebaseapp.com",
  projectId: "project-test-e8a43",
  storageBucket: "project-test-e8a43.appspot.com",
  messagingSenderId: "217555975015",
  appId: "1:217555975015:web:5be7d2990297100f434dc2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
