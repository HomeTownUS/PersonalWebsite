import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmPvd9ih0Jtn1fH9FeveWY77S9ko_B4KU",
  authDomain: "personalwebsite-2025.firebaseapp.com",
  projectId: "personalwebsite-2025",
  storageBucket: "personalwebsite-2025.firebasestorage.app",
  messagingSenderId: "193526673616",
  appId: "1:193526673616:web:d3f33405212051221faed5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);