// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDhTrTcxiZdCNiPZRyi9sxYQP36z0qvXNU",
    authDomain: "netflix-clone-d53e6.firebaseapp.com",
    projectId: "netflix-clone-d53e6",
    storageBucket: "netflix-clone-d53e6.appspot.com",
    messagingSenderId: "451964451616",
    appId: "1:451964451616:web:db4fb83cb378855c957545",
    
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db