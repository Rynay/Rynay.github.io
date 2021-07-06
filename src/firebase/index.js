import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCRa2fSH2aZUcfbe5rG6z3masAnNKq9lV8',
  authDomain: 'portfolio-5bc85.firebaseapp.com',
  projectId: 'portfolio-5bc85',
  storageBucket: 'portfolio-5bc85.appspot.com',
  messagingSenderId: '1002807383108',
  appId: '1:1002807383108:web:851431916e275728f29811',
  measurementId: 'G-6Q10SG35HD',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
