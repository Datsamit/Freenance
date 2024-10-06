// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF6eN06sacqspf5S0R21eLgAfni5AJhuE",
  authDomain: "freenance-4cd21.firebaseapp.com",
  projectId: "freenance-4cd21",
  storageBucket: "freenance-4cd21.appspot.com",
  messagingSenderId: "577669654188",
  appId: "1:577669654188:web:ef0f3de2890bfd74616109",
  measurementId: "G-QPMK6PYBX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db, auth, provider, doc, setDoc};