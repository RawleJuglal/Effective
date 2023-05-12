import { process } from "../../env";
import {initializeApp} from "firebase/app";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, push, onValue, remove } from "firebase/database";
import "firebase/database";
import { redirect } from "react-router-dom";

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





const createUser = async (email, password)=>{
    // const db = getDatabase(app)
    // const usersListInDB = ref(db, 'users')
    // push(usersListInDB, {id:userId, username:name, email:email, password:password})
    try{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(`U:${userCredential}`)
                const user = userCredential.user
            })
    } catch(error){
        throw new Error (error.message)
    }
}

const loginUser = async (email, password)=>{
    return null;
}

const logoutUser = ()=>{
    signOut(auth).then(() => {
        console.log('you successfully logged out')
        return redirect(`/`)
    }).catch((error) => {
        throw new Error (error.message)
    });
}


export {createUser, loginUser, logoutUser};