import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCVnua4Gn_xBXqjvA0EddDy8jihrIi_jSo",
    authDomain: "staffdraft.firebaseapp.com",
    projectId: "staffdraft",
    storageBucket: "staffdraft.appspot.com",
    messagingSenderId: "363200078121",
    appId: "1:363200078121:web:52ee21722d258be8de5738",
    measurementId: "G-EBD2KWXXZY",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
