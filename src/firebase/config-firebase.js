import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";

// Aplicacion WEB Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCAwi0-LuEp5wHrN-KcrSu7lO8R_kqyEP0",
  authDomain: "crud-react-b7ef9.firebaseapp.com",
  projectId: "crud-react-b7ef9",
  storageBucket: "crud-react-b7ef9.appspot.com",
  messagingSenderId: "733653920798",
  appId: "1:733653920798:web:64abff37daf41e52d8520f",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export { app, auth, signInWithPopup, db, googleAuthProvider };
