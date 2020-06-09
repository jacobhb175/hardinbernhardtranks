/*
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
*/


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXM_FBLEWgMGLFMbV_nL9ScHBqsE2D9Dk",
    authDomain: "hardinbernhardtranks.firebaseapp.com",
    databaseURL: "https://hardinbernhardtranks.firebaseio.com",
    projectId: "hardinbernhardtranks",
    storageBucket: "hardinbernhardtranks.appspot.com",
    messagingSenderId: "498587943256",
    appId: "1:498587943256:web:979cc52a0053224122a52d",
    measurementId: "G-FHXST7T8VQ"
};
//firebase.initializeApp(firebaseConfig);
//firebase.analytics();

//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyDXM_FBLEWgMGLFMbV_nL9ScHBqsE2D9Dk',
    authDomain: 'hardinbernhardtranks.firebaseapp.com',
    projectId: 'hardinbernhardtranks'
});
  
var db = firebase.firestore();

db.collection("teams").doc("HunterAV").set({
    name: "Hunter A",
    state: "New York",
    division: "Varsity",
    rank: 1200
})

db.collection("teams").doc("MillburnCJV").set({
    name: "Millburn C",
    state: "New Jersey",
    division: "Junior Varsity",
    rank: 1200
})

updaterRef=db.collection("teams").doc("HunterAV");

function newRank(team1,team2,score1,score2) {
    updaterRef=db.collection("teams").doc(team1);
    return updaterRef.update({
        rank: 1500
    })
    .then(function() {
        console.log("updated");
    })
}

newRank("HunterAV",2,3,4);

var docRef = db.collection("teams").doc("HunterAV");

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

console.log(db.collection("teams").doc("HunterAV").name);
//console.log(db.collection("teams").doc("Millburn C").name);


db.collection("teams").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
