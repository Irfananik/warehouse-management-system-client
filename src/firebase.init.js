// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQHRwPfpSJJing0mhuKWi-rkw5wPimSS8",
    authDomain: "smartphone-453a1.firebaseapp.com",
    projectId: "smartphone-453a1",
    storageBucket: "smartphone-453a1.appspot.com",
    messagingSenderId: "1073264010777",
    appId: "1:1073264010777:web:67757392004e63be04ac88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth