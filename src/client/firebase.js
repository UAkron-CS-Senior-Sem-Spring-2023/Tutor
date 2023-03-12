// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzeFrDjiKAdngDKEelFuVtlsznjsVmBiQ",
  authDomain: "login-541ab.firebaseapp.com",
  projectId: "login-541ab",
  storageBucket: "login-541ab.appspot.com",
  messagingSenderId: "18778186676",
  appId: "1:18778186676:web:c3ff444a71be72529448e1",
  measurementId: "G-9Z93BSN5LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);