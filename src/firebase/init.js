import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBRiax0Z12NzPfEgsyIPTAkDyIWzqr8-kE",
    authDomain: "chat-7a4f9.firebaseapp.com",
    databaseURL: "https://chat-7a4f9.firebaseio.com",
    projectId: "chat-7a4f9",
    storageBucket: "chat-7a4f9.appspot.com",
    messagingSenderId: "447690398630",
    appId: "1:447690398630:web:0d497435833234fc9d4d67",
    measurementId: "G-M1L356KNS0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
