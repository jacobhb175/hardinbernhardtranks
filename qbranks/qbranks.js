

db.collection("qbteams").doc("Ridgewood A").set({
    name:"Ridgewood A",
    rank:1200,
    games:0,
    totalGames:0,
    RD:350
});

let evalV;
let evalJV;
let evalMS;
let expScore;
let expScoreA;
let expScoreB;

let teamAvg = [];
let all = [];
let allAvg = [];
let teamAvgPBXIII = [];
let teamAvgLONESTAR = [];
let teamAvgIS197 = [];

let LONESTAR = false;
let IS197 = false;
let PBXIII = false;

let a = 0;
let b = 0;
let c = 0;
let a2 = -1;
let b2 = -1;
let c2 = -1;

let t100 = [];
let t100TF = false;
let t200 = [];
let t200TF = false;
let t400 = [];
let t400TF = false;
let t800 = [];
let t800TF = false;
let t800plus = [];
let t800plusTF = false;
let rankDiff = 0;
let avgT = 0;
let t;

let q = 0;
let y = false;
let qArray = [];
let z = 0;

let artemis = [];
const artemisTF = true;

let Aq = 1;
let Bq = 1;
let Aq2 = 1;
let Bq2 = 1;
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
let roundNum = 0;

let round1 = [];
let round2 = [];
let round3 = [];
let round4 = [];
let round5 = [];
let round6 = [];
let round7 = [];
let round8 = [];
let round9 = [];
let round10 = [];
let round11 = [];
let round12 = [];

let PlayoffTeams = [];

//K Rank
//C Set = 100
//B Set = 50
//A Set = 25
//Nats Prelims = 20
//Nats Playoffs = 10

//calculate the average of an array
function average(array) {
    return array.reduce((a, b) => (a + b)) / array.length;
}

