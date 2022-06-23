// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJUKQyeHY-9fFYyjLAx78-dNl8wfqUFrM",
  authDomain: "sistema-3fdf2.firebaseapp.com",
  projectId: "sistema-3fdf2",
  storageBucket: "sistema-3fdf2.appspot.com",
  messagingSenderId: "468438662602",
  appId: "1:468438662602:web:ab6bf8c23730f454482333",
  measurementId: "G-MMKE9EDMJ9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
