import firebase from 'firebase/app';
import 'firebase/auth';


const app = firebase.initializeApp({
    apiKey: "AIzaSyAxFG_fihAq5ts-96OODNmI-gTxQ3SudB4",
    authDomain: "sweet-shop123.firebaseapp.com",
    databaseURL: "https://sweet-shop123-default-rtdb.firebaseio.com",
    projectId: "sweet-shop123",
    storageBucket: "sweet-shop123.appspot.com",
    messagingSenderId: "743598174982",
    appId: "1:743598174982:web:18288d759cc7ef38842487"
})


    

export const auth = app.auth();

export default app;

