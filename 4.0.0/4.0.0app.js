

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const database = firebase.database();
db.collection("nhbbteams").doc("Hunter A").set({
    name:"Hunter A",
    state:"New York",
    division:"Varsity",
    rank:1200,
    games:0,
    RD:350,
    sigma:0.06
})
db.collection("nhbbtournaments").doc("NEFLV").set({
    opsNum:126,
    division:"Varsity"
}),
db.collection("nhbbtournaments").doc("NEFLJ").set({
    opsNum:68,
    division:"Junior Varsity"
}),
db.collection("nhbbtournaments").doc("MWFLV").set({
    opsNum:41,
    division:"Varsity"
}),
db.collection("nhbbtournaments").doc("MWFLJ").set({
    opsNum:20,
    division:"Junior Varsity"
}),
db.collection("nhbbtournaments").doc("WEFLV").set({
    opsNum:46,
    division:"Varsity"
}),
db.collection("nhbbtournaments").doc("WEFLJ").set({
    opsNum:34,
    division:"Junior Varsity"
}),
db.collection("nhbbtournaments").doc("SEFLV").set({
    opsNum:58,
    division:"Varsity"
}),
db.collection("nhbbtournaments").doc("SEFLJ").set({
    opsNum:34,
    division:"Junior Varsity"
}),
db.collection("nhbbtournaments").doc("213WLV").set({
    opsNum:110,
    division:"Varsity"
}),
db.collection("nhbbtournaments").doc("213WLJ").set({
    opsNum:54,
    division:"Junior Varsity"
}),
db.collection("nhbbtournaments").doc("215WLV").set({
    opsNum:59,
    division:"Varsity"
}),
db.collection("nhbbtournaments").doc("215WLJ").set({
    opsNum:30,
    division:"Junior Varsity"
}),
db.collection("nhbbtournaments").doc("221WLV").set({
    opsNum:142,
    division:"Varsity"
}),
db.collection("nhbbtournaments").doc("221WLJ").set({
    opsNum:83,
    division:"Junior Varsity"
}),
db.collection("nhbbtournaments").doc("227WLV").set({
    opsNum:87,
    division:"Varsity"
}),
db.collection("nhbbtournaments").doc("227WLJ").set({
    opsNum:19,
    division:"Junior Varsity"
}),
db.collection("nhbbtournaments").doc("SSV").set({
    opsNum:105,
    division:"Varsity"
}),
db.collection("nhbbtournaments").doc("SSJ").set({
    opsNum:31,
    division:"Junior Varsity"
}),
db.collection("nhbbtournaments").doc("417SLV").set({
    opsNum:39,
    division:"Varsity"
}),
db.collection("nhbbtournaments").doc("417SLJ").set({
    opsNum:33,
    division:"Junior Varsity"
}),
db.collection("nhbbtournaments").doc("424SLV").set({
    opsNum:132,
    division:"Varsity"
}),
db.collection("nhbbtournaments").doc("424SLJ").set({
    opsNum:59,
    division:"Junior Varsity"
})

let evalV;
let evalJV;
let expScore;
let expScoreA;
let expScoreB;

let teamAvg = [];
let all = [];
let allAvg = [];

let allV = [];
let allJ = [];
let teamAvgC = [];
let teamAvgB = [];
let teamAvgA = [];

let CSET = false;
let BSET = false;
let ASET = false;

let tDivision;

let a = 0;

let q = 0;
let y = false;
let qV = [];
let qJ = [];
let z = 0;

let artemis = [];
const artemisTF = true;

let tnmtq = 1;
let setq = 1;

let AoverABminusEA;
let BoverABminusEB;
let AoverAB;
let BoverAB;

let gamesA = 0;
let gamesB = 0;
let totalGamesA = 0;
let totalGamesB = 0;

let allGameInfo = [];

let sigma;
let tau;
let epsilon = 0.000001;
let r = 0.75;

let eloChance = [];

/*let teamAvgPlayoffs = [];
let teamAvgConsolation = [];
let pDiff = 1;
let cDiff = 1;
let allPlayoffs = [];
let allConsolation = [];
let consolation = false;*/

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}/*
sum = array.reduce((pv, cv) => pv + cv, 0);
sigmaCalculation(1, 4, function(x) { return 2 * x + 1; });
function sigma(start, end, modifier) {
    const length = end - start + 1;
    const map = (v, k) => modifier ? modifier(k + start) : k + start;
    const sum = (a, b) => a + b;
  
    return Array.from({ length }, map).reduce(sum);
}*/

async function inputTournament(tournamentId){
    var docRefTournament = db.collection("nhbbtournaments").doc(tournamentId);
    await docRefTournament.get().then(async function(doc) {
        if(doc.exists) {
            let opsNum=doc.data().opsNum;
            playoffTeams=doc.data().playoffTeams;
            tDivision=doc.data().division;
            await gameData(1,opsNum,tournamentId);
            if(y==false){
                console.log("work"+y+tournamentId);
                await all.push(teamAvg);
                /*await allPlayoffs.push(teamAvgPlayoffs);
                await allConsolation.push(teamAvgConsolation);
                console.log(tournamentId,all,allPlayoffs,allConsolation);*/
                teamAvg = [];
            }
            else if(y==true){
                console.log("q",tournamentId,tnmtq,setq);
            }
            allGameInfo = [];
            /*teamAvgPlayoffs = [];
            teamAvgConsolation = [];*/
            /*CSET = false;
            BSET = false;*/
            a+=1;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!"+A);
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

async function games(A,B) {
    if (y == true) {
        var docRefA = db.collection("nhbbteams").doc(A);
        var docRefB = db.collection("nhbbteams").doc(B);
        await docRefA.get().then(async function(doc) {
            if (doc.exists) {
                let gamesA=doc.data().games;
                await docRefB.get().then(async function(doc) {
                    if (doc.exists) {
                        let gamesB=doc.data().games;
                        console.log("games",A,B,gamesA,gamesB);
                        gamesA = gamesA + 1;
                        gamesB = gamesB + 1;
                        console.log("games",A,B,gamesA,gamesB);
                        db.collection("nhbbteams").doc(A).update({games:gamesA});
                        db.collection("nhbbteams").doc(B).update({games:gamesB});
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!"+B);
                    }
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!"+A);
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
}

async function cExpScore(A,B){
    var docRefA = db.collection("nhbbteams").doc(A);
    var docRefB = db.collection("nhbbteams").doc(B);
    await docRefA.get().then(async function(doc) {
        if (doc.exists) {
            let rankA=doc.data().rank;
            await docRefB.get().then(async function(doc) {
                if (doc.exists) {
                    let rankB=doc.data().rank; /*
                    //If A is lower
                    if (rankA<rankB){
                        expScoreA = 1/(1+(10**((rankB-rankA)/400)));
                    }
                    //If B is lower
                    else if (rankB<rankA){
                        expScore = 1-1/(1+(10**((rankA-rankB)/400)));
                    }
                    //If tie
                    else {
                        expScore = 0.5;
                    };*/
                    expScoreA = 1/(1+(10**((rankB-rankA)/400)));
                    expScoreB = 1/(1+(10**((rankA-rankB)/400)));

                    if(artemisTF==true){
                        console.log(A,B,"expSA",expScoreA,"expSB",expScoreB);
                    }
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!"+B);
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!"+A);
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
};

async function newRank(A,B,AScore,BScore) {
    if(AScore=="Forfeit"||BScore=="Forfeit"||AScore=="FORFEIT"||BScore=="FORFEIT"||AScore=="Bye"||BScore=="Bye"||AScore=="BYE"||BScore=="BYE"||A=="Bye"||B=="Bye"||A=="BYE"||B=="BYE"||AScore=="-"||A=="Forfeit"||B=="Forfeit"){
        //console.log(A,B,AScore,BScore);
        return;
    }
    else if(AScore=="Forfeit"||BScore=="Forfeit"||A==null||B==null||A=="Bye"||B=="Bye"){
        //console.log(A,B,AScore,BScore);
        return;
    }
    else if(A=="consolation"||AScore=="consolation"||B=="consolation"||BScore=="consolation"){
        return;
    }
    else if(A=="consolation"||AScore=="consolation"||B=="consolation"||BScore=="consolation"){
        return;
    }
    await console.log("newRank1",A,B,parseInt(AScore),parseInt(BScore));
    var docRefA = db.collection("nhbbteams").doc(A);
    var docRefB = db.collection("nhbbteams").doc(B);
    await docRefA.get().then(async function(doc) {
        if (doc.exists) {
        } else {
            db.collection("nhbbteams").doc(A).set({
                name:A,
                rank:1200,
                games:0,
                RD:350,
                division:tDivision
            });
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    await docRefB.get().then(async function(doc) {
        if (doc.exists) {
        } else {
            db.collection("nhbbteams").doc(B).set({
                name:B,
                rank:1200,
                games:0,
                RD:350,
                division:tDivision
            });
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    await games(A,B);
    //await console.log("newRank2",A,B,AScore,BScore);
    if (y == false){
        //console.log("yfalse"+y);
        //check set and update arrays
        if (CSET==true){
            teamAvgC.push(parseInt(AScore),parseInt(BScore));
        }
        else if (BSET==true){
            teamAvgB.push(parseInt(AScore),parseInt(BScore));
        }
        else if (ASET==true){
            teamAvgA.push(parseInt(AScore),parseInt(BScore));
        }
        allAvg.push(parseInt(AScore),parseInt(BScore));
        teamAvg.push(parseInt(AScore),parseInt(BScore));
        //check if in playoffs/conso and check which
        /*if(Round>5){
            consolation = true;
            for (let j = 0; j < playoffTeams.length; j++) {
                if(A==playoffTeams[j]||B==playoffTeams[j]){
                    consolation = false;
                }    
            }
            if(consolation==true){
                console.log("Consolation",A,B);
                teamAvgConsolation.push(AScore,BScore);
            }
            else if(consolation==false){
                console.log("Playoff Game",A,B)
                teamAvgPlayoffs.push(AScore,BScore);
            }
        }*/
    }
    else if (y == true){
        //console.log("ytrue"+y);
        let aAvg = average(allAvg);
        let CAvg = average(teamAvgC);
        console.log("aAvg",aAvg,"CAvg",CAvg);
        if (CSET == true){
            console.log(tnmtAvg = average(all[a]));
            console.log(tnmtq = tnmtAvg/(CAvg)); 
        }
        else if (BSET == true){
            console.log("BAvg",BAvg = average(teamAvgB));
            console.log("aB",aB = BAvg/CAvg);
            console.log("tnmtAvg",tnmtAvg = average(all[a]));
            console.log("tnmtq",tnmtq = tnmtAvg/BAvg); 
        }
        else if (ASET == true){
            console.log("AAvg",AAvg = average(teamAvgA));
            console.log("aA",aA = AAvg/CAvg);
            console.log("tnmtAvg",tnmtAvg = average(all[a]));
            console.log("tnmtq",tnmtq = tnmtAvg/aAvg); 
            console.log(tnmtAvg = average(all[a]));
            console.log(tnmtq = tnmtAvg/(AAvg)); 
        }
        /*if(Round>5){
            consolation = true;
            for (let j = 0; j < playoffTeams.length; j++) {
                if(A==playoffTeams[j]||B==playoffTeams[j]){
                    consolation = false;
                    console.log("Playoff Game",A,B)
                }     
            }
            if(consolation==true){
                cAvg = average(allConsolation[a]);
                cDiff = cAvg/tnmtAvg;
                console.log("cAvg,tnmtAvg,cDiff",cAvg,tnmtAvg,cDiff);
            }
            else if(consolation==false){
                pAvg = average(allPlayoffs[a]);
                pDiff = pAvg/tnmtAvg;
                console.log("pAvg,tnmtAvg,pDiff",pAvg,tnmtAvg,pDiff);
            }
        }*/
        console.log("q",tnmtq,setq);
        nRank(A,B,AScore,BScore);
    }
}

async function nRank(A,B,AScore,BScore){
    //Update games played
    var docRefA = db.collection("nhbbteams").doc(A);
    var docRefB = db.collection("nhbbteams").doc(B);
    await docRefA.get().then(async function(doc) {
        if(doc.exists) {
            let rankA=doc.data().rank;
            let gamesA=doc.data().games;
            //let totalGamesA=doc.data().totalGames;
            //let RDA=doc.data().RD;
            //console.log("rankA",rankA);
            await docRefB.get().then(async function(doc) {
                if(doc.exists) {
                    let rankB=doc.data().rank; 
                    let gamesB=doc.data().games;
                    //let RDB=doc.data().RD;const

                    AoverAB = (parseInt(AScore)/(parseInt(AScore)+parseInt(BScore)));
                    BoverAB = (parseInt(BScore)/(parseInt(AScore)+parseInt(BScore)));

                    //collecting eloDiff-win correlation data
                    let eloDiffAbs = Math.abs((rankA-rankB));
                    let gameResult;
                    if(rankA>rankB){
                        gameResult = 1;
                    }
                    else if(rankB<rankA){
                        gameResult = 0;
                    }
                    if(gamesA>0&&gamesB>0){
                        eloChance.push({eloDiff:eloDiffAbs,winLoss:gameResult,pointsResult:AoverAB});
                    }

                    //Updating game numbers
                    if(gamesA<1){
                        gamesA = 1;
                        db.collection("nhbbteams").doc(A).update({games:gamesA});
                    }     
                    if(gamesB<1){
                        gamesB = 1;
                        db.collection("nhbbteams").doc(B).update({games:gamesB});
                    }

                    /*q2 = 1;
                    if(consolation==false&&Round>5){
                        q2 = pDiff;
                    }
                    else if(consolation==true&&Round>5){
                        q2 = cDiff;
                    }*/

                    //Glicko game weighting
                    /*if(typeof(RDA)=="undefined"){
                        RDA=350
                    }
                    if(typeof(RDB)=="undefined"){
                        RDB=350
                    }
                    let c=Math.sqrt((350*350-50*50)/100);
                    console.log("c",c);
                    let t=gamesA;
                    console.log("t",t);
                    console.log("RDA",RDA);
                    let nRDA=(Math.sqrt(RDA*RDA+c*c*t*5));
                    console.log("RDA",nRDA);
                    RDA = (350-nRDA)+RDA;
                    RDA=Math.min(RDA,350);
                    if(RDA<1){
                        RDA = 1;
                    }
                    console.log("RDA",RDA);
                    db.collection("nhbbteams").doc(A).update({RD:RDA});
                    t=gamesB;
                    console.log("t",t);
                    console.log("RDB",RDB);
                    let nRDB=Math.sqrt(RDB*RDB+c*c*t*5);
                    console.log("RDB",nRDB);
                    RDB = (350-nRDB)+RDB;
                    RDB=Math.min(RDB,350);
                    if(RDB<1){
                        RDB = 1;
                    }
                    console.log("RDB",RDB);
                    db.collection("nhbbteams").doc(B).update({RD:RDB});
                    */

                    let Ka = 800/(gamesA+10);
                    let Kb = 800/(gamesB+10);

                    await cExpScore(A,B);

                    //final calculations
                    console.log("A,rankA,B,rankB",A,rankA,B,rankB);
                    console.log("A,B,AScore,BScore",A,B,AScore,BScore);
                    console.log("q",q,"expScoreA",expScoreA);
                    console.log("AScore",AScore,"BScore",BScore,"AScore+BScore",parseInt(AScore)+parseInt(BScore),"AScore/(AScore+BScore)",AoverAB);
                    if(AoverAB == expScoreA){
                        console.log("if AoverABminusEA")
                        AoverABminusEA = 0;
                        BoverABminusEB = 0;
                    }
                    else if((AoverAB-expScoreA) <= 0.00001 && (AoverAB-expScoreA) >= -0.00001){
                        console.log("if AoverABminusEA tiny")
                        AoverABminusEA = 0;
                        BoverABminusEB = 0;
                    }
                    else {
                        //console.log("q2",q2);
                        AoverABminusEA = (AoverAB*tnmtq)-expScoreA;
                        BoverABminusEB = (BoverAB*tnmtq)-expScoreB;
                    }
                    console.log("AoverABminusEA",AoverABminusEA,"BoverABminusEB",BoverABminusEB);
                    //console.log("q",q,"Ka",Ka,"Kb",Kb)
                    let rankAN = rankA + ((AoverABminusEA)*Ka);// /(1/(RDA*RDA)));
                    let rankBN = rankB + ((BoverABminusEB)*Kb);// /(1/(RDB*RDB)));
                    /*if(rankA>rankB){
                        if(rankAN<(rankBN+(100*((parseInt(AScore)-parseInt(BScore))/(parseInt(AScore)+parseInt(BScore)))))){
                            rankAN = (rankBN+(100*(parseInt(AScore)-parseInt(BScore))/(parseInt(AScore)+parseInt(BScore))));
                        }
                        if(rankBN>(rankAN-(100*(parseInt(AScore)-parseInt(BScore))/(parseInt(AScore)+parseInt(BScore))))){
                            rankBN = (rankAN-(100*(parseInt(AScore)-parseInt(BScore))/(parseInt(AScore)+parseInt(BScore))));
                        }
                    }*/

                    console.log("A,rankA,B,rankB",A,rankAN,B,rankBN);
                    console.log("rankA,rankB ",rankAN,rankBN);
                    console.log("rankAB",rankAN,rankBN);

                    //update rank
                    db.collection("nhbbteams").doc(A).update({rank:rankAN});
                    db.collection("nhbbteams").doc(B).update({rank:rankBN}); 

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!"+B);
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!"+A);
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

async function gameData(startId,endId,tournamentId){
    for(let Id = startId; Id < endId; Id++) {
        await firebase.database().ref('1by_pavmhgpNXhU2bY4SsxgA9oxH6xgHfVF27JGZwo1I/'+tournamentId+'/'+Id).once('value').then(function(snapshot) {
            A = (snapshot.val() && snapshot.val().A);
            //console.log(A);
        });
        await firebase.database().ref('1by_pavmhgpNXhU2bY4SsxgA9oxH6xgHfVF27JGZwo1I/'+tournamentId+'/'+Id).once('value').then(function(snapshot) {
            AScore = (snapshot.val() && snapshot.val().AScore)
            //console.log(AScore);
        });
        await firebase.database().ref('1by_pavmhgpNXhU2bY4SsxgA9oxH6xgHfVF27JGZwo1I/'+tournamentId+'/'+Id).once('value').then(function(snapshot) {
            B = (snapshot.val() && snapshot.val().B)
        });
        await firebase.database().ref('1by_pavmhgpNXhU2bY4SsxgA9oxH6xgHfVF27JGZwo1I/'+tournamentId+'/'+Id).once('value').then(function(snapshot) {
            BScore = (snapshot.val() && snapshot.val().BScore)
        });
        //await console.log(q);
        //Make sure the team listed first is the winner
        if(BScore>AScore){
            let A2 = B;
            let B2 = A;
            let AScore2 = BScore;
            let BScore2 = AScore;
            A = A2;
            B = B2;
            AScore = AScore2;
            BScore = BScore2;
        }
        await newRank(A,B,AScore,BScore);
    }
}

async function tournaments(){
    y = false;
    CSET = true;
    allGameInfo = [];
    console.log("C1");
    await inputTournament("NEFLV");
    await inputTournament("NEFLJ");
    await inputTournament("MWFLV");
    await inputTournament("MWFLJ");
    await inputTournament("WEFLV");
    await inputTournament("WEFLJ");
    await inputTournament("SEFLV");
    await inputTournament("SEFLJ");
    CSET = false;
    BSET = true;
    console.log("B1");
    await inputTournament("213WLJ");
    await inputTournament("213WLV");
    await inputTournament("215WLJ");
    await inputTournament("215WLV");
    await inputTournament("221WLJ");
    await inputTournament("221WLV");
    await inputTournament("227WLJ");
    await inputTournament("227WLV");
    BSET = false;
    ASET = true;
    console.log("A1");
    await inputTournament("SSV");
    await inputTournament("SSJ");
    await inputTournament("417SLV");
    await inputTournament("417SLJ");
    await inputTournament("424SLV");
    await inputTournament("424SLJ");
    y = true;
    a = 0;

    CSET = true;
    console.log("C2");
    await inputTournament("NEFLV");
    await inputTournament("NEFLJ");
    await inputTournament("MWFLV");
    await inputTournament("MWFLJ");
    await inputTournament("WEFLV");
    await inputTournament("WEFLJ");
    await inputTournament("SEFLV");
    await inputTournament("SEFLJ");
    CSET = false;
    BSET = true;
    console.log("B2");
    await inputTournament("213WLJ");
    await inputTournament("213WLV");
    await inputTournament("215WLJ");
    await inputTournament("215WLV");
    await inputTournament("221WLJ");
    await inputTournament("221WLV");
    await inputTournament("227WLJ");
    await inputTournament("227WLV");
    BSET = false;
    ASET = true;
    console.log("A2");
    await inputTournament("SSV");
    await inputTournament("SSJ");
    await inputTournament("417SLV");
    await inputTournament("417SLJ");
    await inputTournament("424SLV");
    await inputTournament("424SLJ");
}
async function fall(){
    y = false;
    CSET = true;
    allGameInfo = [];
    console.log("C1");
    await inputTournament("NEFLV");
    await inputTournament("NEFLJ");
    await inputTournament("MWFLV");
    await inputTournament("MWFLJ");
    await inputTournament("WEFLV");
    await inputTournament("WEFLJ");
    await inputTournament("SEFLV");
    await inputTournament("SEFLJ");

    y = true;
    a = 0;

    console.log("C2");
    await inputTournament("NEFLV");
    await inputTournament("NEFLJ");
    await inputTournament("MWFLV");
    await inputTournament("MWFLJ");
    await inputTournament("WEFLV");
    await inputTournament("WEFLJ");
    await inputTournament("SEFLV");
    await inputTournament("SEFLJ");
}
async function winter(){
    y = false;
    allGameInfo = [];
    BSET = true;

    console.log("B1");
    await inputTournament("213WLJ");
    await inputTournament("213WLV");
    await inputTournament("215WLJ");
    await inputTournament("215WLV");
    await inputTournament("221WLJ");
    await inputTournament("221WLV");
    await inputTournament("227WLJ");
    await inputTournament("227WLV");

    y = true;
    a = 0;

    console.log("B2");
    await inputTournament("213WLJ");
    await inputTournament("213WLV");
    await inputTournament("215WLJ");
    await inputTournament("215WLV");
    await inputTournament("221WLJ");
    await inputTournament("221WLV");
    await inputTournament("227WLJ");
    await inputTournament("227WLV");
}
async function spring(){
    y = false;
    allGameInfo = [];
    ASET = true;

    console.log("A1");
    await inputTournament("SSV");
    await inputTournament("SSJ");
    await inputTournament("417SLV");
    await inputTournament("417SLJ");
    await inputTournament("424SLV");
    await inputTournament("424SLJ");

    y = true;
    a = 0;

    console.log("A2");
    await inputTournament("SSV");
    await inputTournament("SSJ");
    await inputTournament("417SLV");
    await inputTournament("417SLJ");
    await inputTournament("424SLV");
    await inputTournament("424SLJ");

    const csvString = [
        [
          "EloDiff",
          "WinLoss",
          "PointsResult"
        ],
        ...eloChance.map(item => [
          item.eloDiff,
          item.winLoss,
          item.pointsResult
        ])
      ]
       .map(e => e.join(",")) 
       .join("\n");
    
    console.log(csvString);
}
//fall();
//winter();
//spring();
tournaments();

