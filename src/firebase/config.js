import { initializeApp } from "firebase/app";
import { FieldPath, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrsaEelOUrGP_uojzFhH0cHOojLfksOVM",
  authDomain: "polak-dawid.firebaseapp.com",
  projectId: "polak-dawid",
  storageBucket: "polak-dawid.appspot.com",
  messagingSenderId: "300658947898",
  appId: "1:300658947898:web:d114517a86a338bcd7c203"
};


const firebase = () => {

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    return { app, db}
}


export default firebase;