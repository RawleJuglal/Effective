import { process } from "../../env";
import {initializeApp} from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, push, onValue, remove } from "firebase/database";
import "firebase/database";

const firebaseConfig = {
    apiKey: process.env.OPENAI_API_KEY,
    authDomain: "realtime-database-a7c40.firebaseapp.com",
    databaseURL: "https://realtime-database-a7c40-default-rtdb.firebaseio.com",
    projectId: "realtime-database-a7c40",
    storageBucket: "realtime-database-a7c40.appspot.com",
    messagingSenderId: "996821305117",
    appId: "1:996821305117:web:d004dfa1cdbbd9ee8e03f4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



const writeUserData = async (userId, name, email, password)=>{
    const db = getDatabase(app)
    set(ref(db, 'users/'+ userId), {
        username:name,
        email:email,
        password:password
    })

}

export {auth, writeUserData};