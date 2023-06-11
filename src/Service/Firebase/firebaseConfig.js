
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"




const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API ,
  authDomain: "proyecto-reactjs-b733e.firebaseapp.com",
  projectId: "proyecto-reactjs-b733e",
  storageBucket: "proyecto-reactjs-b733e.appspot.com",
  messagingSenderId: "775567648791",
  appId:process.env.REACT_APP_FIREBASE_APP_ID ,
  measurementId: "G-BQD39BXLYQ"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)