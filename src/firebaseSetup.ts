import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDeSVAci34JBgnoc_mpnqb0xAizlUh4kRI",
  authDomain: "waze-project-9a6cf.firebaseapp.com",
  projectId: "waze-project-9a6cf",
  storageBucket: "waze-project-9a6cf.appspot.com",
  messagingSenderId: "626875126490",
  appId: "1:626875126490:web:b479d3cb2db823b3994be3"
  
}; //this is where your firebase app values you copied will go

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();