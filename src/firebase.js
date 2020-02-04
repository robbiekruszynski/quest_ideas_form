import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyCUI8zVrWc2_hlMgxqjInm4WLbw156Cqvs",
  authDomain: "questsuggestionform.firebaseapp.com",
  databaseURL: "https://questsuggestionform.firebaseio.com",
  projectId: "questsuggestionform",
  storageBucket: "questsuggestionform.appspot.com",
  messagingSenderId: "416326099455",
  appId: "1:416326099455:web:9ada8e4fc258363e2047ca",
  measurementId: "G-Q29XSZW480"
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
