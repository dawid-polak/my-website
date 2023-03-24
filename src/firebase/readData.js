import firebase from './config.js'
import { doc, getDoc } from "firebase/firestore"


const readData = async (lang, component) => {

    const { db } = firebase();

    const docRef = doc(db, lang, component);
    const docSnap = await getDoc(docRef); 
    
    const data = docSnap.data();

    return {data};

}

export default readData;