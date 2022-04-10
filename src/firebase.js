// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
require('firebase/auth');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiGu6zOe0i5h4COCh6pmheAePX_bdW1A8",
  authDomain: "bookexplorer-a716c.firebaseapp.com",
  projectId: "bookexplorer-a716c",
  storageBucket: "bookexplorer-a716c.appspot.com",
  messagingSenderId: "450839167325",
  appId: "1:450839167325:web:3c3cf23d42d5bdaa2068b4",
  measurementId: "G-26M002VJK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;