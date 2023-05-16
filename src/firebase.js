import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAKbwW-14qKQSYStIpZWbsgzJ28MMmcXHI",
  authDomain: "chat-2f6db.firebaseapp.com",
  projectId: "chat-2f6db",
  storageBucket: "chat-2f6db.appspot.com",
  messagingSenderId: "143394717295",
  appId: "1:143394717295:web:6bc2ef10b2e4de5904d79a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();