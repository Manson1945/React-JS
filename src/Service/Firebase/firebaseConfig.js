
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"




const firebaseConfig = {
  apiKey: "AIzaSyCBZBcbrWpqRIWRx6z7V1PC7SAMx4L4hSE",
  authDomain: "proyecto-reactjs-b733e.firebaseapp.com",
  projectId: "proyecto-reactjs-b733e",
  storageBucket: "proyecto-reactjs-b733e.appspot.com",
  messagingSenderId: "775567648791",
  appId: "1:775567648791:web:fed08bf5a168097bc79452",
  measurementId: "G-BQD39BXLYQ"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)