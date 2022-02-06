import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFNM-MxNQml95MEg8pCP6EuY7g6da3McI",
  authDomain: "whatsapp-clone-46899.firebaseapp.com",
  projectId: "whatsapp-clone-46899",
  storageBucket: "whatsapp-clone-46899.appspot.com",
  messagingSenderId: "486728176809",
  appId: "1:486728176809:web:3a46a40d353479e55f45b8",
  measurementId: "G-ZQH128H52B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;