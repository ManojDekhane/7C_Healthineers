import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC721TWA89x81WJXuxgKmRs8MmqeKI-tB8",
  authDomain: "c-healthineers.firebaseapp.com",
  projectId: "c-healthineers",
  storageBucket: "c-healthineers.firebasestorage.app",
  messagingSenderId: "23253670084",
  appId: "1:23253670084:web:cf9fc3b405c47666341191",
  measurementId: "G-630K1CKQKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { app, auth };