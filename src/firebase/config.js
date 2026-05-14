import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAo2WyDGEsxpko2Xf-BZP37PasClotxypQ",
  authDomain: "readshelf-8a1d8.firebaseapp.com",
  projectId: "readshelf-8a1d8",
  storageBucket: "readshelf-8a1d8.firebasestorage.app",
  messagingSenderId: "864473126183",
  appId: "1:864473126183:web:cf1e337645b88d45850502",
  measurementId: "G-8B9M8J098G"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db= getFirestore(app)