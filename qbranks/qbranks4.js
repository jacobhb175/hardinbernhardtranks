
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const database = firebase.database();

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
db.collection("tournaments").doc("ACF Fall Ridgewood").set({
    date:10.17,
    set:"ACFFALL",
    playoffTeams:["Belmont A","Barrington A","High Tech A","Detroit Country Day A","Detroit Country Day B","Raymore-Peculiar"],
    opsNum:398
}),
db.collection("tournaments").doc("Ithaca Fall").set({
    date:11.21,
    set:"IS197",
    playoffTeams:["Ridgewood A","Hunter A","High Tech A","Livingston A","Hunter B","Phillips Exeter","Belmont A","Hunter C","High Tech B","JP Stevens A","Hempfield A","Adirondack"],
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
    playoffTeams:["East Brunswick A","East Brunswick B","Hunter A","Hunter B","Phillips Academy A","Wilton","Ridgewood A","MCA A","Edison A","Ithaca A","Hotchkiss A","TAG Magnet A"],
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
db.collection("tournaments").doc("IFT").set({
    date:11.21,
    set:"IS197",
    playoffTeams:[],
    opsNum:182
}),
db.collection("tournaments").doc("Hawks").set({
    date:13.09,
    set:"IS199",
    opsNum:251
}),
db.collection("tournaments").doc("Charter").set({
    date:14.13,
    set:"IS197",
    playoffTeams:[],
    opsNum:76
}),
db.collection("tournaments").doc("Geneva").set({
    date:15.26,
    set:"IS201",
    opsNum:29
}),
db.collection("tournaments").doc("EAST").set({
    date:15.27,
    set:"IS201",
    opsNum:91
}),
db.collection("tournaments").doc("CT").set({
    date:15.27,
    set:"IS201",
    opsNum:49
})

//expected scores
let expScore;
let expScoreA;
let expScoreB;

//point coefficient data
let teamAvg = [];
let all = [];
let allAvg = [];
//for sets
let teamAvgPBXIII = [];
let PBXIIIAvg;
let aPBXIII;
let teamAvgLONESTAR = [];
let LONESTARAvg
let aLONESTAR;
let teamAvgACFFALL = [];
let ACFFALLAvg;
let aACFFALL;
let teamAvgSATURNALIA = [];
let SATURNALIAAvg;
let aSATURNALIA;
let teamAvgRAFTII = [];
let RAFTIIAvg;
let aRAFTII;
let teamAvgIS195 = [];
let IS195Avg;
let aIS195;
let teamAvgIS197 = [];
let IS197Avg;
let aIS197;
let teamAvgIS199 = [];
let IS199Avg;
let aIS199;
let teamAvgIS201 = [];
let IS201vg;
let aIS201;

//point coefficients & related
let tnmtAvg = 0;
let setAvg = 0;
let cAvg = 0;
let cDiff = 1;
let pAvg = 0;
let pDiff = 1;

//sets
let LONESTAR = false;
let PBXIII = false;
let ACFFALL = false;
let SATURNALIA = false;
let RAFTII = false;
let IS195 = false;
let IS197 = false;
let IS199 = false;
let IS201 = false;

//incremental vars
let a = 0;
let b = 0;
let c = 0;
let a2 = -1;
let b2 = -1;
let c2 = -1;

//tournament coefficients
let q = 1;
let q2 = 0;
let y = false;
let qArray = [];
let z = 0;

//artemis function
let artemis = [];
const artemisTF = true;

//modified q vars
let Aq = 1;
let Bq = 1;
let Aq2 = 1;
let Bq2 = 1;
let tnmtq = 1;
let setq = 1;

//intermediaries
let AoverABminusEA;
let BoverABminusEB;
let AoverAB;
let BoverAB;

//game counts
let gamesA = 0;
let gamesB = 0;

//input vars
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

//NAQT or HSQB format
let NAQT = false;

//calculate the average of an array
function average(array) {
    return array.reduce((a, b) => (a + b)) / array.length;
}

//data input
async function inputTournament(tournamentId){
    var docRefTournament = db.collection("tournaments").doc(tournamentId);
    await docRefTournament.get().then(async function(doc) {
        if(doc.exists) {
            let set=doc.data().set;
            let opsNum=doc.data().opsNum;
            playoffTeams=doc.data().playoffTeams;
            //select set
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
                case "IS195":
                    IS195 = true;
                    break;
                case "IS197":
                    IS197 = true;
                    break;
                case "IS199":
                    IS199 = true;
                    break;
                case "IS201":
                    IS201 = true;
                    break;
            }
            await gameData(1,opsNum,tournamentId);
            if(y==false){
                //push data & run checks
                console.log("work"+y+tournamentId);
                await all.push(teamAvg);
                //await allPlayoffs.push(teamAvgPlayoffs);
                //await allConsolation.push(teamAvgConsolation);
                //console.log(tournamentId,all,allPlayoffs,allConsolation);
                teamAvg = [];
            }
            else if(y==true){
                console.log(tournamentId,tnmtq,setq);
            }
            //resets
            allGameInfo = [];
            teamAvgPlayoffs = [];
            teamAvgConsolation = [];
            LONESTAR = false;
            ACFFALL = false;
            PBXIII = false;
            SATURNALIA = false;
            RAFTII = false;
            IS195 = false;
            IS197 = false;
            IS199 = false;
            IS201 = false;
            a+=1;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!"+doc);
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

async function games(A,B) {
    if (y == false) {
        //console.log("working"+y);
    }
    else if (y == true) {
        //console.log("working"+y);
        var docRefA = db.collection("qbteams").doc(A);
        var docRefB = db.collection("qbteams").doc(B);
        await docRefA.get().then(async function(doc) {
            if (doc.exists) {
                let gamesA=doc.data().games;
                await docRefB.get().then(async function(doc) {
                    if (doc.exists) {
                        let gamesB=doc.data().games;
                        //update count of games played
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

//expected score function
async function cExpScore(A,B,AScore,BScore){
    var docRefA = db.collection("qbteams").doc(A);
    var docRefB = db.collection("qbteams").doc(B);
    await docRefA.get().then(async function(doc) {
        if (doc.exists) {
            let rankA=doc.data().rank;
            await docRefB.get().then(async function(doc) {
                if (doc.exists) {
                    let rankB=doc.data().rank; 
                    //If A is lower
                    if (rankA<rankB){
                        console.log(expScore,1/(1+(Math.E^((rankB-rankA)/400))));
                        expScore = 1/(1+(Math.E^((rankB-rankA)/400)));
                    }
                    //If B is lower
                    else if (rankB<rankA){
                        expScore = 1-1/(1+(Math.E^((rankA-rankB)/400)));
                    }
                    //If elo tie
                    else {
                        expScore = 0.5;
                    };
                    expScoreA = expScore;
                    expScoreB = 1-expScoreA;
                    console.log(A,B,"expSA",expScoreA,"expSB",expScoreB);                  
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
    await console.log("newRank",A,B,AScore,BScore);
    //MASSIVE alternate name standardizer
    switch(A){
        case "Phillips Exeter":
            return;
        case "Gravesend":
            A = "Phillips Exeter A"
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
        case "Raymore Peculiar":
            B = "Raymore-Peculiar"; 
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
        case "Uni Lab A":
            A = "University Lab A"
            break;
        case "Uni Lab B":
            A = "University Lab B"
            break;
        case "Karl's Nursery":
            A = "St. Mark's A"
            break;
        case "St. Mark's":
            A = "St. Mark's A"
            break;
        case "DCDS A":
            A = "Detroit Country Day A"
            break;
        case "DCDS B":
            A = "Detroit Country Day B"
            break;
        case "DCC A":
            A = "Detroit Catholic Central A"
            break;
        case "DCC B":
            A = "Detroit Catholic Central B"
            break;
        case "DCC C":
            A = "Detroit Catholic Central C"
            break;
        case "DCC D":
            A = "Detroit Catholic Central D"
            break;
        case "DCC E":
            A = "Detroit Catholic Central E"
            break;
        case "Enrique Trastamara":
            A = "Lambert A"
            break;
        case "Lambert":
            A = "Lambert A"
            break;
        case "GDS":
            A = "Georgetown Day A"
            break;
        case "GDS A":
            A = "Georgetown Day A"
            break;
        case "GDS B":
            A = "Georgetown Day B"
            break;
        case "Georgetown Day School":
            A = "Georgetown Day A"
            break;
        case "Georgetown Day":
            A = "Georgetown Day A"
            break;
        case "TAG Magnet":
            A = "TAG Magnet A"
            break;
        case "Greenhill":
            A = "Greenhill A"
            break;
        case "Ladue":
            A = "Ladue A"
            break;
    }
    switch(B){
        case "Phillips Exeter":
            return;
        case "Gravesend":
            B = "Phillips Exeter A"
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
        case "Raymore Peculiar":
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
        case "Uni Lab A":
            B = "University Lab A"
            break;
        case "Uni Lab B":
            B = "University Lab B"
            break;
        case "Karl's Nursery":
            B = "St. Mark's A"
            break;
        case "St. Mark's":
            B = "St. Mark's A"
            break;
        case "DCDS A":
            B = "Detroit Country Day A"
            break;
        case "DCDS B":
            B = "Detroit Country Day B"
            break;
        case "DCC A":
            B = "Detroit Catholic Central A"
            break;
        case "DCC B":
            B = "Detroit Catholic Central B"
            break;
        case "DCC C":
            B = "Detroit Catholic Central C"
            break;
        case "DCC D":
            B = "Detroit Catholic Central D"
            break;
        case "DCC E":
            B = "Detroit Catholic Central E"
            break;
        case "Enrique Trastamara":
            B = "Lambert A"
            break;
        case "Lambert":
            A = "Lambert A"
            break;
        case "GDS":
            B = "Georgetown Day A"
            break;
        case "GDS A":
            B = "Georgetown Day A"
            break;
        case "GDS B":
            B = "Georgetown Day B"
            break;
        case "Georgetown Day School":
            B = "Georgetown Day A"
            break;
        case "Georgetown Day":
            B = "Georgetown Day A"
            break;
        case "TAG Magnet":
            B = "TAG Magnet A"
            break;
        case "Greenhill":
            A = "Greenhill A"
            break;
        case "Ladue":
            A = "Ladue A"
            break;
    }
    if(AScore=="Forfeit"||BScore=="Forfeit"){
        //console.log(A,B,AScore,BScore);
        return;
    }
    var docRefA = db.collection("qbteams").doc(A);
    var docRefB = db.collection("qbteams").doc(B);
    //create new docs for teams if they don't exist
    await docRefA.get().then(async function(doc) {
        if (doc.exists) {
        } else {
            db.collection("qbteams").doc(A).set({
                name:A,
                rating:1500,
                games:0,
                vol:0.06,
                tau:0.5,
                rd:200
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
                rating:1500,
                games:0,
                vol:0.06,
                tau:0.5,
                rd:200
            });
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    await games(A,B);
    //await console.log("newRank2",A,B,AScore,BScore);
    if (y == false){
        //push set data
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
        else if (IS201 == true){
            teamAvgIS201.push(AScore,BScore);
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
        /*else if (MCMT == true){
            teamAvgMCMT.push(AScore,BScore);
        }*/
        allAvg.push(AScore,BScore)
        teamAvg.push(AScore,BScore);
    }
    else if (y == true){
        let aAvg = average(allAvg);
            //let LONESTARAvg = average(teamAvgLONESTAR);
            let IS197Avg = average(teamAvgIS197);
            //console.log("aAvg",aAvg,"LONESTARAvg",LONESTARAvg);
            if (PBXIII == true){
                console.log(PBXIIIAvg = average(teamAvgPBXIII));
                console.log(aPBXIII = PBXIIIAvg/LONESTARAvg);
                console.log(tnmtAvg = average(all[a]));
                console.log(tnmtq = tnmtAvg/(aPBXIII*aAvg)); 
                //tnmtq = (tnmtAvg*tnmtAvg)/(PBXIIIAvg*aAvg);
            }
            else if (LONESTAR == true){
                /*console.log(LONESTARAvg = average(teamAvgLONESTAR));
                console.log(aLONESTAR = LONESTARAvg/LONESTARAvg);
                console.log("aLONESTAR",aLONESTAR,"LONESTARAvg",LONESTARAvg);*/
                console.log(tnmtAvg = average(all[a]));
                console.log(tnmtq = tnmtAvg/(aAvg)); 
                //tnmtq = (tnmtAvg*tnmtAvg)/(LONESTARAvg*aAvg);
            }
            else if (IS195 == true){
                console.log(IS195Avg = average(teamAvgIS195));
                console.log(aIS195 = IS195Avg/IS197Avg);
                console.log(tnmtAvg = average(all[a]));
                console.log(tnmtq = tnmtAvg/(aIS195*aAvg)); 
                //tnmtq = (tnmtAvg*tnmtAvg)/(IS195Avg*aAvg);
            }
            else if (IS197 == true){
                //console.log(IS197Avg = average(teamAvgIS197));
                //console.log(aIS197 = IS197Avg/LONESTARAvg);
                console.log(tnmtAvg = average(all[a]));
                console.log(tnmtq = tnmtAvg/(aAvg)); 
                //tnmtq = (tnmtAvg*tnmtAvg)/(IS197Avg*aAvg);
            }
            else if (IS199 == true){
                console.log(IS199Avg = average(teamAvgIS199));
                console.log(aIS199 = IS199Avg/IS197Avg);
                console.log(tnmtAvg = average(all[a]));
                console.log(tnmtq = tnmtAvg/(aIS199*aAvg));         
                //tnmtq = (tnmtAvg*tnmtAvg)/(IS199Avg*aAvg);
            }
            else if (IS201 == true){
                console.log(IS201Avg = average(teamAvgIS201));
                console.log(aIS201 = IS201Avg/IS197Avg);
                console.log(tnmtAvg = average(all[a]));
                console.log(tnmtq = tnmtAvg/(aIS201*aAvg));         
                //tnmtq = (tnmtAvg*tnmtAvg)/(IS201Avg*aAvg);
            }
            else if (ACFFALL == true){
                console.log(ACFFALLAvg = average(teamAvgACFFALL));
                console.log(aACFFALL = ACFFALLAvg/LONESTARAvg);
                console.log(tnmtAvg = average(all[a]));
                console.log(tnmtq = tnmtAvg/(aACFFALL*aAvg));
                //tnmtq = (tnmtAvg*tnmtAvg)/(ACFFALLAvg*aAvg);
            }
            else if (SATURNALIA == true){
                console.log(SATURNALIAAvg = average(teamAvgSATURNALIA));
                onsole.log(aSATURNALIA = SATURNALIAAvg/LONESTARAvg)
                console.log(tnmtAvg = average(all[a]));
                console.log(tnmtq = tnmtAvg/(aSATURNALIA*aAvg));
                //tnmtq = (tnmtAvg*tnmtAvg)/(SATURNALIAAvg*aAvg);
            }
            else if (RAFTII == true){
                console.log(RAFTIIAvg = average(teamAvgRAFTII));
                console.log(aRAFTII = RAFTIIAvg/LONESTARAvg);
                console.log(tnmtAvg = average(all[a]));
                console.log(tnmtq = tnmtAvg/(aRAFTII*aAvg));
                //tnmtq = (tnmtAvg*tnmtAvg)/(RAFTIIAvg*aAvg);
            }
        console.log("q",tnmtq,setq);
        nRank(A,B,AScore,BScore);
    }
}; 

//calculate and update rank
async function nRank(A,B,AScore,BScore){
    var docRefA = db.collection("qbteams").doc(A);
    var docRefB = db.collection("qbteams").doc(B);
    await docRefA.get().then(async function(doc) {
        if(doc.exists) {
            let rankA=doc.data().rank;
            let gamesA=doc.data().games;
            await docRefB.get().then(async function(doc) {
                if(doc.exists) {
                    let rankB=doc.data().rank; 
                    let gamesB=doc.data().games;
                    if(gamesA<1){
                        gamesA = 1;
                        db.collection("qbteams").doc(A).update({games:gamesA});
                    }     
                    if(gamesB<1){
                        gamesB = 1;
                        db.collection("qbteams").doc(B).update({games:gamesB});
                    }
                    
                    q2 = 1;
                    let Ka = 40-gamesA;
                    let Kb = 40-gamesB;

                    await cExpScore(A,B);

                    //final calculations
                    console.log("A,rankA,B,rankB",A,rankA,B,rankB);
                    console.log("A,B,AScore,BScore",A,B,AScore,BScore);
                    console.log("q",q,"expScoreA",expScoreA);
                    let AoverAB = AScore/(AScore+BScore);
                    let BoverAB = BScore/(AScore+BScore);
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
                        AoverABminusEA = (AoverAB*tnmtq)-expScoreA;
                        BoverABminusEB = (BoverAB*tnmtq)-expScoreB;
                    }
                    console.log("AoverABminusEA",AoverABminusEA,"BoverABminusEB",BoverABminusEB);
                    let rankAN = rankA + ((AoverABminusEA)*Ka);// /(1/(RDA*RDA)));
                    let rankBN = rankB + ((BoverABminusEB)*Kb);// /(1/(RDB*RDB)));

                    console.log("A,rankA,B,rankB",A,rankAN,B,rankBN);
                    console.log("rankA,rankB ",rankAN,rankBN);
                    console.log("rankAB",rankAN,rankBN);

                    //update rank
                    db.collection("qbteams").doc(A).update({rank:rankAN});
                    db.collection("qbteams").doc(B).update({rank:rankBN});          
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
        if(NAQT==true){
            await newRank(A,B,AScore,BScore);
        }
        else if(NAQT==false){
            //get round num
            await firebase.database().ref('1by_pavmhgpNXhU2bY4SsxgA9oxH6xgHfVF27JGZwo1I/'+tournamentId+'/'+Id).once('value').then(function(snapshot) {
                Round = (snapshot.val() && snapshot.val().Round)
            });
            //prevent dup games
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
                //sort games by round
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
            console.log("rounds",round1,round2,round3,round4,round5,round6,round7,round8,round8,round10,round11,round12);
            //cycle through all games chronologically by round number
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
    }
}

async function tournaments(){
    y = false;
    allGameInfo = [];
    /*await inputTournament("LONESTAR Northeast");
    await inputTournament("ACF Fall Ridgewood");
    await inputTournament("Ithaca Fall");
    await inputTournament("Prison Bowl Mainsite");
    await inputTournament("Hawk's Nest");
    await inputTournament("Maroon Bowl II");
    await inputTournament("Maroon Bowl Standard");*/
    NAQT = true;
    await inputTournament("IFT");
    await inputTournament("Hawks");
    await inputTournament("Charter");
    await inputTournament("Geneva");
    await inputTournament("EAST");
    await inputTournament("CT");
    y = true;
    a = 0;
    /*await inputTournament("LONESTAR Northeast");
    await inputTournament("ACF Fall Ridgewood");
    await inputTournament("LONESTAR Mainsite");
    await inputTournament("Ithaca Fall");
    await inputTournament("Prison Bowl Mainsite");
    await inputTournament("Hawk's Nest");
    await inputTournament("Maroon Bowl II");
    await inputTournament("Maroon Bowl Standard");*/
    NAQT = true;
    await inputTournament("IFT");
    await inputTournament("Hawks");
    await inputTournament("Charter");
    await inputTournament("Geneva");
    await inputTournament("EAST");
    await inputTournament("CT");
}
tournaments()