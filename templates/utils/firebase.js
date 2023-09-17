import firebase from 'firebase/app';

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
const app = initializeApp(firebaseConfig);
export default app;