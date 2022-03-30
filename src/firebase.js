// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXlAdapxDj78tm10CkL792RJQ_A7EfAmg",
  authDomain: "sparta-react-basic-3c934.firebaseapp.com",
  projectId: "sparta-react-basic-3c934",
  storageBucket: "sparta-react-basic-3c934.appspot.com",
  messagingSenderId: "345388797499",
  appId: "1:345388797499:web:845c9c3e2e8aee47d7961e",
  measurementId: "G-Q18VDJ46KT"
};


initializeApp(firebaseConfig);//firebase를 쓸수있도록 초기화,기초설정해주는함수

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };