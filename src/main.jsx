import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";
import NavBar from './components/NavBar.jsx'
//Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcjNp8WqVpoORLqRPdkvdbo4mAYrOYATA",
    authDomain: "fitty-store.firebaseapp.com",
    projectId: "fitty-store",
    storageBucket: "fitty-store.appspot.com",
    messagingSenderId: "984181996502",
    appId: "1:984181996502:web:7229312f8d8ce778ec0277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>

)
