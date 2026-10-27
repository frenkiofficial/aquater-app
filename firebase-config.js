// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfD-2E7Ki4VjXNAOmeo1vrScMUn9Xi9hA",
  authDomain: "aquater-express.firebaseapp.com",
  projectId: "aquater-express",
  storageBucket: "aquater-express.firebasestorage.app",
  messagingSenderId: "779393459173",
  appId: "1:779393459173:web:6c713382b737ec20cc450c",
  measurementId: "G-3R61QBHTSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
