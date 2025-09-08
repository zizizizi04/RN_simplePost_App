// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "simplepostapp-68dc2.firebaseapp.com",
  projectId: "simplepostapp-68dc2",
  storageBucket: "simplepostapp-68dc2.firebasestorage.app",
  messagingSenderId: "338115285157",
  appId: "1:338115285157:web:e929eb6447fceafe8ffd4c",
  measurementId: "G-6J8PJV4S3E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
