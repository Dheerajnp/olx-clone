
// import {firebase} from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDoof5o5XsQUpfqwZBYkjSqhQOZqg66zFM",
    authDomain: "olx-clone-a4df1.firebaseapp.com",
    projectId: "olx-clone-a4df1",
    storageBucket: "olx-clone-a4df1.appspot.com",
    messagingSenderId: "261755954586",
    appId: "1:261755954586:web:392c9106b95f5fa6c50623",
    measurementId: "G-4QJ5QYR1LK"
  };

  export default initializeApp(firebaseConfig);
  export const auth = getAuth(initializeApp(firebaseConfig))
  export const firebase = getFirestore(initializeApp(firebaseConfig))