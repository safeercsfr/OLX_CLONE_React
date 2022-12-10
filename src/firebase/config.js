// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


// const firebaseConfig = {
//     apiKey: "AIzaSyC7O8f3193Xg-mf-hagD20e5ksixdc2Vrs",
//     authDomain: "fir-85d39.firebaseapp.com",
//     projectId: "fir-85d39",
//     storageBucket: "fir-85d39.appspot.com",
//     messagingSenderId: "237860938339",
//     appId: "1:237860938339:web:4ef65e1ba57eef870cce56",
//     measurementId: "G-JEYWF8T1EB"
//   };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgY0yg7AipkGjru-QD9i430HLEWbJRAKM",
  authDomain: "fir-b2309.firebaseapp.com",
  projectId: "fir-b2309",
  storageBucket: "fir-b2309.appspot.com",
  messagingSenderId: "232249400956",
  appId: "1:232249400956:web:2f3a94fd0570e88772f3f9",
  measurementId: "G-DSZF8Z8H5J"
};


  export default firebase.initializeApp(firebaseConfig)