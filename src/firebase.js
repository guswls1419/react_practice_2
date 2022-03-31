// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 
};


initializeApp(firebaseConfig);//firebase를 쓸수있도록 초기화,기초설정해주는함수

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };