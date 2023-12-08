import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDCG2lJsgzVvfTM20bAgAZNDpgFjgGpivw",
  authDomain: "myntra-clone-5cd69.firebaseapp.com",
  projectId: "myntra-clone-5cd69",
  storageBucket: "myntra-clone-5cd69.appspot.com",
  messagingSenderId: "368857565808",
  appId: "1:368857565808:web:1b262fe4fe1a5bea4cc2b5"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)