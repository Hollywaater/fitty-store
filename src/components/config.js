import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBcjNp8WqVpoORLqRPdkvdbo4mAYrOYATA",
    authDomain: "fitty-store.firebaseapp.com",
    projectId: "fitty-store",
    storageBucket: "fitty-store.appspot.com",
    messagingSenderId: "984181996502",
    appId: "1:984181996502:web:7229312f8d8ce778ec0277"
};
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)