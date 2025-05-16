// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqfsZWlDDryxZwmNw9oRJYDO94X1FOgBE",
  authDomain: "ai-trip-planner-3b9f8.firebaseapp.com",
  projectId: "ai-trip-planner-3b9f8",
  storageBucket: "ai-trip-planner-3b9f8.firebasestorage.app",
  messagingSenderId: "700385164790",
  appId: "1:700385164790:web:a34f06f3d94b8365db1bd7",
  measurementId: "G-DKTLKGKTRR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)



