import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut, 
    onAuthStateChanged 
} from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export async function login() {
    signInWithPopup(auth, provider)
    .catch(console.error);
}

export function logout() {
    signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
    onAuthStateChanged(auth, async (user) => {
        const updatedUser = user ? await adminUser(user) : null;
        callback(updatedUser);
    });
}

async function adminUser(user){
    return get(ref(database, 'admins'))
    .then((snapshop) => {
        if(snapshop.exists()){
            const admins = snapshop.val();
            const isAdmin = admins.includes(user.uid);
            return {...user, isAdmin};
        }
        return user;
    })
}