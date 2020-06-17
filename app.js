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
    division: "V",
    rank: 1200
})

db.collection("teams").doc("MillburnAV").set({
    name: "Millburn A",
    state: "New Jersey",
    division: "V",
    rank: 1200
})

updaterRef=db.collection("teams").doc("HunterAV");

var docRef = db.collection("teams").doc("MillburnAV");

/*
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data().state);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});*/

let evalV;
let evalJV;
let evalMS;

let teamAvgV = [];
let teamAvgJV = [];
let teamAvgMS = [];
let teamAvgCV = [];
let teamAvgCJV = [];
let teamAvgCMS = [];
let teamAvgBV = [];
let teamAvgBJV = [];
let teamAvgAV = [];
let teamAvgAJV = [];
let teamAvgAMS = [];
let teamAvgPrV = [];
let teamAvgPrJV = []
let teamAvgPlV = [];
let teamAvgPlJV = [];
let q = 0;
let t = [];
let avgT = 0;
//let r = [];
//let avgR = 0;

//K Rank
//C Set = 100
//B Set = 50
//A Set = 25
//Nats Prelims = 20
//Nats Playoffs = 10
K=100;

//test if 2 teams are in a div
async function includes(A,B,div) {
    let docRefA = await db.collection("teams").doc(A);
    let docRefB = await db.collection("teams").doc(B);
    await docRefA.get().then(function(doc) {
    if (doc.exists) {
        let divA = doc.data().division;
        docRefB.get().then(function(doc) {
            if (doc.exists) {
                let divB = doc.data().division;
                if (divA == div && divB == div) {
                    if (div == "V") {
                        evalV = true;
                    }
                    else if (div == "JV") {
                        evalJV = true;
                    }
                    else {
                        evalMS = true;
                    }
                }
                else {
                    if (div == "V") {
                        evalV = false;
                    }
                    else if (div == "JV") {
                        evalJV = false;
                    }
                    else {
                        evalMS = false;
                    }
                }
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

//Calculate expected score
async function cExpScore(A,B){
    var docRefA = await db.collection("teams").doc(A);
    var docRefB = await db.collection("teams").doc(B);
    docRefA.get().then(function(doc) {
        if (doc.exists) {
            var rankA=doc.data().rank;
            docRefB.get().then(function(doc) {
                if (doc.exists) {
                    var rankB=doc.data().rank;   
                    let expScore;
                    //If A is lower
                    if (rankA<rankB){
                        expScore = 1/(1+(Math.E^((rankB-rankA)/400)));
                    }
                    //If B is lower
                    else if (rankB<rankA){
                        expScore = 1-1/(1+(Math.E^((rankA-rankB)/400)));
                    }
                    //If tie
                    else {
                        expScore = 0.5;
                    };
                    return(expScore);
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
};

//calculate new ranks
async function newRank(A, B, AScore, BScore) {
    //Calculate exp scores
    expScoreA = cExpScore(A,B);
    expScoreB = cExpScore(B,A);

    //Update t value
    t.push((AScore/(AScore+BScore))/expScoreA);
    t.push((BScore/(AScore+BScore))/expScoreB);
    let sumT = 0;
    let l;
    let tLen = t.length;
    for(l = 0; l < tLen; l++){
        sumT += parseInt(t[l],10);
    };
    avgT = sumT/t.length;
    await includes(A,B,"V");
    await includes(A,B,"JV");
    await includes(A,B,"MS");
    //C-Set games
    if (K == 100 && evalV == true) {
        //update q value
        teamAvgV.push(AScore,BScore);
        teamAvgCV.push(AScore,BScore);
        let sumCV = 0;
        let m;
        let teamAvgCVLen = teamAvgCV.length;
        for(m = 0; m < teamAvgCVLen; m++){
            sumCV += parseInt(teamAvgCV[m],10);
        };
        let avgCV = sumCV/teamAvgCV.length;
        let sum = 0;
        let n;
        let teamAvgVLen = teamAvgV.length;
        for(n = 0; n < teamAvgVLen; n++){
            sum += parseInt(teamAvgV[n],10);
        };
        let avgV = sum/teamAvgV.length;
        q = avgV/avgCV;
        nRank(A,B,AScore,BScore);
    }
    else if (K == 100 && evalJV == true) {
        //update q value
        teamAvgJV.push(AScore,BScore);
        teamAvgCJV.push(AScore,BScore);
        let sumCJV = 0;
        let o;
        let teamAvgCJVLen = teamAvgCJV.length;
        for(o = 0; o < teamAvgCJVLen; o++){
            sumCJV += parseInt(teamAvgCJV[o],10);
        };
        let avgCJV = sumCJV/teamAvgCJV.length;
        let sum = 0;
        let p;
        let teamAvgJVLen = teamAvgJV.length;
        for(p = 0; p < teamAvgJVLen; p++ ){
            sum += parseInt(teamAvgJV[p],10);
        };
        let avgJV = sum/teamAvgJV.length;
        q = avgJV/avgCJV;
        nRank(A,B,AScore,BScore);
    }
    else if (K == 100 && evalMS == true) {
        //update q value
        teamAvgMS.push(AScore,BScore);
        teamAvgCMS.push(AScore,BScore);
        let sumCMS = 0;
        let r;
        let teamAvgCMSLen = teamAvgCMS.length;
        for(r = 0; r < teamAvgCMSLen; r++){
            sumCMS += parseInt(teamAvgCMS[r],10);
        };
        let avgCMS = sumCMS/teamAvgCMS.length;
        let sum = 0;
        let s;
        let teamAvgMSLen = teamAvgMS.length;
        for(s = 0; s < teamAvgMSLen; s++ ){
            sum += parseInt(teamAvgMS[s],10);
        };
        let avgMS = sum/teamAvgMS.length;
        q = avgMS/avgCMS;
        nRank(A,B,AScore,BScore);
    }
    else {
        console.log("huh?");
    }
};  

function nRank(A,B,AScore,BScore){
    A.rank = A.rank + q*K*((AScore/((AScore+BScore)*avgT))-expScoreA);
    B.rank = B.rank + q*K*((BScore/((AScore+BScore)*avgT))-expScoreB);
}

newRank("HunterAV","MillburnAV",280,140);


/*
db.collection("teams").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});*/
