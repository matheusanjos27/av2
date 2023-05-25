// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDulToFYs-8YCQmzrYCH_XDfwKA49pkppw",
  authDomain: "flashcards-c115e.firebaseapp.com",
  projectId: "flashcards-c115e",
  storageBucket: "flashcards-c115e.appspot.com",
  messagingSenderId: "536289411271",
  appId: "1:536289411271:web:2fc35049848809b6d63ee2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;