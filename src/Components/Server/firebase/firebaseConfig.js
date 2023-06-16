// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-bmqg3i1Y6h7MdZz6hRCKwBDA_JIwVA0",
  authDomain: "reactproject-fb51c.firebaseapp.com",
  projectId: "reactproject-fb51c",
  storageBucket: "reactproject-fb51c.appspot.com",
  messagingSenderId: "524856809938",
  appId: "1:524856809938:web:61afc80b48aa95e099d00b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)