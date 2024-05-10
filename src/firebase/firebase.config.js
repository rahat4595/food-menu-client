// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9OCM8zRf7lf_QApF5RGOuR8n-ypwezJM",
  authDomain: "food-menu-ffbe8.firebaseapp.com",
  projectId: "food-menu-ffbe8",
  storageBucket: "food-menu-ffbe8.appspot.com",
  messagingSenderId: "692218391200",
  appId: "1:692218391200:web:ab492552cd6a93d956f7c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app