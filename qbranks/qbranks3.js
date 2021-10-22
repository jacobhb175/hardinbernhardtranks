const NAQT = true;

var settings = {
    // tau : "Reasonable choices are between 0.3 and 1.2, though the system should
    //      be tested to decide which value results in greatest predictive accuracy."
    tau : 0.5,
    // rating : default rating
    rating : 1500,
    //rd : Default rating deviation 
    //     small number = good confidence on the rating accuracy
    rd : 200,
    //vol : Default volatility (expected fluctation on the player rating)
    vol : 0.06
};
var ranking = new glicko2.Glicko2(settings);
var HunterA = glicko.makePlayer();
var HunterB = glicko.makePlayer();
var JPSA = glicko.makePlayer();
var JPSB = glicko.makePlayer();
var JPSC = glicko.makePlayer();
var BiotechA = glicko.makePlayer();
var BiotechB = glicko.makePlayer();
var Ridgewood = glicko.makePlayer();
var HighTech = glicko.makePlayer();
var RiverDellA = glicko.makePlayer();
var RiverDellB = glicko.makePlayer();
var IthacaA = glicko.makePlayer();
var IthacaB = glicko.makePlayer();
var IthacaC = glicko.makePlayer();
var MCAA = glicko.makePlayer();
var MCAB = glicko.makePlayer();
var EastBrunswick = glicko.makePlayer();
var Woodbridge = glicko.makePlayer();
var matches = [];
function games(A,B,SA,SB){
    score = SA/SB
    matches.push([A,B,score])
}
games([HunterA, BiotechA, 650, 65]); 
games([JPSA, BiotechB, 570, 65]); 
glicko.updateRatings(matches);


console.log("Hunter A new rating: " + HunterA.getRating());
console.log("Hunter A new rating deviation: " + HunterA.getRd());
console.log("Hunter A new volatility: " + HunterA.getVol());