import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBsj34FRfwiB02nRxJYHJF-xFFQ1tLWOL8',
  authDomain: 'instagram-699f3.firebaseapp.com',
  projectId: 'instagram-699f3',
  storageBucket: 'instagram-699f3.appspot.com',
  messagingSenderId: '783892788985',
  appId: '1:783892788985:web:83d5adffd8f394ee911428'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE!!!) - Already did it (Eduardo)
// seedDatabase(firebase);

export { firebase, FieldValue };
