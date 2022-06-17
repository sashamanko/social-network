import { useEffect, useState } from "react";

import { getApps, initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig: any = initializeApp({
  apiKey: "AIzaSyBE9mvkRWR3fMHs09KQ_kryY15Hbqvo3H4",
  authDomain: "social-network-206f3.firebaseapp.com",
  projectId: "social-network-206f3",
  storageBucket: "social-network-206f3.appspot.com",
  messagingSenderId: "419241298198",
  appId: "1:419241298198:web:3cc37c1169b1180d252837",
  measurementId: "G-P9EZM78N05",
});


if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
}
const auth = getAuth();

export const signup = (email: any, password: any) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email: any, password: any) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};

// Custom Hook
export const useAuth = () => {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user: any) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
};