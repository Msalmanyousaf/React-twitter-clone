import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAotWd_68dq4BA-U0noKbR4LB24UgG52Bc",
  authDomain: "twitter-clone-dce87.firebaseapp.com",
  projectId: "twitter-clone-dce87",
  storageBucket: "twitter-clone-dce87.appspot.com",
  messagingSenderId: "729909393493",
  appId: "1:729909393493:web:681b585f8b48a50fea7cdc",
  measurementId: "G-6DBV0R72XF",
//   databaseURL: "https://twitter-clone-dce87-default-rtdb.firebaseio.com/"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const db = firebase.database().ref('posts/posts1');

export default db;