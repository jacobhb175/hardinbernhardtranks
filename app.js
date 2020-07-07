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


//Varsity Teams

db.collection("teams").doc("AmherstAV").set({
    name:"Amherst A",
    state:"New York",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("AmherstBV").set({
    name:"Amherst B",
    state:"New York",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ApalacheeAV").set({
    name:"Apalachee A",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ArchimedeanAV").set({
    name:"Archimedean A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ArchimedeanBV").set({
    name:"Archimedean B",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ArchimedeanCV").set({
    name:"Archimedean C",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ArchimedeanDV").set({
    name:"Archimedean D",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ArchimedeanEV").set({
    name:"Archimedean E",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ArdsleyAV").set({
    name:"Ardsley A",
    state:"New York",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("AuburnAV").set({
    name:"Auburn A",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BASISMcLeanAV").set({
    name:"BASIS McLean A",
    state:"Virginia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BarringtonAV").set({
    name:"Barrington A",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BarringtonBV").set({
    name:"Barrington B",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BatonRougeEpiscopalAV").set({
    name:"Baton Rouge Episcopal A",
    state:"Louisiana",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BatonRougeMagnetAV").set({
    name:"Baton Rouge Magnet A",
    state:"Louisiana",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BeavercreekAV").set({
    name:"Beavercreek A",
    state:"Ohio",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BeavercreekBV").set({
    name:"Beavercreek B",
    state:"Ohio",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BelenAV").set({
    name:"Belen Jesuit A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BelenBV").set({
    name:"Belen Jesuit B",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BerkeleyAV").set({
    name:"Berkeley Prep A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BerkeleyBV").set({
    name:"Berkeley Prep B",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BillingsSeniorAV").set({
    name:"Billings Senior A",
    state:"Montana",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BillingsWestAV").set({
    name:"Billings West A",
    state:"Montana",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BillingsWestBV").set({
    name:"Billings West B",
    state:"Montana",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BlazerAV").set({
    name:"Blazer A",
    state:"Kentucky",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BostonLatinAV").set({
    name:"Boston Latin A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BozemanAV").set({
    name:"Bozeman A",
    state:"Montana",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BozemanBV").set({
    name:"Bozeman B",
    state:"Montana",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("BrookwoodAV").set({
    name:"Brookwood A",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("CambridgeAV").set({
    name:"Cambridge A",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("CaravelAV").set({
    name:"Caravel A",
    state:"Deleware",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("CaravelBV").set({
    name:"Caravel B",
    state:"Deleware",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("CentennialAV").set({
    name:"Centennial HS A",
    state:"Maryland",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("CentennialBV").set({
    name:"Centennial HS B",
    state:"Maryland",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("CentralKitsapAV").set({
    name:"Central Kitsap A",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("CharlestonAV").set({
    name:"Charleston Catholic A",
    state:"West Virginia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("CharlestonBV").set({
    name:"Charleston Catholic B",
    state:"West Virginia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ChattahoocheeAV").set({
    name:"Chattahoochee A",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ChoctawhatcheeAV").set({
    name:"Choctawhatchee A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ClassicalAV").set({
    name:"Classical Prep A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ColdhugAV").set({
    name:"Team Coldhug A",
    state:"Connecticut",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("CollegiateAV").set({
    name:"Collegiate A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ColumbiaRiverAV").set({
    name:"Columbia River A",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ColumbiaRiverBV").set({
    name:"Columbia River B",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("CommerceAV").set({
    name:"Commerce A",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("CoralReefAV").set({
    name:"Coral Reef A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("CoralReefBV").set({
    name:"Coral Reef B",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("CreeksideAV").set({
    name:"Creekside A",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("DaltonAV").set({
    name:"Dalton A",
    state:"New York",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("DarienAV").set({
    name:"Darien A",
    state:"Connecticut",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("DickinsonAV").set({
    name:"Dickinson A",
    state:"Deleware",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("DonovanCatholicAV").set({
    name:"Donovan Catholic A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("DoralAV").set({
    name:"Doral Academy A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("DunbarAV").set({
    name:"Dunbar A",
    state:"Kentucky",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("EastBrunswickAV").set({
    name:"East Brunswick A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("EastBrunswickBV").set({
    name:"East Brunswick B",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("EastValleyAV").set({
    name:"East Valley A",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("EastValleyBV").set({
    name:"East Valley B",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ElginAV").set({
    name:"Elgin Academy A",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("EriksenAV").set({
    name:"Eriksen A",
    state:"California",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("FontbonneAV").set({
    name:"Fordham Hall Academy A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("FontbonneBV").set({
    name:"Fordham Hall Academy B",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("FoothillAV").set({
    name:"Foothill A",
    state:"California",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("FordhamAV").set({
    name:"Fordham Prep A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("FrenchtownAV").set({
    name:"Frenchtown A",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("FrenchtownBV").set({
    name:"Frenchtown B",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("FriendsCentralAV").set({
    name:"Friends Central A",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("GatlinburgAV").set({
    name:"Gatlinburg-Pittman A",
    state:"Tennessee",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("GatlinburgBV").set({
    name:"Gatlinburg-Pittman B",
    state:"Tennessee",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("GeorgetownDayAV").set({
    name:"Georgetown Day School A",
    state:"DC",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("GeorgeWaltonAV").set({
    name:"George Walton A",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("GeorgeWashingtonAV").set({
    name:"George Washington A",
    state:"West Virginia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("GeorgeWashingtonBV").set({
    name:"George Washington B",
    state:"West Virginia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("GlenbardWestAV").set({
    name:"Glenbard West A",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("GlenelgAV").set({
    name:"Glenelg Country School A",
    state:"Maryland",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("GonzagaAV").set({
    name:"Gonzaga Prep A",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("GothamAV").set({
    name:"Team Gotham A",
    state:"New York",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("GreatValleyAV").set({
    name:"Great Valley A",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("GreensFarmsAV").set({
    name:"Greens Farms A",
    state:"Connecticut",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("GundersonAV").set({
    name:"Gunderson A",
    state:"California",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("HewlettAV").set({
    name:"Hewlett A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("HewlettBV").set({
    name:"Hewlett B",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("HighTechAV").set({
    name:"High Tech A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("HinsdaleAV").set({
    name:"Hinsdale Central A",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("HolmdelAV").set({
    name:"Team Holmdel A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("HolyNamesAV").set({
    name:"Holy Names Academy A",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("HomewoodFlossmoorAV").set({
    name:"Homewood-Flossmoor A",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("HoraceGreeleyAV").set({
    name:"Horace Greeley A",
    state:"New York",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("HunterAV").set({
    name:"Hunter College High A",
    state:"New York",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("IolaniAV").set({
    name:"Iolani A",
    state:"Hawaii",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("IolaniBV").set({
    name:"Iolani B",
    state:"Hawaii",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("IroquoisAV").set({
    name:"Iroquois A",
    state:"New York",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("IrvingtonAV").set({
    name:"Irvington A",
    state:"New York",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("JesuitAV").set({
    name:"Jesuit A",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("JesuitBV").set({
    name:"Jesuit B",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("JohnPaulIIAV").set({
    name:"John Paul II A",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("JohnsCreekAV").set({
    name:"Johns Creek A",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("JohnsonAV").set({
    name:"Johnson A",
    state:"Kentucky",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("JohnsonBV").set({
    name:"Johnson B",
    state:"Kentucky",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("JohnsonCV").set({
    name:"Johnson C",
    state:"Kentucky",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("KingAV").set({
    name:"King A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("KingBV").set({
    name:"King B",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("LambertAV").set({
    name:"Lambert A",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("LargoAV").set({
    name:"Largo A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("LargoBV").set({
    name:"Largo B",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("LeoniaAV").set({
    name:"Leonia A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("LesQuizAV").set({
    name:"Les Quiz A",
    state:"California",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("LewisandClarkAV").set({
    name:"Lewis and Clark A",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("LexingtonAV").set({
    name:"Lexington A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("LincolnAV").set({
    name:"Lincoln A",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("LynbrookAV").set({
    name:"Lynbrook A",
    state:"California",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ManateeAV").set({
    name:"Manatee A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MarmionAV").set({
    name:"Marmion Academy A",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MaryvilleAV").set({
    name:"Maryville Jr. High A",
    state:"Tennessee",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MethactonAV").set({
    name:"Methacton A",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MethactonBV").set({
    name:"Methacton B",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MillburnAV").set({
    name:"Millburn A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MillburnBV").set({
    name:"Millburn B",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MillburnCV").set({
    name:"Millburn C",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MontgomeryBlairAV").set({
    name:"Montgomery Blair A",
    state:"Maryland",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MoorestownAV").set({
    name:"Moorestown Friends A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MoorestownBV").set({
    name:"Moorestown Friends B",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MoravianAV").set({
    name:"Moravian Academy A",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MorristownAV").set({
    name:"Morristown East A",
    state:"Tennessee",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MorristownBV").set({
    name:"Morristown East B",
    state:"Tennessee",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MountainLakesAV").set({
    name:"Mountain Lakes A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MtSpokaneAV").set({
    name:"Mt. Spokane A",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MtSpokaneBV").set({
    name:"Mt. Spokane B",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("MountVernonAV").set({
    name:"Mount Vernon A",
    state:"Virginia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("NewarkAV").set({
    name:"Newark Academy A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("NewarkCharterAV").set({
    name:"Newark Charter A",
    state:"Deleware",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("NewarkCharterBV").set({
    name:"Newark Charter B",
    state:"Deleware",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("NewarkCharterCV").set({
    name:"Newark Charter C",
    state:"Deleware",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("NewnanAV").set({
    name:"Newnan A",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("NicholsAV").set({
    name:"Nichols A",
    state:"New York",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("NicholsBV").set({
    name:"Nichols B",
    state:"New York",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("NicholsCV").set({
    name:"Nichols C",
    state:"New York",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("NitroAV").set({
    name:"Nitro A",
    state:"West Virginia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("NitroBV").set({
    name:"Nitro B",
    state:"West Virginia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("NorthfieldMtHermonAV").set({
    name:"Northfield Mt. Hermon A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("NorthwesternAV").set({
    name:"Northwestern Middle A",
    state:"Louisiana",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("OakMountainAV").set({
    name:"Oak Mountain A",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("OratoryAV").set({
    name:"Oratory Prep A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("PalmettoAV").set({
    name:"Miami Palmetto A",
    state:"Florida",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("PalmettoBV").set({
    name:"Miami Palmetto B",
    state:"Florida",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("PalmettoCV").set({
    name:"Miami Palmetto C",
    state:"Florida",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("PalmettoDV").set({
    name:"Miami Palmetto D",
    state:"Florida",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("PalmettoEV").set({
    name:"Miami Palmetto E",
    state:"Florida",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("PalmettoFV").set({
    name:"Miami Palmetto F",
    state:"Florida",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("PalmettoGV").set({
    name:"Miami Palmetto G",
    state:"Florida",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("PalmettoHV").set({
    name:"Miami Palmetto H",
    state:"Florida",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("PalmettoIV").set({
    name:"Miami Palmetto I",
    state:"Florida",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("PalmettoJV").set({
    name:"Miami Palmetto J",
    state:"Florida",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("ParamusAV").set({
    name:"Paramus A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("PhillipsExeterAV").set({
    name:"Phillips Exeter A",
    state:"New Hampshire",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("PiedmontHillsAV").set({
    name:"Piedmont Hills A",
    state:"California",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("PigeonForgeAV").set({
    name:"Pigeon Forge A",
    state:"Tennessee",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("PineViewAV").set({
    name:"Pine View A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("PioneersAV").set({
    name:"Team Pi-oneers A",
    state:"California",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("PocaAV").set({
    name:"Poca A",
    state:"West Virginia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("PocaBV").set({
    name:"Poca B",
    state:"West Virginia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("PrincetonAV").set({
    name:"Princeton A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("PrincetonBV").set({
    name:"Princeton B",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("PunahouAV").set({
    name:"Punahou A",
    state:"Hawaii",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("PunahouBV").set({
    name:"Punahou B",
    state:"Hawaii",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("RanneyAV").set({
    name:"Ranney A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("RansomAV").set({
    name:"Ransom Everglades A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("RansomBV").set({
    name:"Ransom Everglades B",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("RidgewoodAV").set({
    name:"Ridgewood A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("RichardMontgomeryAV").set({
    name:"Richard Montgomery A",
    state:"Maryland",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("RiversideAV").set({
    name:"Riverside A",
    state:"Montana",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("RiverviewAV").set({
    name:"Riverview A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("RiverviewBV").set({
    name:"Riverview B",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("RiverviewCV").set({
    name:"Riverview C",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("RiverviewDV").set({
    name:"Riverview D",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("RiverviewEV").set({
    name:"Riverview E",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("RussellAV").set({
    name:"Russell A",
    state:"Kentucky",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("SalemAV").set({
    name:"Salem A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("SalemBV").set({
    name:"Salem B",
    state:"Massachusetts",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("SandburgAV").set({
    name:"Stanburg A",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("SaratogaAV").set({
    name:"Saratoga A",
    state:"California",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("SaratogaBV").set({
    name:"Saratoga B",
    state:"California",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("SaratogaCV").set({
    name:"Saratoga C",
    state:"California",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ScarsdaleAV").set({
    name:"Scarsdale A",
    state:"New York",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("SeymourAV").set({
    name:"Seymour A",
    state:"Tennessee",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("SkyviewAV").set({
    name:"Skyview A",
    state:"Montana",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("SkyviewBV").set({
    name:"Skyview B",
    state:"Montana",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("SkyviewCV").set({
    name:"Skyview C",
    state:"Montana",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("StAlbansAV").set({
    name:"St. Albans A",
    state:"West Virginia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("StAnselmsAV").set({
    name:"St. Anselm's A",
    state:"Maryland",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("StarrsMillAV").set({
    name:"Starr's Mill A",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("StarrsMillBV").set({
    name:"Starr's Mill B",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("StarrsMillCV").set({
    name:"Starr's Mill C",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("StarrsMillDV").set({
    name:"Starr's Mill D",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("StarrsMillEV").set({
    name:"Starr's Mill E",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("StevensonAV").set({
    name:"Stevenson A",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("StevensonBV").set({
    name:"Stevenson B",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("StevensonCV").set({
    name:"Stevenson C",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("StGeorgesAV").set({
    name:"St. George's A",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("StJosephAV").set({
    name:"St. Joseph A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("StPetersAV").set({
    name:"St. Peter's Prep A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("StPetersBV").set({
    name:"St. Peter's Prep B",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("StuyvesantAV").set({
    name:"Stuyvesant A",
    state:"New York",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("TantasquaAV").set({
    name:"Tantasqua A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("TantasquaBV").set({
    name:"Tantasqua B",
    state:"Massachusetts",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("TateAV").set({
    name:"Tate A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ThomasJeffersonAV").set({
    name:"Thomas Jefferson A",
    state:"Virginia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ThomasJeffersonBV").set({
    name:"Thomas Jefferson B",
    state:"Virginia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("TippecanoeAV").set({
    name:"Tippecanoe A",
    state:"Ohio",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("TowerHillAV").set({
    name:"Tower Hill A",
    state:"Delaware",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("TowerHillBV").set({
    name:"Tower Hill B",
    state:"Delaware",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("TrinityAV").set({
    name:"Trinity Prep A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("TrinityBV").set({
    name:"Trinity Prep B",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("TenaflyAV").set({
    name:"Tenafly A",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("TenaflyBV").set({
    name:"Tenafly B",
    state:"New Jersey",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("VeteransAV").set({
    name:"Veterans A",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WashingtonAV").set({
    name:"Washington A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WashingtonBV").set({
    name:"Washington B",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WilliamsBayAV").set({
    name:"Williams Bay A",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WilliamsBayBV").set({
    name:"Williams Bay B",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WilliamsBayCV").set({
    name:"Williams Bay C",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WilmingtonFriendsAV").set({
    name:"Wilmington Friends A",
    state:"Deleware",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WilmingtonFriendsBV").set({
    name:"Wilmington Friends B",
    state:"Deleware",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WilmingtonFriendsCV").set({
    name:"Wilmington Friends C",
    state:"Deleware",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WilmingtonFriendsDV").set({
    name:"Wilmington Friends D",
    state:"Deleware",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WilmingtonFriendsEV").set({
    name:"Wilmington Friends E",
    state:"Deleware",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WilmingtonFriendsFV").set({
    name:"Wilmington Friends F",
    state:"Deleware",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WilmingtonFriendsGV").set({
    name:"Wilmington Friends G",
    state:"Deleware",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WiltonAlexAV").set({
    name:"Wilton Alex",
    state:"Connecticut",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WinnebagoAV").set({
    name:"Winnebago A",
    state:"Illinois",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WestminsterAV").set({
    name:"Westminster Christian A",
    state:"Florida",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WestviewAV").set({
    name:"Westview A",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WestviewBV").set({
    name:"Westview B",
    state:"Washington",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WhitePlainsAV").set({
    name:"White Plains A",
    state:"New York",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WoodstockAV").set({
    name:"Woodstock A",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("WoodwardAV").set({
    name:"Woodward Academy A",
    state:"Georgia",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ZacharyAV").set({
    name:"Zachary A",
    state:"Louisiana",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ZacharyBV").set({
    name:"Zachary B",
    state:"Louisiana",
    division:"Varsity",
rank:1200
}),
db.collection("teams").doc("ZacharyCV").set({
    name:"Zachary C",
    state:"Louisiana",
    division:"Varsity",
rank:1200
}),


//JV Teams

db.collection("teams").doc("ApalacheeBJV").set({
    name:"Apalachee B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("AptakisicAJV").set({
    name:"Aptakisic A",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("ArchimedeanFJV").set({
    name:"Archimedean F",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("AuburnBJV").set({
    name:"Auburn B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("BASISBrooklynAJV").set({
    name:"BASIS Brooklyn A",
    state:"New York",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("BeavercreekCJV").set({
    name:"Beavercreek C",
    state:"Ohio",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("BelenCJV").set({
    name:"Belen Jesuit C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("BerkeleyCJV").set({
    name:"Berkeley Prep C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("BerkeleyDJV").set({
    name:"Berkeley Prep D",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("BillingsSeniorBJV").set({
    name:"Billings Senior B",
    state:"Montana",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("BozemanCJV").set({
    name:"Bozeman C",
    state:"Montana",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("BromfieldAJV").set({
    name:"Bromfield A",
    state:"Massachusetts",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("BrookwoodBJV").set({
    name:"Brookwood B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("CaliforniaAJV").set({
    name:"California A",
    state:"California",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("CentennialCJV").set({
    name:"Centennial HS C",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("CentennialDJV").set({
    name:"Centennial HS D",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("CentennialEJV").set({
    name:"Centennial HS E",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("ChambleeAJV").set({
    name:"Chamblee Charter A",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("CharlestonCJV").set({
    name:"Charleston Catholic C",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("CharlestonDJV").set({
    name:"Charleston Catholic D",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("ChattahoocheeBJV").set({
    name:"Chattahoochee B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("CherokeeBluffJV").set({
    name:"Cherokee Bluff",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("ChurchillNJAJV").set({
    name:"Churchill New Jersey A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("ChurchillNJBJV").set({
    name:"Churchill New Jersey B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("ChurchillMDAJV").set({
    name:"Churchill Maryland A",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("ClassicalBJV").set({
    name:"Classical Prep B",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("ColdhugBJV").set({
    name:"Team Coldhug B",
    state:"Connecticut",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("DonovanCatholicBJV").set({
    name:"Donovan Catholic B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("DoralBJV").set({
    name:"Doral Academy B",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("DuvallJV").set({
    name:"Duvall",
    state:"Washington",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("EastValleyCJV").set({
    name:"East Valley C",
    state:"Washington",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("EriksenBJV").set({
    name:"Eriksen B",
    state:"California",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("GeorgeWaltonBJV").set({
    name:"George Walton B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("FontbonneCJV").set({
    name:"Fordham Hall Academy C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("FordhamBJV").set({
    name:"Fordham Prep B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("FultonAJV").set({
    name:"Fulton Science Academy A",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("GeorgetownDayBJV").set({
    name:"Georgetown Day B",
    state:"DC",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("GeorgeWashingtonAJV").set({
    name:"George Washington A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("GreensFarmsBJV").set({
    name:"Greens Farms B",
    state:"Connecticut",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("HarkerAJV").set({
    name:"Harker A",
    state:"California",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("HermannAJV").set({
    name:"Hermann Homeschool A",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("HewlettCJV").set({
    name:"Hewlett C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("HighTechBJV").set({
    name:"High Tech B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("HolmdelBJV").set({
    name:"Team Holmdel B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("HomesteadAJV").set({
    name:"Homestead A",
    state:"California",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("HomewoodFlossmoorBJV").set({
    name:"Homewood-Flossmoor B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("HoraceGreeleyBJV").set({
    name:"Horace Greeley B",
    state:"New York",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("HunterBJV").set({
    name:"Hunter College High B",
    state:"New York",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("IroquoisBJV").set({
    name:"Iroquois B",
    state:"New York",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("JohnAdamsAJV").set({
    name:"John Adams A",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("JohnPaulIIBJV").set({
    name:"John Paul II B",
    state:"Washington",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("KinnelonAJV").set({
    name:"Kinnelon A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("LargoCJV").set({
    name:"Largo C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("LeoniaBJV").set({
    name:"Leonia A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("LibbyAJV").set({
    name:"Libby Middle School A",
    state:"Washington",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("LexingtonBJV").set({
    name:"Lexington B",
    state:"Massachusetts",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("ManateeBJV").set({
    name:"Manatee B",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("MillburnMSAJV").set({
    name:"Millburn Middle School A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("McLeanAJV").set({
    name:"McLean A",
    state:"Virginia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("MethactonCJV").set({
    name:"Methacton C",
    state:"Pennsylvania",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("MillburnDJV").set({
    name:"Millburn D",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("MissionSanJoseJV").set({
    name:"Mission San Jose",
    state:"California",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("MontgomeryBlairBJV").set({
    name:"Montgomery Blair B",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("MontgomeryBlairCJV").set({
    name:"Montgomery Blair C",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("MorgantownAJV").set({
    name:"Morgantown A",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("MountainLakesBJV").set({
    name:"Mountain Lakes",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("MountainViewAJV").set({
    name:"Mountain View A",
    state:"California",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("MtSpokaneCJV").set({
    name:"Mt. Spokane C",
    state:"Washington",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("MtSpokaneDJV").set({
    name:"Mt. Spokane D",
    state:"Washington",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("NewnanBJV").set({
    name:"Newnan B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("NewnanCJV").set({
    name:"Newnan C",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("NicholsDJV").set({
    name:"Nichols D",
    state:"New York",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("NicholsEJV").set({
    name:"Nichols E",
    state:"New York",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("OdleAJV").set({
    name:"Odle Middle A",
    state:"Washington",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("PalmettoKJV").set({
    name:"Miami Palmetto K",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("PalmettoLJV").set({
    name:"Miami Palmetto L",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("PalmettoMJV").set({
    name:"Miami Palmetto M",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("PalmettonAJV").set({
    name:"Miami Palmetto N",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("PalmettoOJV").set({
    name:"Miami Palmetto O",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("PalmettoPJV").set({
    name:"Miami Palmetto P",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("PalmettoQJV").set({
    name:"Miami Palmetto Q",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("PalmettoRJV").set({
    name:"Miami Palmetto R",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("ParkCityAJV").set({
    name:"Park City A",
    state:"Montana",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("ParkCityBJV").set({
    name:"Park City B",
    state:"Montana",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("PhillipsAndoverAJV").set({
    name:"Phillips Andover A",
    state:"Massachusetts",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("PhillipsExeterBJV").set({
    name:"Phillips Exeter B",
    state:"New Hampshire",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("PrincetonCJV").set({
    name:"Princeton C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("PrincetonDJV").set({
    name:"Princeton D",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("RanneyBJV").set({
    name:"Ranney B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("RansomCJV").set({
    name:"Ransom Everglades C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("RansomDJV").set({
    name:"Ransom Everglades D",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("RansomEJV").set({
    name:"Ransom Everglades E",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("RansomFJV").set({
    name:"Ransom Everglades F",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("RansomGJV").set({
    name:"Ransom Everglades G",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("RichardMontgomeryBJV").set({
    name:"Richard Montgomery B",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("RidgewoodCJV").set({
    name:"Ridgewood C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("RidgewoodDJV").set({
    name:"Ridgewood D",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("RiverviewFJV").set({
    name:"Riverview F",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("RiverviewGJV").set({
    name:"Riverview G",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("RiverviewHJV").set({
    name:"Riverview H",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("RiverviewIJV").set({
    name:"Riverview I",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("RiverviewJJV").set({
    name:"Riverview J",
    state:"Florida",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("SaggitariusAJV").set({
    name:"Saggitarius A",
    state:"California",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("SandburgBJV").set({
    name:"Stanburg B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("SantaClaraAJV").set({
    name:"Santa Clara A",
    state:"California",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("SaratogaDJV").set({
    name:"Saratoga D",
    state:"California",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("SaratogaEJV").set({
    name:"Saratoga E",
    state:"California",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("SkyviewDJV").set({
    name:"Skyview D",
    state:"Montana",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("SouthBrunswickAJV").set({
    name:"South Brunswick A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("StevensonDJV").set({
    name:"Stevenson D",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("StevensonEJV").set({
    name:"Stevenson E",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("StAnselmsBJV").set({
    name:"St. Anselm's B",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("StevensonFJV").set({
    name:"Stevenson F",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("StJosephBJV").set({
    name:"St. Joseph B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("StPetersCJV").set({
    name:"St. Peter's Prep C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("TenaflyCJV").set({
    name:"Tenafly C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("TeslaAJV").set({
    name:"Tesla STEM A",
    state:"Washington",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("ThomasJeffersonCJV").set({
    name:"Thomas Jefferson C",
    state:"Virginia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("ThomasJeffersonDJV").set({
    name:"Thomas Jefferson D",
    state:"Virginia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("TippecanoeBJV").set({
    name:"Tippecanoe B",
    state:"Ohio",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("TowerHillCJV").set({
    name:"Tower Hill C",
    state:"Delaware",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("VeteransBJV").set({
    name:"Veterans B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("WilliamsBayDJV").set({
    name:"Williams Bay D",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("WinnebagoBJV").set({
    name:"Winnebago B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("WilmingtonFriendsHJV").set({
    name:"Wilmington Friends H",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("WilmingtonFriendsIJV").set({
    name:"Wilmington Friends I",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("WilmingtonFriendsJJV").set({
    name:"Wilmington Friends J",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("WilmingtonFriendsKJV").set({
    name:"Wilmington Friends K",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("WilmingtonFriendsLJV").set({
    name:"Wilmington Friends L",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("WilmingtonFriendsMJV").set({
    name:"Wilmington Friends M",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("WiltonAnjoAJV").set({
    name:"Wilton Anjo",
    state:"Connecticut",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("WiltonLukasAJV").set({
    name:"Wilton Lukas",
    state:"Connecticut",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("YonkersAJV").set({
    name:"Yonkers A",
    state:"New York",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("YonkersBJV").set({
    name:"Yonkers B",
    state:"New York",
    division:"Junior Varsity",
rank:1200
}),


//MS Teams

db.collection("teams").doc("AlmadenMSA").set({
    name:"Challenger-Almaden A",
    state:"California",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("BRIGHTMSA").set({
    name:"BRIGHT Homeschool A",
    state:"New Jersey",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("BurleighManorAMS").set({
    name:"Burleigh Manor A",
    state:"Maryland",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("BurleighManorBMS").set({
    name:"Burleigh Manor B",
    state:"Maryland",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("BurleighManorCMS").set({
    name:"Burleigh Manor C",
    state:"Maryland",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("BurleighManorDMS").set({
    name:"Burleigh Manor D",
    state:"Maryland",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("CentennialLaneAMS").set({
    name:"Centennial Lane ES A",
    state:"Maryland",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("CentennialLaneBMS").set({
    name:"Centennial Lane ES B",
    state:"Maryland",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("CentennialLaneCMS").set({
    name:"Centennial Lane ES C",
    state:"Maryland",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("ClassicalCMS").set({
    name:"Classical Prep C",
    state:"Florida",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("ClassicalDMS").set({
    name:"Classical Prep D",
    state:"Florida",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("ClassicalEMS").set({
    name:"Classical Prep E",
    state:"Florida",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("CompassMSA").set({
    name:"Compass A",
    state:"Virginia",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("HarvestParkMSA").set({
    name:"Harvest Park A",
    state:"California",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("IndianFieldsMSA").set({
    name:"Indian Fields A",
    state:"New Jersey",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("JLSMSA").set({
    name:"JLS A",
    state:"California",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("NysmithAMS").set({
    name:"Nysmith A",
    state:"Virginia",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("NysmithBMS").set({
    name:"Nysmith B",
    state:"Virginia",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("RipponAMS").set({
    name:"Rippon A",
    state:"Virginia",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("RipponBMS").set({
    name:"Rippon B",
    state:"Virginia",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("StollerHMS").set({
    name:"Stoller H",
    state:"Washington",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("StollerKMS").set({
    name:"Stoller K",
    state:"Washington",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("StollerTMS").set({
    name:"Stoller T",
    state:"Washington",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("StollerWMS").set({
    name:"Stoller W",
    state:"Washington",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("TenaflyMSA").set({
    name:"Tenafly Middle A",
    state:"New Jersey",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("TenaflyMSB").set({
    name:"Tenafly Middle B",
    state:"New Jersey",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("TenaflyMSC").set({
    name:"Tenafly Middle C",
    state:"New Jersey",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("TrinityCMS").set({
    name:"Trinity Prep C",
    state:"Florida",
    division:"Middle School",
rank:1200
}),
db.collection("teams").doc("TrinityDMS").set({
    name:"Trinity Prep D",
    state:"Florida",
    division:"Middle School",
rank:1200
})
db.collection("teams").doc("LindseyAV").set({
    name:"Lindsey Homeschool A",
    state:"Missouri",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("AltonAV").set({
    name:"Alton A",
    state:"Illinois",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("GraniteCityAV").set({
    name:"Granite City A",
    state:"Illinois",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("SouthwesternAV").set({
    name:"Southwestern A",
    state:"Illinois",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("SouthwesternBJV").set({
    name:"Southwestern B",
    state:"Illinois",
    division:"Junior Varsity",
    rank:1200
}),
db.collection("teams").doc("SouthwesternCJV").set({
    name:"Southwestern B",
    state:"Illinois",
    division:"Junior Varsity",
    rank:1200
}),
db.collection("teams").doc("KeithCountyDayAJV").set({
    name:"Keith County Day A",
    state:"Illinois",
    division:"Junior Varsity",
    rank:1200
}),
db.collection("teams").doc("RochesterAJV").set({
    name:"Rochester A",
    state:"Illinois",
    division:"Junior Varsity",
    rank:1200
}),
db.collection("teams").doc("NorthmontAV").set({
    name:"Northmont A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("KiskiAV").set({
    name:"Kiski A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("NCatholicAV").set({
    name:"N. Catholic A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("NAlleghenyAV").set({
    name:"N. Allegheny HS A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("AllderdiceAV").set({
    name:"Allderdice A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("AllderdiceBV").set({
    name:"Allderdice B",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("SaegertownAV").set({
    name:"Saegertown A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("SouthSideAV").set({
    name:"South Side A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200
}),
db.collection("teams").doc("SouthSideBJV").set({
    name:"South Side B",
    state:"Pennsylvania",
    division:"Junior Varsity",
    rank:1200
}),
db.collection("teams").doc("AlagarAJV").set({
    name:"Algar Homeschool A",
    state:"Pennsylvania",
    division:"Junior Varsity",
    rank:1200
}),
db.collection("teams").doc("NAlleghenyIntAJV").set({
    name:"N. Allegheny Intermediate A",
    state:"Pennsylvania",
    division:"Junior Varsity",
    rank:1200
}),
db.collection("teams").doc("NAlleghenyIntBJV").set({
    name:"N. Allegheny Intermediate B",
    state:"Pennsylvania",
    division:"Junior Varsity",
    rank:1200
})

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
let expScore;
let expScoreA;
let expScoreB;

let teamAvgV = [];
let teamAvgJV = [];
let teamAvgMS = [];
let allV = [];
let allJV = [];
let allMS = [];
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
let qV = [];
let qJV = [];
let qMS = [];

let a = 0;
let b = 0;
let c = 0;
let a2 = 0;
let b2 = 0;
let c2 = 0;
let q = 0;
let t = [];
let avgT = 0;
let y = false;
let z = 0;

//K Rank
//C Set = 100
//B Set = 50
//A Set = 25
//Nats Prelims = 20
//Nats Playoffs = 10

//test if 2 teams are in a div
async function includes(A,B,div) {
    let docRefA = db.collection("teams").doc(A);
    let docRefB = db.collection("teams").doc(B);
    await docRefA.get().then(async function(doc) {
        if (doc.exists) {
            let divA = doc.data().division;
            await docRefB.get().then(async function(doc) {
                if (doc.exists) {
                    let divB = doc.data().division;
                    if (divA == div && divB == div) {
                        if (div == "Varsity") {
                            evalV = true;
                        }
                        else if (div == "Junior Varsity") {
                            evalJV = true;
                        }
                        else {
                            evalMS = true;
                        }
                    }
                    else {
                        if (div == "Varsity") {
                            evalV = false;
                        }
                        else if (div == "Junior Varsity") {
                            evalJV = false;
                        }
                        else {
                            evalMS = false;
                        }
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
}

//Calculate expected score
async function cExpScore(A,B){
    var docRefA = db.collection("teams").doc(A);
    var docRefB = db.collection("teams").doc(B);
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
                    expScoreA = expScore;
                    expScoreB = 1-expScoreA;
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
    await cExpScore(A,B);

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
    //check what division
    await includes(A,B,"Varsity");
    await includes(A,B,"Junior Varsity");
    await includes(A,B,"Middle School");
    if (y == false){
    //C-Set games
    if (K == 100 && evalV == true) {
        //push game results
        teamAvgV.push(AScore,BScore)
        teamAvgCV.push(AScore,BScore);
    }
    else if (K == 100 && evalJV == true) {
        //push game results
        teamAvgJV.push(AScore,BScore);
        teamAvgCJV.push(AScore,BScore);
    }
    else if (K == 0 && evalMS == true) {
        //push game results
        teamAvgMS.push(AScore,BScore);
        teamAvgCMS.push(AScore,BScore);
    }
    else {
        //console.log(A,B,"is cross-divisional");
    }
    }

    else if (y == true){
        //C-Set games
    if (K == 100 && evalV == true) {
        if (a == 0) {
        a = a+1;
        //calculate q value
        let sumCV = 0;
        let m;
        let teamAvgCVLen = teamAvgCV.length;
        for(m = 0; m < teamAvgCVLen; m++){
            sumCV += parseInt(teamAvgCV[m],10);
        };
        let avgCV = sumCV/teamAvgCVLen;
        console.log("sumCV,teamAvgCVLen,avgCV",sumCV,teamAvgCVLen,avgCV);
        let sum = 0;
        let n;
        let allVLen = allV[a2].length;
        for(n = 0; n < allVLen; n++){
            sum += parseInt(allV[a2][n],10);
        };
        let avgV = sum/allVLen;
        q = avgV/avgCV;
        qV.push(q);
        }
        else {
            q = qV[a2];
        }
        nRank(A,B,AScore,BScore);
    }
    else if (K == 100 && evalJV == true) {
        if (b == 0) {
        //calculate q value
        b = b+1;
        let sumCJV = 0;
        let o;
        let teamAvgCJVLen = teamAvgCJV.length;
        for(o = 0; o < teamAvgCJVLen; o++){
            sumCJV += parseInt(teamAvgCJV[o],10);
        };
        let avgCJV = sumCJV/teamAvgCJV.length;
        let sum = 0;
        let p;
        let allJVLen = allJV[b2].length;
        for(p = 0; p < allJVLen; p++ ){
            sum += parseInt(allJV[b2][p],10);
        };
        let avgJV = sum/allJVLen;
        q = avgJV/avgCJV;
        qJV.push(q);
        }
        else {
            q = qJV[b2];
        }
        nRank(A,B,AScore,BScore);
    }
    else if (K == 0 && evalMS == true) {
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
        //console.log(A,B,"is cross-divisional");
    }
    }
};  

//calculate and update rank
async function nRank(A,B,AScore,BScore){
    console.log("q",q)
    var docRefA = db.collection("teams").doc(A);
    var docRefB = db.collection("teams").doc(B);
    await docRefA.get().then(async function(doc) {
        if (doc.exists) {
            let rankA=doc.data().rank;
            //console.log("rankA",rankA);
            await docRefB.get().then(async function(doc) {
                if (doc.exists) {
                    let rankB=doc.data().rank; 
                    rankA = rankA + q*K*((AScore/((AScore+BScore)*avgT))-expScoreA);
                    rankB = rankB + q*K*((BScore/((AScore+BScore)*avgT))-expScoreB);
                    //console.log("rankAB",rankA,rankB);
                    //update rank
                    db.collection("teams").doc(A).update({rank:rankA})
                    db.collection("teams").doc(B).update({rank:rankB})
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
    let teamsRef = db.collection("teams");
    console.log(teamsRef.where("division","==",div).orderBy("rank").limit(10));
    
}

async function cSet(){
K = 100;

//Northern California Fall C-Set
//Prelims
//Round 1
await newRank("MissionSanJoseJV","SaratogaEJV",450,70);
await newRank("HomesteadAJV","MountainViewAJV",390,130);
await newRank("SaggitariusAJV","SantaClaraAJV",390,180);
await newRank("SaratogaDJV","CaliforniaAJV",340,210);
await newRank("HarkerAJV","EriksenBJV",370,150);
await newRank("AlmadenMSA","JLSMSA",360,200);
await newRank("LynbrookAV","LesQuizAV",450,90);
await newRank("PiedmontHillsAV","SaratogaCV",280,230);
await newRank("GundersonAV","EriksenAV",300,280);
await newRank("SaratogaAV","FoothillAV",440,190);
await newRank("PioneersAV","SaratogaBV",350,290);
//Round 2
await newRank("LynbrookAV","SaratogaCV",490,80);
await newRank("PioneersAV","GundersonAV",430,210);
await newRank("FoothillAV","PiedmontHillsAV",310,300);
await newRank("HomesteadAJV","SaratogaEJV",300,150);
await newRank("SantaClaraAJV","HarkerAJV",320,250);
await newRank("MissionSanJoseJV","SaratogaDJV",330,270);
await newRank("SaggitariusAJV","MountainViewAJV",370,170);
await newRank("CaliforniaAJV","EriksenBJV",400,130);
await newRank("SaratogaBV","EriksenAV",340,310);
await newRank("SaratogaAV","LesQuizAV",540,90);
await newRank("AlmadenMSA","HarvestParkMSA",320,270);
//Round 3
await newRank("SaratogaDJV","HomesteadAJV",330,210);
await newRank("SaggitariusAJV","SaratogaEJV",400,160);
await newRank("SantaClaraAJV","CaliforniaAJV",270,240);
await newRank("SaratogaCV","LesQuizAV",280,230);
await newRank("SaratogaAV","SaratogaBV",360,220);
await newRank("EriksenAV","PiedmontHillsAV",370,180);
await newRank("PioneersAV","LynbrookAV",370,210);
await newRank("GundersonAV","FoothillAV",260,240);
await newRank("MissionSanJoseJV","EriksenBJV",400,100);
await newRank("HarkerAJV","MountainViewAJV",360,120);
await newRank("JLSMSA","HarvestParkMSA",260,220);
//Round 4
await newRank("SaratogaAV","GundersonAV",350,170);
await newRank("MissionSanJoseJV","SantaClaraAJV",340,240);
await newRank("PioneersAV","LesQuizAV",560,50)
await newRank("LynbrookAV","FoothillAV",390,200);
await newRank("HomesteadAJV","EriksenBJV",400,80);
await newRank("SaratogaBV","PiedmontHillsAV",440,140);
await newRank("CaliforniaAJV","MountainViewAJV",420,80);
await newRank("EriksenAV","SaratogaCV",440,150);
await newRank("AlmadenMSA","JLSMSA",410,160);
await newRank("HarkerAJV","SaratogaEJV",320,170);
await newRank("SaggitariusAJV","SaratogaDJV",330,180);
//Round 5
await newRank("FoothillAV","LesQuizAV",380,130);
await newRank("SaratogaBV","GundersonAV",290,280);
await newRank("SaratogaAV","EriksenAV",320,290);
await newRank("CaliforniaAJV","SaratogaEJV",320,140);
await newRank("PioneersAV","SaratogaCV",490,110);
await newRank("LynbrookAV","PiedmontHillsAV",390,180);
await newRank("SaggitariusAJV","EriksenBJV",440,90);
await newRank("MissionSanJoseJV","MountainViewAJV",270,150);
await newRank("AlmadenMSA","HarvestParkMSA",390,230);
await newRank("SaratogaDJV","HarkerAJV",300,180);
await newRank("SantaClaraAJV","HomesteadAJV",300,170);
//Round 6
await newRank("HarvestParkMSA","JLSMSA",270,150)
//Varsity Playoffs
//Semifinals
await newRank("PioneersAV","SaratogaBV",370,210);
await newRank("SaratogaAV","LynbrookAV",390,170);
//Finals
await newRank("PioneersAV","SaratogaAV",360,230);
//JV Playoffs
//Semifinals
await newRank("SaggitariusAJV","HarkerAJV",310,170);
await newRank("MissionSanJoseJV","CaliforniaAJV",250,220);
//Finals
await newRank("MissionSanJoseJV","SaggitariusAJV",280,210);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];



//Eastern Washington C-Set
//Prelims
//Round 1
await newRank("GonzagaAV","MtSpokaneAV",300,180);
await newRank("StGeorgesAV","FrenchtownAV",250,140);
await newRank("EastValleyAV","FrenchtownBV",370,70);
await newRank("MtSpokaneBV","EastValleyBV",330,100);
await newRank("LibbyAJV","EastValleyCJV",300,70);
await newRank("MtSpokaneCJV","MtSpokaneDJV",260,130);
//Round 2
await newRank("MtSpokaneAV","FrenchtownAV",320,60);
await newRank("StGeorgesAV","MtSpokaneBV",200,180);
await newRank("GonzagaAV","FrenchtownBV",350,70);
await newRank("EastValleyBV","EastValleyAV",190,180);
await newRank("MtSpokaneDJV","EastValleyCJV",170,140);
await newRank("LibbyAJV","MtSpokaneCJV",220,130);
//Round 3
await newRank("MtSpokaneBV","MtSpokaneAV",240,210);
await newRank("FrenchtownAV","FrenchtownBV",250,90);
await newRank("GonzagaAV","EastValleyBV",340,120);
await newRank("StGeorgesAV","EastValleyAV",310,100);
await newRank("MtSpokaneCJV","EastValleyCJV",210,100);
await newRank("LibbyAJV","MtSpokaneDJV",240,110);
//Round 4
await newRank("MtSpokaneBV","FrenchtownBV",410,40);
await newRank("EastValleyAV","MtSpokaneAV",250,210);
await newRank("EastValleyBV","FrenchtownAV",220,150);
await newRank("GonzagaAV","StGeorgesAV",340,180);
await newRank("LibbyAJV","MtSpokaneDJV",220,80);
await newRank("MtSpokaneCJV"," EastValleyCJV",150,110);
//Round 5
await newRank("MtSpokaneBV","EastValleyAV",240,160);
await newRank("StGeorgesAV","EastValleyBV",200,150);
await newRank("MtSpokaneAV","FrenchtownBV",290,60);
await newRank("GonzagaAV","FrenchtownAV",280,70);
await newRank("LibbyAJV","MtSpokaneCJV",290,50);
await newRank("MtSpokaneDJV","EastValleyCJV",140,100);
//Round 6
await newRank("LibbyAJV","EastValleyCJV",180,70);
await newRank("MtSpokaneDJV","MtSpokaneCJV",120,110);
//Varsity Playoffs
//Quarterfinals
await newRank("GonzagaAV","FrenchtownBV",340,80);
await newRank("MtSpokaneAV","EastValleyAV",231,230);
await newRank("StGeorgesAV","EastValleyBV",210,100);
await newRank("MtSpokaneBV","FrenchtownAV",230,90);
//Semifinals
await newRank("MtSpokaneBV","StGeorgesAV",200,160);
await newRank("GonzagaAV","MtSpokaneAV",320,120);
//Finals
await newRank("GonzagaAV","MtSpokaneBV",260,70)
//JV Playoffs
//Semifinals
await newRank("LibbyAJV","EastValleyCJV",210,100);
await newRank("MtSpokaneCJV","MtSpokaneDJV",140,90);
//Finals
//await newRank("await newRank("LibbyAJV","MtSpokaneCJV",1,0);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];



//Central Georgia Fall C-Set
//Prelims
//Round 1
await newRank("StarrsMillAV","StarrsMillBV",440,90);
await newRank("CreeksideAV","StarrsMillCV",190,170);
await newRank("ChambleeAJV","VeteransAV",270,220);
await newRank("OakMountainAV","StarrsMillDV",300,140);
await newRank("StarrsMillEV","VeteransBJV",240,120);
//Round 2
await newRank("OakMountainAV","StarrsMillEV",340,90);
await newRank("ChambleeAJV","StarrsMillCV",340,60);
await newRank("CreeksideAV","VeteransBJV",160,150);
await newRank("StarrsMillAV","StarrsMillDV",430,90);
await newRank("StarrsMillBV","VeteransAV",240,200);
//Round 3
await newRank("VeteransAV","StarrsMillEV",310,140);
await newRank("OakMountainAV","ChambleeAJV",250,220);
await newRank("StarrsMillCV","StarrsMillDV",210,180);
await newRank("StarrsMillBV","VeteransBJV",370,80);
await newRank("StarrsMillAV","CreeksideAV",390,100);
//Round 4
await newRank("OakMountainAV","StarrsMillBV",210,150);
await newRank("StarrsMillAV","ChambleeAJV",390,170);
await newRank("VeteransAV","CreeksideAV",310,40);
await newRank("StarrsMillDV","VeteransBJV",290,90);
await newRank("StarrsMillCV","StarrsMillEV",210,150);
//Round 5
await newRank("StarrsMillBV","StarrsMillCV",340,80);
await newRank("VeteransAV","StarrsMillDV",240,180);
await newRank("OakMountainAV","CreeksideAV",320,40);
await newRank("ChambleeAJV","VeteransBJV",280,40);
await newRank("StarrsMillAV","StarrsMillEV",390,80);
//Varsity Playoffs
//Semifinals
await newRank("StarrsMillAV","StarrsMillBV",380,100);
await newRank("OakMountainAV","VeteransAV",260,140);
//Finals
await newRank("StarrsMillAV","OakMountainAV",260,150);
//JV Playoffs
//Finals
await newRank("ChambleeAJV","VeteransBJV",250,40);//Chamblee Charter
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];


//Montana C-Set
//Prelims
//Round 1
await newRank("BillingsSeniorAV","SkyviewBV",250,200);
await newRank("BozemanBV","BillingsWestAV",300,140);
await newRank("BozemanAV","SkyviewCV",230,80);
await newRank("BillingsWestBV","RiversideAV",140,130);
await newRank("SkyviewAV","SkyviewDJV",430,50);
await newRank("BillingsSeniorBJV","ParkCityBJV",150,80);
await newRank("BozemanCJV","ParkCityAJV",260,80);
//Round 2
await newRank("BozemanAV","RiversideAV",240,90);
await newRank("SkyviewAV","BillingsSeniorAV",250,190);
await newRank("BillingsWestAV","BillingsWestBV",210,110);
await newRank("SkyviewBV","SkyviewCV",300,80);
await newRank("BozemanBV","BozemanCJV",250,90);
await newRank("BillingsSeniorBJV","ParkCityAJV",190,30);
await newRank("SkyviewDJV","ParkCityBJV",190,110);
//Round 3
await newRank("BozemanBV","SkyviewCV",340,50);
await newRank("SkyviewAV","RiversideAV",360,70);
await newRank("BillingsSeniorAV","BillingsWestBV",380,70);
await newRank("BillingsWestAV","SkyviewDJV",240,180);
await newRank("BozemanAV","ParkCityBJV",340,100);
await newRank("SkyviewDJV","ParkCityAJV",310,60);
await newRank("BozemanCJV","BillingsSeniorBJV",250,30);
//Round 4
await newRank("SkyviewAV","BillingsWestAV",380,80);
await newRank("BillingsWestBV","SkyviewCV",110,100);
await newRank("BozemanBV","RiversideAV",340,40);
await newRank("BillingsSeniorAV","BozemanAV",240,170);
await newRank("SkyviewBV","BillingsSeniorBJV",210,90);
await newRank("BozemanCJV","SkyviewDJV",140,110);
await newRank("ParkCityBJV","ParkCityAJV",120,50);
//Round 5
await newRank("SkyviewBV","RiversideAV",170,70);
await newRank("BozemanBV","BillingsSeniorAV",220,150);
await newRank("BillingsWestAV","BozemanAV",180,170);
await newRank("SkyviewAV","SkyviewCV",310,50);
await newRank("BillingsWestBV","ParkCityAJV",120,60);
await newRank("BozemanCJV","ParkCityBJV",190,40);
await newRank("SkyviewDJV","BillingsSeniorBJV",150,90);
//Varsity Playoffs
//Semifinals
await newRank("BozemanBV","BillingsSeniorAV",260,110);
await newRank("SkyviewAV","SkyviewBV",350,70);
//Finals
await newRank("SkyviewAV","BozemanBV",240,90);
//JV Playoffs
//Finals
await newRank("BozemanCJV","SkyviewDJV",110,80);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//West Virginia Fall C-Set
//Prelims
//Round 1
await newRank("PocaAV","CharlestonBV",280,170);
await newRank("CharlestonAV","PocaBV",430,10);
await newRank("GeorgeWashingtonBV","NitroBV",280,140);
await newRank("StAlbansAV","NitroAV",260,200);
await newRank("JohnAdamsAJV","CharlestonCJV",310,70);
await newRank("MorgantownAJV","CharlestonDJV",240,110);
//Round 2
await newRank("StAlbansAV","PocaBV",290,110);
await newRank("GeorgeWashingtonBV","PocaAV",280,180);
await newRank("CharlestonBV","NitroBV",240,160);
await newRank("CharlestonAV","NitroAV",260,220);
await newRank("CharlestonDJV","CharlestonCJV",170,130);
await newRank("MorgantownAJV","JohnAdamsAJV",260,160);
//Round 3
await newRank("GeorgeWashingtonBV","PocaBV",410,20);
await newRank("StAlbansAV","CharlestonBV",240,170);
await newRank("NitroAV","PocaAV",290,180);
await newRank("CharlestonAV","NitroBV",330,160);
await newRank("JohnAdamsAJV","CharlestonDJV",290,100);
await newRank("MorgantownAJV","CharlestonCJV",280,110);
//Round 4
await newRank("PocaAV","NitroBV",220,170);
await newRank("GeorgeWashingtonBV","CharlestonBV",300,140);
await newRank("CharlestonAV","StAlbansAV",350,90);
await newRank("NitroAV","PocaBV",360,10);
await newRank("JohnAdamsAJV","CharlestonDJV",200,160);
await newRank("MorgantownAJV","CharlestonCJV",220,130);
//Round 5
await newRank("NitroBV","PocaBV",220,50);
await newRank("CharlestonBV","NitroAV",240,120);
await newRank("CharlestonAV","GeorgeWashingtonBV",250,150);
await newRank("StAlbansAV","PocaAV",230,140);
await newRank("CharlestonDJV","CharlestonCJV",200,80);
await newRank("MorgantownAJV","JohnAdamsAJV",240,130);
//Round 6
await newRank("JohnAdamsAJV","CharlestonCJV",260,80);
await newRank("MorgantownAJV","CharlestonDJV",200,60);
//Varsity Playoffs
//Semifinals
await newRank("CharlestonAV","NitroAV",230,110);
await newRank("StAlbansAV","GeorgeWashingtonBV",190,110);
//Finals
await newRank("CharlestonAV","StAlbansAV",240,130);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Northern New Jersey C-Set
//Prelims
//Round 1
await newRank("MillburnAV","StPetersAV",550,70);
await newRank("StJosephAV","ParamusAV",300,180);
await newRank("MillburnBV","StuyvesantAV",280,250);
await newRank("NewarkAV","HewlettBV",270,240);
await newRank("OratoryAV","MillburnCV",310,280);
await newRank("MountainLakesAV","StPetersBV",410,60);
await newRank("HewlettAV","HolmdelAV",400,100);
await newRank("KinnelonAJV","StPetersCJV",300,170);
await newRank("HewlettCJV","ChurchillNJBJV",310,200);
await newRank("ChurchillNJAJV","SouthBrunswickAJV",490,90);
await newRank("StJosephBJV","BASISBrooklynAJV",200,180);
await newRank("HunterBJV","HolmdelBJV",470,120);
await newRank("MillburnDJV","MountainLakesBJV",390,160);
await newRank("TenaflyMSB","IndianFieldsMSA",130,100);
await newRank("TenaflyMSC","BRIGHTMSA",130,100);
//Round 2
await newRank("HewlettBV","ParamusAV",250,170);
await newRank("MountainLakesAV","NewarkAV",280,210);
await newRank("HunterAV","StuyvesantAV",450,120);
await newRank("MillburnCV","HolmdelAV",520,80);
await newRank("MillburnBV","HewlettAV",320,250);
await newRank("OratoryAV","StPetersBV",390,60);
await newRank("KinnelonAJV","StJosephBJV",260,150);
await newRank("MillburnAV","StJosephAV",510,110);
await newRank("HolmdelBJV","StPetersCJV",340,140);
await newRank("ChurchillNJAJV","BASISBrooklynAJV",550,80);
await newRank("MountainLakesBJV","ChurchillNJBJV",370,70);
await newRank("HunterBJV","MillburnDJV",410,180);
await newRank("HewlettCJV","SouthBrunswickAJV",240,200);
await newRank("TenaflyMSA","TenaflyMSB",400,60);
await newRank("IndianFieldsMSA","BRIGHTMSA",130,80);
//Round 3
await newRank("MillburnCV","StPetersBV",450,100);
await newRank("MountainLakesAV","ParamusAV",280,180);
await newRank("StuyvesantAV","StPetersAV",360,130);
await newRank("OratoryAV","NewarkAV",370,170);
await newRank("HunterBJV","ChurchillNJBJV",530,60);
await newRank("MillburnBV","HolmdelAV",430,80);
await newRank("HunterAV","HewlettAV",370,180);
await newRank("MillburnAV","HewlettBV",470,100);
await newRank("ChurchillNJAJV","KinnelonAJV",430,90);
await newRank("HewlettCJV","BASISBrooklynAJV",360,90);
await newRank("HolmdelBJV","StJosephBJV",360,130);
await newRank("MillburnDJV","StPetersCJV",360,200);
await newRank("MountainLakesBJV","SouthBrunswickAJV",290,150);
await newRank("TenaflyMSA","TenaflyMSC",410,10);
await newRank("TenaflyMSB","BRIGHTMSA",290,40);
//Round 4
await newRank("StuyvesantAV","StJosephAV",340,140);
await newRank("OratoryAV","ParamusAV",500,100);
await newRank("HunterAV","MillburnCV",410,230);
await newRank("MillburnAV","MountainLakesAV",540,70);
await newRank("HewlettAV","StPetersAV",400,90);
await newRank("NewarkAV","HolmdelAV",340,150);
await newRank("MillburnBV","StPetersBV",460,80);
await newRank("ChurchillNJAJV","HolmdelBJV",380,210);
await newRank("HunterBJV","SouthBrunswickAJV",480,100);
await newRank("MillburnDJV","StJosephBJV",420,90);
await newRank("StPetersCJV","ChurchillNJBJV",240,130);
await newRank("MountainLakesBJV","BASISBrooklynAJV",320,50);
await newRank("KinnelonAJV","HewlettCJV",240,210);
await newRank("TenaflyMSC","IndianFieldsMSA",110,60);
await newRank("TenaflyMSA","BRIGHTMSA",380,20);
//Round 5
await newRank("MillburnAV","OratoryAV",490,130);
await newRank("StuyvesantAV","HewlettBV",380,110);
await newRank("ParamusAV","HolmdelAV",190,180);
await newRank("HunterAV","StPetersBV",450,40);
await newRank("MillburnBV","NewarkAV",320,190);
await newRank("MillburnCV","StPetersAV",460,80);
await newRank("HewlettAV","StJosephAV",330,180);
await newRank("SouthBrunswickAJV","StPetersCJV",240,160);
await newRank("HunterBJV","BASISBrooklynAJV",440,70);
await newRank("ChurchillNJBJV","StJosephBJV",170,90);
await newRank("MountainLakesBJV","KinnelonAJV",190,180);
await newRank("ChurchillNJAJV","MillburnDJV",370,210);
await newRank("HolmdelBJV","HewlettCJV",240,180);
await newRank("TenaflyMSA","IndianFieldsMSA",250,50);
await newRank("TenaflyMSB","TenaflyMSC",190,60);
//Varsity Playoffs
//Octofinals
await newRank("OratoryAV","ParamusAV",310,160);
await newRank("HewlettBV","HewlettAV",221,220);
await newRank("StuyvesantAV","StJosephAV",270,150);
await newRank("MountainLakesAV","NewarkAV",220,210);
//Quarterfinals
await newRank("MillburnAV","MountainLakesAV",420,90);
await newRank("HunterAV","StuyvesantAV",410,140);
await newRank("MillburnCV","HewlettBV",330,110);
await newRank("MillburnBV","OratoryAV",240,230);
//Semifinals
await newRank("MillburnAV","MillburnBV",400,120);
await newRank("HunterAV","MillburnCV",300,210);
//Finals
await newRank("MillburnAV","HunterAV",280,260);
//JV Playoffs
//Quarterfinals
await newRank("HunterBJV","StPetersCJV",500,40);
await newRank("ChurchillNJAJV","KinnelonAJV",350,110);
await newRank("HolmdelBJV","MountainLakesBJV",290,140);
await newRank("MillburnDJV","HewlettCJV",300,140);
//Semifinals
await newRank("HunterBJV","MillburnDJV",360,170);
await newRank("ChurchillNJAJV","HolmdelBJV",350,170);
//Finals
await newRank("HunterBJV","ChurchillNJAJV",290,260);
//MS Playoffs
//Semifinals
//await newRank("TenaflyMSA","IndianFieldsMSA",1,0)
await newRank("TenaflyMSB","TenaflyMSC",160,20);
//Finals
await newRank("TenaflyMSA","TenaflyMSB",200,90);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Northern Illinois C-Set
//Prelims
//Round 1
await newRank("StevensonAV","StevensonCV",340,300);
await newRank("BarringtonAV","BarringtonBV",490,90);
await newRank("SandburgAV","MarmionAV",320,230);
await newRank("StevensonBV","HinsdaleAV",350,210);
await newRank("StevensonEJV","StevensonFJV",400,120);
await newRank("StevensonDJV","AptakisicAJV",360,150);
//Round 2
await newRank("MarmionAV","BarringtonBV",360,180);
await newRank("HinsdaleAV","SandburgAV",300,290);
await newRank("StevensonAV"," StevensonBV",470,170);
await newRank("StevensonCV","BarringtonAV",340,330);
await newRank("StevensonFJV","AptakisicAJV",270,160);
await newRank("StevensonEJV","SandburgBJV",470,140);
//Round 3
await newRank("StevensonAV","MarmionAV",460,180);
await newRank("StevensonCV","SandburgAV",420,160);
await newRank("HinsdaleAV","BarringtonBV",450,120);
await newRank("StevensonBV","BarringtonAV",280,260);
await newRank("SandburgBJV","StevensonFJV",340,160);
await newRank("StevensonEJV","StevensonDJV",370,220);
//Round 4
await newRank("SandburgAV","BarringtonAV",350,280);
await newRank("StevensonAV","BarringtonBV",530,40);
await newRank("StevensonCV","StevensonBV",380,230);
await newRank("HinsdaleAV","MarmionAV",400,190);
await newRank("SandburgBJV","AptakisicAJV",310,180);
await newRank("StevensonDJV","StevensonFJV",430,100);
//Round 5
await newRank("StevensonBV","BarringtonBV",390,140);
await newRank("BarringtonAV","HinsdaleAV",320,270);
await newRank("StevensonCV","MarmionAV",510,130);
await newRank("StevensonAV","SandburgAV",440,160);
await newRank("StevensonDJV","SandburgBJV",380,160);
await newRank("StevensonEJV","AptakisicAJV",360,140);
//Round 6
await newRank("StevensonAV","HinsdaleAV",410,200);
await newRank("BarringtonAV","MarmionAV",380,200);
await newRank("StevensonCV","BarringtonBV",520,60);
await newRank("SandburgAV","SandburgBJV",270,240);
//Round 7
await newRank("StevensonBV","MarmionAV",340,170);
await newRank("SandburgAV","BarringtonBV",370,70);
await newRank("StevensonAV","BarringtonAV",320,240);
await newRank("StevensonCV","HinsdaleAV",410,130);
//Varsity Playoffs
//Finals
await newRank("StevensonAV","StevensonCV",390,210);
//JV Playoffs
//Finals
await newRank("StevensonEJV","StevensonDJV",290,220);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Greater Dayton C-Set
//Prelims
//Round 1
await newRank("TippecanoeAV","TippecanoeBJV",300,60);
await newRank("GeorgeWashingtonAV","BeavercreekCJV",530,70);
await newRank("BeavercreekAV","BeavercreekBV",520,90);
//Round 2
await newRank("BeavercreekBV","TippecanoeBJV",310,80);
await newRank("GeorgeWashingtonAV","TippecanoeAV",460,140);
await newRank("BeavercreekAV","BeavercreekCJV",590,60);
//Round 3
await newRank("GeorgeWashingtonAV","BeavercreekBV",450,120);
await newRank("TippecanoeAV","BeavercreekCJV",220,160);
await newRank("BeavercreekAV","TippecanoeBJV",270,240);
//Round 4
await newRank("BeavercreekBV","BeavercreekCJV",400,120);
await newRank("GeorgeWashingtonAV","TippecanoeBJV",560,20);
await newRank("BeavercreekAV","TippecanoeAV",500,70);
//Round 5
await newRank("BeavercreekAV","GeorgeWashingtonAV",340,320);
await newRank("TippecanoeAV","BeavercreekBV",280,80);
await newRank("BeavercreekCJV","TippecanoeBJV",120,80);
//Varsity Playoffs
//Finals
await newRank("GeorgeWashingtonAV","BeavercreekAV",310,300);//Beavercreek with advantage
await newRank("BeavercreekAV","GeorgeWashingtonAV",320,290);
//JV Playoffs
//Finals
await newRank("BeavercreekCJV","TippecanoeBJV",220,20);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Buffalo C-Set
//Prelims
//Round 1
await newRank("NicholsAV","AmherstAV",270,240);
await newRank("NicholsBV","AmherstBV",320,180);
await newRank("IroquoisAV","NicholsCV",340,210);
await newRank("NicholsDJV","IroquoisBJV",250,70);
//Round 2
await newRank("NicholsAV","AmherstBV",250,210);
await newRank("NicholsBV","IroquoisAV",350,110);
await newRank("NicholsCV","AmherstAV",290,140);
await newRank("NicholsEJV","IroquoisBJV",220,90);
//Round 3
await newRank("NicholsAV","NicholsCV",250,210);
await newRank("NicholsBV","AmherstAV",390,120);
await newRank("IroquoisAV","AmherstBV",350,110);
await newRank("NicholsDJV","NicholsEJV",260,140);
//Round 4
await newRank("IroquoisAV","NicholsAV",280,170);
await newRank("NicholsBV","NicholsCV",370,100);
await newRank("AmherstBV","AmherstAV",290,180);
await newRank("NicholsDJV","IroquoisBJV",290,40);
//Round5
await newRank("NicholsBV","NicholsAV",250,180);
await newRank("NicholsCV","AmherstBV",170,150);
await newRank("IroquoisAV","AmherstAV",270,130);
await newRank("NicholsEJV","IroquoisBJV",140,60);
//Round 6
await newRank("NicholsDJV","NicholsEJV",190,90);
//Varsity Playoffs
//Semifinals
await newRank("NicholsBV","NicholsCV",350,180);
await newRank("IroquoisAV","NicholsAV",200,180);
//Finals
await newRank("NicholsBV","IroquoisAV",250,140);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//South Florida Fall C-Set
//Prelims
//Round 1
await newRank("RansomAV","PalmettoDV",520,30);
await newRank("ArchimedeanAV","PalmettoEV",330,130);
await newRank("ArchimedeanCV","PalmettoFV",220,90);
await newRank("CoralReefAV","PalmettoJV",360,70);
await newRank("PalmettoBV","BelenBV",280,210);
await newRank("ArchimedeanEV","PalmettoHV",220,60);
await newRank("BelenAV","PalmettoIV",420,40);
await newRank("DoralAV","ArchimedeanDV",330,50);
await newRank("ArchimedeanBV","PalmettoAV",240,180);
await newRank("PalmettoCV","WestminsterAV",310,160);
await newRank("CoralReefBV","PalmettoGV",300,120);
await newRank("RansomBV","PalmettoMJV",280,190);
await newRank("PalmettoPJV","PalmettoOJV",310,160);
await newRank("BelenCJV","PalmettonAJV",330,110);
await newRank("PalmettoLJV","PalmettoQJV",310,50);
await newRank("DoralBJV","PalmettoRJV",270,140);
await newRank("RansomCJV","PalmettoKJV",460,90);
await newRank("ArchimedeanFJV","RansomDJV",180,170);
//Round 2
await newRank("RansomBV","PalmettoCV",230,230);
await newRank("RansomAV","CoralReefBV",410,90);
await newRank("PalmettoEV","PalmettoDV",260,100);
await newRank("ArchimedeanAV","ArchimedeanCV",280,150);
await newRank("PalmettoJV","PalmettoFV",180,170);
await newRank("CoralReefAV","BelenBV",300,210);
await newRank("PalmettoBV","PalmettoHV",290,140);
await newRank("BelenAV","ArchimedeanEV",360,40);
await newRank("ArchimedeanDV","PalmettoIV",120,120);
await newRank("DoralAV","PalmettoAV",230,190);
await newRank("ArchimedeanBV","WestminsterAV",240,180);
await newRank("RansomDJV","PalmettoGV",210,150);
await newRank("PalmettoMJV","PalmettoOJV",290,150);
await newRank("PalmettoPJV","PalmettonAJV",260,140);
await newRank("PalmettoLJV","BelenCJV",250,190);
await newRank("DoralBJV","PalmettoQJV",260,90);
await newRank("RansomCJV","PalmettoRJV",450,90);
await newRank("ArchimedeanFJV","PalmettoKJV",250,120);
//Round 3
await newRank("WestminsterAV","DoralAV",280,160);
await newRank("ArchimedeanBV","PalmettoGV",240,150);
await newRank("RansomAV","PalmettoCV",330,180);
await newRank("CoralReefBV","RansomBV",250,220);
await newRank("ArchimedeanCV","PalmettoDV",220,150);
await newRank("ArchimedeanAV","PalmettoJV",390,80);
await newRank("BelenBV","PalmettoFV",370,110);
await newRank("CoralReefAV","PalmettoHV",410,40);
await newRank("PalmettoBV","BelenAV",340,210);
await newRank("ArchimedeanDV","ArchimedeanEV",130,120);
await newRank("PalmettoAV","PalmettoIV",410,90);
await newRank("PalmettoEV","PalmettoKJV",270,170);
await newRank("ArchimedeanFJV","PalmettoRJV",220,140);
await newRank("RansomDJV","PalmettoOJV",250,150);
await newRank("PalmettoMJV","PalmettonAJV",330,130);
await newRank("PalmettoPJV","PalmettoLJV",270,180);
await newRank("BelenCJV","DoralBJV",240,200);
await newRank("RansomCJV","PalmettoQJV",460,50);
//Round 4
await newRank("PalmettoAV","ArchimedeanEV",410,50);
await newRank("WestminsterAV","PalmettoIV",290,40);
await newRank("DoralAV","PalmettoGV",210,160);
await newRank("RansomAV","ArchimedeanBV",450,110);
await newRank("PalmettoCV","PalmettoEV",240,230);
await newRank("CoralReefBV","ArchimedeanCV",230,130);
await newRank("PalmettoLJV","PalmettoDV",140,70);
await newRank("ArchimedeanAV","BelenBV",330,240);
await newRank("PalmettoFV","PalmettoHV",160,70);
await newRank("BelenAV","CoralReefAV",280,270);
await newRank("PalmettoBV","RansomBV",370,130);
await newRank("PalmettoRJV","ArchimedeanDV",160,130);
await newRank("RansomCJV","BelenCJV",520,110);
await newRank("ArchimedeanFJV","PalmettoQJV",320,40);
await newRank("PalmettoOJV","PalmettoKJV",170,150);
await newRank("RansomDJV","PalmettonAJV",280,80);
await newRank("PalmettoMJV","PalmettoLJV",190,130);
await newRank("PalmettoPJV","DoralBJV",300,140);
//Round 5
await newRank("PalmettoBV","CoralReefAV",260,190);
await newRank("PalmettoAV","ArchimedeanDV",290,40);
await newRank("WestminsterAV","ArchimedeanEV",250,50);
await newRank("RansomAV","PalmettoGV",360,80);
await newRank("DoralAV","PalmettoIV",250,80);
await newRank("ArchimedeanBV","PalmettoEV",230,210);
await newRank("PalmettoCV","ArchimedeanCV",230,150);
await newRank("CoralReefBV","PalmettoJV",260,80);
await newRank("RansomBV","PalmettoDV",320,80);
await newRank("ArchimedeanAV","PalmettoHV",330,40);
await newRank("BelenBV","PalmettoQJV",350,60);
await newRank("PalmettoMJV","DoralBJV",290,90);
await newRank("RansomCJV","PalmettoPJV",390,130);
await newRank("ArchimedeanFJV","BelenCJV",170,170);
await newRank("PalmettoRJV","PalmettoOJV",180,140);
await newRank("PalmettoKJV","PalmettonAJV",150,110);
await newRank("PalmettoLJV","RansomDJV",180,170);
//Varsity Playoffs
//Octofinals
//await newRank("RansomAV","PalmettoGV",1,0);
await newRank("PalmettoCV","DoralAV",200,150);
await newRank("PalmettoBV","ArchimedeanBV",320,150);
await newRank("CoralReefAV","RansomBV",200,190);
await newRank("ArchimedeanAV","ArchimedeanCV",280,70);
await newRank("BelenBV","WestminsterAV",300,90);
await newRank("BelenAV","PalmettoEV",270,150);
await newRank("PalmettoAV","CoralReefBV",210,190);
//Quarterfinals
await newRank("RansomAV","PalmettoCV",310,150);
await newRank("BelenBV","ArchimedeanAV",270,220);
await newRank("BelenAV","PalmettoAV",230,200);
await newRank("PalmettoBV","CoralReefAV",200,140);
//Semifinals
await newRank("RansomAV","PalmettoBV",220,190);
await newRank("BelenBV","BelenAV",180,170);
//Finals
await newRank("RansomAV","BelenBV",260,170)
//JV Playoffs
//Quarterfinals
await newRank("RansomCJV","DoralBJV",330,140);
await newRank("RansomDJV","ArchimedeanFJV",180,130);
await newRank("PalmettoPJV","PalmettoLJV",250,70);
await newRank("BelenCJV","PalmettoMJV",200,180);
//Semifinals
await newRank("PalmettoPJV","BelenCJV",240,70);
await newRank("RansomCJV","PalmettoPJV",340,90);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Oahu C-Set
//Prelims
//Round 1
await newRank("IolaniBV","PunahouBV",400,130);
await newRank("IolaniAV","PunahouAV",270,260);
//Round 2
await newRank("IolaniBV","IolaniAV",410,160);
await newRank("PunahouAV","PunahouBV",320,150);
//Round 3
await newRank("IolaniBV","PunahouAV",350,210);
await newRank("IolaniAV","PunahouBV",330,190);
//Round 4
await newRank("IolaniBV","PunahouBV",370,130);
await newRank("IolaniAV","PunahouAV",280,280);
//Round 5
await newRank("IolaniBV","PunahouAV",380,120);
await newRank("IolaniAV","PunahouBV",380,120);
//Round 6
await newRank("PunahouAV","PunahouBV",200,160);
await newRank("IolaniAV","IolaniBV",260,210);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Greater Knoxville Fall C-Set
//Prelims
//Round 3
await newRank("SeymourAV","PigeonForgeAV",230,210);
await newRank("MaryvilleAV","MorristownAV",370,140);
await newRank("GatlinburgBV","MorristownBV",170,110);
//Round 2
await newRank("MaryvilleAV","MorristownBV",460,40);
await newRank("GatlinburgAV","MorristownAV",270,140);
await newRank("SeymourAV","GatlinburgBV",280,60);
//Round 3
await newRank("GatlinburgAV","MorristownBV",370,60);
await newRank("MaryvilleAV","SeymourAV",320,140);
await newRank("PigeonForgeAV","MorristownAV",230,190);
//Round 4
await newRank("GatlinburgAV","SeymourAV",330,90);
await newRank("PigeonForgeAV","MorristownBV",250,70);
await newRank("MorristownAV","GatlinburgBV",310,30);
//Round 5
await newRank("PigeonForgeAV","GatlinburgBV",310,20);
await newRank("GatlinburgAV","MaryvilleAV",220,210);
await newRank("MorristownAV","SeymourAV",190,130);
//Varsity Playoffs
//Semifinals
await newRank("GatlinburgAV","MorristownAV",230,100);
await newRank("MaryvilleAV","PigeonForgeAV",400,160);
//Finals
await newRank("MaryvilleAV","GatlinburgAV",230,140);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Eastern Geogia Fall C-Set
//Prelims
//Round 1
await newRank("BrookwoodAV","NewnanAV",241,240);
await newRank("LambertAV","ChattahoocheeAV",310,280);
await newRank("WoodstockAV","WoodwardAV",350,90);
await newRank("CambridgeAV","JohnsCreekAV",340,210);
await newRank("CommerceAV","ApalacheeAV",300,180);
await newRank("NewnanCJV","BrookwoodBJV",230,170);
await newRank("ChattahoocheeBJV","NewnanBJV",240,220);
await newRank("HermannAJV","CherokeeBluffJV",290,220);
await newRank("FultonAJV","GeorgeWaltonBJV",410,40);
//Round 2
await newRank("LambertAV","NewnanAV",430,200);
await newRank("BrookwoodAV","WoodstockAV",350,160);
await newRank("ChattahoocheeAV","WoodwardAV",410,140);
await newRank("ApalacheeAV","GeorgeWaltonAV",220,190);
await newRank("CambridgeAV","CommerceAV",510,110);
await newRank("ChattahoocheeBJV","ApalacheeBJV",360,60);
await newRank("NewnanCJV","CherokeeBluffJV",240,190);
await newRank("NewnanBJV","FultonAJV",210,150);
await newRank("HermannAJV","GeorgeWaltonBJV",450,40);
//Round 3
await newRank("BrookwoodAV","WoodwardAV",360,110);
await newRank("LambertAV","WoodstockAV",380,120);
await newRank("ChattahoocheeAV","NewnanAV",370,170);
await newRank("CommerceAV","GeorgeWaltonAV",250,220);
await newRank("JohnsCreekAV","ApalacheeAV",340,130);
await newRank("CherokeeBluffJV","BrookwoodBJV",240,220);
await newRank("FultonAJV","ApalacheeBJV",330,100);
await newRank("NewnanCJV","GeorgeWaltonBJV",230,200);
await newRank("HermannAJV","NewnanBJV",310,170);
//Round 4
await newRank("LambertAV","WoodwardAV",460,140);
await newRank("ChattahoocheeAV","BrookwoodAV",400,150);
await newRank("NewnanAV","WoodstockAV",320,180);
await newRank("CambridgeAV","GeorgeWaltonAV",490,80);
await newRank("JohnsCreekAV","CommerceAV",280,140);
await newRank("CherokeeBluffJV","GeorgeWaltonBJV",320,70);
await newRank("HermannAJV","ChattahoocheeBJV",260,200);
await newRank("BrookwoodBJV","NewnanBJV",200,190);
await newRank("NewnanCJV","ApalacheeBJV",170,110);
//Round 5
await newRank("ChattahoocheeAV","WoodstockAV",370,200);
await newRank("WoodwardAV","NewnanAV",200,180);
await newRank("LambertAV","BrookwoodAV",380,200);
await newRank("CambridgeAV","ApalacheeAV",510,60);
await newRank("JohnsCreekAV","GeorgeWaltonAV",310,150);
await newRank("HermannAJV","FultonAJV",270,200);
await newRank("CherokeeBluffJV","NewnanBJV",230,180);
await newRank("ChattahoocheeBJV","NewnanCJV",230,180);
await newRank("BrookwoodBJV","ApalacheeBJV",250,80);
//Varsity Playoffs
//Quarterfinals
await newRank("CambridgeAV","CommerceAV",340,130);
await newRank("LambertAV","WoodstockAV",370,160);
await newRank("ChattahoocheeAV","NewnanAV",350,160);
await newRank("BrookwoodAV","JohnsCreekAV",220,190);
//Semifinals
await newRank("CambridgeAV","BrookwoodAV",320,150);
await newRank("LambertAV","ChattahoocheeAV",271,270);
//Finals
await newRank("CambridgeAV","LambertAV",310,250);
//JV Playoffs
//Semifinals
await newRank("HermannAJV","CherokeeBluffJV",370,80);
await newRank("ChattahoocheeBJV","FultonAJV",210,160);
//Finals
await newRank("ChattahoocheeBJV","HermannAJV",280,140);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Central Florida Fall C-Set
//Prelims
//Round 1
await newRank("PineViewAV","RiverviewEV",270,220);
await newRank("RiverviewAV","LargoBV",280,240);
await newRank("BerkeleyBV","KingAV",270,240);
await newRank("TrinityBV","ClassicalAV",290,180);
await newRank("TrinityAV","RiverviewDV",450,70);
await newRank("LargoAV","RiverviewBV",380,160);
await newRank("KingBV","BerkeleyAV",340,190);
await newRank("ManateeAV","RiverviewCV",320,200);
await newRank("RiverviewHJV","LargoCJV",230,170);
await newRank("BerkeleyCJV","RiverviewIJV",330,20);
await newRank("RiverviewFJV","RiverviewGJV",310,50);
await newRank("ManateeBJV","RiverviewJJV",330,30);
await newRank("ClassicalBJV","BerkeleyDJV",140,110);
await newRank("ClassicalBJV","BerkeleyDJV",140,110);
await newRank("ClassicalCMS","ClassicalEMS",190,30);
await newRank("TrinityDMS","ClassicalDMS",220,40);
//Round 2
await newRank("RiverviewCV","ClassicalAV",260,220);
await newRank("KingAV","RiverviewDV",320,120);
await newRank("TrinityAV","BerkeleyBV",320,310);
await newRank("KingBV","RiverviewAV",230,220);
await newRank("LargoAV","RiverviewEV",350,130);
await newRank("ManateeAV","TrinityBV",240,220);
await newRank("LargoBV","BerkeleyAV",340,140);
await newRank("PineViewAV","RiverviewBV",250,200);
await newRank("RiverviewFJV","RiverviewIJV",360,60);
await newRank("RiverviewGJV","RiverviewJJV",280,70);
await newRank("ManateeBJV","BerkeleyDJV",170,130);
await newRank("LargoCJV","ClassicalBJV",240,100);
await newRank("BerkeleyCJV","RiverviewHJV",240,180);
await newRank("TrinityCMS","ClassicalEMS",430,10);
await newRank("ClassicalCMS","TrinityDMS",150,140);
//Round 3
await newRank("TrinityAV","ManateeAV",510,80);
await newRank("TrinityBV","RiverviewDV",330,130);
await newRank("KingAV","ClassicalAV",360,140);
await newRank("BerkeleyAV","PineViewAV",230,220);
await newRank("RiverviewCV","BerkeleyBV",320,250);
await newRank("TrinityCMS","ClassicalDMS",490,10);
await newRank("LargoBV","RiverviewEV",260,160);
await newRank("RiverviewFJV","RiverviewHJV",210,150);
await newRank("LargoAV","RiverviewAV",370,150);
await newRank("KingBV","RiverviewBV",270,220);
await newRank("ManateeBJV","LargoCJV",230,190);
await newRank("RiverviewIJV","RiverviewJJV",140,120);
await newRank("BerkeleyCJV","ClassicalBJV",190,170);
await newRank("TrinityCMS","ClassicalDMS",490,10);
await newRank("TrinityDMS","ClassicalEMS",230,40);
//Round 4
await newRank("KingBV","RiverviewEV",330,110);
await newRank("BerkeleyBV","TrinityBV",340,160);
await newRank("BerkeleyCJV","ManateeBJV",250,130);
await newRank("TrinityCMS","ClassicalCMS",410,40);
await newRank("RiverviewAV","PineViewAV",290,200);
await newRank("LargoAV","BerkeleyAV",330,170);
await newRank("LargoBV","RiverviewBV",290,150);
await newRank("LargoCJV","RiverviewGJV",190,110);
await newRank("BerkeleyDJV","RiverviewIJV",160,70);
await newRank("ClassicalDMS","ClassicalEMS",60,50);
await newRank("RiverviewCV","RiverviewDV",470,110);
await newRank("RiverviewHJV","RiverviewJJV",180,90);
await newRank("RiverviewFJV","ClassicalBJV",340,130);
await newRank("KingAV","ManateeAV",270,160);
await newRank("TrinityAV","ClassicalAV",500,70);
//Round 5
await newRank("TrinityAV","LargoAV",310,230);
await newRank("RiverviewAV","ManateeAV",300,140);
await newRank("ClassicalAV","BerkeleyAV",210,160);
await newRank("BerkeleyBV","RiverviewBV",220,150);
await newRank("TrinityCMS","TrinityDMS",330,60);
await newRank("ClassicalBJV","RiverviewJJV",220,60);
await newRank("KingBV","RiverviewCV",320,150);
await newRank("RiverviewFJV","ManateeBJV",210,90);
await newRank("KingAV","PineViewAV",290,140);
await newRank("LargoCJV","RiverviewIJV",150,80);
await newRank("BerkeleyCJV","RiverviewGJV",260,70);
await newRank("RiverviewEV","RiverviewDV",190,150);
await newRank("RiverviewHJV","BerkeleyDJV",240,100);
await newRank("TrinityBV","LargoBV",230,190);
await newRank("ClassicalCMS","ClassicalDMS",120,50);
//Varsity Playoffs
//Quarterfinals
await newRank("TrinityAV","RiverviewAV",370,100);
await newRank("LargoAV","BerkeleyBV",280,130);
await newRank("KingBV","LargoBV",190,170);
await newRank("KingAV","RiverviewCV",290,150);
//Semifinals
await newRank("LargoAV","KingBV",280,150);
await newRank("TrinityAV","KingAV",310,180);
//Finals
await newRank("TrinityAV","LargoAV",330,170);
//JV Playoffs
//Quarterfinals
//await newRank("RiverviewFJV","BerkeleyDJV",1,0);
await newRank("BerkeleyCJV","RiverviewGJV",260,50);
await newRank("LargoCJV","ManateeBJV",180,80);
await newRank("RiverviewHJV","ClassicalBJV",210,80);
//Semifinals
await newRank("RiverviewHJV","BerkeleyCJV",170,130);
await newRank("RiverviewFJV","LargoCJV",200,100);
await newRank("RiverviewHJV","RiverviewFJV",121,120);
//MS Final
await newRank("TrinityCMS","TrinityDMS",310,40);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Western Washington C-Set
//Prelims
//Round 1
await newRank("CentralKitsapAV","HolyNamesAV",320,200);
await newRank("OdleAJV","JohnPaulIIBJV",250,120);
await newRank("TeslaAJV","DuvallJV",400,70);
//Round 2
await newRank("HolyNamesAV","JohnPaulIIAV",240,200);
await newRank("TeslaAJV","JohnPaulIIBJV",390,70);
await newRank("OdleAJV","DuvallJV",230,130);
//Round 3
await newRank("CentralKitsapAV","JohnPaulIIAV",330,80);
await newRank("TeslaAJV","OdleAJV",330,140);
await newRank("JohnPaulIIBJV","DuvallJV",190,120);
//Round 4
await newRank("HolyNamesAV","JohnPaulIIAV",330,110);
await newRank("TeslaAJV","JohnPaulIIBJV",430,80);
await newRank("OdleAJV","DuvallJV",190,60);
//Round 5
await newRank("CentralKitsapAV","JohnPaulIIAV",320,90);
await newRank("TeslaAJV","OdleAJV",360,110);
await newRank("JohnPaulIIBJV","DuvallJV",160,90);
//Round 6
await newRank("HolyNamesAV","CentralKitsapAV",300,160);
//Varsity Playoffs
//Finals
await newRank("CentralKitsapAV","HolyNamesAV",250,150);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Southern Washington C-Set
//Prelims
//Round 1
await newRank("JesuitAV","LincolnAV",340,180);
await newRank("ColumbiaRiverAV","WestviewAV",271,270);//Columbia River wins on
await newRank("LewisandClarkAV","WestviewBV",340,110);
await newRank("JesuitBV","ColumbiaRiverBV",340,110);
await newRank("StollerKMS","StollerTMS",340,140);
await newRank("StollerHMS","StollerWMS",410,70);
//Round 2
await newRank("LewisandClarkAV","JesuitBV",220,140);
await newRank("JesuitAV","ColumbiaRiverAV",360,180);
await newRank("WestviewAV","ColumbiaRiverAV",380,100);
//Round 3
await newRank("JesuitAV","ColumbiaRiverBV",430,70);
await newRank("WestviewAV","LewisandClarkAV",330,200);
await newRank("JesuitBV","LincolnAV",260,210);
await newRank("ColumbiaRiverAV","WestviewBV",410,120);
await newRank("StollerKMS","StollerWMS",450,70);
await newRank("StollerHMS","StollerTMS",380,90);
//Round 4
await newRank("ColumbiaRiverAV","JesuitBV",410,130);
await newRank("WestviewAV","LincolnAV",350,220);
await newRank("JesuitAV","LewisandClarkAV",350,130);
await newRank("WestviewBV","ColumbiaRiverBV",250,70);
await newRank("StollerKMS","StollerHMS",350,200);
await newRank("StollerWMS","StollerTMS",210,110);
//Round 5
await newRank("LincolnAV","ColumbiaRiverBV",300,110);
await newRank("WestviewAV","JesuitBV",340,110);
await newRank("ColumbiaRiverAV","LewisandClarkAV",300,160);
await newRank("JesuitAV","WestviewBV",430,80);
//Varsity Playoffs
//Semifinals
await newRank("WestviewAV","ColumbiaRiverAV",250,170);
await newRank("JesuitAV","LincolnAV",320,130);
//Finals
await newRank("JesuitAV","WestviewAV",220,180);
//MS Playoffs
//Finals
await newRank("StollerHMS","StollerKMS",240,200);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];

//Boston Fall C-Set
//Prelims
//Round 1
await newRank("SalemBV","NorthfieldMtHermonAV",231,230);
await newRank("BostonLatinAV","TantasquaBV",430,110);
await newRank("PhillipsExeterAV","SalemAV",380,130);
await newRank("LexingtonAV","TantasquaAV",380,150);
await newRank("LexingtonBJV","BromfieldAJV",450,60);
await newRank("PhillipsExeterBJV","PhillipsAndoverAJV",440,60);
//Round 2
await newRank("TantasquaAV","SalemBV",230,210);
await newRank("PhillipsExeterAV","NorthfieldMtHermonAV",370,150);
await newRank("SalemAV","TantasquaBV",340,150);
await newRank("BostonLatinAV","LexingtonAV",320,240);
await newRank("BromfieldAJV","PhillipsAndoverAJV",180,170);
await newRank("PhillipsExeterBJV","LexingtonBJV",310,280);
//Round 3
await newRank("BostonLatinAV","TantasquaAV",470,120);
await newRank("LexingtonAV","SalemAV",370,130);
await newRank("NorthfieldMtHermonAV","TantasquaBV",280,220);
await newRank("PhillipsExeterAV","SalemBV",350,150);
await newRank("LexingtonBJV","PhillipsAndoverAJV",410,110);
await newRank("PhillipsExeterBJV","BromfieldAJV",360,120);
//Round 4
await newRank("LexingtonAV","NorthfieldMtHermonAV",420,140);
await newRank("PhillipsExeterAV","TantasquaBV",450,90);
await newRank("SalemAV","TantasquaBV",230,200);
await newRank("BostonLatinAV","SalemBV",370,180);
await newRank("LexingtonBJV","BromfieldAJV",440,80);
await newRank("PhillipsExeterBJV","PhillipsAndoverAJV",450,110);
//Round 5
await newRank("PhillipsExeterAV","LexingtonAV",370,210);
await newRank("TantasquaAV","NorthfieldMtHermonAV",200,180);
await newRank("BostonLatinAV","SalemAV",510,70);
await newRank("SalemBV","TantasquaBV",280,110);
await newRank("PhillipsAndoverAJV","BromfieldAJV",150,140);
await newRank("LexingtonBJV","PhillipsExeterBJV",270,230);
//Round 6
await newRank("LexingtonBJV","PhillipsAndoverAJV",300,130);
await newRank("PhillipsExeterBJV","BromfieldAJV",330,130);
//Varsity Playoffs
//Semifinals
await newRank("BostonLatinAV","SalemBV",290,180);
await newRank("PhillipsExeterAV","LexingtonAV",260,250);
//Finals
await newRank("BostonLatinAV","PhillipsExeterAV",300,170);
//JV Playoffs
//Finals
await newRank("PhillipsExeterBJV","LexingtonBJV",240,180);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];


//Washington DC C-Set
//Prelims
//Round
await newRank("CentennialAV","GeorgetownDayAV",330,310);
await newRank("ThomasJeffersonAV","MountVernonAV",490,110);
await newRank("BASISMcLeanAV","ThomasJeffersonBV",320,290);
await newRank("MontgomeryBlairAV","GlenelgAV",420,150);
await newRank("StAnselmsAV","CentennialBV",380,190);
await newRank("MontgomeryBlairCJV","CentennialEJV",260,190);
await newRank("CentennialCJV","CentennialDJV",390,160);
await newRank("MontgomeryBlairBJV","ThomasJeffersonDJV",390,180);
await newRank("ThomasJeffersonCJV","GeorgetownDayBJV",400,160);
await newRank("McLeanAJV","StAnselmsBJV",350,190);
await newRank("CentennialLaneAMS","BurleighManorDMS",330,160);
await newRank("BurleighManorAMS","NysmithBMS",410,60);
await newRank("BurleighManorCMS","CentennialLaneBMS",210,180);
await newRank("CompassMSA","CentennialLaneCMS",270,130);
await newRank("NysmithAMS","RipponBMS",310,90);
await newRank("BurleighManorBMS","RipponAMS",330,170);
//Round 2
await newRank("GeorgetownDayAV","GlenelgAV",410,180);
await newRank("RichardMontgomeryAV","BASISMcLeanAV",390,290);
await newRank("ThomasJeffersonBV","MountVernonAV",540,80);
await newRank("MontgomeryBlairAV","CentennialBV",470,140);
await newRank("ThomasJeffersonAV","StAnselmsAV",420,230);
await newRank("RichardMontgomeryBJV","StAnselmsBJV",450,100);
await newRank("MontgomeryBlairBJV","CentennialEJV",510,90);
await newRank("ThomasJeffersonCJV","ThomasJeffersonDJV",300,280);
await newRank("CentennialCJV","MontgomeryBlairCJV",320,170);
await newRank("McLeanAJV","CentennialDJV",300,150);
await newRank("BurleighManorCMS","RipponBMS",230,140);
await newRank("CentennialLaneAMS","CentennialLaneBMS",370,90);
await newRank("BurleighManorBMS","BurleighManorDMS",340,150);
await newRank("BurleighManorAMS","CentennialLaneCMS",350,90);
await newRank("NysmithAMS","CompassMSA",300,200);
await newRank("RipponAMS","NysmithBMS",260,140);
//Round 3
await newRank("MontgomeryBlairAV","ThomasJeffersonBV",430,210);
await newRank("StAnselmsAV","MountVernonAV",470,70);
await newRank("GlenelgAV","CentennialBV",290,220);
await newRank("CentennialAV","BASISMcLeanAV",350,250);
await newRank("RichardMontgomeryAV","ThomasJeffersonAV",380,230);
await newRank("GeorgetownDayBJV","StAnselmsBJV",300,250);
await newRank("MontgomeryBlairBJV","McLeanAJV",350,220);
await newRank("ThomasJeffersonDJV","CentennialEJV",290,210);
await newRank("RichardMontgomeryBJV","CentennialLaneCMS",330,230);
await newRank("MontgomeryBlairCJV","CentennialDJV",350,140);
await newRank("RipponAMS","BurleighManorDMS",250,200);
await newRank("BurleighManorBMS","CentennialLaneBMS",330,120);
await newRank("NysmithBMS","CentennialLaneCMS",310,80);
await newRank("NysmithAMS","CentennialLaneAMS",350,170);
await newRank("BurleighManorAMS","BurleighManorCMS",430,70);
//Round 4
await newRank("GeorgetownDayAV","MontgomeryBlairAV",380,290);
await newRank("ThomasJeffersonBV","CentennialBV",520,100);
await newRank("RichardMontgomeryAV","MountVernonAV",500,80);
await newRank("StAnselmsAV","GlenelgAV",340,290);
await newRank("McLeanAJV","CentennialEJV",360,120);
await newRank("ThomasJeffersonDJV","MontgomeryBlairCJV",400,200);
await newRank("GeorgetownDayBJV","CentennialCJV",280,250);
await newRank("MontgomeryBlairBJV","ThomasJeffersonCJV",350,280);
await newRank("BurleighManorDMS","CentennialLaneBMS",230,270);
await newRank("CompassMSA","NysmithBMS",200,190);
await newRank("CentennialLaneAMS","RipponBMS",340,70);
await newRank("BurleighManorBMS","NysmithAMS",270,210);
await newRank("BurleighManorAMS","RipponAMS",370,140);
await newRank("BurleighManorCMS","CentennialLaneCMS",240,70);
//Round 5
await newRank("BASISMcLeanAV","StAnselmsAV",350,240);
await newRank("CentennialBV","MountVernonAV",380,80);
await newRank("RichardMontgomeryAV","MontgomeryBlairAV",430,200);
await newRank("CentennialAV","GlenelgAV",410,120);
await newRank("GeorgetownDayAV","ThomasJeffersonAV",400,240);
await newRank("CentennialEJV","CentennialDJV",240,180);
await newRank("ThomasJeffersonDJV","GeorgetownDayBJV",360,180);
await newRank("MontgomeryBlairBJV","RichardMontgomeryBJV",340,270);
await newRank("ThomasJeffersonCJV","CentennialCJV",360,180);
await newRank("StAnselmsBJV","MontgomeryBlairCJV",250,170);
await newRank("CompassMSA","CentennialLaneBMS",320,80);
await newRank("BurleighManorBMS","NysmithBMS",290,150);
await newRank("CentennialLaneCMS","RipponBMS",180,100);
await newRank("NysmithAMS","RipponAMS",270,120);
await newRank("BurleighManorAMS","CentennialLaneAMS",270,230);
await newRank("BurleighManorDMS","BurleighManorCMS",250,100);
//Varsity Playoffs
//Semifinals
await newRank("RichardMontgomeryAV","MontgomeryBlairAV",360,260);
await newRank("GeorgetownDayAV","ThomasJeffersonAV",390,200);
//Finals
await newRank("GeorgetownDayAV","RichardMontgomeryAV",300,280);
//JV Playoffs
//Semifinals
await newRank("MontgomeryBlairBJV","ThomasJeffersonDJV",360,190);
await newRank("RichardMontgomeryBJV","ThomasJeffersonCJV",340,200);
//Finals
await newRank("MontgomeryBlairBJV","RichardMontgomeryBJV",360,160);
//MS Playoffs
//Semifinals
await newRank("BurleighManorBMS","NysmithAMS",220,190);
await newRank("BurleighManorAMS","CompassMSA",220,190);
//Finals
await newRank("BurleighManorAMS","BurleighManorBMS",220,140);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];

//Southern New Jersey C-Set
//Prelims
//Round 1
await newRank("RanneyAV","MoorestownBV",260,210);
await newRank("PrincetonBV","MoorestownAV",360,170);
await newRank("HighTechAV","FontbonneAV",400,120);
await newRank("MoravianAV","FontbonneBV",440,70);
await newRank("PrincetonAV","DonovanCatholicAV",480,30);
await newRank("EastBrunswickAV","EastBrunswickBV",370,160);
await newRank("RanneyBJV","FordhamBJV",270,180);
await newRank("WiltonAnjoAJV","DonovanCatholicBJV",280,190);
await newRank("PrincetonCJV","PrincetonDJV",340,150);
await newRank("MillburnMSAJV","FontbonneCJV",350,80);
//Round 2
await newRank("EastBrunswickBV","FontbonneAV",290,200);
await newRank("MoravianAV","DonovanCatholicAV",480,40);
await newRank("EastBrunswickAV","PrincetonBV",350,210);
await newRank("MoorestownAV","MoorestownBV",310,140);
await newRank("HighTechAV","FontbonneBV",470,40);
await newRank("RanneyAV","FordhamAV",400,160);
await newRank("WiltonAnjoAJV","HighTechBJV",360,120);
await newRank("MillburnMSAJV","FordhamBJV",250,180);
await newRank("FontbonneCJV","DonovanCatholicBJV",270,240);
await newRank("PrincetonCJV","RanneyBJV",270,220);
//Round 3
await newRank("PrincetonBV","FontbonneAV",330,140);
await newRank("HighTechAV","MoorestownBV",460,100);
await newRank("EastBrunswickBV","FontbonneBV",380,60);
await newRank("MoravianAV","RanneyAV",270,250);
await newRank("PrincetonAV","FordhamAV",340,130);
await newRank("RanneyBJV","FontbonneCJV",280,100);
await newRank("WiltonAnjoAJV","MillburnMSAJV",250,230);
await newRank("PrincetonCJV","HighTechBJV",330,140);
await newRank("FordhamBJV","PrincetonDJV",230,200);
//Round 4
await newRank("PrincetonAV","MoravianAV",320,220);
await newRank("RanneyAV","DonovanCatholicAV",450,30);
await newRank("EastBrunswickAV","FontbonneAV",460,30);
await newRank("EastBrunswickBV","PrincetonBV",270,260);
await newRank("HighTechAV","MoorestownAV",480,90);
await newRank("FordhamBJV","FontbonneBV",380,40);
await newRank("FordhamBJV","DonovanCatholicBJV",330,100);
await newRank("WiltonAnjoAJV","PrincetonDJV",290,220);
await newRank("PrincetonCJV","MillburnMSAJV",340,190);
await newRank("HighTechBJV","FontbonneCJV",250,100);
//Round 5
await newRank("HighTechAV","RanneyAV",350,160);
await newRank("FontbonneBV","DonovanCatholicAV",160,50);
await newRank("EastBrunswickAV","PrincetonAV",320,260);
await newRank("MoravianAV","FordhamAV",260,180);
await newRank("MoorestownAV","FontbonneAV",210,160);
await newRank("PrincetonBV","MoorestownBV",250,190);
await newRank("WiltonAnjoAJV","RanneyBJV",300,190);
await newRank("HighTechBJV","FordhamBJV",240,170);
await newRank("PrincetonCJV","DonovanCatholicBJV",300,80);
//Varsity Playoffs
//Quarterfinals
//await newRank("HighTechAV","FordhamAV",1,0);
await newRank("EastBrunswickAV","PrincetonAV",250,230);
await newRank("MoravianAV","EastBrunswickBV",220,150);
await newRank("RanneyAV","PrincetonBV",320,130);
//Semifinals
await newRank("EastBrunswickAV","MoravianAV",240,150);
await newRank("HighTechAV","RanneyAV",290,150);
//Finals
await newRank("HighTechAV","EastBrunswickAV",300,190);
//JV Playoffs
//Semifinals
await newRank("PrincetonCJV","RanneyBJV",280,130);
await newRank("WiltonAnjoAJV","MillburnMSAJV",200,120);
await newRank("PrincetonCJV","WiltonAnjoAJV",290,170);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];

//Northwest Illinois C-Set
//Prelims
//Round 1
await newRank("HomewoodFlossmoorAV","WinnebagoAV",310,150);
await newRank("WilliamsBayAV","WilliamsBayCV",410,60);
await newRank("GlenbardWestAV","WilliamsBayBV",390,150);
await newRank("AuburnAV","ElginAV",410,170);
await newRank("AuburnBJV","WilliamsBayDJV",360,50);
await newRank("HomewoodFlossmoorBJV","WinnebagoBJV",270,130);
//Round 2
await newRank("ElginAV","WilliamsBayCV",340,100);
await newRank("AuburnAV","WinnebagoAV",400,140);
await newRank("GlenbardWestAV","WilliamsBayAV",420,110);
await newRank("HomewoodFlossmoorAV","WilliamsBayBV",340,110);
await newRank("AuburnBJV","HomewoodFlossmoorBJV",280,160);
await newRank("WinnebagoBJV","WilliamsBayDJV",180,90);
//Round 3
await newRank("AuburnAV","GlenbardWestAV",330,250);
await newRank("WinnebagoAV","WilliamsBayCV",300,120);
await newRank("ElginAV","WilliamsBayBV",330,130);
await newRank("WilliamsBayAV","HomewoodFlossmoorAV",290,240);
await newRank("AuburnBJV","WinnebagoBJV",430,60);
await newRank("HomewoodFlossmoorBJV","WilliamsBayDJV",330,20);
//Round 4
await newRank("GlenbardWestAV","WinnebagoAV",360,120);
await newRank("HomewoodFlossmoorAV","ElginAV",270,240);
await newRank("AuburnAV","WilliamsBayCV",440,70);
await newRank("WilliamsBayAV","WilliamsBayBV",290,110);
await newRank("HomewoodFlossmoorBJV","WinnebagoBJV",200,130);
await newRank("AuburnBJV","WilliamsBayDJV",350,60);
//Round5
await newRank("AuburnAV","WilliamsBayBV",430,80);
await newRank("HomewoodFlossmoorAV","WilliamsBayCV",320,70);
await newRank("GlenbardWestAV","ElginAV",241,240);
await newRank("WilliamsBayAV","WinnebagoAV",210,160);
await newRank("AuburnBJV","HomewoodFlossmoorBJV",290,90);
await newRank("WinnebagoBJV","WilliamsBayDJV",150,90);
//Round6
await newRank("GlenbardWestAV","WilliamsBayCV",320,80);
await newRank("AuburnAV","HomewoodFlossmoorAV",390,110);
await newRank("ElginAV","WilliamsBayAV",290,160);
await newRank("WinnebagoAV","WilliamsBayBV",170,120);
await newRank("AuburnBJV","WinnebagoBJV",290,90);
await newRank("HomewoodFlossmoorBJV","WilliamsBayDJV",150,60);
//Round 7
await newRank("GlenbardWestAV","HomewoodFlossmoorBJV",280,160);
await newRank("WilliamsBayBV","WilliamsBayCV",110,100);
await newRank("AuburnAV","WilliamsBayAV",320,150);
await newRank("ElginAV","WinnebagoAV",480,50);
//Varsity Playoffs
//Finals
await newRank("AuburnAV","GlenbardWestAV",250,240);
//4th Place Game
await newRank("HomewoodFlossmoorAV","WilliamsBayAV",260,120);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];


//Louisiana Fall C-Set
//Prelims
//Round 1
await newRank("BatonRougeMagnetAV","NorthwesternAV",290,140);
await newRank("ZacharyAV","ZacharyBV",260,170);
await newRank("BatonRougeEpiscopalAV","ZacharyCV",290,110);
//Round 2
await newRank("ZacharyAV","NorthwesternAV",320,80);
await newRank("BatonRougeMagnetAV","ZacharyCV",350,60);
await newRank("ZacharyBV","BatonRougeEpiscopalAV",270,180);
//Round 3
await newRank("BatonRougeMagnetAV","ZacharyAV",280,220);
await newRank("ZacharyBV","ZacharyCV",280,130);
await newRank("BatonRougeEpiscopalAV","NorthwesternAV",290,140);
//Round 4
await newRank("BatonRougeMagnetAV","BatonRougeEpiscopalAV",310,180);
await newRank("ZacharyAV","ZacharyCV",330,70);
await newRank("ZacharyBV","NorthwesternAV",300,110);
//Round 5
await newRank("ZacharyBV","BatonRougeMagnetAV",240,190);
await newRank("BatonRougeEpiscopalAV","ZacharyAV",240,140);
await newRank("NorthwesternAV","ZacharyCV",220,150);
//Varsity Playoffs
//Semifinals
await newRank("ZacharyBV","ZacharyAV",200,140);
await newRank("BatonRougeEpiscopalAV","BatonRougeMagnetAV",210,190);
//Finals
await newRank("ZacharyBV","BatonRougeEpiscopalAV",210,160);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];


//Eastern Kentucky C-Set
//Prelims
//Round 1
await newRank("BlazerAV","RussellAV",340,160);
await newRank("JohnsonAV","JohnsonCV",410,70);
await newRank("DunbarAV","JohnsonBV",410,80);
//Round 2
await newRank("BlazerAV","DunbarAV",320,260);
await newRank("JohnsonBV","JohnsonCV",300,110);
await newRank("JohnsonAV","RussellAV",370,180);
//Round 3
await newRank("JohnsonAV","BlazerAV",370,190);
await newRank("RussellAV","JohnsonBV",250,200);
await newRank("DunbarAV","JohnsonCV",390,70);
//Round 4
await newRank("JohnsonAV","DunbarAV",380,140);
await newRank("BlazerAV","JohnsonBV",390,120);
await newRank("RussellAV","JohnsonCV",290,150);
//Round 5
await newRank("DunbarAV","RussellAV",250,190);
await newRank("JohnsonAV","JohnsonBV",350,90);
await newRank("BlazerAV","JohnsonCV",390,70);
//Varsity Playoffs
//Semifinals
await newRank("JohnsonAV","RussellAV",270,160);
await newRank("BlazerAV","DunbarAV",211,210);
//Finals
await newRank("BlazerAV","JohnsonAV",270,160);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];


//Bergen County C-Set
//Prelims
//Round 1
await newRank("RidgewoodAV","GothamAV",410,210);
await newRank("ColdhugAV","LeoniaAV",470,160);
await newRank("TenaflyAV","TenaflyBV",430,100);
await newRank("ColdhugBJV","ChurchillNJBJV",290,280);
await newRank("TenaflyCJV","LeoniaBJV",310,200);
await newRank("RidgewoodDJV","GeorgeWashingtonAJV",270,160);
//Round 2
await newRank("RidgewoodAV","TenaflyBV",530,70);
await newRank("ColdhugAV","GothamAV",430,180);
await newRank("TenaflyAV","LeoniaAV",280,240);
await newRank("ChurchillMDAJV","RidgewoodCJV",280,240);
await newRank("TenaflyCJV","GeorgeWashingtonAJV",400,100);
await newRank("LeoniaBJV","RidgewoodDJV",220,210);
//Round 3
await newRank("RidgewoodAV","TenaflyAV",400,200);
await newRank("ColdhugAV","TenaflyBV",510,70);
await newRank("GothamAV","LeoniaAV",280,260);
await newRank("RidgewoodCJV","GeorgeWashingtonAJV",480,60);
await newRank("ColdhugBJV","LeoniaBJV",380,180);
await newRank("TenaflyCJV","RidgewoodDJV",400,160);
//Round 4
await newRank("RidgewoodAV","LeoniaAV",350,170);
await newRank("ColdhugAV","TenaflyAV",450,130);
await newRank("GothamAV","TenaflyBV",360,30);
await newRank("RidgewoodCJV","RidgewoodDJV",380,110);
await newRank("ColdhugBJV","TenaflyCJV",290,180);
await newRank("ChurchillMDAJV","LeoniaBJV",350,140);
//Round 5
await newRank("ColdhugAV","RidgewoodAV",400,220);
await newRank("TenaflyAV","GothamAV",300,260);
await newRank("LeoniaAV","TenaflyBV",350,130);
await newRank("RidgewoodCJV","ColdhugBJV",280,240);
await newRank("ChurchillMDAJV","RidgewoodDJV",370,80);
//Varsity Playoffs
//Semifinals
await newRank("ColdhugAV","GothamAV",440,100);
await newRank("RidgewoodAV","TenaflyAV",290,210);
//Finals
await newRank("ColdhugAV","RidgewoodAV",360,180);
//JV Playoffs
await newRank("RidgewoodCJV","ColdhugBJV",350,120);
await newRank("ChurchillMDAJV","TenaflyCJV",400,130);
//Finals
await newRank("RidgewoodCJV","ChurchillMDAJV",270,150);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];


//Lower Hudson C-Set
//Prelims
//Round 1
await newRank("DarienAV","HoraceGreeleyAV",450,90);
await newRank("GreensFarmsAV","WhitePlainsAV",360,140);
await newRank("WiltonAlexAV","DaltonAV",320,230);
await newRank("IrvingtonAV","ArdsleyAV",370,160);
await newRank("WiltonLukasAJV","YonkersAJV",350,210);
await newRank("HoraceGreeleyBJV","GreensFarmsBJV",380,120);
await newRank("ScarsdaleAV","YonkersBJV",380,180);
//Round 2
await newRank("WiltonAlexAV","WhitePlainsAV",440,100);
await newRank("DaltonAV","HoraceGreeleyAV",330,130);
await newRank("GreensFarmsAV","ArdsleyAV",260,250);
await newRank("IrvingtonAV","ScarsdaleAV",290,250);
await newRank("YonkersBJV","GreensFarmsBJV",300,170);
await newRank("YonkersAJV","HoraceGreeleyBJV",350,170);
await newRank("DarienAV","WiltonLukasAJV",340,290);
//Round 3
await newRank("ScarsdaleAV","GreensFarmsAV",280,230);
await newRank("WiltonAlexAV","ArdsleyAV",460,100);
await newRank("DarienAV","IrvingtonAV",330,260);
await newRank("WhitePlainsAV","HoraceGreeleyAV",280,150);
await newRank("HoraceGreeleyBJV","WiltonLukasAJV",290,270);
await newRank("YonkersAJV","YonkersBJV",330,170);
await newRank("DaltonAV","GreensFarmsBJV",360,110);
//Round 4
await newRank("DarienAV","GreensFarmsAV",281,280);//Darien wins on TB
await newRank("DaltonAV","IrvingtonAV",310,270);
await newRank("WiltonAlexAV","ScarsdaleAV",360,200);
await newRank("ArdsleyAV","HoraceGreeleyAV",270,160);
await newRank("HoraceGreeleyBJV","YonkersBJV",370,190);
await newRank("WiltonLukasAJV","GreensFarmsBJV",470,90);
await newRank("YonkersAJV","WhitePlainsAV",420,150);
//Round 5
await newRank("ScarsdaleAV","HoraceGreeleyAV",450,60);
await newRank("IrvingtonAV","WhitePlainsAV",320,170);
await newRank("GreensFarmsAV","DaltonAV",310,170);
await newRank("DarienAV","WiltonAlexAV",320,290);
await newRank("WiltonLukasAJV","HoraceGreeleyBJV",310,180);
await newRank("YonkersAJV","GreensFarmsBJV",340,80);
await newRank("HoraceGreeleyBJV","ArdsleyAV",250,140);
//Varsity Playoffs
//Quarterfinals
await newRank("WiltonAlexAV","WhitePlainsAV",300,180);
await newRank("DarienAV","ArdsleyAV",310,180);
await newRank("DaltonAV","IrvingtonAV",230,210);
await newRank("ScarsdaleAV","GreensFarmsBJV",270,220);
//Semifinals
await newRank("ScarsdaleAV","WiltonAlexAV",260,240);
await newRank("DarienAV","DaltonAV",320,160);
//Finals
await newRank("DarienAV","ScarsdaleAV",260,230);
//JV Playoffs
//JV Semifinals
await newRank("WiltonLukasAJV","YonkersBJV",380,90);
await newRank("HoraceGreeleyBJV","YonkersAJV",270,200);
await newRank("WiltonLukasAJV","HoraceGreeleyBJV",210,190);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];


//Delaware C-Set
//Prelims
//Round 1
await newRank("WilmingtonFriendsDV","CaravelBV",220,140);
await newRank("NewarkCharterCV","WilmingtonFriendsEV",260,240);
await newRank("MethactonAV","WilmingtonFriendsCV",460,80);
await newRank("WilmingtonFriendsAV","FriendsCentralAV",290,150);
await newRank("MethactonCJV","WilmingtonFriendsKJV",470,40);
await newRank("NewarkCharterAV","WilmingtonFriendsGV",360,90);
await newRank("WilmingtonFriendsFV","NewarkCharterBV",200,180);
await newRank("WilmingtonFriendsIJV","WilmingtonFriendsLJV",290,100);
await newRank("DickinsonAV","CaravelAV",280,100);
await newRank("WilmingtonFriendsHJV","WilmingtonFriendsMJV",350,70);
await newRank("TowerHillCJV","WilmingtonFriendsJJV",200,80);
await newRank("WilmingtonFriendsBV","TowerHillBV",270,190);
await newRank("TowerHillAV","MethactonBV",290,220);
//Round 2
await newRank("TowerHillAV","CaravelBV",340,80);
await newRank("GreatValleyAV","DickinsonAV",470,80);
await newRank("WilmingtonFriendsAV","NewarkCharterCV",240,200);
await newRank("MethactonBV","FriendsCentralAV",270,160);
await newRank("MethactonCJV","WilmingtonFriendsJJV",460,50);
await newRank("MethactonAV","WilmingtonFriendsFV",390,70);
await newRank("WilmingtonFriendsIJV","WilmingtonFriendsMJV",290,150);
await newRank("TowerHillBV","WilmingtonFriendsCV",210,140);
await newRank("NewarkCharterAV","WilmingtonFriendsEV",250,180);
await newRank("WilmingtonFriendsHJV","WilmingtonFriendsLJV",300,130);
await newRank("TowerHillCJV","WilmingtonFriendsKJV",250,90);
await newRank("WilmingtonFriendsDV","WilmingtonFriendsGV",160,130);
await newRank("WilmingtonFriendsBV","CaravelAV",250,110);
//Round 3
await newRank("GreatValleyAV","WilmingtonFriendsFV",480,30);
await newRank("NewarkCharterCV","WilmingtonFriendsGV",330,90);
await newRank("NewarkCharterAV","CaravelBV",320,30);
await newRank("TowerHillAV","WilmingtonFriendsAV",370,150);
await newRank("WilmingtonFriendsIJV","WilmingtonFriendsJJV",180,170);
await newRank("MethactonBV","WilmingtonFriendsDV",390,90);
await newRank("DickinsonAV","TowerHillBV",230,150);
await newRank("WilmingtonFriendsHJV","WilmingtonFriendsKJV",420,60);
await newRank("MethactonCJV","TowerHillCJV",430,80);
await newRank("MethactonAV","WilmingtonFriendsBV",350,170);
await newRank("NewarkCharterBV","WilmingtonFriendsCV",240,110);
await newRank("NewarkCharterBV","WilmingtonFriendsCV",240,110);
await newRank("FriendsCentralAV","WilmingtonFriendsEV",250,170);
//Round 4
await newRank("WilmingtonFriendsMJV","WilmingtonFriendsJJV",190,40);
await newRank("WilmingtonFriendsLJV","WilmingtonFriendsKJV",140,70);
await newRank("GreatValleyAV","WilmingtonFriendsBV",470,90);
await newRank("WilmingtonFriendsEV","WilmingtonFriendsDV",190,180);
await newRank("TowerHillAV","WilmingtonFriendsGV",440,30);
await newRank("MethactonBV","NewarkCharterCV",380,190);
await newRank("WilmingtonFriendsHJV","TowerHillCJV",360,70);
await newRank("FriendsCentralAV","CaravelBV",280,110);
await newRank("DickinsonAV","NewarkCharterBV",200,160);
await newRank("MethactonCJV","WilmingtonFriendsIJV",450,70);
await newRank("NewarkCharterAV","WilmingtonFriendsAV",300,200);
await newRank("TowerHillBV","WilmingtonFriendsFV",250,150);
await newRank("CaravelAV","WilmingtonFriendsCV",140,100);
//Round 5
await newRank("WilmingtonFriendsJJV","WilmingtonFriendsKJV",180,60);
await newRank("MethactonCJV","WilmingtonFriendsMJV",400,60);
await newRank("CaravelAV","WilmingtonFriendsFV",190,10);
await newRank("WilmingtonFriendsBV","NewarkCharterBV",170,100);
await newRank("NewarkCharterCV","CaravelBV",250,80);
await newRank("FriendsCentralAV","WilmingtonFriendsGV",240,100);
await newRank("WilmingtonFriendsHJV","WilmingtonFriendsIJV",350,80);
await newRank("WilmingtonFriendsAV","WilmingtonFriendsDV",210,100);
await newRank("TowerHillCJV","WilmingtonFriendsLJV",220,90);
await newRank("TowerHillAV","WilmingtonFriendsEV",280,130);
await newRank("MethactonAV","NewarkCharterAV",280,120);
await newRank("GreatValleyAV","WilmingtonFriendsCV",580,0);
//Varsity Playoffs
//Quarterfinals
await newRank("NewarkCharterAV","MethactonBV",280,180);
//await newRank("MethactonAV","WilmingtonFriendsAV",1,0);
await newRank("GreatValleyAV","FriendsCentralAV",420,80);
await newRank("TowerHillAV","NewarkCharterCV",280,140);
//Semifinals
await newRank("GreatValleyAV","NewarkCharterAV",330,160);
await newRank("MethactonAV","TowerHillAV",390,100);
//Finals
await newRank("GreatValleyAV","MethactonAV",370,160);
//JV Playoffs
//Semifinals
await newRank("MethactonCJV","WilmingtonFriendsIJV",400,50);
await newRank("WilmingtonFriendsHJV","TowerHillCJV",280,60);
//Finals
await newRank("MethactonCJV","WilmingtonFriendsHJV",340,110);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];


//Florida Panhandle C-Set
//Prelims
//Round 1
await newRank("ChoctawhatcheeAV","WashingtonAV",280,140);
await newRank("TateAV","WashingtonBV",310,60);
await newRank("RansomGJV","RansomFJV",81,80);
//Round 2
await newRank("CollegiateAV","TateAV",400,180);
await newRank("WashingtonAV","WashingtonBV",250,100);
await newRank("RansomFJV","RansomEJV",100,80);
//Round 3
await newRank("CollegiateAV","WashingtonAV",360,120);
await newRank("ChoctawhatcheeAV","WashingtonBV",390,20);
await newRank("RansomGJV","RansomEJV",140,70);
//Round 4
await newRank("TateAV","ChoctawhatcheeAV",290,220);
await newRank("CollegiateAV","WashingtonBV",460,60);
await newRank("RansomGJV","RansomEJV",80,40);
//Round 5
await newRank("TateAV","WashingtonAV",210,80);
await newRank("CollegiateAV","ChoctawhatcheeAV",460,110);
await newRank("RansomEJV","RansomFJV",70,50);
//Round 6
await newRank("RansomGJV","RansomFJV",80,40);
//Varsity Playoofs
//Varsity Semifinals
await newRank("CollegiateAV","WashingtonAV",390,50);
await newRank("ChoctawhatcheeAV","TateAV",221,220);
//Varsity Finals
await newRank("CollegiateAV","ChoctawhatcheeAV",420,120);
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];


//Southwestern Illinois C-Set
//Round 1
await newRank("LindseyAV","GraniteCityAV",400,130);
await newRank("AltonAV","SouthwesternAV",360,140);
await newRank("KeithCountyDayAJV","SouthwesternCJV",330,130);
await newRank("RochesterAJV","SouthwesternBJV",260,180);
//Round 2
await newRank("GraniteCityAV","SouthwesternAV",320,110);
await newRank("AltonAV","LindseyAV",340,260);
await newRank("RochesterAJV","SouthwesternCJV",240,200);
await newRank("KeithCountyDayAJV","SouthwesternBJV",250,200);
//Round 3
await newRank("AltonAV","GraniteCityAV",380,140);
await newRank("LindseyAV","SouthwesternAV",410,90);
await newRank("SouthwesternBJV","SouthwesternCJV",320,150);
await newRank("RochesterAJV","KeithCountyDayAJV",310,150);
//Round 4
await newRank("LindseyAV","SouthwesternAV",480,60);
await newRank("AltonAV","GraniteCityAV",370,180);
await newRank("KeithCountyDayAJV","RochesterAJV",260,160);
await newRank("SouthwesternBJV","SouthwesternCJV",240,100);
//Round 5
await newRank("GraniteCityAV","SouthwesternAV",240,100);
await newRank("LindseyAV","AltonAV",310,190);
await newRank("KeithCountyDayAJV","SouthwesternBJV",310,180);
await newRank("RochesterAJV","SouthwesternCJV",260,120);
//Round 6
await newRank("LindseyAV","GraniteCityAV",410,110);
await newRank("AltonAV","SouthwesternAV",310,70);
await newRank("RochesterAJV","SouthwesternBJV",280,150);
await newRank("KeithCountyDayAJV","SouthwesternCJV",250,100);
//Varsity Playoffs
//Varsity Final
await newRank("LindseyAV","AltonAV",280,200);
//JV Playoffs
//JV Final
await newRank("KeithCountyDayAJV","RochesterAJV",210,150);;
allV.push(teamAvgV);
allJV.push(teamAvgJV);
allMS.push(teamAvgMS);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];



y = true;
console.log(y);


//Northern California Fall C-Set
a2 = 0;
b2 = 0;
c2 = 0;
//Prelims
//Round 1
await newRank("MissionSanJoseJV","SaratogaEJV",450,70);
await newRank("HomesteadAJV","MountainViewAJV",390,130);
await newRank("SaggitariusAJV","SantaClaraAJV",390,180);
await newRank("SaratogaDJV","CaliforniaAJV",340,210);
await newRank("HarkerAJV","EriksenBJV",370,150);
await newRank("AlmadenMSA","JLSMSA",360,200);
await newRank("LynbrookAV","LesQuizAV",450,90);
await newRank("PiedmontHillsAV","SaratogaCV",280,230);
await newRank("GundersonAV","EriksenAV",300,280);
await newRank("SaratogaAV","FoothillAV",440,190);
await newRank("PioneersAV","SaratogaBV",350,290);
//Round 2
await newRank("LynbrookAV","SaratogaCV",490,80);
await newRank("PioneersAV","GundersonAV",430,210);
await newRank("FoothillAV","PiedmontHillsAV",310,300);
await newRank("HomesteadAJV","SaratogaEJV",300,150);
await newRank("SantaClaraAJV","HarkerAJV",320,250);
await newRank("MissionSanJoseJV","SaratogaDJV",330,270);
await newRank("SaggitariusAJV","MountainViewAJV",370,170);
await newRank("CaliforniaAJV","EriksenBJV",400,130);
await newRank("SaratogaBV","EriksenAV",340,310);
await newRank("SaratogaAV","LesQuizAV",540,90);
await newRank("AlmadenMSA","HarvestParkMSA",320,270);
//Round 3
await newRank("SaratogaDJV","HomesteadAJV",330,210);
await newRank("SaggitariusAJV","SaratogaEJV",400,160);
await newRank("SantaClaraAJV","CaliforniaAJV",270,240);
await newRank("SaratogaCV","LesQuizAV",280,230);
await newRank("SaratogaAV","SaratogaBV",360,220);
await newRank("EriksenAV","PiedmontHillsAV",370,180);
await newRank("PioneersAV","LynbrookAV",370,210);
await newRank("GundersonAV","FoothillAV",260,240);
await newRank("MissionSanJoseJV","EriksenBJV",400,100);
await newRank("HarkerAJV","MountainViewAJV",360,120);
await newRank("JLSMSA","HarvestParkMSA",260,220);
//Round 4
await newRank("SaratogaAV","GundersonAV",350,170);
await newRank("MissionSanJoseJV","SantaClaraAJV",340,240);
await newRank("PioneersAV","LesQuizAV",560,50)
await newRank("LynbrookAV","FoothillAV",390,200);
await newRank("HomesteadAJV","EriksenBJV",400,80);
await newRank("SaratogaBV","PiedmontHillsAV",440,140);
await newRank("CaliforniaAJV","MountainViewAJV",420,80);
await newRank("EriksenAV","SaratogaCV",440,150);
await newRank("AlmadenMSA","JLSMSA",410,160);
await newRank("HarkerAJV","SaratogaEJV",320,170);
await newRank("SaggitariusAJV","SaratogaDJV",330,180);
//Round 5
await newRank("FoothillAV","LesQuizAV",380,130);
await newRank("SaratogaBV","GundersonAV",290,280);
await newRank("SaratogaAV","EriksenAV",320,290);
await newRank("CaliforniaAJV","SaratogaEJV",320,140);
await newRank("PioneersAV","SaratogaCV",490,110);
await newRank("LynbrookAV","PiedmontHillsAV",390,180);
await newRank("SaggitariusAJV","EriksenBJV",440,90);
await newRank("MissionSanJoseJV","MountainViewAJV",270,150);
await newRank("AlmadenMSA","HarvestParkMSA",390,230);
await newRank("SaratogaDJV","HarkerAJV",300,180);
await newRank("SantaClaraAJV","HomesteadAJV",300,170);
//Round 6
await newRank("HarvestParkMSA","JLSMSA",270,150)
//Varsity Playoffs
//Semifinals
await newRank("PioneersAV","SaratogaBV",370,210);
await newRank("SaratogaAV","LynbrookAV",390,170);
//Finals
await newRank("PioneersAV","SaratogaAV",360,230);
//JV Playoffs
//Semifinals
await newRank("SaggitariusAJV","HarkerAJV",310,170);
await newRank("MissionSanJoseJV","CaliforniaAJV",250,220);
//Finals
await newRank("MissionSanJoseJV","SaggitariusAJV",280,210);
console.log("NorCal C q V: "+qV[a2]);
console.log("NorCal C q JV: "+qJV[b2]);
console.log("NorCal C q MS: "+qMS[c2]);
a = 0;
b = 0;
c = 0;


//Eastern Washington C-Set
a2 = a2+1;
b2 = b2+1;
//Prelims
//Round 1
await newRank("GonzagaAV","MtSpokaneAV",300,180);
await newRank("StGeorgesAV","FrenchtownAV",250,140);
await newRank("EastValleyAV","FrenchtownBV",370,70);
await newRank("MtSpokaneBV","EastValleyBV",330,100);
await newRank("LibbyAJV","EastValleyCJV",300,70);
await newRank("MtSpokaneCJV","MtSpokaneDJV",260,130);
//Round 2
await newRank("MtSpokaneAV","FrenchtownAV",320,60);
await newRank("StGeorgesAV","MtSpokaneBV",200,180);
await newRank("GonzagaAV","FrenchtownBV",350,70);
await newRank("EastValleyBV","EastValleyAV",190,180);
await newRank("MtSpokaneDJV","EastValleyCJV",170,140);
await newRank("LibbyAJV","MtSpokaneCJV",220,130);
//Round 3
await newRank("MtSpokaneBV","MtSpokaneAV",240,210);
await newRank("FrenchtownAV","FrenchtownBV",250,90);
await newRank("GonzagaAV","EastValleyBV",340,120);
await newRank("StGeorgesAV","EastValleyAV",310,100);
await newRank("MtSpokaneCJV","EastValleyCJV",210,100);
await newRank("LibbyAJV","MtSpokaneDJV",240,110);
//Round 4
await newRank("MtSpokaneBV","FrenchtownBV",410,40);
await newRank("EastValleyAV","MtSpokaneAV",250,210);
await newRank("EastValleyBV","FrenchtownAV",220,150);
await newRank("GonzagaAV","StGeorgesAV",340,180);
await newRank("LibbyAJV","MtSpokaneDJV",220,80);
await newRank("MtSpokaneCJV"," EastValleyCJV",150,110);
//Round 5
await newRank("MtSpokaneBV","EastValleyAV",240,160);
await newRank("StGeorgesAV","EastValleyBV",200,150);
await newRank("MtSpokaneAV","FrenchtownBV",290,60);
await newRank("GonzagaAV","FrenchtownAV",280,70);
await newRank("LibbyAJV","MtSpokaneCJV",290,50);
await newRank("MtSpokaneDJV","EastValleyCJV",140,100);
//Round 6
await newRank("LibbyAJV","EastValleyCJV",180,70);
await newRank("MtSpokaneDJV","MtSpokaneCJV",120,110);
//Varsity Playoffs
//Quarterfinals
await newRank("GonzagaAV","FrenchtownBV",340,80);
await newRank("MtSpokaneAV","EastValleyAV",231,230);
await newRank("StGeorgesAV","EastValleyBV",210,100);
await newRank("MtSpokaneBV","FrenchtownAV",230,90);
//Semifinals
await newRank("MtSpokaneBV","StGeorgesAV",200,160);
await newRank("GonzagaAV","MtSpokaneAV",320,120);
//Finals
await newRank("GonzagaAV","MtSpokaneBV",260,70)
//JV Playoffs
//Semifinals
await newRank("LibbyAJV","EastValleyCJV",210,100);
await newRank("MtSpokaneCJV","MtSpokaneDJV",140,90);
//Finals
//await newRank("await newRank("LibbyAJV","MtSpokaneCJV",1,0);
console.log("East WA C q V: "+qV[a2]);
console.log("East WA C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;



//Central Georgia Fall C-Set
a2 = a2+1;
b2 = b2+1;
//Prelims
//Round 1
await newRank("StarrsMillAV","StarrsMillBV",440,90);
await newRank("CreeksideAV","StarrsMillCV",190,170);
await newRank("ChambleeAJV","VeteransAV",270,220);
await newRank("OakMountainAV","StarrsMillDV",300,140);
await newRank("StarrsMillEV","VeteransBJV",240,120);
//Round 2
await newRank("OakMountainAV","StarrsMillEV",340,90);
await newRank("ChambleeAJV","StarrsMillCV",340,60);
await newRank("CreeksideAV","VeteransBJV",160,150);
await newRank("StarrsMillAV","StarrsMillDV",430,90);
await newRank("StarrsMillBV","VeteransAV",240,200);
//Round 3
await newRank("VeteransAV","StarrsMillEV",310,140);
await newRank("OakMountainAV","ChambleeAJV",250,220);
await newRank("StarrsMillCV","StarrsMillDV",210,180);
await newRank("StarrsMillBV","VeteransBJV",370,80);
await newRank("StarrsMillAV","CreeksideAV",390,100);
//Round 4
await newRank("OakMountainAV","StarrsMillBV",210,150);
await newRank("StarrsMillAV","ChambleeAJV",390,170);
await newRank("VeteransAV","CreeksideAV",310,40);
await newRank("StarrsMillDV","VeteransBJV",290,90);
await newRank("StarrsMillCV","StarrsMillEV",210,150);
//Round 5
await newRank("StarrsMillBV","StarrsMillCV",340,80);
await newRank("VeteransAV","StarrsMillDV",240,180);
await newRank("OakMountainAV","CreeksideAV",320,40);
await newRank("ChambleeAJV","VeteransBJV",280,40);
await newRank("StarrsMillAV","StarrsMillEV",390,80);
//Varsity Playoffs
//Semifinals
await newRank("StarrsMillAV","StarrsMillBV",380,100);
await newRank("OakMountainAV","VeteransAV",260,140);
//Finals
await newRank("StarrsMillAV","OakMountainAV",260,150);
//JV Playoffs
//Finals
await newRank("ChambleeAJV","VeteransBJV",250,40);//Chamblee Charter
console.log("Central GA C q V: "+qV[a2]);
console.log("Central GA C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

//Montana C-Set
a2 = a2+1;
b2 = b2+1;
//Prelims
//Round 1
await newRank("BillingsSeniorAV","SkyviewBV",250,200);
await newRank("BozemanBV","BillingsWestAV",300,140);
await newRank("BozemanAV","SkyviewCV",230,80);
await newRank("BillingsWestBV","RiversideAV",140,130);
await newRank("SkyviewAV","SkyviewDJV",430,50);
await newRank("BillingsSeniorBJV","ParkCityBJV",150,80);
await newRank("BozemanCJV","ParkCityAJV",260,80);
//Round 2
await newRank("BozemanAV","RiversideAV",240,90);
await newRank("SkyviewAV","BillingsSeniorAV",250,190);
await newRank("BillingsWestAV","BillingsWestBV",210,110);
await newRank("SkyviewBV","SkyviewCV",300,80);
await newRank("BozemanBV","BozemanCJV",250,90);
await newRank("BillingsSeniorBJV","ParkCityAJV",190,30);
await newRank("SkyviewDJV","ParkCityBJV",190,110);
//Round 3
await newRank("BozemanBV","SkyviewCV",340,50);
await newRank("SkyviewAV","RiversideAV",360,70);
await newRank("BillingsSeniorAV","BillingsWestBV",380,70);
await newRank("BillingsWestAV","SkyviewDJV",240,180);
await newRank("BozemanAV","ParkCityBJV",340,100);
await newRank("SkyviewDJV","ParkCityAJV",310,60);
await newRank("BozemanCJV","BillingsSeniorBJV",250,30);
//Round 4
await newRank("SkyviewAV","BillingsWestAV",380,80);
await newRank("BillingsWestBV","SkyviewCV",110,100);
await newRank("BozemanBV","RiversideAV",340,40);
await newRank("BillingsSeniorAV","BozemanAV",240,170);
await newRank("SkyviewBV","BillingsSeniorBJV",210,90);
await newRank("BozemanCJV","SkyviewDJV",140,110);
await newRank("ParkCityBJV","ParkCityAJV",120,50);
//Round 5
await newRank("SkyviewBV","RiversideAV",170,70);
await newRank("BozemanBV","BillingsSeniorAV",220,150);
await newRank("BillingsWestAV","BozemanAV",180,170);
await newRank("SkyviewAV","SkyviewCV",310,50);
await newRank("BillingsWestBV","ParkCityAJV",120,60);
await newRank("BozemanCJV","ParkCityBJV",190,40);
await newRank("SkyviewDJV","BillingsSeniorBJV",150,90);
//Varsity Playoffs
//Semifinals
await newRank("BozemanBV","BillingsSeniorAV",260,110);
await newRank("SkyviewAV","SkyviewBV",350,70);
//Finals
await newRank("SkyviewAV","BozemanBV",240,90);
//JV Playoffs
//Finals
await newRank("BozemanCJV","SkyviewDJV",110,80);
console.log("MT C q V: "+qV[a2]);
console.log("MT C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;


//West Virginia Fall C-Set
a2 = a2+1;
b2 = b2+1;
//Prelims
//Round 1
await newRank("PocaAV","CharlestonBV",280,170);
await newRank("CharlestonAV","PocaBV",430,10);
await newRank("GeorgeWashingtonBV","NitroBV",280,140);
await newRank("StAlbansAV","NitroAV",260,200);
await newRank("JohnAdamsAJV","CharlestonCJV",310,70);
await newRank("MorgantownAJV","CharlestonDJV",240,110);
//Round 2
await newRank("StAlbansAV","PocaBV",290,110);
await newRank("GeorgeWashingtonBV","PocaAV",280,180);
await newRank("CharlestonBV","NitroBV",240,160);
await newRank("CharlestonAV","NitroAV",260,220);
await newRank("CharlestonDJV","CharlestonCJV",170,130);
await newRank("MorgantownAJV","JohnAdamsAJV",260,160);
//Round 3
await newRank("GeorgeWashingtonBV","PocaBV",410,20);
await newRank("StAlbansAV","CharlestonBV",240,170);
await newRank("NitroAV","PocaAV",290,180);
await newRank("CharlestonAV","NitroBV",330,160);
await newRank("JohnAdamsAJV","CharlestonDJV",290,100);
await newRank("MorgantownAJV","CharlestonCJV",280,110);
//Round 4
await newRank("PocaAV","NitroBV",220,170);
await newRank("GeorgeWashingtonBV","CharlestonBV",300,140);
await newRank("CharlestonAV","StAlbansAV",350,90);
await newRank("NitroAV","PocaBV",360,10);
await newRank("JohnAdamsAJV","CharlestonDJV",200,160);
await newRank("MorgantownAJV","CharlestonCJV",220,130);
//Round 5
await newRank("NitroBV","PocaBV",220,50);
await newRank("CharlestonBV","NitroAV",240,120);
await newRank("CharlestonAV","GeorgeWashingtonBV",250,150);
await newRank("StAlbansAV","PocaAV",230,140);
await newRank("CharlestonDJV","CharlestonCJV",200,80);
await newRank("MorgantownAJV","JohnAdamsAJV",240,130);
//Round 6
await newRank("JohnAdamsAJV","CharlestonCJV",260,80);
await newRank("MorgantownAJV","CharlestonDJV",200,60);
//Varsity Playoffs
//Semifinals
await newRank("CharlestonAV","NitroAV",230,110);
await newRank("StAlbansAV","GeorgeWashingtonBV",190,110);
//Finals
await newRank("CharlestonAV","StAlbansAV",240,130);
console.log("WV C q V: "+qV[a2]);
console.log("WV C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

//Northern New Jersey C-Set
a2 = a2+1;
b2 = b2+1;
c2 = c2+1;
//Prelims
//Round 1
await newRank("MillburnAV","StPetersAV",550,70);
await newRank("StJosephAV","ParamusAV",300,180);
await newRank("MillburnBV","StuyvesantAV",280,250);
await newRank("NewarkAV","HewlettBV",270,240);
await newRank("OratoryAV","MillburnCV",310,280);
await newRank("MountainLakesAV","StPetersBV",410,60);
await newRank("HewlettAV","HolmdelAV",400,100);
await newRank("KinnelonAJV","StPetersCJV",300,170);
await newRank("HewlettCJV","ChurchillNJBJV",310,200);
await newRank("ChurchillNJAJV","SouthBrunswickAJV",490,90);
await newRank("StJosephBJV","BASISBrooklynAJV",200,180);
await newRank("HunterBJV","HolmdelBJV",470,120);
await newRank("MillburnDJV","MountainLakesBJV",390,160);
await newRank("TenaflyMSB","IndianFieldsMSA",130,100);
await newRank("TenaflyMSC","BRIGHTMSA",130,100);
//Round 2
await newRank("HewlettBV","ParamusAV",250,170);
await newRank("MountainLakesAV","NewarkAV",280,210);
await newRank("HunterAV","StuyvesantAV",450,120);
await newRank("MillburnCV","HolmdelAV",520,80);
await newRank("MillburnBV","HewlettAV",320,250);
await newRank("OratoryAV","StPetersBV",390,60);
await newRank("KinnelonAJV","StJosephBJV",260,150);
await newRank("MillburnAV","StJosephAV",510,110);
await newRank("HolmdelBJV","StPetersCJV",340,140);
await newRank("ChurchillNJAJV","BASISBrooklynAJV",550,80);
await newRank("MountainLakesBJV","ChurchillNJBJV",370,70);
await newRank("HunterBJV","MillburnDJV",410,180);
await newRank("HewlettCJV","SouthBrunswickAJV",240,200);
await newRank("TenaflyMSA","TenaflyMSB",400,60);
await newRank("IndianFieldsMSA","BRIGHTMSA",130,80);
//Round 3
await newRank("MillburnCV","StPetersBV",450,100);
await newRank("MountainLakesAV","ParamusAV",280,180);
await newRank("StuyvesantAV","StPetersAV",360,130);
await newRank("OratoryAV","NewarkAV",370,170);
await newRank("HunterBJV","ChurchillNJBJV",530,60);
await newRank("MillburnBV","HolmdelAV",430,80);
await newRank("HunterAV","HewlettAV",370,180);
await newRank("MillburnAV","HewlettBV",470,100);
await newRank("ChurchillNJAJV","KinnelonAJV",430,90);
await newRank("HewlettCJV","BASISBrooklynAJV",360,90);
await newRank("HolmdelBJV","StJosephBJV",360,130);
await newRank("MillburnDJV","StPetersCJV",360,200);
await newRank("MountainLakesBJV","SouthBrunswickAJV",290,150);
await newRank("TenaflyMSA","TenaflyMSC",410,10);
await newRank("TenaflyMSB","BRIGHTMSA",290,40);
//Round 4
await newRank("StuyvesantAV","StJosephAV",340,140);
await newRank("OratoryAV","ParamusAV",500,100);
await newRank("HunterAV","MillburnCV",410,230);
await newRank("MillburnAV","MountainLakesAV",540,70);
await newRank("HewlettAV","StPetersAV",400,90);
await newRank("NewarkAV","HolmdelAV",340,150);
await newRank("MillburnBV","StPetersBV",460,80);
await newRank("ChurchillNJAJV","HolmdelBJV",380,210);
await newRank("HunterBJV","SouthBrunswickAJV",480,100);
await newRank("MillburnDJV","StJosephBJV",420,90);
await newRank("StPetersCJV","ChurchillNJBJV",240,130);
await newRank("MountainLakesBJV","BASISBrooklynAJV",320,50);
await newRank("KinnelonAJV","HewlettCJV",240,210);
await newRank("TenaflyMSC","IndianFieldsMSA",110,60);
await newRank("TenaflyMSA","BRIGHTMSA",380,20);
//Round 5
await newRank("MillburnAV","OratoryAV",490,130);
await newRank("StuyvesantAV","HewlettBV",380,110);
await newRank("ParamusAV","HolmdelAV",190,180);
await newRank("HunterAV","StPetersBV",450,40);
await newRank("MillburnBV","NewarkAV",320,190);
await newRank("MillburnCV","StPetersAV",460,80);
await newRank("HewlettAV","StJosephAV",330,180);
await newRank("SouthBrunswickAJV","StPetersCJV",240,160);
await newRank("HunterBJV","BASISBrooklynAJV",440,70);
await newRank("ChurchillNJBJV","StJosephBJV",170,90);
await newRank("MountainLakesBJV","KinnelonAJV",190,180);
await newRank("ChurchillNJAJV","MillburnDJV",370,210);
await newRank("HolmdelBJV","HewlettCJV",240,180);
await newRank("TenaflyMSA","IndianFieldsMSA",250,50);
await newRank("TenaflyMSB","TenaflyMSC",190,60);
//Varsity Playoffs
//Octofinals
await newRank("OratoryAV","ParamusAV",310,160);
await newRank("HewlettBV","HewlettAV",221,220);
await newRank("StuyvesantAV","StJosephAV",270,150);
await newRank("MountainLakesAV","NewarkAV",220,210);
//Quarterfinals
await newRank("MillburnAV","MountainLakesAV",420,90);
await newRank("HunterAV","StuyvesantAV",410,140);
await newRank("MillburnCV","HewlettBV",330,110);
await newRank("MillburnBV","OratoryAV",240,230);
//Semifinals
await newRank("MillburnAV","MillburnBV",400,120);
await newRank("HunterAV","MillburnCV",300,210);
//Finals
await newRank("MillburnAV","HunterAV",280,260);
//JV Playoffs
//Quarterfinals
await newRank("HunterBJV","StPetersCJV",500,40);
await newRank("ChurchillNJAJV","KinnelonAJV",350,110);
await newRank("HolmdelBJV","MountainLakesBJV",290,140);
await newRank("MillburnDJV","HewlettCJV",300,140);
//Semifinals
await newRank("HunterBJV","MillburnDJV",360,170);
await newRank("ChurchillNJAJV","HolmdelBJV",350,170);
//Finals
await newRank("HunterBJV","ChurchillNJAJV",290,260);
//MS Playoffs
//Semifinals
//await newRank("TenaflyMSA","IndianFieldsMSA",1,0)
await newRank("TenaflyMSB","TenaflyMSC",160,20);
//Finals
await newRank("TenaflyMSA","TenaflyMSB",200,90);
console.log("Northern NJ C q V: "+qV[a2]);
console.log("Northern NJ C q JV: "+qJV[b2]);
console.log("Northern NJ C q MS: "+qMS[c2]);
a = 0;
b = 0;
c = 0;

//Northern Illinois C-Set
a2 = a2+1;
b2 = b2+1;
c2 = c2+1;
//Prelims
//Round 1
await newRank("StevensonAV","StevensonCV",340,300);
await newRank("BarringtonAV","BarringtonBV",490,90);
await newRank("SandburgAV","MarmionAV",320,230);
await newRank("StevensonBV","HinsdaleAV",350,210);
await newRank("StevensonEJV","StevensonFJV",400,120);
await newRank("StevensonDJV","AptakisicAJV",360,150);
//Round 2
await newRank("MarmionAV","BarringtonBV",360,180);
await newRank("HinsdaleAV","SandburgAV",300,290);
await newRank("StevensonAV"," StevensonBV",470,170);
await newRank("StevensonCV","BarringtonAV",340,330);
await newRank("StevensonFJV","AptakisicAJV",270,160);
await newRank("StevensonEJV","SandburgBJV",470,140);
//Round 3
await newRank("StevensonAV","MarmionAV",460,180);
await newRank("StevensonCV","SandburgAV",420,160);
await newRank("HinsdaleAV","BarringtonBV",450,120);
await newRank("StevensonBV","BarringtonAV",280,260);
await newRank("SandburgBJV","StevensonFJV",340,160);
await newRank("StevensonEJV","StevensonDJV",370,220);
//Round 4
await newRank("SandburgAV","BarringtonAV",350,280);
await newRank("StevensonAV","BarringtonBV",530,40);
await newRank("StevensonCV","StevensonBV",380,230);
await newRank("HinsdaleAV","MarmionAV",400,190);
await newRank("SandburgBJV","AptakisicAJV",310,180);
await newRank("StevensonDJV","StevensonFJV",430,100);
//Round 5
await newRank("StevensonBV","BarringtonBV",390,140);
await newRank("BarringtonAV","HinsdaleAV",320,270);
await newRank("StevensonCV","MarmionAV",510,130);
await newRank("StevensonAV","SandburgAV",440,160);
await newRank("StevensonDJV","SandburgBJV",380,160);
await newRank("StevensonEJV","AptakisicAJV",360,140);
//Round 6
await newRank("StevensonAV","HinsdaleAV",410,200);
await newRank("BarringtonAV","MarmionAV",380,200);
await newRank("StevensonCV","BarringtonBV",520,60);
await newRank("SandburgAV","SandburgBJV",270,240);
//Round 7
await newRank("StevensonBV","MarmionAV",340,170);
await newRank("SandburgAV","BarringtonBV",370,70);
await newRank("StevensonAV","BarringtonAV",320,240);
await newRank("StevensonCV","HinsdaleAV",410,130);
//Varsity Playoffs
//Finals
await newRank("StevensonAV","StevensonCV",390,210);
//JV Playoffs
//Finals
await newRank("StevensonEJV","StevensonDJV",290,220);
console.log("Northern IL C q V: "+qV[a2]);
console.log("Northern IL C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

//Greater Dayton C-Set
a2 = a2+1;
b2 = b2+1;
//Prelims
//Round 1
await newRank("TippecanoeAV","TippecanoeBJV",300,60);
await newRank("GeorgeWashingtonAV","BeavercreekCJV",530,70);
await newRank("BeavercreekAV","BeavercreekBV",520,90);
//Round 2
await newRank("BeavercreekBV","TippecanoeBJV",310,80);
await newRank("GeorgeWashingtonAV","TippecanoeAV",460,140);
await newRank("BeavercreekAV","BeavercreekCJV",590,60);
//Round 3
await newRank("GeorgeWashingtonAV","BeavercreekBV",450,120);
await newRank("TippecanoeAV","BeavercreekCJV",220,160);
await newRank("BeavercreekAV","TippecanoeBJV",270,240);
//Round 4
await newRank("BeavercreekBV","BeavercreekCJV",400,120);
await newRank("GeorgeWashingtonAV","TippecanoeBJV",560,20);
await newRank("BeavercreekAV","TippecanoeAV",500,70);
//Round 5
await newRank("BeavercreekAV","GeorgeWashingtonAV",340,320);
await newRank("TippecanoeAV","BeavercreekBV",280,80);
await newRank("BeavercreekCJV","TippecanoeBJV",120,80);
//Varsity Playoffs
//Finals
await newRank("GeorgeWashingtonAV","BeavercreekAV",310,300);//Beavercreek with advantage
await newRank("BeavercreekAV","GeorgeWashingtonAV",320,290);
//JV Playoffs
//Finals
await newRank("BeavercreekCJV","TippecanoeBJV",220,20);
console.log("Dayton C q V: "+qV[a2]);
console.log("Dayton C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

//Buffalo C-Set
a2 = a2+1;
b2 = b2+1;
//Prelims
//Round 1
await newRank("NicholsAV","AmherstAV",270,240);
await newRank("NicholsBV","AmherstBV",320,180);
await newRank("IroquoisAV","NicholsCV",340,210);
await newRank("NicholsDJV","IroquoisBJV",250,70);
//Round 2
await newRank("NicholsAV","AmherstBV",250,210);
await newRank("NicholsBV","IroquoisAV",350,110);
await newRank("NicholsCV","AmherstAV",290,140);
await newRank("NicholsEJV","IroquoisBJV",220,90);
//Round 3
await newRank("NicholsAV","NicholsCV",250,210);
await newRank("NicholsBV","AmherstAV",390,120);
await newRank("IroquoisAV","AmherstBV",350,110);
await newRank("NicholsDJV","NicholsEJV",260,140);
//Round 4
await newRank("IroquoisAV","NicholsAV",280,170);
await newRank("NicholsBV","NicholsCV",370,100);
await newRank("AmherstBV","AmherstAV",290,180);
await newRank("NicholsDJV","IroquoisBJV",290,40);
//Round5
await newRank("NicholsBV","NicholsAV",250,180);
await newRank("NicholsCV","AmherstBV",170,150);
await newRank("IroquoisAV","AmherstAV",270,130);
await newRank("NicholsEJV","IroquoisBJV",140,60);
//Round 6
await newRank("NicholsDJV","NicholsEJV",190,90);
//Varsity Playoffs
//Semifinals
await newRank("NicholsBV","NicholsCV",350,180);
await newRank("IroquoisAV","NicholsAV",200,180);
//Finals
await newRank("NicholsBV","IroquoisAV",250,140);
console.log("Buffalo C q V: "+qV[a2]);
console.log("Buffalo C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

//South Florida Fall C-Set
a2 = a2+1;
b2 = b2+1;
//Prelims
//Round 1
await newRank("RansomAV","PalmettoDV",520,30);
await newRank("ArchimedeanAV","PalmettoEV",330,130);
await newRank("ArchimedeanCV","PalmettoFV",220,90);
await newRank("CoralReefAV","PalmettoJV",360,70);
await newRank("PalmettoBV","BelenBV",280,210);
await newRank("ArchimedeanEV","PalmettoHV",220,60);
await newRank("BelenAV","PalmettoIV",420,40);
await newRank("DoralAV","ArchimedeanDV",330,50);
await newRank("ArchimedeanBV","PalmettoAV",240,180);
await newRank("PalmettoCV","WestminsterAV",310,160);
await newRank("CoralReefBV","PalmettoGV",300,120);
await newRank("RansomBV","PalmettoMJV",280,190);
await newRank("PalmettoPJV","PalmettoOJV",310,160);
await newRank("BelenCJV","PalmettonAJV",330,110);
await newRank("PalmettoLJV","PalmettoQJV",310,50);
await newRank("DoralBJV","PalmettoRJV",270,140);
await newRank("RansomCJV","PalmettoKJV",460,90);
await newRank("ArchimedeanFJV","RansomDJV",180,170);
//Round 2
await newRank("RansomBV","PalmettoCV",230,230);
await newRank("RansomAV","CoralReefBV",410,90);
await newRank("PalmettoEV","PalmettoDV",260,100);
await newRank("ArchimedeanAV","ArchimedeanCV",280,150);
await newRank("PalmettoJV","PalmettoFV",180,170);
await newRank("CoralReefAV","BelenBV",300,210);
await newRank("PalmettoBV","PalmettoHV",290,140);
await newRank("BelenAV","ArchimedeanEV",360,40);
await newRank("ArchimedeanDV","PalmettoIV",120,120);
await newRank("DoralAV","PalmettoAV",230,190);
await newRank("ArchimedeanBV","WestminsterAV",240,180);
await newRank("RansomDJV","PalmettoGV",210,150);
await newRank("PalmettoMJV","PalmettoOJV",290,150);
await newRank("PalmettoPJV","PalmettonAJV",260,140);
await newRank("PalmettoLJV","BelenCJV",250,190);
await newRank("DoralBJV","PalmettoQJV",260,90);
await newRank("RansomCJV","PalmettoRJV",450,90);
await newRank("ArchimedeanFJV","PalmettoKJV",250,120);
//Round 3
await newRank("WestminsterAV","DoralAV",280,160);
await newRank("ArchimedeanBV","PalmettoGV",240,150);
await newRank("RansomAV","PalmettoCV",330,180);
await newRank("CoralReefBV","RansomBV",250,220);
await newRank("ArchimedeanCV","PalmettoDV",220,150);
await newRank("ArchimedeanAV","PalmettoJV",390,80);
await newRank("BelenBV","PalmettoFV",370,110);
await newRank("CoralReefAV","PalmettoHV",410,40);
await newRank("PalmettoBV","BelenAV",340,210);
await newRank("ArchimedeanDV","ArchimedeanEV",130,120);
await newRank("PalmettoAV","PalmettoIV",410,90);
await newRank("PalmettoEV","PalmettoKJV",270,170);
await newRank("ArchimedeanFJV","PalmettoRJV",220,140);
await newRank("RansomDJV","PalmettoOJV",250,150);
await newRank("PalmettoMJV","PalmettonAJV",330,130);
await newRank("PalmettoPJV","PalmettoLJV",270,180);
await newRank("BelenCJV","DoralBJV",240,200);
await newRank("RansomCJV","PalmettoQJV",460,50);
//Round 4
await newRank("PalmettoAV","ArchimedeanEV",410,50);
await newRank("WestminsterAV","PalmettoIV",290,40);
await newRank("DoralAV","PalmettoGV",210,160);
await newRank("RansomAV","ArchimedeanBV",450,110);
await newRank("PalmettoCV","PalmettoEV",240,230);
await newRank("CoralReefBV","ArchimedeanCV",230,130);
await newRank("PalmettoLJV","PalmettoDV",140,70);
await newRank("ArchimedeanAV","BelenBV",330,240);
await newRank("PalmettoFV","PalmettoHV",160,70);
await newRank("BelenAV","CoralReefAV",280,270);
await newRank("PalmettoBV","RansomBV",370,130);
await newRank("PalmettoRJV","ArchimedeanDV",160,130);
await newRank("RansomCJV","BelenCJV",520,110);
await newRank("ArchimedeanFJV","PalmettoQJV",320,40);
await newRank("PalmettoOJV","PalmettoKJV",170,150);
await newRank("RansomDJV","PalmettonAJV",280,80);
await newRank("PalmettoMJV","PalmettoLJV",190,130);
await newRank("PalmettoPJV","DoralBJV",300,140);
//Round 5
await newRank("PalmettoBV","CoralReefAV",260,190);
await newRank("PalmettoAV","ArchimedeanDV",290,40);
await newRank("WestminsterAV","ArchimedeanEV",250,50);
await newRank("RansomAV","PalmettoGV",360,80);
await newRank("DoralAV","PalmettoIV",250,80);
await newRank("ArchimedeanBV","PalmettoEV",230,210);
await newRank("PalmettoCV","ArchimedeanCV",230,150);
await newRank("CoralReefBV","PalmettoJV",260,80);
await newRank("RansomBV","PalmettoDV",320,80);
await newRank("ArchimedeanAV","PalmettoHV",330,40);
await newRank("BelenBV","PalmettoQJV",350,60);
await newRank("PalmettoMJV","DoralBJV",290,90);
await newRank("RansomCJV","PalmettoPJV",390,130);
await newRank("ArchimedeanFJV","BelenCJV",170,170);
await newRank("PalmettoRJV","PalmettoOJV",180,140);
await newRank("PalmettoKJV","PalmettonAJV",150,110);
await newRank("PalmettoLJV","RansomDJV",180,170);
//Varsity Playoffs
//Octofinals
//await newRank("RansomAV","PalmettoGV",1,0);
await newRank("PalmettoCV","DoralAV",200,150);
await newRank("PalmettoBV","ArchimedeanBV",320,150);
await newRank("CoralReefAV","RansomBV",200,190);
await newRank("ArchimedeanAV","ArchimedeanCV",280,70);
await newRank("BelenBV","WestminsterAV",300,90);
await newRank("BelenAV","PalmettoEV",270,150);
await newRank("PalmettoAV","CoralReefBV",210,190);
//Quarterfinals
await newRank("RansomAV","PalmettoCV",310,150);
await newRank("BelenBV","ArchimedeanAV",270,220);
await newRank("BelenAV","PalmettoAV",230,200);
await newRank("PalmettoBV","CoralReefAV",200,140);
//Semifinals
await newRank("RansomAV","PalmettoBV",220,190);
await newRank("BelenBV","BelenAV",180,170);
//Finals
await newRank("RansomAV","BelenBV",260,170)
//JV Playoffs
//Quarterfinals
await newRank("RansomCJV","DoralBJV",330,140);
await newRank("RansomDJV","ArchimedeanFJV",180,130);
await newRank("PalmettoPJV","PalmettoLJV",250,70);
await newRank("BelenCJV","PalmettoMJV",200,180);
//Semifinals
await newRank("PalmettoPJV","BelenCJV",240,70);
await newRank("RansomCJV","PalmettoPJV",340,90);
console.log("South FL C q V: "+qV[a2]);
console.log("South FL C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

//Oahu C-Set
a2 = a2+1;
//Prelims
//Round 1
await newRank("IolaniBV","PunahouBV",400,130);
await newRank("IolaniAV","PunahouAV",270,260);
//Round 2
await newRank("IolaniBV","IolaniAV",410,160);
await newRank("PunahouAV","PunahouBV",320,150);
//Round 3
await newRank("IolaniBV","PunahouAV",350,210);
await newRank("IolaniAV","PunahouBV",330,190);
//Round 4
await newRank("IolaniBV","PunahouBV",370,130);
await newRank("IolaniAV","PunahouAV",280,280);
//Round 5
await newRank("IolaniBV","PunahouAV",380,120);
await newRank("IolaniAV","PunahouBV",380,120);
//Round 6
await newRank("PunahouAV","PunahouBV",200,160);
await newRank("IolaniAV","IolaniBV",260,210);
console.log("Oahu C q V: "+qV[a2]);
a = 0;
b = 0;
c = 0;

//Greater Knoxville Fall C-Set
a2 = a2+1;
//Prelims
//Round 3
await newRank("SeymourAV","PigeonForgeAV",230,210);
await newRank("MaryvilleAV","MorristownAV",370,140);
await newRank("GatlinburgBV","MorristownBV",170,110);
//Round 2
await newRank("MaryvilleAV","MorristownBV",460,40);
await newRank("GatlinburgAV","MorristownAV",270,140);
await newRank("SeymourAV","GatlinburgBV",280,60);
//Round 3
await newRank("GatlinburgAV","MorristownBV",370,60);
await newRank("MaryvilleAV","SeymourAV",320,140);
await newRank("PigeonForgeAV","MorristownAV",230,190);
//Round 4
await newRank("GatlinburgAV","SeymourAV",330,90);
await newRank("PigeonForgeAV","MorristownBV",250,70);
await newRank("MorristownAV","GatlinburgBV",310,30);
//Round 5
await newRank("PigeonForgeAV","GatlinburgBV",310,20);
await newRank("GatlinburgAV","MaryvilleAV",220,210);
await newRank("MorristownAV","SeymourAV",190,130);
//Varsity Playoffs
//Semifinals
await newRank("GatlinburgAV","MorristownAV",230,100);
await newRank("MaryvilleAV","PigeonForgeAV",400,160);
//Finals
await newRank("MaryvilleAV","GatlinburgAV",230,140);
console.log("Knoxville C q V: "+qV[a2]);
a = 0;
b = 0;
c = 0;

//Eastern Geogia Fall C-Set
a2 = a2+1;
b2 = b2+1;
c2 = c2+1;
//Prelims
//Round 1
await newRank("BrookwoodAV","NewnanAV",241,240);
await newRank("LambertAV","ChattahoocheeAV",310,280);
await newRank("WoodstockAV","WoodwardAV",350,90);
await newRank("CambridgeAV","JohnsCreekAV",340,210);
await newRank("CommerceAV","ApalacheeAV",300,180);
await newRank("NewnanCJV","BrookwoodBJV",230,170);
await newRank("ChattahoocheeBJV","NewnanBJV",240,220);
await newRank("HermannAJV","CherokeeBluffJV",290,220);
await newRank("FultonAJV","GeorgeWaltonBJV",410,40);
//Round 2
await newRank("LambertAV","NewnanAV",430,200);
await newRank("BrookwoodAV","WoodstockAV",350,160);
await newRank("ChattahoocheeAV","WoodwardAV",410,140);
await newRank("ApalacheeAV","GeorgeWaltonAV",220,190);
await newRank("CambridgeAV","CommerceAV",510,110);
await newRank("ChattahoocheeBJV","ApalacheeBJV",360,60);
await newRank("NewnanCJV","CherokeeBluffJV",240,190);
await newRank("NewnanBJV","FultonAJV",210,150);
await newRank("HermannAJV","GeorgeWaltonBJV",450,40);
//Round 3
await newRank("BrookwoodAV","WoodwardAV",360,110);
await newRank("LambertAV","WoodstockAV",380,120);
await newRank("ChattahoocheeAV","NewnanAV",370,170);
await newRank("CommerceAV","GeorgeWaltonAV",250,220);
await newRank("JohnsCreekAV","ApalacheeAV",340,130);
await newRank("CherokeeBluffJV","BrookwoodBJV",240,220);
await newRank("FultonAJV","ApalacheeBJV",330,100);
await newRank("NewnanCJV","GeorgeWaltonBJV",230,200);
await newRank("HermannAJV","NewnanBJV",310,170);
//Round 4
await newRank("LambertAV","WoodwardAV",460,140);
await newRank("ChattahoocheeAV","BrookwoodAV",400,150);
await newRank("NewnanAV","WoodstockAV",320,180);
await newRank("CambridgeAV","GeorgeWaltonAV",490,80);
await newRank("JohnsCreekAV","CommerceAV",280,140);
await newRank("CherokeeBluffJV","GeorgeWaltonBJV",320,70);
await newRank("HermannAJV","ChattahoocheeBJV",260,200);
await newRank("BrookwoodBJV","NewnanBJV",200,190);
await newRank("NewnanCJV","ApalacheeBJV",170,110);
//Round 5
await newRank("ChattahoocheeAV","WoodstockAV",370,200);
await newRank("WoodwardAV","NewnanAV",200,180);
await newRank("LambertAV","BrookwoodAV",380,200);
await newRank("CambridgeAV","ApalacheeAV",510,60);
await newRank("JohnsCreekAV","GeorgeWaltonAV",310,150);
await newRank("HermannAJV","FultonAJV",270,200);
await newRank("CherokeeBluffJV","NewnanBJV",230,180);
await newRank("ChattahoocheeBJV","NewnanCJV",230,180);
await newRank("BrookwoodBJV","ApalacheeBJV",250,80);
//Varsity Playoffs
//Quarterfinals
await newRank("CambridgeAV","CommerceAV",340,130);
await newRank("LambertAV","WoodstockAV",370,160);
await newRank("ChattahoocheeAV","NewnanAV",350,160);
await newRank("BrookwoodAV","JohnsCreekAV",220,190);
//Semifinals
await newRank("CambridgeAV","BrookwoodAV",320,150);
await newRank("LambertAV","ChattahoocheeAV",271,270);
//Finals
await newRank("CambridgeAV","LambertAV",310,250);
//JV Playoffs
//Semifinals
await newRank("HermannAJV","CherokeeBluffJV",370,80);
await newRank("ChattahoocheeBJV","FultonAJV",210,160);
//Finals
await newRank("ChattahoocheeBJV","HermannAJV",280,140);
console.log("Eastern GA C q V: "+qV[a2]);
console.log("Eastern GA C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

//Central Florida Fall C-Set
a2 = a2+1;
b2 = b2+1;
c2 = c2+1;
//Prelims
//Round 1
await newRank("PineViewAV","RiverviewEV",270,220);
await newRank("RiverviewAV","LargoBV",280,240);
await newRank("BerkeleyBV","KingAV",270,240);
await newRank("TrinityBV","ClassicalAV",290,180);
await newRank("TrinityAV","RiverviewDV",450,70);
await newRank("LargoAV","RiverviewBV",380,160);
await newRank("KingBV","BerkeleyAV",340,190);
await newRank("ManateeAV","RiverviewCV",320,200);
await newRank("RiverviewHJV","LargoCJV",230,170);
await newRank("BerkeleyCJV","RiverviewIJV",330,20);
await newRank("RiverviewFJV","RiverviewGJV",310,50);
await newRank("ManateeBJV","RiverviewJJV",330,30);
await newRank("ClassicalBJV","BerkeleyDJV",140,110);
await newRank("ClassicalBJV","BerkeleyDJV",140,110);
await newRank("ClassicalCMS","ClassicalEMS",190,30);
await newRank("TrinityDMS","ClassicalDMS",220,40);
//Round 2
await newRank("RiverviewCV","ClassicalAV",260,220);
await newRank("KingAV","RiverviewDV",320,120);
await newRank("TrinityAV","BerkeleyBV",320,310);
await newRank("KingBV","RiverviewAV",230,220);
await newRank("LargoAV","RiverviewEV",350,130);
await newRank("ManateeAV","TrinityBV",240,220);
await newRank("LargoBV","BerkeleyAV",340,140);
await newRank("PineViewAV","RiverviewBV",250,200);
await newRank("RiverviewFJV","RiverviewIJV",360,60);
await newRank("RiverviewGJV","RiverviewJJV",280,70);
await newRank("ManateeBJV","BerkeleyDJV",170,130);
await newRank("LargoCJV","ClassicalBJV",240,100);
await newRank("BerkeleyCJV","RiverviewHJV",240,180);
await newRank("TrinityCMS","ClassicalEMS",430,10);
await newRank("ClassicalCMS","TrinityDMS",150,140);
//Round 3
await newRank("TrinityAV","ManateeAV",510,80);
await newRank("TrinityBV","RiverviewDV",330,130);
await newRank("KingAV","ClassicalAV",360,140);
await newRank("BerkeleyAV","PineViewAV",230,220);
await newRank("RiverviewCV","BerkeleyBV",320,250);
await newRank("TrinityCMS","ClassicalDMS",490,10);
await newRank("LargoBV","RiverviewEV",260,160);
await newRank("RiverviewFJV","RiverviewHJV",210,150);
await newRank("LargoAV","RiverviewAV",370,150);
await newRank("KingBV","RiverviewBV",270,220);
await newRank("ManateeBJV","LargoCJV",230,190);
await newRank("RiverviewIJV","RiverviewJJV",140,120);
await newRank("BerkeleyCJV","ClassicalBJV",190,170);
await newRank("TrinityCMS","ClassicalDMS",490,10);
await newRank("TrinityDMS","ClassicalEMS",230,40);
//Round 4
await newRank("KingBV","RiverviewEV",330,110);
await newRank("BerkeleyBV","TrinityBV",340,160);
await newRank("BerkeleyCJV","ManateeBJV",250,130);
await newRank("TrinityCMS","ClassicalCMS",410,40);
await newRank("RiverviewAV","PineViewAV",290,200);
await newRank("LargoAV","BerkeleyAV",330,170);
await newRank("LargoBV","RiverviewBV",290,150);
await newRank("LargoCJV","RiverviewGJV",190,110);
await newRank("BerkeleyDJV","RiverviewIJV",160,70);
await newRank("ClassicalDMS","ClassicalEMS",60,50);
await newRank("RiverviewCV","RiverviewDV",470,110);
await newRank("RiverviewHJV","RiverviewJJV",180,90);
await newRank("RiverviewFJV","ClassicalBJV",340,130);
await newRank("KingAV","ManateeAV",270,160);
await newRank("TrinityAV","ClassicalAV",500,70);
//Round 5
await newRank("TrinityAV","LargoAV",310,230);
await newRank("RiverviewAV","ManateeAV",300,140);
await newRank("ClassicalAV","BerkeleyAV",210,160);
await newRank("BerkeleyBV","RiverviewBV",220,150);
await newRank("TrinityCMS","TrinityDMS",330,60);
await newRank("ClassicalBJV","RiverviewJJV",220,60);
await newRank("KingBV","RiverviewCV",320,150);
await newRank("RiverviewFJV","ManateeBJV",210,90);
await newRank("KingAV","PineViewAV",290,140);
await newRank("LargoCJV","RiverviewIJV",150,80);
await newRank("BerkeleyCJV","RiverviewGJV",260,70);
await newRank("RiverviewEV","RiverviewDV",190,150);
await newRank("RiverviewHJV","BerkeleyDJV",240,100);
await newRank("TrinityBV","LargoBV",230,190);
await newRank("ClassicalCMS","ClassicalDMS",120,50);
//Varsity Playoffs
//Quarterfinals
await newRank("TrinityAV","RiverviewAV",370,100);
await newRank("LargoAV","BerkeleyBV",280,130);
await newRank("KingBV","LargoBV",190,170);
await newRank("KingAV","RiverviewCV",290,150);
//Semifinals
await newRank("LargoAV","KingBV",280,150);
await newRank("TrinityAV","KingAV",310,180);
//Finals
await newRank("TrinityAV","LargoAV",330,170);
//JV Playoffs
//Quarterfinals
//await newRank("RiverviewFJV","BerkeleyDJV",1,0);
await newRank("BerkeleyCJV","RiverviewGJV",260,50);
await newRank("LargoCJV","ManateeBJV",180,80);
await newRank("RiverviewHJV","ClassicalBJV",210,80);
//Semifinals
await newRank("RiverviewHJV","BerkeleyCJV",170,130);
await newRank("RiverviewFJV","LargoCJV",200,100);
await newRank("RiverviewHJV","RiverviewFJV",121,120);
//MS Final
await newRank("TrinityCMS","TrinityDMS",310,40);
console.log("Central FL C q V: "+qV[a2]);
console.log("Central FL C q JV: "+qJV[b2]);
console.log("Central FL C q MS: "+qMS[c2]);
a = 0;
b = 0;
c = 0;

//Western Washington C-Set
a2 = a2+1;
b2 = b2+1;
//Prelims
//Round 1
await newRank("CentralKitsapAV","HolyNamesAV",320,200);
await newRank("OdleAJV","JohnPaulIIBJV",250,120);
await newRank("TeslaAJV","DuvallJV",400,70);
//Round 2
await newRank("HolyNamesAV","JohnPaulIIAV",240,200);
await newRank("TeslaAJV","JohnPaulIIBJV",390,70);
await newRank("OdleAJV","DuvallJV",230,130);
//Round 3
await newRank("CentralKitsapAV","JohnPaulIIAV",330,80);
await newRank("TeslaAJV","OdleAJV",330,140);
await newRank("JohnPaulIIBJV","DuvallJV",190,120);
//Round 4
await newRank("HolyNamesAV","JohnPaulIIAV",330,110);
await newRank("TeslaAJV","JohnPaulIIBJV",430,80);
await newRank("OdleAJV","DuvallJV",190,60);
//Round 5
await newRank("CentralKitsapAV","JohnPaulIIAV",320,90);
await newRank("TeslaAJV","OdleAJV",360,110);
await newRank("JohnPaulIIBJV","DuvallJV",160,90);
//Round 6
await newRank("HolyNamesAV","CentralKitsapAV",300,160);
//Varsity Playoffs
//Finals
await newRank("CentralKitsapAV","HolyNamesAV",250,150);
console.log("West WA C q V: "+qV[a2]);
console.log("West WA C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

//Southern Washington C-Set
a2 = a2+1;
c2 = c2+1;
//Prelims
//Round 1
await newRank("JesuitAV","LincolnAV",340,180);
await newRank("ColumbiaRiverAV","WestviewAV",270,270);//Columbia River wins on
await newRank("LewisandClarkAV","WestviewBV",340,110);
await newRank("JesuitBV","ColumbiaRiverBV",340,110);
await newRank("StollerKMS","StollerTMS",340,140);
await newRank("StollerHMS","StollerWMS",410,70);
//Round 2
await newRank("LewisandClarkAV","JesuitBV",220,140);
await newRank("JesuitAV","ColumbiaRiverAV",360,180);
await newRank("WestviewAV","ColumbiaRiverAV",380,100);
//Round 3
await newRank("JesuitAV","ColumbiaRiverBV",430,70);
await newRank("WestviewAV","LewisandClarkAV",330,200);
await newRank("JesuitBV","LincolnAV",260,210);
await newRank("ColumbiaRiverAV","WestviewBV",410,120);
await newRank("StollerKMS","StollerWMS",450,70);
await newRank("StollerHMS","StollerTMS",380,90);
//Round 4
await newRank("ColumbiaRiverAV","JesuitBV",410,130);
await newRank("WestviewAV","LincolnAV",350,220);
await newRank("JesuitAV","LewisandClarkAV",350,130);
await newRank("WestviewBV","ColumbiaRiverBV",250,70);
await newRank("StollerKMS","StollerHMS",350,200);
await newRank("StollerWMS","StollerTMS",210,110);
//Round 5
await newRank("LincolnAV","ColumbiaRiverBV",300,110);
await newRank("WestviewAV","JesuitBV",340,110);
await newRank("ColumbiaRiverAV","LewisandClarkAV",300,160);
await newRank("JesuitAV","WestviewBV",430,80);
//Varsity Playoffs
//Semifinals
await newRank("WestviewAV","ColumbiaRiverAV",250,170);
await newRank("JesuitAV","LincolnAV",320,130);
//Finals
await newRank("JesuitAV","WestviewAV",220,180);
//MS Playoffs
//Finals
await newRank("StollerHMS","StollerKMS",240,200);
console.log("South WA C q V: "+qV[a2]);
console.log("South WA C q MS: "+qMS[c2]);
a = 0;
b = 0;
c = 0;

//Boston Fall C-Set
a2 = a2+1;
b2 = b2+1;
c2 = c2+1;
//Prelims
//Round 1
await newRank("SalemBV","NorthfieldMtHermonAV",231,230);
await newRank("BostonLatinAV","TantasquaBV",430,110);
await newRank("PhillipsExeterAV","SalemAV",380,130);
await newRank("LexingtonAV","TantasquaAV",380,150);
await newRank("LexingtonBJV","BromfieldAJV",450,60);
await newRank("PhillipsExeterBJV","PhillipsAndoverAJV",440,60);
//Round 2
await newRank("TantasquaAV","SalemBV",230,210);
await newRank("PhillipsExeterAV","NorthfieldMtHermonAV",370,150);
await newRank("SalemAV","TantasquaBV",340,150);
await newRank("BostonLatinAV","LexingtonAV",320,240);
await newRank("BromfieldAJV","PhillipsAndoverAJV",180,170);
await newRank("PhillipsExeterBJV","LexingtonBJV",310,280);
//Round 3
await newRank("BostonLatinAV","TantasquaAV",470,120);
await newRank("LexingtonAV","SalemAV",370,130);
await newRank("NorthfieldMtHermonAV","TantasquaBV",280,220);
await newRank("PhillipsExeterAV","SalemBV",350,150);
await newRank("LexingtonBJV","PhillipsAndoverAJV",410,110);
await newRank("PhillipsExeterBJV","BromfieldAJV",360,120);
//Round 4
await newRank("LexingtonAV","NorthfieldMtHermonAV",420,140);
await newRank("PhillipsExeterAV","TantasquaBV",450,90);
await newRank("SalemAV","TantasquaBV",230,200);
await newRank("BostonLatinAV","SalemBV",370,180);
await newRank("LexingtonBJV","BromfieldAJV",440,80);
await newRank("PhillipsExeterBJV","PhillipsAndoverAJV",450,110);
//Round 5
await newRank("PhillipsExeterAV","LexingtonAV",370,210);
await newRank("TantasquaAV","NorthfieldMtHermonAV",200,180);
await newRank("BostonLatinAV","SalemAV",510,70);
await newRank("SalemBV","TantasquaBV",280,110);
await newRank("PhillipsAndoverAJV","BromfieldAJV",150,140);
await newRank("LexingtonBJV","PhillipsExeterBJV",270,230);
//Round 6
await newRank("LexingtonBJV","PhillipsAndoverAJV",300,130);
await newRank("PhillipsExeterBJV","BromfieldAJV",330,130);
//Varsity Playoffs
//Semifinals
await newRank("BostonLatinAV","SalemBV",290,180);
await newRank("PhillipsExeterAV","LexingtonAV",260,250);
//Finals
await newRank("BostonLatinAV","PhillipsExeterAV",300,170);
//JV Playoffs
//Finals
await newRank("PhillipsExeterBJV","LexingtonBJV",240,180);
console.log("Boston C q V: "+qV[a2]);
console.log("Boston C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

//Washington DC C-Set
a2 = a2+1;
b2 = b2+1;
c2 = c2+1;
//Prelims
//Round
await newRank("CentennialAV","GeorgetownDayAV",330,310);
await newRank("ThomasJeffersonAV","MountVernonAV",490,110);
await newRank("BASISMcLeanAV","ThomasJeffersonBV",320,290);
await newRank("MontgomeryBlairAV","GlenelgAV",420,150);
await newRank("StAnselmsAV","CentennialBV",380,190);
await newRank("MontgomeryBlairCJV","CentennialEJV",260,190);
await newRank("CentennialCJV","CentennialDJV",390,160);
await newRank("MontgomeryBlairBJV","ThomasJeffersonDJV",390,180);
await newRank("ThomasJeffersonCJV","GeorgetownDayBJV",400,160);
await newRank("McLeanAJV","StAnselmsBJV",350,190);
await newRank("CentennialLaneAMS","BurleighManorDMS",330,160);
await newRank("BurleighManorAMS","NysmithBMS",410,60);
await newRank("BurleighManorCMS","CentennialLaneBMS",210,180);
await newRank("CompassMSA","CentennialLaneCMS",270,130);
await newRank("NysmithAMS","RipponBMS",310,90);
await newRank("BurleighManorBMS","RipponAMS",330,170);
//Round 2
await newRank("GeorgetownDayAV","GlenelgAV",410,180);
await newRank("RichardMontgomeryAV","BASISMcLeanAV",390,290);
await newRank("ThomasJeffersonBV","MountVernonAV",540,80);
await newRank("MontgomeryBlairAV","CentennialBV",470,140);
await newRank("ThomasJeffersonAV","StAnselmsAV",420,230);
await newRank("RichardMontgomeryBJV","StAnselmsBJV",450,100);
await newRank("MontgomeryBlairBJV","CentennialEJV",510,90);
await newRank("ThomasJeffersonCJV","ThomasJeffersonDJV",300,280);
await newRank("CentennialCJV","MontgomeryBlairCJV",320,170);
await newRank("McLeanAJV","CentennialDJV",300,150);
await newRank("BurleighManorCMS","RipponBMS",230,140);
await newRank("CentennialLaneAMS","CentennialLaneBMS",370,90);
await newRank("BurleighManorBMS","BurleighManorDMS",340,150);
await newRank("BurleighManorAMS","CentennialLaneCMS",350,90);
await newRank("NysmithAMS","CompassMSA",300,200);
await newRank("RipponAMS","NysmithBMS",260,140);
//Round 3
await newRank("MontgomeryBlairAV","ThomasJeffersonBV",430,210);
await newRank("StAnselmsAV","MountVernonAV",470,70);
await newRank("GlenelgAV","CentennialBV",290,220);
await newRank("CentennialAV","BASISMcLeanAV",350,250);
await newRank("RichardMontgomeryAV","ThomasJeffersonAV",380,230);
await newRank("GeorgetownDayBJV","StAnselmsBJV",300,250);
await newRank("MontgomeryBlairBJV","McLeanAJV",350,220);
await newRank("ThomasJeffersonDJV","CentennialEJV",290,210);
await newRank("RichardMontgomeryBJV","CentennialLaneCMS",330,230);
await newRank("MontgomeryBlairCJV","CentennialDJV",350,140);
await newRank("RipponAMS","BurleighManorDMS",250,200);
await newRank("BurleighManorBMS","CentennialLaneBMS",330,120);
await newRank("NysmithBMS","CentennialLaneCMS",310,80);
await newRank("NysmithAMS","CentennialLaneAMS",350,170);
await newRank("BurleighManorAMS","BurleighManorCMS",430,70);
//Round 4
await newRank("GeorgetownDayAV","MontgomeryBlairAV",380,290);
await newRank("ThomasJeffersonBV","CentennialBV",520,100);
await newRank("RichardMontgomeryAV","MountVernonAV",500,80);
await newRank("StAnselmsAV","GlenelgAV",340,290);
await newRank("McLeanAJV","CentennialEJV",360,120);
await newRank("ThomasJeffersonDJV","MontgomeryBlairCJV",400,200);
await newRank("GeorgetownDayBJV","CentennialCJV",280,250);
await newRank("MontgomeryBlairBJV","ThomasJeffersonCJV",350,280);
await newRank("BurleighManorDMS","CentennialLaneBMS",230,270);
await newRank("CompassMSA","NysmithBMS",200,190);
await newRank("CentennialLaneAMS","RipponBMS",340,70);
await newRank("BurleighManorBMS","NysmithAMS",270,210);
await newRank("BurleighManorAMS","RipponAMS",370,140);
await newRank("BurleighManorCMS","CentennialLaneCMS",240,70);
//Round 5
await newRank("BASISMcLeanAV","StAnselmsAV",350,240);
await newRank("CentennialBV","MountVernonAV",380,80);
await newRank("RichardMontgomeryAV","MontgomeryBlairAV",430,200);
await newRank("CentennialAV","GlenelgAV",410,120);
await newRank("GeorgetownDayAV","ThomasJeffersonAV",400,240);
await newRank("CentennialEJV","CentennialDJV",240,180);
await newRank("ThomasJeffersonDJV","GeorgetownDayBJV",360,180);
await newRank("MontgomeryBlairBJV","RichardMontgomeryBJV",340,270);
await newRank("ThomasJeffersonCJV","CentennialCJV",360,180);
await newRank("StAnselmsBJV","MontgomeryBlairCJV",250,170);
await newRank("CompassMSA","CentennialLaneBMS",320,80);
await newRank("BurleighManorBMS","NysmithBMS",290,150);
await newRank("CentennialLaneCMS","RipponBMS",180,100);
await newRank("NysmithAMS","RipponAMS",270,120);
await newRank("BurleighManorAMS","CentennialLaneAMS",270,230);
await newRank("BurleighManorDMS","BurleighManorCMS",250,100);
//Varsity Playoffs
//Semifinals
await newRank("RichardMontgomeryAV","MontgomeryBlairAV",360,260);
await newRank("GeorgetownDayAV","ThomasJeffersonAV",390,200);
//Finals
await newRank("GeorgetownDayAV","RichardMontgomeryAV",300,280);
//JV Playoffs
//Semifinals
await newRank("MontgomeryBlairBJV","ThomasJeffersonDJV",360,190);
await newRank("RichardMontgomeryBJV","ThomasJeffersonCJV",340,200);
//Finals
await newRank("MontgomeryBlairBJV","RichardMontgomeryBJV",360,160);
//MS Playoffs
//Semifinals
await newRank("BurleighManorBMS","NysmithAMS",220,190);
await newRank("BurleighManorAMS","CompassMSA",220,190);
//Finals
await newRank("BurleighManorAMS","BurleighManorBMS",220,140);
console.log("DC C q V: "+qV[a2]);
console.log("DC C q JV: "+qJV[b2]);
console.log("DC C q MS: "+qMS[c2]);
a = 0;
b = 0;
c = 0;

//Southern New Jersey C-Set
a2 = a2+1;
b2 = b2+1;
//Prelims
//Round 1
await newRank("RanneyAV","MoorestownBV",260,210);
await newRank("PrincetonBV","MoorestownAV",360,170);
await newRank("HighTechAV","FontbonneAV",400,120);
await newRank("MoravianAV","FontbonneBV",440,70);
await newRank("PrincetonAV","DonovanCatholicAV",480,30);
await newRank("EastBrunswickAV","EastBrunswickBV",370,160);
await newRank("RanneyBJV","FordhamBJV",270,180);
await newRank("WiltonAnjoAJV","DonovanCatholicBJV",280,190);
await newRank("PrincetonCJV","PrincetonDJV",340,150);
await newRank("MillburnMSAJV","FontbonneCJV",350,80);
//Round 2
await newRank("EastBrunswickBV","FontbonneAV",290,200);
await newRank("MoravianAV","DonovanCatholicAV",480,40);
await newRank("EastBrunswickAV","PrincetonBV",350,210);
await newRank("MoorestownAV","MoorestownBV",310,140);
await newRank("HighTechAV","FontbonneBV",470,40);
await newRank("RanneyAV","FordhamAV",400,160);
await newRank("WiltonAnjoAJV","HighTechBJV",360,120);
await newRank("MillburnMSAJV","FordhamBJV",250,180);
await newRank("FontbonneCJV","DonovanCatholicBJV",270,240);
await newRank("PrincetonCJV","RanneyBJV",270,220);
//Round 3
await newRank("PrincetonBV","FontbonneAV",330,140);
await newRank("HighTechAV","MoorestownBV",460,100);
await newRank("EastBrunswickBV","FontbonneBV",380,60);
await newRank("MoravianAV","RanneyAV",270,250);
await newRank("PrincetonAV","FordhamAV",340,130);
await newRank("RanneyBJV","FontbonneCJV",280,100);
await newRank("WiltonAnjoAJV","MillburnMSAJV",250,230);
await newRank("PrincetonCJV","HighTechBJV",330,140);
await newRank("FordhamBJV","PrincetonDJV",230,200);
//Round 4
await newRank("PrincetonAV","MoravianAV",320,220);
await newRank("RanneyAV","DonovanCatholicAV",450,30);
await newRank("EastBrunswickAV","FontbonneAV",460,30);
await newRank("EastBrunswickBV","PrincetonBV",270,260);
await newRank("HighTechAV","MoorestownAV",480,90);
await newRank("FordhamBJV","FontbonneBV",380,40);
await newRank("FordhamBJV","DonovanCatholicBJV",330,100);
await newRank("WiltonAnjoAJV","PrincetonDJV",290,220);
await newRank("PrincetonCJV","MillburnMSAJV",340,190);
await newRank("HighTechBJV","FontbonneCJV",250,100);
//Round 5
await newRank("HighTechAV","RanneyAV",350,160);
await newRank("FontbonneBV","DonovanCatholicAV",160,50);
await newRank("EastBrunswickAV","PrincetonAV",320,260);
await newRank("MoravianAV","FordhamAV",260,180);
await newRank("MoorestownAV","FontbonneAV",210,160);
await newRank("PrincetonBV","MoorestownBV",250,190);
await newRank("WiltonAnjoAJV","RanneyBJV",300,190);
await newRank("HighTechBJV","FordhamBJV",240,170);
await newRank("PrincetonCJV","DonovanCatholicBJV",300,80);
//Varsity Playoffs
//Quarterfinals
//await newRank("HighTechAV","FordhamAV",1,0);
await newRank("EastBrunswickAV","PrincetonAV",250,230);
await newRank("MoravianAV","EastBrunswickBV",220,150);
await newRank("RanneyAV","PrincetonBV",320,130);
//Semifinals
await newRank("EastBrunswickAV","MoravianAV",240,150);
await newRank("HighTechAV","RanneyAV",290,150);
//Finals
await newRank("HighTechAV","EastBrunswickAV",300,190);
//JV Playoffs
//Semifinals
await newRank("PrincetonCJV","RanneyBJV",280,130);
await newRank("WiltonAnjoAJV","MillburnMSAJV",200,120);
await newRank("PrincetonCJV","WiltonAnjoAJV",290,170);
console.log("South NJ C q V: "+qV[a2]);
console.log("South NJ C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

//Northwest Illinois C-Set
a2 = a2+1;
b2 = b2+1;
//Prelims
//Round 1
await newRank("HomewoodFlossmoorAV","WinnebagoAV",310,150);
await newRank("WilliamsBayAV","WilliamsBayCV",410,60);
await newRank("GlenbardWestAV","WilliamsBayBV",390,150);
await newRank("AuburnAV","ElginAV",410,170);
await newRank("AuburnBJV","WilliamsBayDJV",360,50);
await newRank("HomewoodFlossmoorBJV","WinnebagoBJV",270,130);
//Round 2
await newRank("ElginAV","WilliamsBayCV",340,100);
await newRank("AuburnAV","WinnebagoAV",400,140);
await newRank("GlenbardWestAV","WilliamsBayAV",420,110);
await newRank("HomewoodFlossmoorAV","WilliamsBayBV",340,110);
await newRank("AuburnBJV","HomewoodFlossmoorBJV",280,160);
await newRank("WinnebagoBJV","WilliamsBayDJV",180,90);
//Round 3
await newRank("AuburnAV","GlenbardWestAV",330,250);
await newRank("WinnebagoAV","WilliamsBayCV",300,120);
await newRank("ElginAV","WilliamsBayBV",330,130);
await newRank("WilliamsBayAV","HomewoodFlossmoorAV",290,240);
await newRank("AuburnBJV","WinnebagoBJV",430,60);
await newRank("HomewoodFlossmoorBJV","WilliamsBayDJV",330,20);
//Round 4
await newRank("GlenbardWestAV","WinnebagoAV",360,120);
await newRank("HomewoodFlossmoorAV","ElginAV",270,240);
await newRank("AuburnAV","WilliamsBayCV",440,70);
await newRank("WilliamsBayAV","WilliamsBayBV",290,110);
await newRank("HomewoodFlossmoorBJV","WinnebagoBJV",200,130);
await newRank("AuburnBJV","WilliamsBayDJV",350,60);
//Round5
await newRank("AuburnAV","WilliamsBayBV",430,80);
await newRank("HomewoodFlossmoorAV","WilliamsBayCV",320,70);
await newRank("GlenbardWestAV","ElginAV",241,240);
await newRank("WilliamsBayAV","WinnebagoAV",210,160);
await newRank("AuburnBJV","HomewoodFlossmoorBJV",290,90);
await newRank("WinnebagoBJV","WilliamsBayDJV",150,90);
//Round6
await newRank("GlenbardWestAV","WilliamsBayCV",320,80);
await newRank("AuburnAV","HomewoodFlossmoorAV",390,110);
await newRank("ElginAV","WilliamsBayAV",290,160);
await newRank("WinnebagoAV","WilliamsBayBV",170,120);
await newRank("AuburnBJV","WinnebagoBJV",290,90);
await newRank("HomewoodFlossmoorBJV","WilliamsBayDJV",150,60);
//Round 7
await newRank("GlenbardWestAV","HomewoodFlossmoorBJV",280,160);
await newRank("WilliamsBayBV","WilliamsBayCV",110,100);
await newRank("AuburnAV","WilliamsBayAV",320,150);
await newRank("ElginAV","WinnebagoAV",480,50);
//Varsity Playoffs
//Finals
await newRank("AuburnAV","GlenbardWestAV",250,240);
//4th Place Game
await newRank("HomewoodFlossmoorAV","WilliamsBayAV",260,120);
console.log("NW IL C q V: "+qV[a2]);
console.log("NW IL C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

//Louisiana Fall C-Set
a2 = a2+1;
//Prelims
//Round 1
await newRank("BatonRougeMagnetAV","NorthwesternAV",290,140);
await newRank("ZacharyAV","ZacharyBV",260,170);
await newRank("BatonRougeEpiscopalAV","ZacharyCV",290,110);
//Round 2
await newRank("ZacharyAV","NorthwesternAV",320,80);
await newRank("BatonRougeMagnetAV","ZacharyCV",350,60);
await newRank("ZacharyBV","BatonRougeEpiscopalAV",270,180);
//Round 3
await newRank("BatonRougeMagnetAV","ZacharyAV",280,220);
await newRank("ZacharyBV","ZacharyCV",280,130);
await newRank("BatonRougeEpiscopalAV","NorthwesternAV",290,140);
//Round 4
await newRank("BatonRougeMagnetAV","BatonRougeEpiscopalAV",310,180);
await newRank("ZacharyAV","ZacharyCV",330,70);
await newRank("ZacharyBV","NorthwesternAV",300,110);
//Round 5
await newRank("ZacharyBV","BatonRougeMagnetAV",240,190);
await newRank("BatonRougeEpiscopalAV","ZacharyAV",240,140);
await newRank("NorthwesternAV","ZacharyCV",220,150);
//Varsity Playoffs
//Semifinals
await newRank("ZacharyBV","ZacharyAV",200,140);
await newRank("BatonRougeEpiscopalAV","BatonRougeMagnetAV",210,190);
//Finals
await newRank("ZacharyBV","BatonRougeEpiscopalAV",210,160);
console.log("LA C q V: "+qV[a2]);
a = 0;
b = 0;
c = 0;

//Eastern Kentucky C-Set
a2 = a2+1;
//Prelims
//Round 1
await newRank("BlazerAV","RussellAV",340,160);
await newRank("JohnsonAV","JohnsonCV",410,70);
await newRank("DunbarAV","JohnsonBV",410,80);
//Round 2
await newRank("BlazerAV","DunbarAV",320,260);
await newRank("JohnsonBV","JohnsonCV",300,110);
await newRank("JohnsonAV","RussellAV",370,180);
//Round 3
await newRank("JohnsonAV","BlazerAV",370,190);
await newRank("RussellAV","JohnsonBV",250,200);
await newRank("DunbarAV","JohnsonCV",390,70);
//Round 4
await newRank("JohnsonAV","DunbarAV",380,140);
await newRank("BlazerAV","JohnsonBV",390,120);
await newRank("RussellAV","JohnsonCV",290,150);
//Round 5
await newRank("DunbarAV","RussellAV",250,190);
await newRank("JohnsonAV","JohnsonBV",350,90);
await newRank("BlazerAV","JohnsonCV",390,70);
//Varsity Playoffs
//Semifinals
await newRank("JohnsonAV","RussellAV",270,160);
await newRank("BlazerAV","DunbarAV",211,210);
//Finals
await newRank("BlazerAV","JohnsonAV",270,160);
console.log("East KY C q V: "+qV[a2]);
a = 0;
b = 0;
c = 0;

//Bergen County C-Set
a2 = a2+1;
b2 = b2+1;
//Prelims
//Round 1
await newRank("RidgewoodAV","GothamAV",410,210);
await newRank("ColdhugAV","LeoniaAV",470,160);
await newRank("TenaflyAV","TenaflyBV",430,100);
await newRank("ColdhugBJV","ChurchillNJBJV",290,280);
await newRank("TenaflyCJV","LeoniaBJV",310,200);
await newRank("RidgewoodDJV","GeorgeWashingtonAJV",270,160);
//Round 2
await newRank("RidgewoodAV","TenaflyBV",530,70);
await newRank("ColdhugAV","GothamAV",430,180);
await newRank("TenaflyAV","LeoniaAV",280,240);
await newRank("ChurchillMDAJV","RidgewoodCJV",280,240);
await newRank("TenaflyCJV","GeorgeWashingtonAJV",400,100);
await newRank("LeoniaBJV","RidgewoodDJV",220,210);
//Round 3
await newRank("RidgewoodAV","TenaflyAV",400,200);
await newRank("ColdhugAV","TenaflyBV",510,70);
await newRank("GothamAV","LeoniaAV",280,260);
await newRank("RidgewoodCJV","GeorgeWashingtonAJV",480,60);
await newRank("ColdhugBJV","LeoniaBJV",380,180);
await newRank("TenaflyCJV","RidgewoodDJV",400,160);
//Round 4
await newRank("RidgewoodAV","LeoniaAV",350,170);
await newRank("ColdhugAV","TenaflyAV",450,130);
await newRank("GothamAV","TenaflyBV",360,30);
await newRank("RidgewoodCJV","RidgewoodDJV",380,110);
await newRank("ColdhugBJV","TenaflyCJV",290,180);
await newRank("ChurchillMDAJV","LeoniaBJV",350,140);
//Round 5
await newRank("ColdhugAV","RidgewoodAV",400,220);
await newRank("TenaflyAV","GothamAV",300,260);
await newRank("LeoniaAV","TenaflyBV",350,130);
await newRank("RidgewoodCJV","ColdhugBJV",280,240);
await newRank("ChurchillMDAJV","RidgewoodDJV",370,80);
//Varsity Playoffs
//Semifinals
await newRank("ColdhugAV","GothamAV",440,100);
await newRank("RidgewoodAV","TenaflyAV",290,210);
//Finals
await newRank("ColdhugAV","RidgewoodAV",360,180);
//JV Playoffs
await newRank("RidgewoodCJV","ColdhugBJV",350,120);
await newRank("ChurchillMDAJV","TenaflyCJV",400,130);
//Finals
await newRank("RidgewoodCJV","ChurchillMDAJV",270,150);
console.log("Bergen C q V: "+qV[a2]);
console.log("Bergen C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

//Lower Hudson C-Set
a2 = a2+1;
b2 = b2+1;
//Prelims
//Round 1
await newRank("DarienAV","HoraceGreeleyAV",450,90);
await newRank("GreensFarmsAV","WhitePlainsAV",360,140);
await newRank("WiltonAlexAV","DaltonAV",320,230);
await newRank("IrvingtonAV","ArdsleyAV",370,160);
await newRank("WiltonLukasAJV","YonkersAJV",350,210);
await newRank("HoraceGreeleyBJV","GreensFarmsBJV",380,120);
await newRank("ScarsdaleAV","YonkersBJV",380,180);
//Round 2
await newRank("WiltonAlexAV","WhitePlainsAV",440,100);
await newRank("DaltonAV","HoraceGreeleyAV",330,130);
await newRank("GreensFarmsAV","ArdsleyAV",260,250);
await newRank("IrvingtonAV","ScarsdaleAV",290,250);
await newRank("YonkersBJV","GreensFarmsBJV",300,170);
await newRank("YonkersAJV","HoraceGreeleyBJV",350,170);
await newRank("DarienAV","WiltonLukasAJV",340,290);
//Round 3
await newRank("ScarsdaleAV","GreensFarmsAV",280,230);
await newRank("WiltonAlexAV","ArdsleyAV",460,100);
await newRank("DarienAV","IrvingtonAV",330,260);
await newRank("WhitePlainsAV","HoraceGreeleyAV",280,150);
await newRank("HoraceGreeleyBJV","WiltonLukasAJV",290,270);
await newRank("YonkersAJV","YonkersBJV",330,170);
await newRank("DaltonAV","GreensFarmsBJV",360,110);
//Round 4
await newRank("DarienAV","GreensFarmsAV",281,280);//Darien wins on TB
await newRank("DaltonAV","IrvingtonAV",310,270);
await newRank("WiltonAlexAV","ScarsdaleAV",360,200);
await newRank("ArdsleyAV","HoraceGreeleyAV",270,160);
await newRank("HoraceGreeleyBJV","YonkersBJV",370,190);
await newRank("WiltonLukasAJV","GreensFarmsBJV",470,90);
await newRank("YonkersAJV","WhitePlainsAV",420,150);
//Round 5
await newRank("ScarsdaleAV","HoraceGreeleyAV",450,60);
await newRank("IrvingtonAV","WhitePlainsAV",320,170);
await newRank("GreensFarmsAV","DaltonAV",310,170);
await newRank("DarienAV","WiltonAlexAV",320,290);
await newRank("WiltonLukasAJV","HoraceGreeleyBJV",310,180);
await newRank("YonkersAJV","GreensFarmsBJV",340,80);
await newRank("HoraceGreeleyBJV","ArdsleyAV",250,140);
//Varsity Playoffs
//Quarterfinals
await newRank("WiltonAlexAV","WhitePlainsAV",300,180);
await newRank("DarienAV","ArdsleyAV",310,180);
await newRank("DaltonAV","IrvingtonAV",230,210);
await newRank("ScarsdaleAV","GreensFarmsBJV",270,220);
//Semifinals
await newRank("ScarsdaleAV","WiltonAlexAV",260,240);
await newRank("DarienAV","DaltonAV",320,160);
//Finals
await newRank("DarienAV","ScarsdaleAV",260,230);
//JV Playoffs
//JV Semifinals
await newRank("WiltonLukasAJV","YonkersBJV",380,90);
await newRank("HoraceGreeleyBJV","YonkersAJV",270,200);
await newRank("WiltonLukasAJV","HoraceGreeleyBJV",210,190);
console.log("Lower Hudson C q V: "+qV[a2]);
console.log("Lower Hudson C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

//Delaware C-Set
a2 = a2+1;
b2 = b2+1;
//Prelims
//Round 1
await newRank("WilmingtonFriendsDV","CaravelBV",220,140);
await newRank("NewarkCharterCV","WilmingtonFriendsEV",260,240);
await newRank("MethactonAV","WilmingtonFriendsCV",460,80);
await newRank("WilmingtonFriendsAV","FriendsCentralAV",290,150);
await newRank("MethactonCJV","WilmingtonFriendsKJV",470,40);
await newRank("NewarkCharterAV","WilmingtonFriendsGV",360,90);
await newRank("WilmingtonFriendsFV","NewarkCharterBV",200,180);
await newRank("WilmingtonFriendsIJV","WilmingtonFriendsLJV",290,100);
await newRank("DickinsonAV","CaravelAV",280,100);
await newRank("WilmingtonFriendsHJV","WilmingtonFriendsMJV",350,70);
await newRank("TowerHillCJV","WilmingtonFriendsJJV",200,80);
await newRank("WilmingtonFriendsBV","TowerHillBV",270,190);
await newRank("TowerHillAV","MethactonBV",290,220);
//Round 2
await newRank("TowerHillAV","CaravelBV",340,80);
await newRank("GreatValleyAV","DickinsonAV",470,80);
await newRank("WilmingtonFriendsAV","NewarkCharterCV",240,200);
await newRank("MethactonBV","FriendsCentralAV",270,160);
await newRank("MethactonCJV","WilmingtonFriendsJJV",460,50);
await newRank("MethactonAV","WilmingtonFriendsFV",390,70);
await newRank("WilmingtonFriendsIJV","WilmingtonFriendsMJV",290,150);
await newRank("TowerHillBV","WilmingtonFriendsCV",210,140);
await newRank("NewarkCharterAV","WilmingtonFriendsEV",250,180);
await newRank("WilmingtonFriendsHJV","WilmingtonFriendsLJV",300,130);
await newRank("TowerHillCJV","WilmingtonFriendsKJV",250,90);
await newRank("WilmingtonFriendsDV","WilmingtonFriendsGV",160,130);
await newRank("WilmingtonFriendsBV","CaravelAV",250,110);
//Round 3
await newRank("GreatValleyAV","WilmingtonFriendsFV",480,30);
await newRank("NewarkCharterCV","WilmingtonFriendsGV",330,90);
await newRank("NewarkCharterAV","CaravelBV",320,30);
await newRank("TowerHillAV","WilmingtonFriendsAV",370,150);
await newRank("WilmingtonFriendsIJV","WilmingtonFriendsJJV",180,170);
await newRank("MethactonBV","WilmingtonFriendsDV",390,90);
await newRank("DickinsonAV","TowerHillBV",230,150);
await newRank("WilmingtonFriendsHJV","WilmingtonFriendsKJV",420,60);
await newRank("MethactonCJV","TowerHillCJV",430,80);
await newRank("MethactonAV","WilmingtonFriendsBV",350,170);
await newRank("NewarkCharterBV","WilmingtonFriendsCV",240,110);
await newRank("NewarkCharterBV","WilmingtonFriendsCV",240,110);
await newRank("FriendsCentralAV","WilmingtonFriendsEV",250,170);
//Round 4
await newRank("WilmingtonFriendsMJV","WilmingtonFriendsJJV",190,40);
await newRank("WilmingtonFriendsLJV","WilmingtonFriendsKJV",140,70);
await newRank("GreatValleyAV","WilmingtonFriendsBV",470,90);
await newRank("WilmingtonFriendsEV","WilmingtonFriendsDV",190,180);
await newRank("TowerHillAV","WilmingtonFriendsGV",440,30);
await newRank("MethactonBV","NewarkCharterCV",380,190);
await newRank("WilmingtonFriendsHJV","TowerHillCJV",360,70);
await newRank("FriendsCentralAV","CaravelBV",280,110);
await newRank("DickinsonAV","NewarkCharterBV",200,160);
await newRank("MethactonCJV","WilmingtonFriendsIJV",450,70);
await newRank("NewarkCharterAV","WilmingtonFriendsAV",300,200);
await newRank("TowerHillBV","WilmingtonFriendsFV",250,150);
await newRank("CaravelAV","WilmingtonFriendsCV",140,100);
//Round 5
await newRank("WilmingtonFriendsJJV","WilmingtonFriendsKJV",180,60);
await newRank("MethactonCJV","WilmingtonFriendsMJV",400,60);
await newRank("CaravelAV","WilmingtonFriendsFV",190,10);
await newRank("WilmingtonFriendsBV","NewarkCharterBV",170,100);
await newRank("NewarkCharterCV","CaravelBV",250,80);
await newRank("FriendsCentralAV","WilmingtonFriendsGV",240,100);
await newRank("WilmingtonFriendsHJV","WilmingtonFriendsIJV",350,80);
await newRank("WilmingtonFriendsAV","WilmingtonFriendsDV",210,100);
await newRank("TowerHillCJV","WilmingtonFriendsLJV",220,90);
await newRank("TowerHillAV","WilmingtonFriendsEV",280,130);
await newRank("MethactonAV","NewarkCharterAV",280,120);
await newRank("GreatValleyAV","WilmingtonFriendsCV",580,0);
//Varsity Playoffs
//Quarterfinals
await newRank("NewarkCharterAV","MethactonBV",280,180);
//await newRank("MethactonAV","WilmingtonFriendsAV",1,0);
await newRank("GreatValleyAV","FriendsCentralAV",420,80);
await newRank("TowerHillAV","NewarkCharterCV",280,140);
//Semifinals
await newRank("GreatValleyAV","NewarkCharterAV",330,160);
await newRank("MethactonAV","TowerHillAV",390,100);
//Finals
await newRank("GreatValleyAV","MethactonAV",370,160);
//JV Playoffs
//Semifinals
await newRank("MethactonCJV","WilmingtonFriendsIJV",400,50);
await newRank("WilmingtonFriendsHJV","TowerHillCJV",280,60);
//Finals
await newRank("MethactonCJV","WilmingtonFriendsHJV",340,110);
console.log("Delaware C q V: "+qV[a2]);
console.log("Delaware C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

//Florida Panhandle C-Set
a2 = a2+1;
b2 = b2+1;
//Prelims
//Round 1
await newRank("ChoctawhatcheeAV","WashingtonAV",280,140);
await newRank("TateAV","WashingtonBV",310,60);
await newRank("RansomGJV","RansomFJV",81,80);
//Round 2
await newRank("CollegiateAV","TateAV",400,180);
await newRank("WashingtonAV","WashingtonBV",250,100);
await newRank("RansomFJV","RansomEJV",100,80);
//Round 3
await newRank("CollegiateAV","WashingtonAV",360,120);
await newRank("ChoctawhatcheeAV","WashingtonBV",390,20);
await newRank("RansomGJV","RansomEJV",140,70);
//Round 4
await newRank("TateAV","ChoctawhatcheeAV",290,220);
await newRank("CollegiateAV","WashingtonBV",460,60);
await newRank("RansomGJV","RansomEJV",80,40);
//Round 5
await newRank("TateAV","WashingtonAV",210,80);
await newRank("CollegiateAV","ChoctawhatcheeAV",460,110);
await newRank("RansomEJV","RansomFJV",70,50);
//Round 6
await newRank("RansomGJV","RansomFJV",80,40);
//Varsity Playoofs
//Varsity Semifinals
await newRank("CollegiateAV","WashingtonAV",390,50);
await newRank("ChoctawhatcheeAV","TateAV",221,220);
//Varsity Finals
await newRank("CollegiateAV","ChoctawhatcheeAV",420,120);
console.log("FL Panhandle C q V: "+qV[a2]);
console.log("FL Panhandle C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;


//Southwestern Illinois C-Set
a2 = a2+1;
b2 = b2+1;
//Round 1
await newRank("LindseyAV","GraniteCityAV",400,130);
await newRank("AltonAV","SouthwesternAV",360,140);
await newRank("KeithCountyDayAJV","SouthwesternCJV",330,130);
await newRank("RochesterAJV","SouthwesternBJV",260,180);
//Round 2
await newRank("GraniteCityAV","SouthwesternAV",320,110);
await newRank("AltonAV","LindseyAV",340,260);
await newRank("RochesterAJV","SouthwesternCJV",240,200);
await newRank("KeithCountyDayAJV","SouthwesternBJV",250,200);
//Round 3
await newRank("AltonAV","GraniteCityAV",380,140);
await newRank("LindseyAV","SouthwesternAV",410,90);
await newRank("SouthwesternBJV","SouthwesternCJV",320,150);
await newRank("RochesterAJV","KeithCountyDayAJV",310,150);
//Round 4
await newRank("LindseyAV","SouthwesternAV",480,60);
await newRank("AltonAV","GraniteCityAV",370,180);
await newRank("KeithCountyDayAJV","RochesterAJV",260,160);
await newRank("SouthwesternBJV","SouthwesternCJV",240,100);
//Round 5
await newRank("GraniteCityAV","SouthwesternAV",240,100);
await newRank("LindseyAV","AltonAV",310,190);
await newRank("KeithCountyDayAJV","SouthwesternBJV",310,180);
await newRank("RochesterAJV","SouthwesternCJV",260,120);
//Round 6
await newRank("LindseyAV","GraniteCityAV",410,110);
await newRank("AltonAV","SouthwesternAV",310,70);
await newRank("RochesterAJV","SouthwesternBJV",280,150);
await newRank("KeithCountyDayAJV","SouthwesternCJV",250,100);
//Varsity Playoffs
//Varsity Final
await newRank("LindseyAV","AltonAV",280,200);
//JV Playoffs
//JV Final
await newRank("KeithCountyDayAJV","RochesterAJV",210,150);
console.log("SW IL C q V: "+qV[a2]);
console.log("SW IL C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

//Western Pennsylvania C-Set
a2 = a2+1;
b2 = b2+1;
c2 = c2+1;
//Prelims
//Round 1
await newRank("KiskiAV","AllderdiceBV",450,70);
await newRank("NorthmontAV","SaegertownAV",480,80);
await newRank("NAlleghenyHSAV","NCatholicAV",261,260);
await newRank("AllderdiceAV","SouthSideAV",400,30);
await newRank("NAlleghenyIntAJV","SouthSideBJV",270,220);
await newRank("AlagarAJV","NAlleghenyIntBJV",250,220);
//Round 2
await newRank("NorthmontAV","AllderdiceBV",470,80);
await newRank("KiskiAV","SaegertownAV",480,70);
await newRank("NCatholicAV","AllderdiceAV",310,200);
await newRank("NAlleghenyHSAV","SouthSideAV",280,70);
await newRank("SouthSideBJV","AlagarAJV",300,190);
await newRank("NAlleghenyIntAJV","NAlleghenyIntBJV",340,130);
//Round 3
await newRank("AllderdiceBV","SouthSideAV",260,80);
await newRank("KiskiAV","NAlleghenyHSAV",280,240);
await newRank("NCatholicAV","AllderdiceAV",300,160);
await newRank("NorthmontAV","SaegertownAV",480,80);
await newRank("SouthSideBJV","NAlleghenyIntBJV",250,160);
await newRank("NAlleghenyIntAJV","AlagarAJV",320,210);
//Round 4
await newRank("NCatholicAV","SaegertownAV",300,110);
await newRank("KiskiAV","AllderdiceBV",370,120);
await newRank("NAlleghenyHSAV","SouthSideAV",370,80);
await newRank("NorthmontAV","AllderdiceAV",440,80);
await newRank("SouthSideBJV","AlagarAJV",220,210);
await newRank("NAlleghenyIntAJV","NAlleghenyIntBJV",390,150);
//Round 5
await newRank("SaegertownAV","SouthSideAV",161,160);
await newRank("KiskiAV","AllderdiceAV",370,150);
await newRank("NCatholicAV","AllderdiceBV",240,110);
await newRank("NorthmontAV","NAlleghenyHSAV",420,110);
await newRank("AlagarAJV","NAlleghenyIntBJV",230,140);
await newRank("NAlleghenyIntAJV","SouthSideBJV",270,160);
//Round 6
await newRank("NAlleghenyIntAJV","AlagarAJV",270,150);
await newRank("SouthSideBJV","NAlleghenyIntBJV",270,90);
//Varsity Playoffs
//Varsity Semifinals
await newRank("NorthmontAV","NAlleghenyHSAV",350,90);
await newRank("KiskiAV","NCatholicAV",270,130);
//Varsity Finals
await newRank("NorthmontAV","KiskiAV",310,230);
//JV PLayoffs
//JV Finals
await newRank("NAlleghenyIntAJV","SouthSideBJV",270,140);
console.log("W PA C q V: "+qV[a2]);
console.log("W PA C q JV: "+qJV[b2]);
a = 0;
b = 0;
c = 0;

/*
//Mississippi Winter
z=z+1;
//Prelims
console.log("Miss C q V: "+qV[z]);
console.log("Miss C q JV: "+qJV[z]);
console.log("Misss C q MS: "+qMS[z]);
a = 0;
b = 0;
c = 0;*/
};
cSet();


/*
db.collection("teams").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        (`${doc.id} => ${doc.data()}`);
    });
});*/
