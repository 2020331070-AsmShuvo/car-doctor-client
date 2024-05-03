// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1vnaDy6vrtTcfjjgbApHnc9ioPcWFt14",
  authDomain: "car-doctor-993c4.firebaseapp.com",
  projectId: "car-doctor-993c4",
  storageBucket: "car-doctor-993c4.appspot.com",
  messagingSenderId: "1091230751937",
  appId: "1:1091230751937:web:9de53dd8c7f099a4618840",
  measurementId: "G-2D2EV68HC8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
