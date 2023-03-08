// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANZMTuG9GY5ExpaYzxA6FGiBy1HGiEqqU",
  authDomain: "react-5367a.firebaseapp.com",
  projectId: "react-5367a",
  storageBucket: "react-5367a.appspot.com",
  messagingSenderId: "506366632460",
  appId: "1:506366632460:web:cbeab5db8d92475cd94429"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore( FirebaseApp );

