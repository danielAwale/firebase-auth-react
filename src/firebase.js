import { initializeApp } from "firebase/app";
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

export { auth };
