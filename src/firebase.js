import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC-1CCsWytkkoECiisB5VzzDyQVdanVchg",
  authDomain: "productfeedback-d7ca7.firebaseapp.com",
  projectId: "productfeedback-d7ca7",
  storageBucket: "productfeedback-d7ca7.appspot.com",
  messagingSenderId: "55107020430",
  appId: "1:55107020430:web:8b670c1236cb267b32cbdf",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
