import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBFRSRikdRwN56EThgs9Ti7Az4zeUCJjVU",
    authDomain: "human-resources-cb42b.firebaseapp.com",
    databaseURL: "https://human-resources-cb42b.firebaseio.com",
    projectId: "human-resources-cb42b",
    storageBucket: "human-resources-cb42b.appspot.com",
    messagingSenderId: "667612244001"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  //export firestore 
  export default firebaseApp.firestore();
  
