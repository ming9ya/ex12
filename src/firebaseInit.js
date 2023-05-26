// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGsDcDjhIhksVY0Enl2E4AJOKalWSlxX0",
  authDomain: "fir-3894f.firebaseapp.com",
  databaseURL: "https://fir-3894f-default-rtdb.firebaseio.com",
  projectId: "fir-3894f",
  storageBucket: "fir-3894f.appspot.com",
  messagingSenderId: "113498780396",
  appId: "1:113498780396:web:10882d47cf4156f063ebc9",
  measurementId: "G-YPV32HDHKH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

