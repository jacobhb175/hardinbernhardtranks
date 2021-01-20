

db.collection("qbteams").doc("Ridgewood A").set({
    name:"Ridgewood A",
    rank:1200,
    games:0,
    RD:350
});

db.collection("tournaments").doc("LONESTAR Northeast").set({
    date:10.10,
    set:"LONESTAR",
    playoffTeams:["Ridgewood A","Hunter A","High Tech A","Livingston A","Hunter B","Belmont A","Hotchkiss A","Phillips Academy A","Phillips Exeter","Ithaca A","Choate A"],
    opsNum:342
}),
db.collection("tournaments").doc("Earlybird").set({
    date:10.03,
    set:"RAFTII",
    playoffTeams:["Buffalo Grove A","Stevenson A","Sandburg A","Auburn A","University Lab A","University Lab B","Hinsdale A","Barrington A","Barrington B","Fremd A","IMSA A","Naperville North A"],
    opsNum:364
}),
db.collection("tournaments").doc("LONESTAR Mainsite").set({
    date:11.14,
    set:"LONESTAR",
    playoffTeams:["Kinkaid","Lambert","Strake Jesuit A","St. Mark's A","Boulder","Russellville A","KJ Henry Math and Science Academy A","Strake Jesuit B"],
    opsNum:144
}),
db.collection("tournaments").doc("Ithaca Fall").set({
    date:11.21,
    set:"IS197",
    playoffTeams:["Ridgewood A","Hunter A","High Tech A","Livingston A","Hunter B","Phillips Exeter","Belmont A","Hunter C","High Tech B","JP Stevens A","Hempfield A","Adirondack"],
    opsNum:398
}),
db.collection("tournaments").doc("ACF Fall at Ridgewood").set({
    date:10.17,
    set:"ACFFALL",
    playoffTeams:["Belmont A","Barrington A","High Tech A","Detroit Country Day A","Detroit Country Day B","Raymore-Peculiar"],
    opsNum:398
}),
db.collection("tournaments").doc("Prison Bowl Mainsite").set({
    date:12.25,
    set:"PBXIII",
    playoffTeams:["Ridgewood A","East Brunswick B","High Tech A","Livingston A","Great Valley","High Tech B"],
    opsNum:259
}),
db.collection("tournaments").doc("Hawk's Nest").set({
    date:13.09,
    set:"IS199",
    playoffTeams:["East Brunswick A","East Brunswick B","Hunter A","Hunter B","Phillips Academy A","Wilton","Ridgewood A","MCA A","Edison A","Ithaca A","Hotchkiss A"],
    opsNum:251
}),
db.collection("tournaments").doc("Maroon Bowl II").set({
    date:13.17,
    set:"SATURNALIA",
    playoffTeams:["East Brunswick A","East Brunswick B","Hunter A","Hunter B","Phillips Academy A","Wilton","Ridgewood A","MCA A","Edison A","Ithaca A","Hotchkiss A"],
    opsNum:251
}),
db.collection("tournaments").doc("Maroon Bowl Standard").set({
    date:13.17,
    set:"SATURNALIA",
    playoffTeams:["Tower Hill","Concord-Carlisle","Bronx Science","Mount Lebanon","Wilmington Charter B","Newton South A","Brighton","Troy","West Windsor Plainsboro North B","Choate B","Wayne Hills A","Hightstown"],
    opsNum:357
}),
db.collection("tournaments").doc("CC3C").set({
    date:13.19,
    set:"SATURNALIA",
    playoffTeams:["Saratoga A","Mira Loma","Guilder A","Mission San Jose A","Stanford Online A","Eriksen A"],
    opsNum:110
})


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
let teamAvgACFFALL = [];
let teamAvgSATURNALIA = [];
let teamAvgRAFTII = [];
let teamAvgIS195 = [];
let teamAvgIS197 = [];
let teamAvgIS199 = [];
let allPlayoffs = [];
let allConsolation = [];
let teamAvgPlayoffs = [];
let teamAvgConsolation = [];
let tnmtAvg = 0;
let setAvg = 0;
let cAvg = 0;
let cDiff = 1;
let pAvg = 0;
let pDiff = 1;

let LONESTAR = false;
let PBXIII = false;
let ACFFALL = false;
let SATURNALIA = false;
let RAFTII = false;
let IS195 = false;
let IS197 = false;
let IS199 = false;

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
let q2 = 0;
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
/*let totalGamesA = 0;
let totalGamesB = 0;*/

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

