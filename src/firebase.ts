import { getApps, initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig: any = initializeApp({
  apiKey: process.env.REACT_APP_FIRABASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRABASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRABASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRABASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRABASE_APP_ID,
  measurementId: process.env.REACT_APP_FIRABASE_MEASUREMENT_ID,
});


if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
}