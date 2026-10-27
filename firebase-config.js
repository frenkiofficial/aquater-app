import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, push, set, update, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Konfigurasi Firebase AQUATER
const firebaseConfig = {
  apiKey: "AIzaSyDfD-2E7Ki4VjXNAOmeo1vrScMUn9Xi9hA",
  authDomain: "aquater-express.firebaseapp.com",
  databaseURL: "https://aquater-express-default-rtdb.firebaseio.com",
  projectId: "aquater-express",
  storageBucket: "aquater-express.firebasestorage.app",
  messagingSenderId: "779393459173",
  appId: "1:779393459173:web:6c713382b737ec20cc450c",
  measurementId: "G-3R61QBHTSS"
};

// Inisialisasi Firebase & Realtime Database
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, set, update, onValue };
