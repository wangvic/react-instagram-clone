import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBxWElFnAkITm7DdCDaaBKnj9FHBGA6zgA',
  authDomain: 'instagram-clone-react-6491b.firebaseapp.com',
  databaseURL: 'https://instagram-clone-react-6491b.firebaseio.com',
  projectId: 'instagram-clone-react-6491b',
  storageBucket: 'instagram-clone-react-6491b.appspot.com',
  messagingSenderId: '852992171859',
  appId: '1:852992171859:web:00b9f1848bb00174604ba6',
  measurementId: 'G-6MMX84NF7G',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
