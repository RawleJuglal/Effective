import { process } from "../../env";
import {initializeApp} from "firebase/app";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { getDatabase, ref, push, remove} from "firebase/database";
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
const db = getDatabase(app)
const todoListInDB = ref(db, 'todoListEffective')


//SignUp
const createUser = async (name, email, password)=>{
    try{
       createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(userCredential.user.auth.currentUser,{
                    displayName: name
                })
            })
    } catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error({errorCode, errorMessage})
    }
}
//SignIn
const loginUser = async (email, password)=>{
    try {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                return user;
            })
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error({errorCode, errorMessage})
    }
}
//SignOut
const logoutUser = async()=>{
    signOut(auth).then(() => {
        console.log('you successfully logged out')
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error({errorCode, errorMessage})
    });
}
//Add to DB
const handleAddItemToList = (item)=>{
    if(item !== ''){
        push(todoListInDB, item)
    }
}

const handleRemoveItemFromList = (item)=>{
    console.log(item.target.id)
        let exactLocationOfItemInDB = ref(db, `todoListEffective/${item.target.id}`)
        remove(exactLocationOfItemInDB)   
}


export {createUser, loginUser, logoutUser, handleAddItemToList, handleRemoveItemFromList, todoListInDB, };