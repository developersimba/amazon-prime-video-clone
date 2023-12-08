import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDHqI0U2mi08eRT9gKKZHPPU8NXhUcnv0M",
  authDomain: "video-clone-65207.firebaseapp.com",
  projectId: "video-clone-65207",
  storageBucket: "video-clone-65207.appspot.com",
  messagingSenderId: "1094614371431",
  appId: "1:1094614371431:web:0f27e1cdf2f9be29b718c2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)