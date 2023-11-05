// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdJIkhrvQ3RfW-4ts_A_TyBfKj6es0_Z8",
  authDomain: "knowledge-hub-c55c9.firebaseapp.com",
  projectId: "knowledge-hub-c55c9",
  storageBucket: "knowledge-hub-c55c9.appspot.com",
  messagingSenderId: "623530604000",
  appId: "1:623530604000:web:8737e60055181bd72d6785",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
