import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi3hGE2r4SSIXS3lVdCvmNYBIlixKuHc8",
  authDomain: "ecommerce-73860-encina.firebaseapp.com",
  projectId: "ecommerce-73860-encina",
  storageBucket: "ecommerce-73860-encina.firebasestorage.app",
  messagingSenderId: "385844099750",
  appId: "1:385844099750:web:534bdb2b7eb961f3c45267"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;