let playoffTeams = [];
let consolation = false;

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

async function inputTournament(id){
    let docRefTournament=db.collection("tournaments").doc(id);
    if(y==true){
        RAFTII = true;
        playoffTeams=["Buffalo Grove A","Stevenson A","Sandburg A","Auburn A","University Lab A","University Lab B","Hinsdale A","Barrington A","Barrington B","Fremd A","IMSA A","Naperville North A"];
        await gameData(1,364,"Earlybird");
        await all.push(teamAvg);
        await allPlayoffs.push(teamAvgPlayoffs);
        await allConsolation.push(teamAvgConsolation);
        teamAvg = [];
        await console.log("Earlybird");
        RAFTII = false;
        allGameInfo = [];
        teamAvgPlayoffs = [];
        teamAvgConsolation = [];
    }
    else if(y==false){
        a = 0;
        RAFTII = true;
        await gameData(1,364,"Earlybird");
        playoffTeams=["Buffalo Grove A","Stevenson A","Sandburg A","Auburn A","University Lab A","University Lab B","Hinsdale A","Barrington A","Barrington B","Fremd A","IMSA A","Naperville North A"];
        await console.log("Earlybird q",tnmtq,setq);
        allGameInfo = [];
        RAFTII = false;
    
    }
}

async function inputTournament(tournamentId){
    var docRefTournament = db.collection("tournaments").doc(tournamentId);
    await docRefTournament.get().then(async function(doc) {
        if(doc.exists) {
            let set=doc.data().set;
            let opsNum=doc.data().opsNum;
            playoffTeams=doc.data().playoffTeams;
            if(y==false){
                a+=1;
            }
            switch (set) {
                case "LONESTAR":
                    LONESTAR = true;
                    break;
                case "ACFFALL":
                    ACFFALL = true;
                    break;
                case "PBXIII":
                    PBXIII = true;
                    break;
                case "SATURNALIA":
                    SATURNALIA = true;
                    break;
                case "RAFTII":
                    RAFTII = true;
                    break;
                case "IS197":
                    IS197 = true;
                    break;
                case "IS199":
                    IS199 = true;
                    break;
            }
            await gameData(1,opsNum,tournamentId);
            if(y==true){
                await all.push(teamAvg);
                await allPlayoffs.push(teamAvgPlayoffs);
                await allConsolation.push(teamAvgConsolation);
                teamAvg = [];
            }
            allGameInfo = [];
            teamAvgPlayoffs = [];
            teamAvgConsolation = [];
            switch (set) {
                case "LONESTAR":
                    LONESTAR = false;
                    break;
                case "ACFFALL":
                    ACFFALL = false;
                    break;
                case "PBXIII":
                    PBXIII = false;
                    break;
                case "SATURNALIA":
                    SATURNALIA = false;
                    break;
                case "RAFTII":
                    RAFTII = false;
                    break;
                case "IS197":
                    IS197 = false;
                    break;
                case "IS199":
                    IS199 = false;
                    break;
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!"+A);
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

async function games(A,B) {
    if (y == false) {
        console.log("working"+y);/*
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
        });*/
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
    switch(A){
        case "Phillips Exeter":
            return;
            break;
        case "Democritus A":
            A = "High Tech A"; 
            break;
        case "Democritus":
            A = "High Tech A"; 
            break;
        case "Democritus B":
            A = "High Tech B"; 
            break;
        case "High Tech":
            A = "High Tech A"; 
            break;
        case "Hotchkiss":
            A = "Hotchkiss A"; 
            break;
        case "Belmont":
            A = "Belmont A"; 
            break;
        case "Scalene Triangle":
            A = "Raymore-Peculiar"; 
            break;
        case "Phillips Andover A":
            A = "Phillips Academy A"; 
            break;
        case "Phillips Andover":
            A = "Phillips Academy A"; 
            break;
        case "Phillips Andover B":
            A = "Phillips Academy B"; 
            break;
        case "Phillips Academy":
            A = "Phillips Academy A"; 
            break;
        case "Philips Academy":
            A = "Phillips Academy A"; 
            break;
        case "Choate Buffalo":
            A = "Choate A"
            break;
        case "Choate Nebula":
            A = "Choate A"
            break;
       case "Choate Juneau":
            A = "Choate B"
            break;
        case "Choate Coyote":
            A = "Choate B"
            break;
        case "Choate H-9":
            A = "Choate A"
            break;
        case "Choate Archerfish":
            A = "Choate B"
            break;
        case "Choate Nautilus":
            A = "Choate C"
            break;
        case "East Brunswick":
            A = "East Brunswick A"
            break;
        case "Ridgewood":
            A = "Ridgewood A"
            break;
        case "Livingston":
            A = "Livingston A"
            break;
        case "Biotech":
            A = "Biotech A"
            break;
        case "JP Stevens":
            A = "JP Stevens A"
            break;
        case "J. P. Stevens A":
            A = "JP Stevens A"
            break;
        case "J. P. Stevens B":
            A = "JP Stevens B"
            break;
        case "BG A":
            A = "Buffalo Grove A"
            break;
        case "Uni A":
            A = "University Lab A"
            break;
        case "Uni B":
            A = "University Lab B"
            break;
        case "Uni C":
            A = "University Lab C"
            break;
        case "Uni D":
            A = "University Lab D"
            break;
        case "Uni E":
            A = "University Lab E"
            break;
        case "Karl's Nursery":
            A = "St. Mark's A"
            break;
    }
    switch(B){
        case "Phillips Exeter":
            return;
            break;
        case "Democritus A":
            B = "High Tech A"; 
            break;
        case "Democritus":
            B = "High Tech A"; 
            break;
        case "Democritus B":
            B = "High Tech B"; 
            break;
        case "High Tech":
            B = "High Tech A"; 
            break;
        case "Hotchkiss":
            B = "Hotchkiss A"; 
            break;
        case "Belmont":
            B = "Belmont A"; 
            break;
        case "Scalene Triangle":
            B = "Raymore-Peculiar"; 
            break;
        case "Phillips Andover A":
            B = "Phillips Academy A"; 
            break;
        case "Phillips Andover":
            B = "Phillips Academy A"; 
            break;
        case "Phillips Andover B":
            B = "Phillips Academy B"; 
            break;
        case "Phillips Academy":
            B = "Phillips Academy A"; 
            break;
        case "Philips Academy":
            B = "Phillips Academy A"; 
            break;
        case "Choate Buffalo":
            B = "Choate A"
            break;
       case "Choate Juneau":
            B = "Choate B"
            break;
        case "Choate Coyote":
            B = "Choate B"
            break;
        case "Choate H-9":
            B = "Choate A"
            break;
        case "Choate Nebula":
            B = "Choate A"
            break;
        case "Choate Archerfish":
            B = "Choate B"
            break;
        case "Choate Nautilus":
            B = "Choate C"
            break;
        case "East Brunswick":
            B = "East Brunswick A"
            break;
        case "Ridgewood":
            B = "Ridgewood A"
            break;
        case "Livingston":
            B = "Livingston A"
            break;
        case "Biotech":
            B = "Biotech A"
            break;
        case "JP Stevens":
            B = "JP Stevens A"
            break;
        case "J. P. Stevens A":
            B = "JP Stevens A"
            break;
        case "J. P. Stevens B":
            B = "JP Stevens B"
            break;
        case "BG A":
            B = "Buffalo Grove A"
            break;
        case "Uni A":
            B = "University Lab A"
            break;
        case "Uni B":
            B = "University Lab B"
            break;
        case "Uni C":
            B = "University Lab C"
            break;
        case "Uni D":
            B = "University Lab D"
            break;
        case "Uni E":
            B = "University Lab E"
            break;
        case "Karl's Nursery":
            B = "St. Mark's A"
            break;
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
                RD:350
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
            teamAvgPBXIII.push(AScore,BScore);
        }
        else if (LONESTAR == true){
            teamAvgLONESTAR.push(AScore,BScore);
        }
        else if (IS195 == true){
            teamAvgIS195.push(AScore,BScore);
        }
        else if (IS197 == true){
            teamAvgIS197.push(AScore,BScore);
        }
        else if (IS199 == true){
            teamAvgIS199.push(AScore,BScore);
        }
        else if (ACFFALL == true){
            teamAvgACFFALL.push(AScore,BScore);
        }
        else if (SATURNALIA == true){
            teamAvgSATURNALIA.push(AScore,BScore);
        }
        else if (RAFTII == true){
            teamAvgRAFTII.push(AScore,BScore);
        }
        allAvg.push(AScore,BScore)
        teamAvg.push(AScore,BScore);
        if(Round>5){
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
            let PBXIIIAvg = average(teamAvgPBXIII);
            tnmtAvg = average(all[a]);
            tnmtq = tnmtAvg/PBXIIIAvg;
            setq = PBXIIIAvg/aAvg;
        }
        else if (LONESTAR == true){
            //console.log("all",all);
            let aAvg = average(allAvg);
            let LONESTARAvg = average(teamAvgLONESTAR);
            tnmtAvg = average(all[a]);
            tnmtq = tnmtAvg/LONESTARAvg;
            setq = LONESTARAvg/aAvg;
        }
        else if (IS195 == true){
            //console.log("all",all);
            let aAvg = average(allAvg);
            let IS195Avg = average(teamAvgIS195);
            tnmtAvg = average(all[a]);
            tnmtq = tnmtAvg/IS195Avg;
            setq = IS195Avg/aAvg;
        }
        else if (IS197 == true){
            //console.log("all",all);
            let aAvg = average(allAvg);
            let IS197Avg = average(teamAvgIS197);
            tnmtAvg = average(all[a]);
            tnmtq = tnmtAvg/IS197Avg;
            setq = IS197Avg/aAvg;
        }
        else if (IS199 == true){
            //console.log("all",all);
            let aAvg = average(allAvg);
            let IS199Avg = average(teamAvgIS199);
            tnmtAvg = average(all[a]);
            tnmtq = tnmtAvg/IS199Avg;
            setq = IS199Avg/aAvg;
        }
        else if (ACFFALL == true){
            //console.log("all",all);
            let aAvg = average(allAvg);
            let ACFFALLAvg = average(teamAvgACFFALL);
            tnmtAvg = average(all[a]);
            tnmtq = tnmtAvg/ACFFALLAvg;
            setq = ACFFALLAvg/aAvg;
        }
        else if (SATURNALIA == true){
            //console.log("all",all);
            let aAvg = average(allAvg);
            let SATURNALIAAvg = average(teamAvgSATURNALIA);
            tnmtAvg = average(all[a]);
            tnmtq = tnmtAvg/SATURNALIAAvg;
            setq = SATURNALIAAvg/aAvg;
        }
        else if (RAFTII == true){
            //console.log("all",all);
            let aAvg = average(allAvg);
            let RAFTIIAvg = average(teamAvgRAFTII);
            tnmtAvg = average(all[a]);
            tnmtq = tnmtAvg/RAFTIIAvg;
            setq = RAFTIIAvg/aAvg;
        }
        if(Round>5){
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
            //let totalGamesA=doc.data().totalGames;
            let RDA=doc.data().RD;
            //console.log("rankA",rankA);
            await docRefB.get().then(async function(doc) {
                if(doc.exists) {
                    let rankB=doc.data().rank; 
                    let gamesB=doc.data().games;
                    //let totalGamesB=doc.data().totalGames;
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
                    let rootB = 1;*/
                    q2 = 1;
                    if(consolation==false&&Round>5){
                        q2 = pDiff;
                        /*
                        if(totalGamesA<7){
                            Aq = totalGamesA/7;
                            totalGamesA = 7;
                        }
                        if(totalGamesB<7){
                            Bq = totalGamesB/7;
                            totalGamesB = 7;
                        }
                        Ka = (800/totalGamesA);
                        Kb = (800/totalGamesB);
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
                        }*/
                    }
                    else if(consolation==true&&Round>5){
                        q2 = cDiff;
                    }
                    //Glicko game weighting
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
                    db.collection("qbteams").doc(B).update({RD:RDB});
                    /*if (Ka>800){
                        Ka = 800;
                    }
                    if (Kb>800){
                        Kb = 800;
                    }*/
                    //console.log(gamesA,gamesB,totalGamesA,totalGamesB);
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
                        console.log("q2",q2);
                        AoverABminusEA = ((AoverAB*tnmtq*q2)/setq)-expScoreA;
                        BoverABminusEB = ((BoverAB*tnmtq*q2)/setq)-expScoreB;
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
/*async function printRanks(div){
    //let teamsRef = db.collection("qbteams");
    //console.log(teamsRef.where("division","==",div).orderBy("rank").limit(10));
    let teamArray = [];
    let teamsRef=db.collection("qbteams").where("games",">",14);
    await teamsRef.get().then(async function(doc) {
        for (let i = 0; i < 100; i++) {
            let teamObject = {
                name:doc.data().name,
                rank:doc.data().rank
            }
            teamArray.push(teamObject);
        }
    })
    console.log(teamArray.sort(function(a,b){return b.rank - a.rank}));*/
    /*
    teamsRef.orderBy("rank","desc").limit(25)
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
        });*/
//}

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

    //EARLYBIRD
    RAFTII = true;
    playoffTeams=["Buffalo Grove A","Stevenson A","Sandburg A","Auburn A","University Lab A","University Lab B","Hinsdale A","Barrington A","Barrington B","Fremd A","IMSA A","Naperville North A"];
    await gameData(1,364,"Earlybird");
    await all.push(teamAvg);
    await allPlayoffs.push(teamAvgPlayoffs);
    await allConsolation.push(teamAvgConsolation);
    teamAvg = [];
    await console.log("Earlybird");
    RAFTII = false;
    allGameInfo = [];
    teamAvgPlayoffs = [];
    teamAvgConsolation = [];

    //LONESTAR NORTHEAST
    LONESTAR = true;
    playoffTeams=["Ridgewood A","Hunter A","High Tech A","Livingston A","Hunter B","Belmont A","Hotchkiss A","Phillips Academy A","Phillips Exeter","Ithaca A","Choate A"];
    await gameData(1,312,"LONESTAR Northeast");
    await all.push(teamAvg);
    await allPlayoffs.push(teamAvgPlayoffs);
    await allConsolation.push(teamAvgConsolation);
    teamAvg = [];
    await console.log("LONESTAR Northeast");
    LONESTAR = false;
    allGameInfo = [];
    teamAvgPlayoffs = [];
    teamAvgConsolation = [];

    //ACF FALL RIDGEWOOD
    ACFFALL= true;
    playoffTeams=["Belmont A","Barrington A","High Tech A","Detroit Country Day A","Detroit Country Day B","Raymore-Peculiar"];
    await gameData(1,178,"ACF Fall Ridgewood");
    await all.push(teamAvg);
    await allPlayoffs.push(teamAvgPlayoffs);
    await allConsolation.push(teamAvgConsolation);
    teamAvg = [];
    await console.log("ACF Fall Ridgewood");
    ACFFALL = false;
    allGameInfo = [];
    teamAvgPlayoffs = [];
    teamAvgConsolation = [];

    //CLARKE FALL
    /*IS195 = true;
    playoffTeams=["High Tech A","Raymore-Peculiar","Choate A","Hotchkiss A","Wilmington Charter A","Teterboro","NCSSM A"];
    await gameData(1,256,"Clarke Fall");
    await all.push(teamAvg);
    await allPlayoffs.push(teamAvgPlayoffs);
    await allConsolation.push(teamAvgConsolation);
    teamAvg = [];
    await console.log("Clarke Fall");
    IS195 = false;
    allGameInfo = [];
    teamAvgPlayoffs = [];
    teamAvgConsolation = [];*/

    //LONESTAR MAINSITE
    LONESTAR = true;
    playoffTeams=["Kinkaid","Lambert","Strake Jesuit A","St. Mark's A","Boulder","Russellville A","KJ Henry Math and Science Academy A","Strake Jesuit B"];
    await gameData(1,144,"LONESTAR Mainsite");
    await all.push(teamAvg);
    await allPlayoffs.push(teamAvgPlayoffs);
    await allConsolation.push(teamAvgConsolation);
    teamAvg = [];
    await console.log("LONESTAR Mainsite");
    LONESTAR = false;
    allGameInfo = [];
    teamAvgPlayoffs = [];
    teamAvgConsolation = [];

    //ITHACA FALL
    IS197 = true;
    playoffTeams=["Ridgewood A","Hunter A","High Tech A","Livingston A","Hunter B","Phillips Exeter","Belmont A","Hunter C","High Tech B","JP Stevens A","Hempfield A","Adirondack"];
    await gameData(1,398,"Ithaca Fall");
    await all.push(teamAvg);
    await allPlayoffs.push(teamAvgPlayoffs);
    await allConsolation.push(teamAvgConsolation);
    teamAvg = [];
    await console.log("Ithaca Fall");
    IS197 = false;
    allGameInfo = [];
    teamAvgPlayoffs = [];
    teamAvgConsolation = [];

    //PRISON BOWL LEAGUE
    PBXIII = true;
    playoffTeams=["Ridgewood A","East Brunswick B","High Tech A","Livingston A","Great Valley","High Tech B"];
    await gameData(1,259,"Prison Bowl Mainsite");
    await all.push(teamAvg);
    await allPlayoffs.push(teamAvgPlayoffs);
    await allConsolation.push(teamAvgConsolation);
    teamAvg = [];
    await console.log("Prison Bowl Mainsite");
    PBXIII = false;
    allGameInfo = [];
    teamAvgPlayoffs = [];
    teamAvgConsolation = [];

    //JP STEVENS HAWKS NEST
    IS199 = true;
    playoffTeams=["East Brunswick A","East Brunswick B","Hunter A","Hunter B","Phillips Academy A","Wilton","Ridgewood A","MCA A","Edison A","Ithaca A","Hotchkiss A"];
    await gameData(1,251,"Hawk's Nest");
    await all.push(teamAvg);
    await allPlayoffs.push(teamAvgPlayoffs);
    await allConsolation.push(teamAvgConsolation);
    teamAvg = [];
    await console.log("Hawk's Nest");
    IS199 = false;
    allGameInfo = [];
    teamAvgPlayoffs = [];
    teamAvgConsolation = [];

    //MAROON BOWL
    SATURNALIA = true;
    playoffTeams=["East Brunswick A","East Brunswick B","Hunter A","Hunter B","Millburn","Wilton","Darien","Wilmington Charter A","Choate A","High Tech A","Belmont A","Livingston A"];
    await gameData(1,266,"Maroon Bowl II");
    await all.push(teamAvg);
    await allPlayoffs.push(teamAvgPlayoffs);
    await allConsolation.push(teamAvgConsolation);
    teamAvg = [];
    await console.log("Maroon Bowl II");
    SATURNALIA = false;
    allGameInfo = [];
    teamAvgPlayoffs = [];
    teamAvgConsolation = [];

    //MAROON BOWL STANDARD
    a += 1;
    SATURNALIA = true;
    playoffTeams=["Tower Hill","Concord-Carlisle","Bronx Science","Mount Lebanon","Wilmington Charter B","Newton South A","Brighton","Troy","West Windsor Plainsboro North B","Choate B","Wayne Hills A","Hightstown"];
    await gameData(1,357,"Maroon Bowl Standard");
    await all.push(teamAvg);
    await allPlayoffs.push(teamAvgPlayoffs);
    await allConsolation.push(teamAvgConsolation);
    teamAvg = [];
    await console.log("Maroon Bowl Standard");
    SATURNALIA = false;
    SATURNALIA = false;
    allGameInfo = [];
    teamAvgPlayoffs = [];
    teamAvgConsolation = [];

    //CAL CUP 3 COMPETITIVE
    a += 1;
    SATURNALIA = true;
    playoffTeams=["Saratoga A","Mira Loma","Guilder A","Mission San Jose A","Stanford Online A","Eriksen A"];
    await gameData(1,110,"CC3C");
    await all.push(teamAvg);
    await allPlayoffs.push(teamAvgPlayoffs);
    await allConsolation.push(teamAvgConsolation);
    teamAvg = [];
    await console.log("Cal Cup 3 Competitive");
    SATURNALIA = false;
    allGameInfo = [];
    teamAvgPlayoffs = [];
    teamAvgConsolation = [];

    y = true;

    //EARLYBIRD
    a = 0;
    RAFTII = true;
    await gameData(1,364,"Earlybird");
    playoffTeams=["Buffalo Grove A","Stevenson A","Sandburg A","Auburn A","University Lab A","University Lab B","Hinsdale A","Barrington A","Barrington B","Fremd A","IMSA A","Naperville North A"];
    await console.log("Earlybird q",tnmtq,setq);
    allGameInfo = [];
    RAFTII = false;

    //LONESTAR NORTHEAST
    a += 1;
    LONESTAR=true;
    playoffTeams=["Ridgewood A","Hunter A","High Tech A","Livingston A","Hunter B","Belmont A","Hotchkiss A","Phillips Academy A","Phillips Exeter","Ithaca A","Choate A"];
    await gameData(1,312,"LONESTAR Northeast");
    await console.log("LONESTAR Northeast q",tnmtq,setq);
    allGameInfo = [];
    LONESTAR=false;

    //ACF FALL RIDGEWOOD
    a += 1;
    ACFFALL = true;
    playoffTeams=["Belmont","Barrington A","High Tech A","Detroit Country Day A","Detroit Country Day B","Raymore-Peculiar"];
    await gameData(1,178,"ACF Fall Ridgewood");
    await console.log("ACF Fall Ridgewood q",tnmtq,setq);
    allGameInfo = [];
    ACFFALL = false

    //CLARKE FALL
    /*a += 1;
    IS195 = true;
    playoffTeams=["High Tech A","Raymore-Peculiar","Choate A","Hotchkiss A","Wilmington Charter A","Teterboro","NCSSM A"];
    await gameData(1,256,"Clarke Fall");
    await console.log("Clarke Fall q",tnmtq,setq);
    allGameInfo = [];
    IS195 = false;*/

    //LONESTAR MAINSITE
    a += 1;
    LONESTAR = true;
    playoffTeams=["Kinkaid","Lambert","Strake Jesuit A","St. Mark's A","Boulder","Russellville A","KJ Henry Math and Science Academy A","Strake Jesuit B"];
    await gameData(1,144,"LONESTAR Mainsite");
    await console.log("LONESTAR Mainsite q",tnmtq,setq);
    allGameInfo = [];
    LONESTAR = false;

    //ITHACA FALL
    a += 1;
    IS197 = true;
    playoffTeams=["Ridgewood A","Hunter A","High Tech A","Livingston A","Hunter B","Phillips Exeter","Belmont A","Hunter C","High Tech B","JP Stevens A","Hempfield A","Adirondack"];
    await gameData(1,398,"Ithaca Fall");
    await console.log("Ithaca Fall q",tnmtq,setq);
    allGameInfo = [];
    IS197 = false;

    //PRISON BOWL LEAGUE
    a += 1;
    PBXIII = true;
    playoffTeams=["Ridgewood A","East Brunswick B","High Tech A","Livingston A","Great Valley","High Tech B"];
    await gameData(1,259,"Prison Bowl Mainsite");
    await console.log("Prison Bowl Mainsite q",tnmtq,setq);
    allGameInfo = [];
    PBXIII = false;

    //JP STEVENS HAWKS NEST
    a += 1;
    IS199 = true;
    playoffTeams=["East Brunswick A","East Brunswick B","Hunter A","Hunter B","Phillips Academy A","Wilton","Ridgewood A","MCA A","Edison A","Ithaca A","Hotchkiss A"];
    await gameData(1,251,"Hawk's Nest");
    await console.log("Hawk's Nest q",tnmtq,setq);
    allGameInfo = [];
    IS199 = false;

    //MAROON BOWL
    a += 1;
    SATURNALIA = true;
    playoffTeams=["East Brunswick A","East Brunswick B","Hunter A","Hunter B","Millburn","Wilton","Darien","Wilmington Charter A","Choate A","High Tech A","Belmont A","Livingston A"];
    await gameData(1,266,"Maroon Bowl II");
    await console.log("Maroon Bowl II",tnmtq,setq);
    SATURNALIA = false;

    //MAROON BOWL STANDARD
    a += 1;
    SATURNALIA = true;
    playoffTeams=["Tower Hill","Concord-Carlisle","Bronx Science","Mount Lebanon","Wilmington Charter B","Newton South A","Brighton","Troy","West Windsor Plainsboro North B","Choate B","Wayne Hills A","Hightstown"];
    await gameData(1,357,"Maroon Bowl Standard");
    await console.log("Maroon Bowl Standard",tnmtq,setq);
    SATURNALIA = false;

    //CAL CUP 3 COMPETITIVE
    a += 1;
    SATURNALIA = true;
    playoffTeams=["Saratoga A","Mira Loma","Guilder A","Mission San Jose A","Stanford Online A","Eriksen A"];
    await gameData(1,110,"CC3C");
    await console.log("Cal Cup 3 Competitive",tnmtq,setq);
    SATURNALIA = false;
}
async function rankings(){
    await allData();
    setTimeout(printRanks(),5000);
}
rankings()