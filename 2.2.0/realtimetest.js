/*var admin = require("firebase-admin");

var serviceAccount = require("./hardinbernhardtranks-170e9a2580ff.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hardinbernhardtranks.firebaseio.com"
});
*/


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const database = firebase.database();

/*firebase.database().ref.child("games").on("value", function(snapshot) {
    console.log("There are "+snapshot.numChildren()+" games");
})*/

let A;
let B;
let AScore;
let BScore;

async function games(){
    for(let Id = 1; Id < 15; Id++) {
        await firebase.database().ref('1by_pavmhgpNXhU2bY4SsxgA9oxH6xgHfVF27JGZwo1I/Games/' + Id).once('value').then(function(snapshot) {
            A = (snapshot.val() && snapshot.val().A);
            //console.log(A);
        });
        await firebase.database().ref('1by_pavmhgpNXhU2bY4SsxgA9oxH6xgHfVF27JGZwo1I/Games/' + Id).once('value').then(function(snapshot) {
            AScore = (snapshot.val() && snapshot.val().AScore)
            //console.log(AScore);
        });
        await firebase.database().ref('1by_pavmhgpNXhU2bY4SsxgA9oxH6xgHfVF27JGZwo1I/Games/' + Id).once('value').then(function(snapshot) {
            B = (snapshot.val() && snapshot.val().B)
        });
        await firebase.database().ref('1by_pavmhgpNXhU2bY4SsxgA9oxH6xgHfVF27JGZwo1I/Games/' + Id).once('value').then(function(snapshot) {
            BScore = (snapshot.val() && snapshot.val().BScore)
        });
        await console.log(A,AScore,B,BScore);
    }
        
    /*
    return firebase.database().ref('/games/' + userId).once('A').then(function(snapshot) {
    A = (snapshot.val() && snapshot.val().A);
    B = (snapshot.val() && snapshot.val().B);
    ScoreA = (snapshot.val() && snapshot.val().ScoreA);
    ScoreB = (snapshot.val() && snapshot.val().ScoreB);
    });*/
};
games();
