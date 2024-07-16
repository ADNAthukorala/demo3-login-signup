// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEzaMPWTcMR-9KxwaFE4RmpKM2-9ZcV14",
  authDomain: "testing2reactjs.firebaseapp.com",
  projectId: "testing2reactjs",
  storageBucket: "testing2reactjs.appspot.com",
  messagingSenderId: "73947748674",
  appId: "1:73947748674:web:f30abb3c6c6bd5575310db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);