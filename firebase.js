// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
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
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const vtUser = await getDoc(doc(db, "users", user.uid));

    let data = {
      uid: user.uid,
      fullName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      ...vtUser.data(),
    };
    userHandle(data);
  } else {
    userHandle(false);
  }
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response.user);
    return response;
    //return response;
  } catch (error) {
    alert(error.message);
  }
};

export const register = async ({ email, password, full_name, username }) => {
  try {
    const userSnap = await getDoc(doc(db, "usernames", username));
    if (userSnap.exists()) {
      alert(`${username} adı zaten mevcut!`);
    } else {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (response.user) {
        await setDoc(doc(db, "usernames", username), {
          uid: response.user.uid,
        });

        await setDoc(doc(db, "users", response.user.uid), {
          full_name,
          username,
          followers: [],
          following: [],
          notifications: [],
        });

        await updateProfile(auth.currentUser, {
          displayName: full_name,
        });

        console.log(response.user);
        return response.user;
      }
    }
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
