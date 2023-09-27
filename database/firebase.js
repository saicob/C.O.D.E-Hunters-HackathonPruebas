// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByRCEe8pTEZmJ2BnlOpTRfjfXFrLzIkfs",
  authDomain: "rate-repository-app.firebaseapp.com",
  projectId: "rate-repository-app",
  storageBucket: "rate-repository-app.appspot.com",
  messagingSenderId: "140198625977",
  appId: "1:140198625977:web:ae74f96ad8117a2bdc1168",
  measurementId: "G-KMM3YEYYK1"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);

export default appfirebase;
