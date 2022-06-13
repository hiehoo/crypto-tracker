// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5e2aAkalDzYbX78J0gSCGuqzUTNC2L8w",
  authDomain: "crypto-gecko.firebaseapp.com",
  projectId: "crypto-gecko",
  storageBucket: "crypto-gecko.appspot.com",
  messagingSenderId: "460523542311",
  appId: "1:460523542311:web:a9e11543c4e375367ebb02",
  measurementId: "G-8SJ91XFR2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;