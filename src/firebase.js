import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBhLf2tDgGivjaCl1qMLlB1BNvgTad4rUk",
    authDomain: "chatapp-4ac39.firebaseapp.com",
    projectId: "chatapp-4ac39",
    storageBucket: "chatapp-4ac39.appspot.com",
    messagingSenderId: "60595373766",
    appId: "1:60595373766:web:0509b84e86d3bd2c6339c7",
    measurementId: "G-B3JBYCDKTT"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app)