async function games(A,B) {
    if (y == false) {
        console.log("working"+y);
        var docRefA = db.collection("qbteams").doc(A);
        var docRefB = db.collection("qbteams").doc(B);
        await docRefA.get().then(async function(doc) {
            if (doc.exists) {
                let totalGamesA=doc.data().totalGames;
                await docRefB.get().then(async function(doc) {
                    if (doc.exists) {
                        let totalGamesB=doc.data().totalGames;
                        totalGamesA = totalGamesA + 1;
                        totalGamesB = totalGamesB + 1;
                        db.collection("qbteams").doc(A).update({totalGames:totalGamesA});
                        db.collection("qbteams").doc(B).update({totalGames:totalGamesB});
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
    else if (y == true) {
        console.log("working"+y);
        var docRefA = db.collection("qbteams").doc(A);
        var docRefB = db.collection("qbteams").doc(B);
        await docRefA.get().then(async function(doc) {
            if (doc.exists) {
                let gamesA=doc.data().games;
                await docRefB.get().then(async function(doc) {
                    if (doc.exists) {
                        let gamesB=doc.data().games;
                        gamesA = gamesA + 1;
                        gamesB = gamesB + 1;
                        db.collection("qbteams").doc(A).update({games:gamesA});
                        db.collection("qbteams").doc(B).update({games:gamesB});
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

//Calculate expected score
async function cExpScore(A,B,AScore,BScore){
    for(i=0;i<artemis.length;i++){
        if(artemis[i] == A || artemis[i] == B){
            //artemisTF = true;
            //console.log(artemisTF);
            i=100;
        }
    }
    var docRefA = db.collection("qbteams").doc(A);
    var docRefB = db.collection("qbteams").doc(B);
    await docRefA.get().then(async function(doc) {
        if (doc.exists) {
            let rankA=doc.data().rank;
            //console.log("rankA",rankA);
            await docRefB.get().then(async function(doc) {
                if (doc.exists) {
                    let rankB=doc.data().rank; 
                    //console.log("rankB",rankB);  
                    //If A is lower
                    if (rankA<rankB){
                        if(rankB-800>=rankA){
                            expScore = 0;
                            //rankDiff = rankB-rankA;
                        }
                        else {
                            if(artemisTF==true){
                                /*console.log(rankB-rankA);
                                console.log((rankB-rankA)/400);
                                console.log(Math.E^((rankB-rankA)/400));
                                console.log(1+(Math.E^((rankB-rankA)/400)));*/
                                console.log(expScore,1/(1+(Math.E^((rankB-rankA)/400))));
                            }
                            expScore = 1/(1+(Math.E^((rankB-rankA)/400)));
                            //rankDiff = rankB-rankA;
                        }
                    }
                    //If B is lower
                    else if (rankB<rankA){
                        if(rankA-800>=rankB){
                            expScore = 1;
                            //rankDiff = rankA-rankB;
                        }
                        else{
                            if(artemisTF==true){
                                /*console.log(rankA-rankB);
                                console.log((rankA-rankB)/400);
                                console.log(Math.E^((rankA-rankB)/400));
                                console.log(1+(Math.E^((rankA-rankB)/400)));*/
                                //console.log(1/(1+(Math.E^((rankA-rankB)/400))));
                            }
                            expScore = 1-1/(1+(Math.E^((rankA-rankB)/400)));
                        }
                    }
                    //If tie
                    else {
                        expScore = 0.5;
                    };
                    expScoreA = expScore;
                    expScoreB = 1-expScoreA;
                    if(artemisTF==true){
                        console.log(A,B,"expSA",expScoreA,"expSB",expScoreB);
                        //artemisTF=false;
                    }/*
                    //Update t value
                    if(y == false){
                        if(rankDiff<100){
                            t100.push((AScore/(AScore+BScore))/expScoreA);
                        }
                        else if(rankDiff<200){
                            t200.push((AScore/(AScore+BScore))/expScoreA);
                        }
                        else if(rankDiff<400){
                            t400.push((AScore/(AScore+BScore))/expScoreA);
                        }  
                        else if(rankDiff<800){
                            t800.push((AScore/(AScore+BScore))/expScoreA);
                        }  
                        else{
                            t800plus.push((AScore/(AScore+BScore))/expScoreA);
                        } 
                    } 
                    else if(y == true){
                        if(rankDiff<100){
                            t100TF = true;
                        }
                        else if(rankDiff<200){
                            t200TF = true;
                        }
                        else if(rankDiff<400){
                            t400TF = true;
                        }  
                        else if(rankDiff<800){
                            t800TF = true;
                        }  
                        else{
                            t800plusTF = true;
                        } 
                    } */
                    
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





//calculate new ranks
async function newRank(A,B,AScore,BScore) {
    await console.log("newRank1",A,B,AScore,BScore);
    /*
    if(A==""||B==""||AScore==""||BScore==""){
        return;
    }
    if(A>0||B>0){
        return;
    }
    if(AScore==""||BScore==""||A==""||B==""){
        //console.log(A,B,AScore,BScore);
        return;
    }*/
    if(A=="consolation"||AScore=="consolation"||B=="consolation"||BScore=="consolation"){
        consolation = true;
        return;
    }
    else if(A=="noconsolation"||AScore=="noconsolation"||B=="noconsolation"||BScore=="noconsolation"){
        consolation = false;
        return;
    }
    else if(A=="Phillips Exeter"||B=="Phillips Exeter"){
        return;
    }
    else if(A=="Democritus A"){
        A = "High Tech A"
    }
    else if(B=="Democritus A"){
        B = "High Tech A"
    }
    else if(A=="Democritus B"){
        A = "High Tech B"
    }
    else if(B=="Democritus B"){
        B = "High Tech B"
    }
    else if(A=="Hotchkiss"){
        A = "Hotchkiss A"
    }
    else if(B=="Hotchkiss"){
        B = "Hotchkiss A"
    }
    if(AScore=="Forfeit"||BScore=="Forfeit"){
        //console.log(A,B,AScore,BScore);
        return;
    }
    var docRefA = db.collection("qbteams").doc(A);
    var docRefB = db.collection("qbteams").doc(B);
    await docRefA.get().then(async function(doc) {
        if (doc.exists) {
        } else {
            db.collection("qbteams").doc(A).set({
                name:A,
                rank:1200,
                games:0,
                totalGames:0,
                RD:350
            });
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    await docRefB.get().then(async function(doc) {
        if (doc.exists) {
        } else {
            db.collection("qbteams").doc(B).set({
                name:B,
                rank:1200,
                games:0,
                totalGames:0
            });
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    await games(A,B);
    await console.log("newRank2",A,B,AScore,BScore);
    /*else if(A=="St. Margaret's"||B=="St. Margaret's"||A=="Phillips Exeter"||B=="Phillips Exeter"){
        return;
    }*/
    if (y == false){
        //if prison bowl games
        if (PBXIII == true){
            allAvg.push(AScore,BScore)
            teamAvg.push(AScore,BScore);
            teamAvgPBXIII.push(AScore,BScore);
        }
        else if (LONESTAR == true){
            allAvg.push(AScore,BScore)
            teamAvg.push(AScore,BScore);
            teamAvgLONESTAR.push(AScore,BScore);
        }
        else if (IS197 == true){
            allAvg.push(AScore,BScore)
            teamAvg.push(AScore,BScore);
            teamAvgIS197.push(AScore,BScore);
        }
        /*
        else if (bSet == true){
            if (evalV == true) {
                //push game results to array
                teamAvgV.push(AScore,BScore)
                teamAvgB.push(AScore,BScore);
            }
            else if (evalJV == true) {
                //push game results to array
                teamAvgJV.push(AScore,BScore);
                teamAvgBJV.push(AScore,BScore);
            }
            else if (evalMS == true) {
                //push game results to array
                teamAvgMS.push(AScore,BScore);
                teamAvgBMS.push(AScore,BScore);
            }
            else {
                //console.log(A,B,"is cross-divisional");
            }
        } */
    }
    else if (y == true){
        crossDiv = false;
        if (PBXIII == true){
            //console.log("all",all);
            let aAvg = average(allAvg);
            let pbAvg = average(teamAvgPBXIII);
            let tnmtAvg = average(all[a]);
            tnmtq = tnmtAvg/pbAvg;
            setq = pbAvg/aAvg;
        }
        else if (LONESTAR == true){
            //console.log("all",all);
            let aAvg = average(allAvg);
            let lonestarAvg = average(teamAvgLONESTAR);
            let tnmtAvg = average(all[a]);
            tnmtq = tnmtAvg/lonestarAvg;
            setq = lonestarAvg/aAvg;
        }
        else if (IS197 == true){
            //console.log("all",all);
            let aAvg = average(allAvg);
            let is197Avg = average(teamAvgIS197);
            let tnmtAvg = average(all[a]);
            tnmtq = tnmtAvg/is197Avg;
            setq = is197Avg/aAvg;
        }
        console.log("q",tnmtq,setq);
        nRank(A,B,AScore,BScore);
        //C-Set games
        /*if (cSet == true) {
            if (evalV == true) {
                if (a == 0) {
                    //only do once per tnmt
                    a = a+1;
                    //calculate avg points scored in a varsity game at a c set
                    let sumC = 0;
                    let m;
                    let teamAvgCLen = teamAvgC.length;
                    for(m = 0; m < teamAvgCLen; m++){
                        sumC += parseInt(teamAvgC[m],10);
                    };
                    let avgC = sumC/teamAvgCLen;
                    //calculate avg points scored in a varsity game at this tnmt
                    let sum = 0;
                    let n;
                    let allVLen = allV[a2].length;
                    for(n = 0; n < allVLen; n++){
                        sum += parseInt(allV[a2][n],10);
                    };
                    let avgV = sum/allVLen;
                    //calculate q value (varsity ppg at this tnmt:varsity ppg at all c-sets)
                    q = avgV/avgC;
                    //push q to array
                    qV.push(q);
                }
                //find q for this tnmt
                else {
                    q = qV[a2];
                }
                nRank(A,B,AScore,BScore);
            }
            else if (evalJV == true) {
                if (b == 0) {
                //only do once per tnmt
                b = b+1;
                //calculate avg points scored in jv games at a c set
                let sumCJV = 0;
                let o;
                let teamAvgCJVLen = teamAvgCJV.length;
                for(o = 0; o < teamAvgCJVLen; o++){
                    sumCJV += parseInt(teamAvgCJV[o],10);
                };
                //calculate avg points scored in jv games at this tnmt
                let avgCJV = sumCJV/teamAvgCJVLen;
                let sum = 0;
                let p;
                let allJVLen = allJV[b2].length;
                for(p = 0; p < allJVLen; p++ ){
                    sum += parseInt(allJV[b2][p],10);
                };
                let avgJV = sum/allJVLen;
                //calculate q
                q = avgJV/avgCJV;
                //push q to array
                qJV.push(q);
                }
                //find q for this tnmt
                else {
                    q = qJV[b2];
                }
                nRank(A,B,AScore,BScore);
            }
            else if (evalMS == true) {
                if (c == 0) {
                //calculate q value
                c=c+1;
                let sumCMS = 0;
                let r;
                let teamAvgCMSLen = teamAvgCMS.length;
                for(r = 0; r < teamAvgCMSLen; r++){
                    sumCMS += parseInt(teamAvgCMS[r],10);
                };
                let avgCMS = sumCMS/teamAvgCMS.length;
                let sum = 0;
                let s;
                let allMSLen = allMS[c2].length;
                for(s = 0; s < allMSLen; s++ ){
                    sum += parseInt(allMS[c2][s],10);
                };
                let avgMS = sum/allMSLen;
                q = avgMS/avgCMS;
                qMS.push(q);
                }
                else {
                    q = qMS[c2];
                }
                nRank(A,B,AScore,BScore);
            }
            else {
                crossDiv = true;
                console.log(A,B,"is cross-divisional");
            }
            //games(crossDiv,A,B);
        }
        //B-Set games
        else if (bSet == true) {
            if (evalV == true) {
                if (a == 0) {
                    a = a+1;
                    //calculate q value
                    let sumB = 0;
                    let m;
                    let teamAvgBLen = teamAvgB.length;
                    for(m = 0; m < teamAvgBLen; m++){
                        sumB += parseInt(teamAvgB[m],10);
                    };
                    let avgB = sumB/teamAvgBLen;
                    let sum = 0;
                    let n;
                    let allVLen = allV[a2].length;
                    for(n = 0; n < allVLen; n++){
                        sum += parseInt(allV[a2][n],10);
                    };
                    let avgV = sum/allVLen;
                    q = avgV/avgB;
                    qV.push(q);
                }
                else {
                    q = qV[a2];
                }
                nRank(A,B,AScore,BScore);
            }
            else if (evalJV == true) {
                if (b == 0) {
                //calculate q value
                b = b+1;
                let sumBJV = 0;
                let o;
                let teamAvgBJVLen = teamAvgBJV.length;
                for(o = 0; o < teamAvgBJVLen; o++){
                    sumBJV += parseInt(teamAvgBJV[o],10);
                };
                let avgBJV = sumBJV/teamAvgBJVLen;
                let sum = 0;
                let p;
                let allJVLen = allJV[b2].length;
                for(p = 0; p < allJVLen; p++ ){
                    sum += parseInt(allJV[b2][p],10);
                };
                let avgJV = sum/allJVLen;
                q = avgJV/avgBJV;
                qJV.push(q);
                }
                else {
                    q = qJV[b2];
                }
                nRank(A,B,AScore,BScore);
            }
            else if (evalMS == true) {
                if (c == 0) {
                    //calculate q value
                    c=c+1;
                    let sumBMS = 0;
                    let r;
                    let teamAvgBMSLen = teamAvgBMS.length;
                    for(r = 0; r < teamAvgBMSLen; r++){
                        sumBMS += parseInt(teamAvgBMS[r],10);
                    };
                    let avgBMS = sumBMS/teamAvgBMS.length;
                    let sum = 0;
                    let s;
                    let allMSLen = allMS[c2].length;
                    for(s = 0; s < allMSLen; s++ ){
                        sum += parseInt(allMS[c2][s],10);
                    };
                    let avgMS = sum/allMSLen;
                    q = avgMS/avgBMS;
                    qMS.push(q);
                }
                else {
                    q = qMS[c2];
                }
                nRank(A,B,AScore,BScore);
            }
            else {
                crossDiv = true;
                console.log(A,B,"is cross-divisional");
            }
            //games(crossDiv,A,B);
        }*/    
    }
};  

//calculate and update rank
async function nRank(A,B,AScore,BScore){
    /*if(t100TF == true){
        t = t100;
    }
    else if(t200TF == true){
        t = t200;
    }
    else if(t400TF == true){
        t = t400;
    }  
    else if(t800TF == true){
        t = t800;
    }  
    else{
        t = t800plus;
    } 
    let sumT = 0;
    let l;
    let tLen = t.length;
    for(l = 0; l < tLen; l++){
        sumT += parseInt(t[l],10);
    };
    avgT = sumT/t.length;
    //avgT = average(t);
    console.log(avgT);
    avgTA = avgT;
    avgTB = 1-avgTA;*/
    //console.log("avgTA,avgTB",avgTA,avgTB);
    //console.log("avgT, sumT, t.length",avgT, sumT, t.length);
    //console.log("t",t);

    //Update games played
    var docRefA = db.collection("qbteams").doc(A);
    var docRefB = db.collection("qbteams").doc(B);
    await docRefA.get().then(async function(doc) {
        if(doc.exists) {
            let rankA=doc.data().rank;
            let gamesA=doc.data().games;
            let totalGamesA=doc.data().totalGames;
            let RDA=doc.data().RD;
            //console.log("rankA",rankA);
            await docRefB.get().then(async function(doc) {
                if(doc.exists) {
                    let rankB=doc.data().rank; 
                    let gamesB=doc.data().games;
                    let totalGamesB=doc.data().totalGames;
                    let RDB=doc.data().RD;
                    if(gamesA<1){
                        gamesA = 1;
                        db.collection("qbteams").doc(A).update({games:gamesA});
                    }     
                    if(gamesB<1){
                        gamesB = 1;
                        db.collection("qbteams").doc(B).update({games:gamesB});
                    }
                    /*let rootA = 1;
                    let rootB = 1;
                    if(gamesA>7||gamesB>7){
                        consolation = true;
                        for (let j = 0; j < playoffTeams.length; j++) {
                            if(A==playoffTeams[j]||B==playoffTeams[j]){
                                consolation = false;
                                console.log("Playoff Game",A,B)
                            }
                            
                        }
                    }
                    if(consolation==false){
                        if(totalGamesA<7){
                            Aq = totalGamesA/7;
                            totalGamesA = 7;
                        }
                        if(totalGamesB<7){
                            Bq = totalGamesB/7;
                            totalGamesB = 7;
                        }
                        Ka = (800/totalGamesA);
                        Kb = (800/totalGamesB);/*
                        if(gamesA>9){
                            rootA = 3;
                        }
                        else{
                            rootA = Math.sqrt(gamesA);
                        }
                        if(gamesB>9){
                            rootB = 3;
                        }
                        else{
                            rootB = Math.sqrt(gamesA);
                        }
                    }
                    else if(consolation==true){
                        console.log("consolation",A,B,AScore,BScore)
                        Ka = (800/totalGamesA);
                        Kb = (800/totalGamesB);
                        Aq2 = 0.75;
                        Bq2 = 0.75;
                    }*/
                    if(typeof(RDA)=="undefined"){
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
                    let nRDA=(Math.sqrt(RDA*RDA+c*c*t));
                    console.log("RDA",nRDA);
                    RDA = (350-nRDA)+RDA;
                    RDA=Math.min(RDA,350);
                    if(RDA<1){
                        RDA = 1;
                    }
                    console.log("RDA",RDA);
                    db.collection("qbteams").doc(A).update({RD:RDA});
                    t=gamesB;
                    console.log("t",t);
                    console.log("RDB",RDB);
                    let nRDB=Math.sqrt(RDB*RDB+c*c*t);
                    console.log("RDB",nRDB);
                    RDB = (350-nRDB)+RDB;
                    RDB=Math.min(RDB,350);
                    if(RDB<1){
                        RDB = 1;
                    }
                    console.log("RDB",RDB);
                    /*if (Ka>800){
                        Ka = 800;
                    }
                    if (Kb>800){
                        Kb = 800;
                    }*/
                    console.log(gamesA,gamesB,totalGamesA,totalGamesB);
                    /*for(i=0;i<artemis.length;i++){
                        if(artemis[i] == A || artemis[i] == B){
                            //artemisTF = true;
                            //console.log(artemisTF);
                            i=100;
                        }
                    }*/
                    //Calculate exp scores
                    await cExpScore(A,B);
                    console.log("A,rankA,B,rankB",A,rankA,B,rankB);
                    console.log("A,B,AScore,BScore",A,B,AScore,BScore);
                    console.log("q",q,"expScoreA",expScoreA);
                    AoverAB = (parseInt(AScore)/(parseInt(AScore)+parseInt(BScore)));
                    BoverAB = (parseInt(BScore)/(parseInt(AScore)+parseInt(BScore)));
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
                        AoverABminusEA = ((AoverAB*tnmtq)/setq)-expScoreA;
                        BoverABminusEB = ((BoverAB*tnmtq)/setq)-expScoreB;
                    }
                    console.log("AoverABminusEA",AoverABminusEA,"BoverABminusEB",BoverABminusEB);
                    //console.log("q",q,"Ka",Ka,"Kb",Kb)
                    rankA = rankA + ((AoverABminusEA)*RDA);// /(1/(RDA*RDA)));
                    rankB = rankB + ((BoverABminusEB)*RDB);// /(1/(RDB*RDB)));
                    console.log("A,rankA,B,rankB",A,rankA,B,rankB);
                    /*if(artemisTF === true){
                        //artemisTF = false;
                    }
                    else {
                        //Calculate exp scores
                        await cExpScore(A,B);
                        rankA = rankA + 2*q*Ka*(AoverABminusEA);
                        rankB = rankB + 2*q*Kb*(BoverABminusEB);
                    }*/
                    Aq = 1;
                    Bq = 1;
                    Aq2 = 1;
                    Bq2 = 1;
                    console.log("rankA,rankB "+rankA+rankB);
                    console.log("rankAB",rankA,rankB);
                    //update rank
                    db.collection("qbteams").doc(A).update({rank:rankA});
                    db.collection("qbteams").doc(B).update({rank:rankB});          
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

//Print ranked teams in a specific division
function printRanks(div){
    //let teamsRef = db.collection("qbteams");
    //console.log(teamsRef.where("division","==",div).orderBy("rank").limit(10));
    db.collection("qbteams").orderBy("rank","desc").limit(25)
        .get()
        .then(function(querySnapshot) {
            let i = 0;
            querySnapshot.forEach(function(doc) {
                i = i+1;
                // doc.data() is never undefined for query doc snapshots
                console.log(i,doc.id, " => ", doc.data());
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
}

async function gameData(startId,endId,tournamentId){
    round1 = [];
    round2 = [];
    round3 = [];
    round4 = [];
    round5 = [];
    round6 = [];
    round7 = [];
    round8 = [];
    round9 = [];
    round10 = [];
    round11 = [];
    round12 = [];
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
        await firebase.database().ref('1by_pavmhgpNXhU2bY4SsxgA9oxH6xgHfVF27JGZwo1I/'+tournamentId+'/'+Id).once('value').then(function(snapshot) {
            Round = (snapshot.val() && snapshot.val().Round)
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
        let noDuplicates = true;
        for(i=0;i<allGameInfo.length;i++){
            if(A==allGameInfo[i].A && B==allGameInfo[i].B && AScore==allGameInfo[i].AScore && BScore==allGameInfo[i].BScore && Round==allGameInfo[i].Round){
                noDuplicates = false;
            }
        }
        if(noDuplicates == true){
            let gameAB = {A:A,B:B,AScore:AScore,BScore:BScore,Round:Round};
            allGameInfo.push(gameAB);
            console.log(A,B,AScore,BScore);
            switch (Round) {
                case 1:
                    round1.push(gameAB);
                    break;
                case 2:
                    round2.push(gameAB);
                    break;
                case 3:
                    round3.push(gameAB);
                    break;
                case 4:
                    round4.push(gameAB);
                    break;
                case 5:
                    round5.push(gameAB);
                    break;
                case 6:
                    round6.push(gameAB);
                    break;
                case 7:
                    round7.push(gameAB);
                    break;
                case 8:
                    round8.push(gameAB);
                    break;
                case 9:
                    round9.push(gameAB);
                    break;
                case 10:
                    round10.push(gameAB);
                    break;
                case 11:
                    round11.push(gameAB);
                    break;
                case 12:
                    round12.push(gameAB);
                    break;
            }
        }
        else{
            console.log("Duplicate",A,B,AScore,BScore)
        }
    }
    console.log("rounds",round1,round2,round3,round4,round5,round6,round7,round8,round8,round10,round11,round12)
    for(let gameNum = 0; gameNum < round1.length; gameNum++) {
        console.log("Round 1");
        let A = round1[gameNum].A;
        let AScore = round1[gameNum].AScore;
        let B = round1[gameNum].B;
        let BScore = round1[gameNum].BScore;
        console.log(A,AScore,B,BScore)
        await newRank(A,B,AScore,BScore);
    }
    for(let gameNum = 0; gameNum < round2.length; gameNum++) {
        console.log("Round 2");
        let A = round2[gameNum].A;
        let AScore = round2[gameNum].AScore;
        let B = round2[gameNum].B;
        let BScore = round2[gameNum].BScore;
        console.log(A,AScore,B,BScore)
        await newRank(A,B,AScore,BScore);
    }
    for(let gameNum = 0; gameNum < round3.length; gameNum++) {
        console.log("Round 3");
        let A = round3[gameNum].A;
        let AScore = round3[gameNum].AScore;
        let B = round3[gameNum].B;
        let BScore = round3[gameNum].BScore;
        console.log(A,AScore,B,BScore)
        await newRank(A,B,AScore,BScore);
    }
    for(let gameNum = 0; gameNum < round4.length; gameNum++) {
        console.log("Round 4");
        let A = round4[gameNum].A;
        let AScore = round4[gameNum].AScore;
        let B = round4[gameNum].B;
        let BScore = round4[gameNum].BScore;
        console.log(A,AScore,B,BScore)
        await newRank(A,B,AScore,BScore);
    }
    for(let gameNum = 0; gameNum < round5.length; gameNum++) {
        console.log("Round 5");
        let A = round5[gameNum].A;
        let AScore = round5[gameNum].AScore;
        let B = round5[gameNum].B;
        let BScore = round5[gameNum].BScore;
        console.log(A,AScore,B,BScore)
        await newRank(A,B,AScore,BScore);
    }
    for(let gameNum = 0; gameNum < round6.length; gameNum++) {
        console.log("Round 6");
        let A = round6[gameNum].A;
        let AScore = round6[gameNum].AScore;
        let B = round6[gameNum].B;
        let BScore = round6[gameNum].BScore;
        console.log(A,AScore,B,BScore)
        await newRank(A,B,AScore,BScore);
    }
    for(let gameNum = 0; gameNum < round7.length; gameNum++) {
        console.log("Round 7");
        let A = round7[gameNum].A;
        let AScore = round7[gameNum].AScore;
        let B = round7[gameNum].B;
        let BScore = round7[gameNum].BScore;
        console.log(A,AScore,B,BScore)
        await newRank(A,B,AScore,BScore);
    }
    for(let gameNum = 0; gameNum < round8.length; gameNum++) {
        console.log("Round 8");
        let A = round8[gameNum].A;
        let AScore = round8[gameNum].AScore;
        let B = round8[gameNum].B;
        let BScore = round8[gameNum].BScore;
        console.log(A,AScore,B,BScore)
        await newRank(A,B,AScore,BScore);
    }
    for(let gameNum = 0; gameNum < round9.length; gameNum++) {
        console.log("Round 9");
        let A = round9[gameNum].A;
        let AScore = round9[gameNum].AScore;
        let B = round9[gameNum].B;
        let BScore = round9[gameNum].BScore;
        console.log(A,AScore,B,BScore)
        await newRank(A,B,AScore,BScore);
    }
    for(let gameNum = 0; gameNum < round10.length; gameNum++) {
        console.log("Round 10");
        let A = round10[gameNum].A;
        let AScore = round10[gameNum].AScore;
        let B = round10[gameNum].B;
        let BScore = round10[gameNum].BScore;
        console.log(A,AScore,B,BScore)
        await newRank(A,B,AScore,BScore);
    }
    for(let gameNum = 0; gameNum < round11.length; gameNum++) {
        console.log("Round 11");
        let A = round11[gameNum].A;
        let AScore = round11[gameNum].AScore;
        let B = round11[gameNum].B;
        let BScore = round11[gameNum].BScore;
        console.log(A,AScore,B,BScore)
        await newRank(A,B,AScore,BScore);
    }
    for(let gameNum = 0; gameNum < round12.length; gameNum++) {
        console.log("Round 12");
        let A = round12[gameNum].A;
        let AScore = round12[gameNum].AScore;
        let B = round12[gameNum].B;
        let BScore = round12[gameNum].BScore;
        console.log(A,AScore,B,BScore)
        await newRank(A,B,AScore,BScore);
    }
}

async function allData(){
    K = 100;
    y = false;
    allGameInfo = [];

    LONESTAR = true;
    playoffTeams=["Ridgewood A","Hunter A","High Tech A","Livingston A","Hunter B","Belmont A","Hotchkiss","Phillips Andover A","Phillips Exeter","Ithaca A","Choate Buffalo"];
    await gameData(1,312,"LONESTAR Northeast");
    await all.push(teamAvg);
    teamAvg = [];
    await console.log("LONESTAR Northeast");
    LONESTAR = false;
    allGameInfo = [];/*

    IS197 = true;
    playoffTeams=["Ridgewood A","Hunter A","High Tech A","Livingston A","Hunter B","Phillips Exeter","Belmont A","Hunter C","High Tech B","JP Stevens A","Hempfield A","Adirondack"];
    await gameData(1,398,"Ithaca Fall");
    await all.push(teamAvg);
    teamAvg = [];
    await console.log("Ithaca Fall");
    IS197 = false;
    allGameInfo = [];

    PBXIII = true;
    playoffTeams=["Ridgewood A","East Brunswick B","High Tech A","Livingston A","Great Valley","High Tech B"];
    await gameData(1,259,"Prison Bowl Mainsite");
    await all.push(teamAvg);
    teamAvg = [];
    await console.log("Prison Bowl Mainsite");
    PBXIII = false;
    allGameInfo = [];*/


    y = true;

    a = 0;
    LONESTAR=true;
    playoffTeams=["Ridgewood A","Hunter A","High Tech A","Livingston A","Hunter B","Belmont A","Hotchkiss","Phillips Andover A","Phillips Exeter","Ithaca A","Choate Buffalo"];
    await gameData(1,312,"LONESTAR Northeast");
    await console.log("LONESTAR Northeast q",tnmtq,setq);
    allGameInfo = [];
    LONESTAR=false;/*

    a += 1;
    IS197 = true;
    playoffTeams=["Ridgewood A","Hunter A","High Tech A","Livingston A","Hunter B","Phillips Exeter","Belmont A","Hunter C","High Tech B","JP Stevens A","Hempfield A","Adirondack"];
    await gameData(1,398,"Ithaca Fall");
    await console.log("Ithaca Fall q",tnmtq,setq);
    allGameInfo = [];
    S197 = false;

    a += 1;
    playoffTeams=["Ridgewood A","East Brunswick B","High Tech A","Livingston A","Great Valley","High Tech B"];
    await gameData(1,259,"Prison Bowl Mainsite");
    await console.log("Prison Bowl Mainsite q",tnmtq,setq);
    allGameInfo = [];*/

    await printRanks();
}
allData();