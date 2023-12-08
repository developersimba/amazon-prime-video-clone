import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCX5xNOWdOJOilPKj9pIDU56Qa23hTxsoQ",
  authDomain: "airbnb-clone-9abfa.firebaseapp.com",
  projectId: "airbnb-clone-9abfa",
  storageBucket: "airbnb-clone-9abfa.appspot.com",
  messagingSenderId: "226777992895",
  appId: "1:226777992895:web:fcb026b848574413fc000a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const database = getFirestore(app)
export const facebookProvider = new FacebookAuthProvider()