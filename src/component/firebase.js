// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWRL5v9SovFjJugO8zfFvpeMUkNFi2lsE",
  authDomain: "react-firebase-auth-6f8ff.firebaseapp.com",
  projectId: "react-firebase-auth-6f8ff",
  storageBucket: "react-firebase-auth-6f8ff.appspot.com",
  messagingSenderId: "914804086697",
  appId: "1:914804086697:web:fb61f338bda8f1c24496b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
