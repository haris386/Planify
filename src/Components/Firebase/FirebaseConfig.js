import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDoD6RiqYdPZqxd-Qf31fYEV7eQ_Bf1JdU",
  authDomain: "fir-todoapp-ed22c.firebaseapp.com",
  projectId: "fir-todoapp-ed22c",
  storageBucket: "fir-todoapp-ed22c.appspot.com",
  messagingSenderId: "730289808664",
  appId: "1:730289808664:web:1b623ec90ad9cc62e7ea6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword };