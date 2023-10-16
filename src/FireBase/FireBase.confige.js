// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOBPL19OLlUGmVbPmi-qsC7SZ_tla_h3Y",
  authDomain: "assigment-9-1fa5a.firebaseapp.com",
  projectId: "assigment-9-1fa5a",
  storageBucket: "assigment-9-1fa5a.appspot.com",
  messagingSenderId: "630724287236",
  appId: "1:630724287236:web:974a9f2925c97a75920e51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth