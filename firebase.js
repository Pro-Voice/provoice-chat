import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyArlu6QqfHWznEoCeN0unsvkEmtj8KPNkM",
    authDomain: "provoice-client.firebaseapp.com",
    databaseURL: "https://provoice-client-default-rtdb.firebaseio.com",
    projectId: "provoice-client",
    storageBucket: "provoice-client.appspot.com",
    messagingSenderId: "873807765471",
    appId: "1:873807765471:web:0b36475636ae55265bee6a",
    measurementId: "G-0J7M1ZRQ2X"
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
