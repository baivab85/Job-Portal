
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,GithubAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAUn6k6QPFAikYaUfkWhK7Hn8yBOZ9ZDh8",
  authDomain: "multi-shop-d4394.firebaseapp.com",
  projectId: "multi-shop-d4394",
  storageBucket: "multi-shop-d4394.appspot.com",
  messagingSenderId: "262145774184",
  appId: "1:262145774184:web:164639b5ba3d83a0e021dd",
  measurementId: "G-KXSY874EHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider =new GoogleAuthProvider();
const provider2= new GithubAuthProvider();




export {auth,provider,provider2}