// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBN39Jop-KzkZmVcRcluRegQJ0kbGGf40",
  authDomain: "rj-coderhousenedc.firebaseapp.com",
  projectId: "rj-coderhousenedc",
  storageBucket: "rj-coderhousenedc.appspot.com",
  messagingSenderId: "710534347743",
  appId: "1:710534347743:web:ae8636446a9dfbbe50a26a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)