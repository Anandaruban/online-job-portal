// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuRas1qVVKflV3rRSWWBAU_FnyXjS7Djs",
  authDomain: "online-job-portal-2f7ed.firebaseapp.com",
  projectId: "online-job-portal-2f7ed",
  storageBucket: "online-job-portal-2f7ed.appspot.com",
  messagingSenderId: "1050165963805",
  appId: "1:1050165963805:web:deca969dcb5e97065b2af4",
  measurementId: "G-32GKP731RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};