// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { userHandle } from "./utils";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqnefoq2n-RcYutZkQ4EHMvrM3P2UhjJo",
  authDomain: "instagram-clone-f1727.firebaseapp.com",
  projectId: "instagram-clone-f1727",
  storageBucket: "instagram-clone-f1727.appspot.com",
  messagingSenderId: "239647548329",
  appId: "1:239647548329:web:51a34e06b2041363461ab8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  userHandle(user || false);
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response.user);
  } catch (error) {
    alert(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    alert(error.message);
  }
};
