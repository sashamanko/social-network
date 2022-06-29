// Imports | Firebase
// __________________________________________________
import { initializeApp } from "firebase/app";
import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";

const app: any = initializeApp({
  apiKey: process.env.REACT_APP_FIRABASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRABASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRABASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRABASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRABASE_APP_ID,
  measurementId: process.env.REACT_APP_FIRABASE_MEASUREMENT_ID,
});

const db = getFirestore();

const getDocument = async (collectionPath: string) => {
  return await getDocs(collection( db, collectionPath));
};

const findDocument = async (path: string, searchByField: string, compareWith: any) => {
  return (await getDocument(path)).docs.find((doc: any) => doc.data()[searchByField] === compareWith);
};

export {
  db,
  getDocument,
  findDocument,
};