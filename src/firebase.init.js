// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyCegT4aeSrTU32TXCby79UF47jif_NXpnA",
     authDomain: "assignment-0010.firebaseapp.com",
     projectId: "assignment-0010",
     storageBucket: "assignment-0010.appspot.com",
     messagingSenderId: "891515513211",
     appId: "1:891515513211:web:18882d151efed36477f5de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;