import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {

    apiKey: "AIzaSyC0Jnp59M_mNYe4OIvU6tBkiWFyr2u1I_4",

    authDomain: "linkden-clone-8a523.firebaseapp.com",

    projectId: "linkden-clone-8a523",

    storageBucket: "linkden-clone-8a523.appspot.com",

    messagingSenderId: "548419044517",

    appId: "1:548419044517:web:b4937d70ea75154c2af94c"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };