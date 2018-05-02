import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDjlkOVUVtJUpjsflxGgk7G1_7j9BDkemw",
  authDomain: "where-to-lunch.firebaseapp.com",
  databaseURL: "https://where-to-lunch.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;
