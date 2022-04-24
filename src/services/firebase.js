import firebase from "firebase/app"
import  'firebase/firestore';
import  'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBFOWiN0eoOyH9B0G5in7Htq1RX-lpxEV4",
    authDomain: "teste-gcb-6c204.firebaseapp.com",
    projectId: "teste-gcb-6c204",
    storageBucket: "teste-gcb-6c204.appspot.com",
    messagingSenderId: "383733391639",
    appId: "1:383733391639:web:bdb6f1b00f8da853a31752",
    measurementId: "G-16PDQT1FYL"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;