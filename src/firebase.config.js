// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1ibMxgeAZi_qIy6b7RWFFhsI4ZPmsIo0",
  authDomain: "coffee-store-5ca5f.firebaseapp.com",
  projectId: "coffee-store-5ca5f",
  storageBucket: "coffee-store-5ca5f.appspot.com",
  messagingSenderId: "1034603438899",
  appId: "1:1034603438899:web:148d26f976a2145707d446"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;