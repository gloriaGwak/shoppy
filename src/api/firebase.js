import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, remove } from "firebase/database";
import { v4 as uuid } from 'uuid';
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
    .then((snapshot) => {
        if(snapshot.exists()){
            const admins = snapshot.val();
            const isAdmin = admins.includes(user.uid);
            return {...user, isAdmin};
        }
        return user;
    })
}

export async function addNewProduct(product, images){
    const id = uuid();
    
    return set(ref(database, `products/${uuid()}`), {
        ...product,
        id,
        price: parseInt(product.price),
        images
    });
}

export async function getProducts(){
    return get(ref(database, 'products'))
    .then((snapshot) => {
        if(snapshot.exists()){
            return Object.values(snapshot.val());
        }
        return [];
    })
}

export async function addOrUpdateToCart(user,product){
    return set(ref(database, `carts/${user}/${product.id}`), product);
}

export async function removeFromCart(user,productId){
    return remove(ref(database, `carts/${user}/${productId}`));
}

export async function getCarts(uid){
    return get(ref(database, `carts/${uid}`))
    .then((snapshot) => {
        const items = snapshot.val() || {};
        return Object.values(items);
    })
}
