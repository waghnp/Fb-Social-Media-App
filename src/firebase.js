import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA7MmhOe253uwJe5Gkx0SXi3pGaGS6srNU",
    authDomain: "fb-mern-57262.firebaseapp.com",
    databaseURL: "https://fb-mern-57262.firebaseio.com",
    projectId: "fb-mern-57262",
    storageBucket: "fb-mern-57262.appspot.com",
    messagingSenderId: "399743217200",
    appId: "1:399743217200:web:9d9ba9d10d915d132f47f5"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;