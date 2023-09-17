// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3UxIOXJxsHuGoe6W4-uBoc1BKyv2q8fA",
    authDomain: "tester-8188b.firebaseapp.com",
    databaseURL: "https://tester-8188b-default-rtdb.firebaseio.com",
    projectId: "tester-8188b",
    storageBucket: "tester-8188b.appspot.com",
    messagingSenderId: "331578561794",
    appId: "1:331578561794:web:518a7ab0c571ebfc1d9e1b",
    measurementId: "G-K5ZRD3FLHB"
};

// Initialize Firebase
const appFire = initializeApp(firebaseConfig);
export default appFire;