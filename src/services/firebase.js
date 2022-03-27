import firebase from "firebase/app"
import  'firebase/firestore';
import  'firebase/database';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyC19DSjCZf3gWt3wN7AX5Mye_n89gEnmUQ",
    authDomain: "teste-gcb-86cb0.firebaseapp.com",
    projectId: "teste-gcb-86cb0",
    storageBucket: "teste-gcb-86cb0.appspot.com",
    messagingSenderId: "797349350724",
    appId: "1:797349350724:web:819a3a6a2698e7ff4c9b11",
    measurementId: "G-4QR503FNTL"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;