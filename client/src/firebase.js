// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APU_KEY,
  authDomain: "mern-real-estate-434d7.firebaseapp.com",
  projectId: "mern-real-estate-434d7",
  storageBucket: "mern-real-estate-434d7.appspot.com",
  messagingSenderId: "35570701527",
  appId: "1:35570701527:web:8d73a6086d57ff13950c92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);