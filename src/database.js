// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEBPfuLlp1MLgbuWLIXg8E82ny8DCD8Rg",
  authDomain: "purduedex.firebaseapp.com",
  databaseURL: "https://purduedex-default-rtdb.firebaseio.com",
  projectId: "purduedex",
  storageBucket: "purduedex.appspot.com",
  messagingSenderId: "136062477717",
  appId: "1:136062477717:web:337a4aac5dd0214281029c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };