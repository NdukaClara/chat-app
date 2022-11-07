// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-VEtcL1c4uFfdAXh5z2TsoufekhftbVo",
  authDomain: "chat-5dff0.firebaseapp.com",
  projectId: "chat-5dff0",
  storageBucket: "chat-5dff0.appspot.com",
  messagingSenderId: "799519319940",
  appId: "1:799519319940:web:151a14e662a10a991c1fd1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
