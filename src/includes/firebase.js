import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // firebase/database в старой редакции
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDVhXvgFggX3_PKP-mDTPg1tnGibRjxVTk',
  authDomain: 'music-2fe52.firebaseapp.com',
  projectId: 'music-2fe52',
  storageBucket: 'music-2fe52.appspot.com',
  appId: '1:828473617262:web:fb0e2b7a0a114f9fa4af7f'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch(error => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export { auth, db, usersCollection, songsCollection, storage, commentsCollection };
