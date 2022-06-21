import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACzufYAQW2nDqQYoKiB-ic1Cvkz4WBacw",
  authDomain: "alumni-portal-5fcfd.firebaseapp.com",
  projectId: "alumni-portal-5fcfd",
  storageBucket: "alumni-portal-5fcfd.appspot.com",
  messagingSenderId: "627444099879",
  appId: "1:627444099879:web:a053e6cb1f8290ae095702"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
