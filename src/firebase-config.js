
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDCcbBto8n8Z-GtsWFhIYzlNFWZORwmz8U",
  authDomain: "authgate-510f1.firebaseapp.com",
  projectId: "authgate-510f1",
  storageBucket: "authgate-510f1.appspot.com",
  messagingSenderId: "203560315391",
  appId: "1:203560315391:web:82592430dfb8a191b65fca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };