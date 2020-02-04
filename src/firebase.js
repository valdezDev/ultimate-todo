import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBFpT7w8la4PaDEX-WkCu-Tf1aN9_otykc",
  authDomain: "ultimate-todo-list-b5c2f.firebaseapp.com",
  databaseURL: "https://ultimate-todo-list-b5c2f.firebaseio.com",
  projectId: "ultimate-todo-list-b5c2f",
  storageBucket: "ultimate-todo-list-b5c2f.appspot.com",
  messagingSenderId: "378380753291",
  appId: "1:378380753291:web:f19c5f621fd7340f03b78e"
});

export { firebaseConfig as firebase };
