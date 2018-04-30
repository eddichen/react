import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAL1nZAOb99xBVZfJJUjL1VQQIGiS5vNQU",
    authDomain: "catch-of-the-day-eddichen.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-eddichen.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;