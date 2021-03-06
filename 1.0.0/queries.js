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

//Print ranked teams in a specific division
function printRanks(div){
    //let teamsRef = db.collection("teams");
    //console.log(teamsRef.where("division","==",div).orderBy("rank").limit(10));
    db.collection("teams").where("division", "==", div).orderBy("rank","desc").limit(10)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
}
printRanks("Varsity");
printRanks("Junior Varsity");
printRanks("Middle School");