// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBki_1nQkaeUeeaMd5qo11kiMV7VGDgNiw",
  authDomain: "magoso-ent-d1c60.firebaseapp.com",
  projectId: "magoso-ent-d1c60",
  storageBucket: "magoso-ent-d1c60.appspot.com",
  messagingSenderId: "177414111935",
  appId: "1:177414111935:web:5c5a3a6f0a482a631bbc0a",
  measurementId: "G-849PX920TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
























