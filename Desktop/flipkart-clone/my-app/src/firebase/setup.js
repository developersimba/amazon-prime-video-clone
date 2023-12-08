import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDULOJVFAWPQgJMWqzqVtyTa5_hFlYndgw",
  authDomain: "flipkart-clone-5f77c.firebaseapp.com",
  projectId: "flipkart-clone-5f77c",
  storageBucket: "flipkart-clone-5f77c.appspot.com",
  messagingSenderId: "82047383628",
  appId: "1:82047383628:web:9967e46b78b13ce01d5ce9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)