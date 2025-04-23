// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7xko9qF0lOSiYjhcbu49Ee-qVh6Wbb34",
    authDomain: "game-review-25b41.firebaseapp.com",
    projectId: "game-review-25b41",
    storageBucket: "game-review-25b41.firebasestorage.app",
    messagingSenderId: "938629799201",
    appId: "1:938629799201:web:40a684d5bc339b19c8f260"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth