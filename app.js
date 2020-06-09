const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDXM_FBLEWgMGLFMbV_nL9ScHBqsE2D9Dk",
    authDomain: "hardinbernhardtranks.firebaseapp.com",
    databaseURL: "https://hardinbernhardtranks.firebaseio.com",
    projectId: "hardinbernhardtranks",
    storageBucket: "hardinbernhardtranks.appspot.com",
    messagingSenderId: "498587943256",
    appId: "1:498587943256:web:979cc52a0053224122a52d",
    measurementId: "G-FHXST7T8VQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
      const firebase = require("firebase");
      // Required for side-effects
      require("firebase/firestore");

      // Initialize Cloud Firestore through Firebase
      firebase.initializeApp({
        apiKey: '### FIREBASE API KEY ###',
        authDomain: '### FIREBASE AUTH DOMAIN ###',
        projectId: '### CLOUD FIRESTORE PROJECT ID ###'
      });

      var db = firebase.firestore();

      db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
      // Add a second document with a generated ID.
      db.collection("users").add({
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });

      db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      });