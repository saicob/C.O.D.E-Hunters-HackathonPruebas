// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC2UbJPeS0cf935IsS8RR_vOuCiKCEYcU",
  authDomain: "registros-c262d.firebaseapp.com",
  projectId: "registros-c262d",
  storageBucket: "registros-c262d.appspot.com",
  messagingSenderId: "823508326352",
  appId: "1:823508326352:web:fc84e61a5280cb9e8bcbd5"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
export default appfirebase;