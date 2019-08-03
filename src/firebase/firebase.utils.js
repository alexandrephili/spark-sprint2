import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAcrthorfxqWbZK7G9KmJ2yeVICB5-G2sE",
    authDomain: "spark-diary.firebaseapp.com",
    databaseURL: "https://spark-diary.firebaseio.com",
    projectId: "spark-diary",
    storageBucket: "",
    messagingSenderId: "345284954297",
    appId: "1:345284954297:web:84abadcd3a4f0789"
  };

firebase.initializeApp(config);

//!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;