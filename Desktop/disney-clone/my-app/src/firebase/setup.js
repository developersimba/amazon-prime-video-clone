import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCTWm4MR1htVgMNTZGiPiJIFxhl8w0OVV4",
  authDomain: "disney-clone-1f22e.firebaseapp.com",
  projectId: "disney-clone-1f22e",
  storageBucket: "disney-clone-1f22e.appspot.com",
  messagingSenderId: "381011346826",
  appId: "1:381011346826:web:ae92a38e852a839d563473"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)