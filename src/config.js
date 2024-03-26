import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyA_iwePQ0Fqkb813mzeQAHe4NLPJiMg9AU",
    authDomain: "fir-1-bb3e1.firebaseapp.com",
    projectId: "fir-1-bb3e1",
    storageBucket: "fir-1-bb3e1.appspot.com",
    messagingSenderId: "867306844888",
    appId: "1:867306844888:web:80f5e1497b0a8a5edf9dad",
    measurementId: "G-D9YMB6J9J0",
  };
  
console.log("Firebase Configuration:", firebaseConfig);
export const app = initializeApp(firebaseConfig);