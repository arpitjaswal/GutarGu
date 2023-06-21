import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyCJbMC82MVqUEuYxbdlsiRwmrympB6O9w8",
  authDomain: "gutargu-69336.firebaseapp.com",
  projectId: "gutargu-69336",
  storageBucket: "gutargu-69336.appspot.com",
  messagingSenderId: "303026478977",
  appId: "1:303026478977:web:1739528eb23d23c542d280",
  measurementId: "G-3MRSFM612H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
