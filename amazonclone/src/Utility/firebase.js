// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdE4nGDsDvcGOvdNlQVgLeuxwV34zUqr4",
  authDomain: "clone-54352.firebaseapp.com",
  projectId: "clone-54352",
  storageBucket: "clone-54352.appspot.com",
  messagingSenderId: "696700456874",
  appId: "1:696700456874:web:2138fa1a295c6625f2a5d3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore()