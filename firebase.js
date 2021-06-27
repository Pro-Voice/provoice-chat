import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDxBUSO_aUfUKKKy6MYnnz2jkYNigQo7xE",
    authDomain: "signal-clone-c974b.firebaseapp.com",
    projectId: "signal-clone-c974b",
    storageBucket: "signal-clone-c974b.appspot.com",
    messagingSenderId: "678692806749",
    appId: "1:678692806749:web:2271fdf4a98b58a8802db4"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth }