import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfbBn4xgk7QmCVikFVjslpxViQOPWgC40",
  authDomain: "quoraapplication-fe2c1.firebaseapp.com",
  projectId: "quoraapplication-fe2c1",
  storageBucket: "quoraapplication-fe2c1.appspot.com",
  messagingSenderId: "986662709414",
  appId: "1:986662709414:web:d2f51854ee5d97ebadec67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
export const storage = getFirestore(app)
export const db = getFirestore(app);
