// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-CgHFrfvqRIi0_gGcfFpT90LWz9U5AGI",
  authDomain: "khp-media.firebaseapp.com",
  projectId: "khp-media",
  storageBucket: "khp-media.appspot.com",
  messagingSenderId: "63492437214",
  appId: "1:63492437214:web:8be0d1109ec3f1fa663e4f",
  measurementId: "G-RCQDP22MY5"
};

// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);
function uploadImage() {
   const ref = firebase.storage().ref();
   const file = document.querySelector("#photo").files[0];
   const name = +new Date() + "-" + file.name;
   const metadata = {
      contentType: file.type
   };
   const task = ref.child(name).put(file, metadata);task
   .then(snapshot => snapshot.ref.getDownloadURL())
   .then(url => {
   console.log(url);
   alert('image uploaded successfully');
   document.querySelector("#image").src = url;
})
.catch(console.error);
}
const errorMsgElement = document.querySelector('span#errorMsg');




