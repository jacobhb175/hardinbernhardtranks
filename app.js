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
db.collection("teams").doc("rookwoodAV").set({
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
    state:"New Jersey",
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
    state:"Massachusetts",
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
db.collection("teams").doc("tevensonCV").set({
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
db.collection("teams").doc("ChurchillIAJV").set({
    name:"Churchill I A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("ChurchillIBJV").set({
    name:"Churchill I B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200
}),
db.collection("teams").doc("ChurchillIIAJV").set({
    name:"Churchill II A",
    state:"New Jersey",
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
    state:"Massachusetts",
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
db.collection("teams").doc("vTeslaAJV").set({
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

//calculate and update rank
async function nRank(A,B,AScore,BScore){
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
                    console.log("rankAB",rankA,rankB);
                    //update rank
                    db.collection("teams").doc(A).update({rank:rankA})
                    db.collection("teams").doc(B).update({rank:rankB})
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


//Northern California Fall C-Set
K = 100;
//Prelims
//Round 1
newRank("MissionSanJoseJV","SaratogaEJV",450,70);
newRank("HomesteadAJV","MountainViewAJV",390,130);
newRank("SaggitariusAJV","SantaClaraAJV",390,180);
newRank("SaratogaDJV","CaliforniaAJV",340,210);
newRank("HarkerAJV","EriksenBJV",370,150);
newRank("AlmadenMSA","JLSMSA",360,200);
newRank("LynbrookAV","LesQuizAV",450,90);
newRank("PiedmontHillsAV","SaratogaCV",280,230);
newRank("GundersonAV","EriksenAV",300,280);
newRank("SaratogaAV","FoothillAV",440,190);
newRank("PioneersAV","SaratogaBV",350,290);
//Round 2
newRank("LynbrookAV","SaratogaCV",490,80);
newRank("PioneersAV","GundersonAV",430,210);
newRank("FoothillAV","PiedmontHillsAV",310,300);
newRank("HomesteadAJV","SaratogaEJV",300,150);
newRank("SantaClaraAJV","HarkerAJV",320,250);
newRank("MissionSanJoseJV","SaratogaDJV",330,270);
newRank("SaggitariusAJV","MountainViewAJV",370,170);
newRank("CaliforniaAJV","EriksenBJV",400,130);
newRank("SaratogaBV","EriksenAV",340,310);
newRank("SaratogaAV","LesQuizAV",540,90);
newRank("AlmadenMSA","HarvestParkMSA",320,270);
//Round 3
newRank("SaratogaDJV","HomesteadAJV",330,210);
newRank("SaggitariusAJV","SaratogaEJV",400,160);
newRank("SantaClaraAJV","CaliforniaAJV",270,240);
newRank("SaratogaCV","LesQuizAV",280,230);
newRank("SaratogaAV","SaratogaBV",360,220);
newRank("EriksenAV","PiedmontHillsAV",370,180);
newRank("PioneersAV","LynbrookAV",370,210);
newRank("GundersonAV","FoothillAV",260,240);
newRank("MissionSanJoseJV","EriksenBJV",400,100);
newRank("HarkerAJV","MountainViewAJV",360,120);
newRank("JLSMSA","HarvestParkMSA",260,220);
//Round 4
newRank("SaratogaAV","GundersonAV",350,170);
newRank("MissionSanJoseJV","SantaClaraAJV",340,240);
newRank("PioneersAV","LesQuizAV",560,50)
newRank("LynbrookAV","FoothillAV",390,200);
newRank("HomesteadAJV","EriksenBJV",400,80);
newRank("SaratogaBV","PiedmontHillsAV",440,140);
newRank("CaliforniaAJV","MountainViewAJV",420,80);
newRank("EriksenAV","SaratogaCV",440,150);
newRank("AlmadenMSA","JLSMSA",410,160);
newRank("HarkerAJV","SaratogaEJV",320,170);
newRank("SaggitariusAJV","SaratogaDJV",330,180);
//Round 5
newRank("FoothillAV","LesQuizAV",380,130);
newRank("SaratogaBV","GundersonAV",290,280);
newRank("SaratogaAV","EriksenAV",320,290);
newRank("CaliforniaAJV","SaratogaEJV",320,140);
newRank("PioneersAV","SaratogaCV",490,110);
newRank("LynbrookAV","PiedmontHillsAV",390,180);
newRank("SaggitariusAJV","EriksenBJV",440,90);
newRank("MissionSanJoseJV","MountainViewAJV",270,150);
newRank("AlmadenMSA","HarvestParkMSA",390,230);
newRank("SaratogaDJV","HarkerAJV",300,180);
newRank("SantaClaraAJV","HomesteadAJV",300,170);
//Round 6
newRank("HarvestParkMSA","JLSMSA",270,150)
//Varsity Playoffs
//Semifinals
newRank("PioneersAV","SaratogaBV",370,210);
newRank("SaratogaAV","LynbrookAV",390,170);
//Finals
newRank("PioneersAV","SaratogaAV",360,230);
//JV Playoffs
//Semifinals
newRank("SaggitariusAJV","HarkerAJV",310,170);
newRank("MissionSanJoseJV","CaliforniaAJV",250,220);
//Finals
newRank("MissionSanJoseJV","SaggitariusAJV",280,210);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

/*
//Eastern Washington C-Set
//Prelims
//Round 1
newRank("GonzagaAV","MtSpokaneAV",300,180);
newRank("StGeorgesAV","FrenchtownAV",250,140);
newRank("EastValleyAV","FrenchtownBV",370,70);
newRank("MtSpokaneBV","EastValleyBV",330,100);
newRank("LibbyAJV","EastValleyCJV",300,70);
newRank("MtSpokaneCJV","MtSpokaneDJV",260,130);
//Round 2
newRank("MtSpokaneAV","FrenchtownAV",320,60);
newRank("StGeorgesAV","MtSpokaneBV",200,180);
newRank("GonzagaAV","FrenchtownBV",350,70);
newRank("EastValleyBV","EastValleyAV",190,180);
newRank("MtSpokaneDJV","EastValleyCJV",170,140);
newRank("LibbyAJV","MtSpokaneCJV",220,130);
//Round 3
newRank("MtSpokaneBV","MtSpokaneAV",240,210);
newRank("FrenchtownAV","FrenchtownBV",250,90);
newRank("GonzagaAV","EastValleyBV",340,120);
newRank("StGeorgesAV","EastValleyAV",310,100);
newRank("MtSpokaneCJV","EastValleyCJV",210,100);
newRank("LibbyAJV","MtSpokaneDJV",240,110);
//Round 4
newRank("MtSpokaneBV","FrenchtownBV",410,40);
newRank("EastValleyAV","MtSpokaneAV",250,210);
newRank("EastValleyBV","FrenchtownAV",220,150);
newRank("GonzagaAV","StGeorgesAV",340,180);
newRank("LibbyAJV","MtSpokaneDJV",220,80);
newRank("MtSpokaneCJV"," EastValleyCJV",150,110);
//Round 5
newRank("MtSpokaneBV","EastValleyAV",240,160);
newRank("StGeorgesAV","EastValleyBV",200,150);
newRank("MtSpokaneAV","FrenchtownBV",290,60);
newRank("GonzagaAV","FrenchtownAV",280,70);
newRank("LibbyAJV","MtSpokaneCJV",290,50);
newRank("MtSpokaneDJV","EastValleyCJV",140,100);
//Round 6
newRank("LibbyAJV","EastValleyCJV",180,70);
newRank("MtSpokaneDJV","MtSpokaneCJV",120,110);
//Varsity Playoffs
//Quarterfinals
newRank("GonzagaAV","FrenchtownBV",340,80);
newRank("MtSpokaneAV","EastValleyAV",231,230);
newRank("StGeorgesAV","EastValleyBV",210,100);
newRank("MtSpokaneBV","FrenchtownAV",230,90);
//Semifinals
newRank("MtSpokaneBV","StGeorgesAV",200,160);
newRank("GonzagaAV","MtSpokaneAV",320,120);
//Finals
newRank("GonzagaAV","MtSpokaneBV",260,70)
//JV Playoffs
//Semifinals
newRank("LibbyAJV","EastValleyCJV",210,100);
newRank("MtSpokaneCJV","MtSpokaneDJV",140,90);
//Finals
//newRank("newRank("LibbyAJV","MtSpokaneCJV",1,0);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Central Georgia Fall C-Set
//Prelims
//Round 1
newRank("StarrsMillAV","StarrsMillBV",440,90);
newRank("CreeksideAV","StarrsMillCV",190,170);
newRank("ChambleeAJV","VeteransAV",270,220);
newRank("OakMountainAV","StarrsMillDV",300,140);
newRank("StarrsMillEV","VeteransBJV",240,120);
//Round 2
newRank("OakMountainAV","StarrsMillEV",340,90);
newRank("ChambleeAJV","StarrsMillCV",340,60);
newRank("CreeksideAV","VeteransBJV",160,150);
newRank("StarrsMillAV","StarrsMillDV",430,90);
newRank("StarrsMillBV","VeteransAV",240,200);
//Round 3
newRank("VeteransAV","StarrsMillEV",310,140);
newRank("OakMountainAV","ChambleeAJV",250,220);
newRank("StarrsMillCV","StarrsMillDV",210,180);
newRank("StarrsMillBV","VeteransBJV",370,80);
newRank("StarrsMillAV","CreeksideAV",390,100);
//Round 4
newRank("OakMountainAV","StarrsMillBV",210,150);
newRank("StarrsMillAV","ChambleeAJV",390,170);
newRank("VeteransAV","CreeksideAV",310,40);
newRank("StarrsMillDV","VeteransBJV",290,90);
newRank("StarrsMillCV","StarrsMillEV",210,150);
//Round 5
newRank("StarrsMillBV","StarrsMillCV",340,80);
newRank("VeteransAV","StarrsMillDV",240,180);
newRank("OakMountainAV","CreeksideAV",320,40);
newRank("ChambleeAJV","VeteransBJV",280,40);
newRank("StarrsMillAV","StarrsMillEV",390,80);
//Varsity Playoffs
//Semifinals
newRank("StarrsMillAV","StarrsMillBV",380,100);
newRank("OakMountainAV","VeteransAV",260,140);
//Finals
newRank("StarrsMillAV","OakMountainAV",260,150);
//JV Playoffs
//Finals
newRank("ChambleeAJV","VeteransBJV",250,40);//Chamblee Charter
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Montana C-Set
//Prelims
//Round 1
newRank("BillingsSeniorAV","SkyviewBV",250,200);
newRank("BozemanBV","BillingsWestAV",300,140);
newRank("BozemanAV","SkyviewCV",230,80);
newRank("BillingsWestBV","RiversideAV",140,130);
newRank("SkyviewAV","SkyviewDJV",430,50);
newRank("BillingsSeniorBJV","ParkCityBJV",150,80);
newRank("BozemanCJV","ParkCityAJV",260,80);
//Round 2
newRank("BozemanAV","RiversideAV",240,90);
newRank("SkyviewAV","BillingsSeniorAV",250,190);
newRank("BillingsWestAV","BillingsWestBV",210,110);
newRank("SkyviewBV","SkyviewCV",300,80);
newRank("BozemanBV","BozemanCJV",250,90);
newRank("BillingsSeniorBJV","ParkCityAJV",190,30);
newRank("SkyviewDJV","ParkCityBJV",190,110);
//Round 3
newRank("BozemanBV","SkyviewCV",340,50);
newRank("SkyviewAV","RiversideAV",360,70);
newRank("BillingsSeniorAV","BillingsWestBV",380,70);
newRank("BillingsWestAV","SkyviewDJV",240,180);
newRank("BozemanAV","ParkCityBJV",340,100);
newRank("SkyviewDJV","ParkCityAJV",310,60);
newRank("BozemanCJV","BillingsSeniorBJV",250,30);
//Round 4
newRank("SkyviewAV","BillingsWestAV",380,80);
newRank("BillingsWestBV","SkyviewCV",110,100);
newRank("BozemanBV","RiversideAV",340,40);
newRank("BillingsSeniorAV","BozemanAV",240,170);
newRank("SkyviewBV","BillingsSeniorBJV",210,90);
newRank("BozemanCJV","SkyviewDJV",140,110);
newRank("ParkCityBJV","ParkCityAJV",120,50);
//Round 5
newRank("SkyviewBV","RiversideAV",170,70);
newRank("BozemanBV","BillingsSeniorAV",220,150);
newRank("BillingsWestAV","BozemanAV",180,170);
newRank("SkyviewAV","SkyviewCV",310,50);
newRank("BillingsWestBV","ParkCityAJV",120,60);
newRank("BozemanCJV","ParkCityBJV",190,40);
newRank("SkyviewDJV","BillingsSeniorBJV",150,90);
//Varsity Playoffs
//Semifinals
newRank("BozemanBV","BillingsSeniorAV",260,110);
newRank("SkyviewAV","SkyviewBV",350,70);
//Finals
newRank("SkyviewAV","BozemanBV",240,90);
//JV Playoffs
//Finals
newRank("BozemanCJV","SkyviewDJV",110,80);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//West Virginia Fall C-Set
//Prelims
//Round 1
newRank("PocaAV","CharlestonBV",280,170);
newRank("CharlestonAV","PocaBV",430,10);
newRank("GeorgeWashingtonBV","NitroBV",280,140);
newRank("StAlbansAV","NitroAV",260,200);
newRank("JohnAdamsAJV","CharlestonCJV",310,70);
newRank("MorgantownAJV","CharlestonDJV",240,110);
//Round 2
newRank("StAlbansAV","PocaBV",290,110);
newRank("GeorgeWashingtonBV","PocaAV",280,180);
newRank("CharlestonBV","NitroBV",240,160);
newRank("CharlestonAV","NitroAV",260,220);
newRank("CharlestonDJV","CharlestonCJV",170,130);
newRank("MorgantownAJV","JohnAdamsAJV",260,160);
//Round 3
newRank("GeorgeWashingtonBV","PocaBV",410,20);
newRank("StAlbansAV","CharlestonBV",240,170);
newRank("NitroAV","PocaAV",290,180);
newRank("CharlestonAV","NitroBV",330,160);
newRank("JohnAdamsAJV","CharlestonDJV",290,100);
newRank("MorgantownAJV","CharlestonCJV",280,110);
//Round 4
newRank("PocaAV","NitroBV",220,170);
newRank("GeorgeWashingtonBV","CharlestonBV",300,140);
newRank("CharlestonAV","StAlbansAV",350,90);
newRank("NitroAV","PocaBV",360,10);
newRank("JohnAdamsAJV","CharlestonDJV",200,160);
newRank("MorgantownAJV","CharlestonCJV",220,130);
//Round 5
newRank("NitroBV","PocaBV",220,50);
newRank("CharlestonBV","NitroAV",240,120);
newRank("CharlestonAV","GeorgeWashingtonBV",250,150);
newRank("StAlbansAV","PocaAV",230,140);
newRank("CharlestonDJV","CharlestonCJV",200,80);
newRank("MorgantownAJV","JohnAdamsAJV",240,130);
//Round 6
newRank("JohnAdamsAJV","CharlestonCJV",260,80);
newRank("MorgantownAJV","CharlestonDJV",200,60);
//Varsity Playoffs
//Semifinals
newRank("CharlestonAV","NitroAV",230,110);
newRank("StAlbansAV","GeorgeWashingtonBV",190,110);
//Finals
newRank("CharlestonAV","StAlbansAV",240,130);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Northern New Jersey C-Set
//Prelims
//Round 1
newRank("MillburnAV","StPetersAV",550,70);
newRank("StJosephAV","ParamusAV",300,180);
newRank("MillburnBV","StuyvesantAV",280,250);
newRank("NewarkAV","HewlettBV",270,240);
newRank("OratoryAV","MillburnCV",310,280);
newRank("MountainLakesAV","StPetersBV",410,60);
newRank("HewlettAV","HolmdelAV",400,100);
newRank("KinnelonAJV","StPetersCJV",300,170);
newRank("HewlettCJV","ChurchillIBJV",310,200);
newRank("ChurchillIAJV","SouthBrunswickAJV",490,90);
newRank("StJosephBJV","BASISBrooklynAJV",200,180);
newRank("HunterBJV","HolmdelBJV",470,120);
newRank("MillburnDJV","MountainLakesBJV",390,160);
newRank("TenaflyMSB","IndianFieldsMSA",130,100);
newRank("TenaflyMSC","BRIGHTMSA",130,100);
//Round 2
newRank("HewlettBV","ParamusAV",250,170);
newRank("MountainLakesAV","NewarkAV",280,210);
newRank("HunterAV","StuyvesantAV",450,120);
newRank("MillburnCV","HolmdelAV",520,80);
newRank("MillburnBV","HewlettAV",320,250);
newRank("OratoryAV","StPetersBV",390,60);
newRank("KinnelonAJV","StJosephBJV",260,150);
newRank("MillburnAV","StJosephAV",510,110);
newRank("HolmdelBJV","StPetersCJV",340,140);
newRank("ChurchillIAJV","BASISBrooklynAJV",550,80);
newRank("MountainLakesBJV","ChurchillIBJV",370,70);
newRank("HunterBJV","MillburnDJV",410,180);
newRank("HewlettCJV","SouthBrunswickAJV",240,200);
newRank("TenaflyMSA","TenaflyMSB",400,60);
newRank("IndianFieldsMSA","BRIGHTMSA",130,80);
//Round 3
newRank("MillburnCV","StPetersBV",450,100);
newRank("MountainLakesAV","ParamusAV",280,180);
newRank("StuyvesantAV","StPetersAV",360,130);
newRank("OratoryAV","NewarkAV",370,170);
newRank("HunterBJV","ChurchillIBJV",530,60);
newRank("MillburnBV","HolmdelAV",430,80);
newRank("HunterAV","HewlettAV",370,180);
newRank("MillburnAV","HewlettBV",470,100);
newRank("ChurchillIAJV","KinnelonAJV",430,90);
newRank("HewlettCJV","BASISBrooklynAJV",360,90);
newRank("HolmdelBJV","StJosephBJV",360,130);
newRank("MillburnDJV","StPetersCJV",360,200);
newRank("MountainLakesBJV","SouthBrunswickAJV",290,150);
newRank("TenaflyMSA","TenaflyMSC",410,10);
newRank("TenaflyMSB","BRIGHTMSA",290,40);
//Round 4
newRank("StuyvesantAV","StJosephAV",340,140);
newRank("OratoryAV","ParamusAV",500,100);
newRank("HunterAV","MillburnCV",410,230);
newRank("MillburnAV","MountainLakesAV",540,70);
newRank("HewlettAV","StPetersAV",400,90);
newRank("NewarkAV","HolmdelAV",340,150);
newRank("MillburnBV","StPetersBV",460,80);
newRank("ChurchillIAJV","HolmdelBJV",380,210);
newRank("HunterBJV","SouthBrunswickAJV",480,100);
newRank("MillburnDJV","StJosephBJV",420,90);
newRank("StPetersCJV","ChurchillIBJV",240,130);
newRank("MountainLakesBJV","BASISBrooklynAJV",320,50);
newRank("KinnelonAJV","HewlettCJV",240,210);
newRank("TenaflyMSC","IndianFieldsMSA",110,60);
newRank("TenaflyMSA","BRIGHTMSA",380,20);
//Round 5
newRank("MillburnAV","OratoryAV",490,130);
newRank("StuyvesantAV","HewlettBV",380,110);
newRank("ParamusAV","HolmdelAV",190,180);
newRank("HunterAV","StPetersBV",450,40);
newRank("MillburnBV","NewarkAV",320,190);
newRank("MillburnCV","StPetersAV",460,80);
newRank("HewlettAV","StJosephAV",330,180);
newRank("SouthBrunswickAJV","StPetersCJV",240,160);
newRank("HunterBJV","BASISBrooklynAJV",440,70);
newRank("ChurchillIBJV","StJosephBJV",170,90);
newRank("MountainLakesBJV","KinnelonAJV",190,180);
newRank("ChurchillIAJV","MillburnDJV",370,210);
newRank("HolmdelBJV","HewlettCJV",240,180);
newRank("TenaflyMSA","IndianFieldsMSA",250,50);
newRank("TenaflyMSB","TenaflyMSC",190,60);
//Varsity Playoffs
//Octofinals
newRank("OratoryAV","ParamusAV",310,160);
newRank("HewlettBV","HewlettAV",221,220);
newRank("StuyvesantAV","StJosephAV",270,150);
newRank("MountainLakesAV","NewarkAV",220,210);
//Quarterfinals
newRank("MillburnAV","MountainLakesAV",420,90);
newRank("HunterAV","StuyvesantAV",410,140);
newRank("MillburnCV","HewlettBV",330,110);
newRank("MillburnBV","OratoryAV",240,230);
//Semifinals
newRank("MillburnAV","MillburnBV",400,120);
newRank("HunterAV","MillburnCV",300,210);
//Finals
newRank("MillburnAV","HunterAV",280,260);
//JV Playoffs
//Quarterfinals
newRank("HunterBJV","StPetersCJV",500,40);
newRank("ChurchillIAJV","KinnelonAJV",350,110);
newRank("HolmdelBJV","MountainLakesBJV",290,140);
newRank("MillburnDJV","HewlettCJV",300,140);
//Semifinals
newRank("HunterBJV","MillburnDJV",360,170);
newRank("ChurchillIAJV","HolmdelBJV",350,170);
//Finals
newRank("HunterBJV","ChurchillIAJV",290,260);
//MS Playoffs
//Semifinals
//newRank("TenaflyMSA","IndianFieldsMSA",1,0)
newRank("TenaflyMSB","TenaflyMSC",160,20);
//Finals
newRank("TenaflyMSA","TenaflyMSB",200,90);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Northern Illinois C-Set
//Prelims
//Round 1
newRank("StevensonAV","StevensonCV",340,300);
newRank("BarringtonAV","BarringtonBV",490,90);
newRank("SandburgAV","MarmionAV",320,230);
newRank("StevensonBV","HinsdaleAV",350,210);
newRank("StevensonEJV","StevensonFJV",400,120);
newRank("StevensonDJV","AptakisicAJV",360,150);
//Round 2
newRank("MarmionAV","BarringtonBV",360,180);
newRank("HinsdaleAV","SandburgAV",300,290);
newRank("StevensonAV"," StevensonBV",470,170);
newRank("StevensonCV","BarringtonAV",340,330);
newRank("StevensonFJV","AptakisicAJV",270,160);
newRank("StevensonEJV","SandburgBJV",470,140);
//Round 3
newRank("StevensonAV","MarmionAV",460,180);
newRank("StevensonCV","SandburgAV",420,160);
newRank("HinsdaleAV","BarringtonBV",450,120);
newRank("StevensonBV","BarringtonAV",280,260);
newRank("SandburgBJV","StevensonFJV",340,160);
newRank("StevensonEJV","StevensonDJV",370,220);
//Round 4
newRank("SandburgAV","BarringtonAV",350,280);
newRank("StevensonAV","BarringtonBV",530,40);
newRank("StevensonCV","StevensonBV",380,230);
newRank("HinsdaleAV","MarmionAV",400,190);
newRank("SandburgBJV","AptakisicAJV",310,180);
newRank("StevensonDJV","StevensonFJV",430,100);
//Round 5
newRank("StevensonBV","BarringtonBV",390,140);
newRank("BarringtonAV","HinsdaleAV",320,270);
newRank("StevensonCV","MarmionAV",510,130);
newRank("StevensonAV","SandburgAV",440,160);
newRank("StevensonDJV","SandburgBJV",380,160);
newRank("StevensonEJV","AptakisicAJV",360,140);
//Round 6
newRank("StevensonAV","HinsdaleAV",410,200);
newRank("BarringtonAV","MarmionAV",380,200);
newRank("StevensonCV","BarringtonBV",520,60);
newRank("SandburgAV","SandburgBJV",270,240);
//Round 7
newRank("StevensonBV","MarmionAV",340,170);
newRank("SandburgAV","BarringtonBV",370,70);
newRank("StevensonAV","BarringtonAV",320,240);
newRank("StevensonCV","HinsdaleAV",410,130);
//Varsity Playoffs
//Finals
newRank("StevensonAV","StevensonCV",390,210);
//JV Playoffs
//Finals
newRank("StevensonEJV","StevensonDJV",290,220);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Greater Dayton C-Set
//Prelims
//Round 1
newRank("TippecanoeAV","TippecanoeBJV",300,60);
newRank("GeorgeWashingtonAV","BeavercreekCJV",530,70);
newRank("BeavercreekAV","BeavercreekBV",520,90);
//Round 2
newRank("BeavercreekBV","TippecanoeBJV",310,80);
newRank("GeorgeWashingtonAV","TippecanoeAV",460,140);
newRank("BeavercreekAV","BeavercreekCJV",590,60);
//Round 3
newRank("GeorgeWashingtonAV","BeavercreekBV",450,120);
newRank("TippecanoeAV","BeavercreekCJV",220,160);
newRank("BeavercreekAV","TippecanoeBJV",270,240);
//Round 4
newRank("BeavercreekBV","BeavercreekCJV",400,120);
newRank("GeorgeWashingtonAV","TippecanoeBJV",560,20);
newRank("BeavercreekAV","TippecanoeAV",500,70);
//Round 5
newRank("BeavercreekAV","GeorgeWashingtonAV",340,320);
newRank("TippecanoeAV","BeavercreekBV",280,80);
newRank("BeavercreekCJV","TippecanoeBJV",120,80);
//Varsity Playoffs
//Finals
newRank("GeorgeWashingtonAV","BeavercreekAV",310,300);//Beavercreek with advantage
newRank("BeavercreekAV","GeorgeWashingtonAV",320,290);
//JV Playoffs
//Finals
newRank("BeavercreekCJV","TippecanoeBJV",220,20);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Buffalo C-Set
//Prelims
//Round 1
newRank("NicholsAV","AmherstAV",270,240);
newRank("NicholsBV","AmherstBV",320,180);
newRank("IroquoisAV","NicholsCV",340,210);
newRank("NicholsDJV","IroquoisBJV",250,70);
//Round 2
newRank("NicholsAV","AmherstBV",250,210);
newRank("NicholsBV","IroquoisAV",350,110);
newRank("NicholsCV","AmherstAV",290,140);
newRank("NicholsEJV","IroquoisBJV",220,90);
//Round 3
newRank("NicholsAV","NicholsCV",250,210);
newRank("NicholsBV","AmherstAV",390,120);
newRank("IroquoisAV","AmherstBV",350,110);
newRank("NicholsDJV","NicholsEJV",260,140);
//Round 4
newRank("IroquoisAV","NicholsAV",280,170);
newRank("NicholsBV","NicholsCV",370,100);
newRank("AmherstBV","AmherstAV",290,180);
newRank("NicholsDJV","IroquoisBJV",290,40);
//Round5
newRank("NicholsBV","NicholsAV",250,180);
newRank("NicholsCV","AmherstBV",170,150);
newRank("IroquoisAV","AmherstAV",270,130);
newRank("NicholsEJV","IroquoisBJV",140,60);
//Round 6
newRank("NicholsDJV","NicholsEJV",190,90);
//Varsity Playoffs
//Semifinals
newRank("NicholsBV","NicholsCV",350,180);
newRank("IroquoisAV","NicholsAV",200,180);
//Finals
newRank("NicholsBV","IroquoisAV",250,140);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//South Florida Fall C-Set
//Prelims
//Round 1
newRank("RansomAV","PalmettoDV",520,30);
newRank("ArchimedeanAV","PalmettoEV",330,130);
newRank("ArchimedeanCV","PalmettoFV",220,90);
newRank("CoralReefAV","PalmettoJV",360,70);
newRank("PalmettoBV","BelenBV",280,210);
newRank("ArchimedeanEV","PalmettoHV",220,60);
newRank("BelenAV","PalmettoIV",420,40);
newRank("DoralAV","ArchimedeanDV",330,50);
newRank("ArchimedeanBV","PalmettoAV",240,180);
newRank("PalmettoCV","WestminsterAV",310,160);
newRank("CoralReefBV","PalmettoGV",300,120);
newRank("RansomBV","PalmettoMJV",280,190);
newRank("PalmettoPJV","PalmettoOJV",310,160);
newRank("BelenCJV","PalmettonAJV",330,110);
newRank("PalmettoLJV","PalmettoQJV",310,50);
newRank("DoralBJV","PalmettoRJV",270,140);
newRank("RansomCJV","PalmettoKJV",460,90);
newRank("ArchimedeanFJV","RansomDJV",180,170);
//Round 2
newRank("RansomBV","PalmettoCV",230,230);
newRank("RansomAV","CoralReefBV",410,90);
newRank("PalmettoEV","PalmettoDV",260,100);
newRank("ArchimedeanAV","ArchimedeanCV",280,150);
newRank("PalmettoJV","PalmettoFV",180,170);
newRank("CoralReefAV","BelenBV",300,210);
newRank("PalmettoBV","PalmettoHV",290,140);
newRank("BelenAV","ArchimedeanEV",360,40);
newRank("ArchimedeanDV","PalmettoIV",120,120);
newRank("DoralAV","PalmettoAV",230,190);
newRank("ArchimedeanBV","WestminsterAV",240,180);
newRank("RansomDJV","PalmettoGV",210,150);
newRank("PalmettoMJV","PalmettoOJV",290,150);
newRank("PalmettoPJV","PalmettonAJV",260,140);
newRank("PalmettoLJV","BelenCJV",250,190);
newRank("DoralBJV","PalmettoQJV",260,90);
newRank("RansomCJV","PalmettoRJV",450,90);
newRank("ArchimedeanFJV","PalmettoKJV",250,120);
//Round 3
newRank("WestminsterAV","DoralAV",280,160);
newRank("ArchimedeanBV","PalmettoGV",240,150);
newRank("RansomAV","PalmettoCV",330,180);
newRank("CoralReefBV","RansomBV",250,220);
newRank("ArchimedeanCV","PalmettoDV",220,150);
newRank("ArchimedeanAV","PalmettoJV",390,80);
newRank("BelenBV","PalmettoFV",370,110);
newRank("CoralReefAV","PalmettoHV",410,40);
newRank("PalmettoBV","BelenAV",340,210);
newRank("ArchimedeanDV","ArchimedeanEV",130,120);
newRank("PalmettoAV","PalmettoIV",410,90);
newRank("PalmettoEV","PalmettoKJV",270,170);
newRank("ArchimedeanFJV","PalmettoRJV",220,140);
newRank("RansomDJV","PalmettoOJV",250,150);
newRank("PalmettoMJV","PalmettonAJV",330,130);
newRank("PalmettoPJV","PalmettoLJV",270,180);
newRank("BelenCJV","DoralBJV",240,200);
newRank("RansomCJV","PalmettoQJV",460,50);
//Round 4
newRank("PalmettoAV","ArchimedeanEV",410,50);
newRank("WestminsterAV","PalmettoIV",290,40);
newRank("DoralAV","PalmettoGV",210,160);
newRank("RansomAV","ArchimedeanBV",450,110);
newRank("PalmettoCV","PalmettoEV",240,230);
newRank("CoralReefBV","ArchimedeanCV",230,130);
newRank("PalmettoLJV","PalmettoDV",140,70);
newRank("ArchimedeanAV","BelenBV",330,240);
newRank("PalmettoFV","PalmettoHV",160,70);
newRank("BelenAV","CoralReefAV",280,270);
newRank("PalmettoBV","RansomBV",370,130);
newRank("PalmettoRJV","ArchimedeanDV",160,130);
newRank("RansomCJV","BelenCJV",520,110);
newRank("ArchimedeanFJV","PalmettoQJV",320,40);
newRank("PalmettoOJV","PalmettoKJV",170,150);
newRank("RansomDJV","PalmettonAJV",280,80);
newRank("PalmettoMJV","PalmettoLJV",190,130);
newRank("PalmettoPJV","DoralBJV",300,140);
//Round 5
newRank("PalmettoBV","CoralReefAV",260,190);
newRank("PalmettoAV","ArchimedeanDV",290,40);
newRank("WestminsterAV","ArchimedeanEV",250,50);
newRank("RansomAV","PalmettoGV",360,80);
newRank("DoralAV","PalmettoIV",250,80);
newRank("ArchimedeanBV","PalmettoEV",230,210);
newRank("PalmettoCV","ArchimedeanCV",230,150);
newRank("CoralReefBV","PalmettoJV",260,80);
newRank("RansomBV","PalmettoDV",320,80);
newRank("ArchimedeanAV","PalmettoHV",330,40);
newRank("BelenBV","PalmettoQJV",350,60);
newRank("PalmettoMJV","DoralBJV",290,90);
newRank("RansomCJV","PalmettoPJV",390,130);
newRank("ArchimedeanFJV","BelenCJV",170,170);
newRank("PalmettoRJV","PalmettoOJV",180,140);
newRank("PalmettoKJV","PalmettonAJV",150,110);
newRank("PalmettoLJV","RansomDJV",180,170);
//Varsity Playoffs
//Octofinals
//newRank("RansomAV","PalmettoGV",1,0);
newRank("PalmettoCV","DoralAV",200,150);
newRank("PalmettoBV","ArchimedeanBV",320,150);
newRank("CoralReefAV","RansomBV",200,190);
newRank("ArchimedeanAV","ArchimedeanCV",280,70);
newRank("BelenBV","WestminsterAV",300,90);
newRank("BelenAV","PalmettoEV",270,150);
newRank("PalmettoAV","CoralReefBV",210,190);
//Quarterfinals
newRank("RansomAV","PalmettoCV",310,150);
newRank("BelenBV","ArchimedeanAV",270,220);
newRank("BelenAV","PalmettoAV",230,200);
newRank("PalmettoBV","CoralReefAV",200,140);
//Semifinals
newRank("RansomAV","PalmettoBV",220,190);
newRank("BelenBV","BelenAV",180,170);
//Finals
newRank("RansomAV","BelenBV",260,170)
//JV Playoffs
//Quarterfinals
newRank("RansomCJV","DoralBJV",330,140);
newRank("RansomDJV","ArchimedeanFJV",180,130);
newRank("PalmettoPJV","PalmettoLJV",250,70);
newRank("BelenCJV","PalmettoMJV",200,180);
//Semifinals
newRank("PalmettoPJV","BelenCJV",240,70);
newRank("RansomCJV","PalmettoPJV",340,90);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Oahu C-Set
//Prelims
//Round 1
newRank("IolaniBV","PunahouBV",400,130);
newRank("IolaniAV","PunahouAV",270,260);
//Round 2
newRank("IolaniBV","IolaniAV",410,160);
newRank("PunahouAV","PunahouBV",320,150);
//Round 3
newRank("IolaniBV","PunahouAV",350,210);
newRank("IolaniAV","PunahouBV",330,190);
//Round 4
newRank("IolaniBV","PunahouBV",370,130);
newRank("IolaniAV","PunahouAV",280,280);
//Round 5
newRank("IolaniBV","PunahouAV",380,120);
newRank("IolaniAV","PunahouBV",380,120);
//Round 6
newRank("PunahouAV","PunahouBV",200,160);
newRank("IolaniAV","IolaniBV",260,210);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Greater Knoxville Fall C-Set
//Prelims
//Round 3
newRank("SeymourAV","PigeonForgeAV",230,210);
newRank("MaryvilleAV","MorristownAV",370,140);
newRank("GatlinburgBV","MorristownBV",170,110);
//Round 2
newRank("MaryvilleAV","MorristownBV",460,40);
newRank("GatlinburgAV","MorristownAV",270,140);
newRank("SeymourAV","GatlinburgBV",280,60);
//Round 3
newRank("GatlinburgAV","MorristownBV",370,60);
newRank("MaryvilleAV","SeymourAV",320,140);
newRank("PigeonForgeAV","MorristownAV",230,190);
//Round 4
newRank("GatlinburgAV","SeymourAV",330,90);
newRank("PigeonForgeAV","MorristownBV",250,70);
newRank("MorristownAV","GatlinburgBV",310,30);
//Round 5
newRank("PigeonForgeAV","GatlinburgBV",310,20);
newRank("GatlinburgAV","MaryvilleAV",220,210);
newRank("MorristownAV","SeymourAV",190,130);
//Varsity Playoffs
//Semifinals
newRank("GatlinburgAV","MorristownAV",230,100);
newRank("MaryvilleAV","PigeonForgeAV",400,160);
//Finals
newRank("MaryvilleAV","GatlinburgAV",230,140);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Eastern Geogia Fall C-Set
//Prelims
//Round 1
newRank("BrookwoodAV","NewnanAV",241,240);
newRank("LambertAV","ChattahoocheeAV",310,280);
newRank("WoodstockAV","WoodwardAV",350,90);
newRank("CambridgeAV","JohnsCreekAV",340,210);
newRank("CommerceAV","ApalacheeAV",300,180);
newRank("NewnanCJV","BrookwoodBJV",230,170);
newRank("ChattahoocheeBJV","NewnanBJV",240,220);
newRank("HermannAJV","CherokeeBluffJV",290,220);
newRank("FultonAJV","GeorgeWaltonBJV",410,40);
//Round 2
newRank("LambertAV","NewnanAV",430,200);
newRank("BrookwoodAV","WoodstockAV",350,160);
newRank("ChattahoocheeAV","WoodwardAV",410,140);
newRank("ApalacheeAV","GeorgeWaltonAV",220,190);
newRank("CambridgeAV","CommerceAV",510,110);
newRank("ChattahoocheeBJV","ApalacheeBJV",360,60);
newRank("NewnanCJV","CherokeeBluffJV",240,190);
newRank("NewnanBJV","FultonAJV",210,150);
newRank("HermannAJV","GeorgeWaltonBJV",450,40);
//Round 3
newRank("BrookwoodAV","WoodwardAV",360,110);
newRank("LambertAV","WoodstockAV",380,120);
newRank("ChattahoocheeAV","NewnanAV",370,170);
newRank("CommerceAV","GeorgeWaltonAV",250,220);
newRank("JohnsCreekAV","ApalacheeAV",340,130);
newRank("CherokeeBluffJV","BrookwoodBJV",240,220);
newRank("FultonAJV","ApalacheeBJV",330,100);
newRank("NewnanCJV","GeorgeWaltonBJV",230,200);
newRank("HermannAJV","NewnanBJV",310,170);
//Round 4
newRank("LambertAV","WoodwardAV",460,140);
newRank("ChattahoocheeAV","BrookwoodAV",400,150);
newRank("NewnanAV","WoodstockAV",320,180);
newRank("CambridgeAV","GeorgeWaltonAV",490,80);
newRank("JohnsCreekAV","CommerceAV",280,140);
newRank("CherokeeBluffJV","GeorgeWaltonBJV",320,70);
newRank("HermannAJV","ChattahoocheeBJV",260,200);
newRank("BrookwoodBJV","NewnanBJV",200,190);
newRank("NewnanCJV","ApalacheeBJV",170,110);
//Round 5
newRank("ChattahoocheeAV","WoodstockAV",370,200);
newRank("WoodwardAV","NewnanAV",200,180);
newRank("LambertAV","BrookwoodAV",380,200);
newRank("CambridgeAV","ApalacheeAV",510,60);
newRank("JohnsCreekAV","GeorgeWaltonAV",310,150);
newRank("HermannAJV","FultonAJV",270,200);
newRank("CherokeeBluffJV","NewnanBJV",230,180);
newRank("ChattahoocheeBJV","NewnanCJV",230,180);
newRank("BrookwoodBJV","ApalacheeBJV",250,80);
//Varsity Playoffs
//Quarterfinals
newRank("CambridgeAV","CommerceAV",340,130);
newRank("LambertAV","WoodstockAV",370,160);
newRank("ChattahoocheeAV","NewnanAV",350,160);
newRank("BrookwoodAV","JohnsCreekAV",220,190);
//Semifinals
newRank("CambridgeAV","BrookwoodAV",320,150);
newRank("LambertAV","ChattahoocheeAV",271,270);
//Finals
newRank("CambridgeAV","LambertAV",310,250);
//JV Playoffs
//Semifinals
newRank("HermannAJV","CherokeeBluffJV",370,80);
newRank("ChattahoocheeBJV","FultonAJV",210,160);
//Finals
newRank("ChattahoocheeBJV","HermannAJV",280,140);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Central Florida Fall C-Set
//Prelims
//Round 1
newRank("PineViewAV","RiverviewEV",270,220);
newRank("RiverviewAV","LargoBV",280,240);
newRank("BerkeleyBV","KingAV",270,240);
newRank("TrinityBV","ClassicalAV",290,180);
newRank("TrinityAV","RiverviewDV",450,70);
newRank("LargoAV","RiverviewBV",380,160);
newRank("KingBV","BerkeleyAV",340,190);
newRank("ManateeAV","RiverviewCV",320,200);
newRank("RiverviewHJV","LargoCJV",230,170);
newRank("BerkeleyCJV","RiverviewIJV",330,20);
newRank("RiverviewFJV","RiverviewGJV",310,50);
newRank("ManateeBJV","RiverviewJJV",330,30);
newRank("ClassicalBJV","BerkeleyDJV",140,110);
newRank("ClassicalBJV","BerkeleyDJV",140,110);
newRank("ClassicalCMS","ClassicalEMS",190,30);
newRank("TrinityDMS","ClassicalDMS",220,40);
//Round 2
newRank("RiverviewCV","ClassicalAV",260,220);
newRank("KingAV","RiverviewDV",320,120);
newRank("TrinityAV","BerkeleyBV",320,310);
newRank("KingBV","RiverviewAV",230,220);
newRank("LargoAV","RiverviewEV",350,130);
newRank("ManateeAV","TrinityBV",240,220);
newRank("LargoBV","BerkeleyAV",340,140);
newRank("PineViewAV","RiverviewBV",250,200);
newRank("RiverviewFJV","RiverviewIJV",360,60);
newRank("RiverviewGJV","RiverviewJJV",280,70);
newRank("ManateeBJV","BerkeleyDJV",170,130);
newRank("LargoCJV","ClassicalBJV",240,100);
newRank("BerkeleyCJV","RiverviewHJV",240,180);
newRank("TrinityCMS","ClassicalEMS",430,10);
newRank("ClassicalCMS","TrinityDMS",150,140);
//Round 3
newRank("TrinityAV","ManateeAV",510,80);
newRank("TrinityBV","RiverviewDV",330,130);
newRank("KingAV","ClassicalAV",360,140);
newRank("BerkeleyAV","PineViewAV",230,220);
newRank("RiverviewCV","BerkeleyBV",320,250);
newRank("TrinityCMS","ClassicalDMS",490,10);
newRank("LargoBV","RiverviewEV",260,160);
newRank("RiverviewFJV","RiverviewHJV",210,150);
newRank("LargoAV","RiverviewAV",370,150);
newRank("KingBV","RiverviewBV",270,220);
newRank("ManateeBJV","LargoCJV",230,190);
newRank("RiverviewIJV","RiverviewJJV",140,120);
newRank("BerkeleyCJV","ClassicalBJV",190,170);
newRank("TrinityCMS","ClassicalDMS",490,10);
newRank("TrinityDMS","ClassicalEMS",230,40);
//Round 4
newRank("KingBV","RiverviewEV",330,110);
newRank("BerkeleyBV","TrinityBV",340,160);
newRank("BerkeleyCJV","ManateeBJV",250,130);
newRank("TrinityCMS","ClassicalCMS",410,40);
newRank("RiverviewAV","PineViewAV",290,200);
newRank("LargoAV","BerkeleyAV",330,170);
newRank("LargoBV","RiverviewBV",290,150);
newRank("LargoCJV","RiverviewGJV",190,110);
newRank("BerkeleyDJV","RiverviewIJV",160,70);
newRank("ClassicalDMS","ClassicalEMS",60,50);
newRank("RiverviewCV","RiverviewDV",470,110);
newRank("RiverviewHJV","RiverviewJJV",180,90);
newRank("RiverviewFJV","ClassicalBJV",340,130);
newRank("KingAV","ManateeAV",270,160);
newRank("TrinityAV","ClassicalAV",500,70);
//Round 5
newRank("TrinityAV","LargoAV",310,230);
newRank("RiverviewAV","ManateeAV",300,140);
newRank("ClassicalAV","BerkeleyAV",210,160);
newRank("BerkeleyBV","RiverviewBV",220,150);
newRank("TrinityCMS","TrinityDMS",330,60);
newRank("ClassicalBJV","RiverviewJJV",220,60);
newRank("KingBV","RiverviewCV",320,150);
newRank("RiverviewFJV","ManateeBJV",210,90);
newRank("KingAV","PineViewAV",290,140);
newRank("LargoCJV","RiverviewIJV",150,80);
newRank("BerkeleyCJV","RiverviewGJV",260,70);
newRank("RiverviewEV","RiverviewDV",190,150);
newRank("RiverviewHJV","BerkeleyDJV",240,100);
newRank("TrinityBV","LargoBV",230,190);
newRank("ClassicalCMS","ClassicalDMS",120,50);
//Varsity Playoffs
//Quarterfinals
newRank("TrinityAV","RiverviewAV",370,100);
newRank("LargoAV","BerkeleyBV",280,130);
newRank("KingBV","LargoBV",190,170);
newRank("KingAV","RiverviewCV",290,150);
//Semifinals
newRank("LargoAV","KingBV",280,150);
newRank("TrinityAV","KingAV",310,180);
//Finals
newRank("TrinityAV","LargoAV",330,170);
//JV Playoffs
//Quarterfinals
//newRank("RiverviewFJV","BerkeleyDJV",1,0);
newRank("BerkeleyCJV","RiverviewGJV",260,50);
newRank("LargoCJV","ManateeBJV",180,80);
newRank("RiverviewHJV","ClassicalBJV",210,80);
//Semifinals
newRank("RiverviewHJV","BerkeleyCJV",170,130);
newRank("RiverviewFJV","LargoCJV",200,100);
newRank("RiverviewHJV","RiverviewFJV",121,120);
//MS Final
newRank("TrinityCMS","TrinityDMS",310,40);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Western Washington C-Set
//Prelims
//Round 1
newRank("CentralKitsapAV","HolyNamesAV",320,200);
newRank("OdleAJV","JohnPaulIIBJV",250,120);
newRank("TeslaAJV","DuvallJV",400,70);
//Round 2
newRank("HolyNamesAV","JohnPaulIIAV",240,200);
newRank("TeslaAJV","JohnPaulIIBJV",390,70);
newRank("OdleAJV","DuvallJV",230,130);
//Round 3
newRank("CentralKitsapAV","JohnPaulIIAV",330,80);
newRank("TeslaAJV","OdleAJV",330,140);
newRank("JohnPaulIIBJV","DuvallJV",190,120);
//Round 4
newRank("HolyNamesAV","JohnPaulIIAV",330,110);
newRank("TeslaAJV","JohnPaulIIBJV",430,80);
newRank("OdleAJV","DuvallJV",190,60);
//Round 5
newRank("CentralKitsapAV","JohnPaulIIAV",320,90);
newRank("TeslaAJV","OdleAJV",360,110);
newRank("JohnPaulIIBJV","DuvallJV",160,90);
//Round 6
newRank("HolyNamesAV","CentralKitsapAV",300,160);
//Varsity Playoffs
//Finals
newRank("CentralKitsapAV","HolyNamesAV",250,150);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Southern Washington C-Set
//Prelims
//Round 1
newRank("JesuitAV","LincolnAV",340,180);
newRank("ColumbiaRiverAV","WestviewAV",270,270);//Columbia River wins on
newRank("LewisandClarkAV","WestviewBV",340,110);
newRank("JesuitBV","ColumbiaRiverBV",340,110);
newRank("StollerKMS","StollerTMS",340,140);
newRank("StollerHMS","StollerWMS",410,70);
//Round 2
newRank("LewisandClarkAV","JesuitBV",220,140);
newRank("JesuitAV","ColumbiaRiverAV",360,180);
newRank("WestviewAV","ColumbiaRiverAV",380,100);
//Round 3
newRank("JesuitAV","ColumbiaRiverBV",430,70);
newRank("WestviewAV","LewisandClarkAV",330,200);
newRank("JesuitBV","LincolnAV",260,210);
newRank("ColumbiaRiverAV","WestviewBV",410,120);
newRank("StollerKMS","StollerWMS",450,70);
newRank("StollerHMS","StollerTMS",380,90);
//Round 4
newRank("ColumbiaRiverAV","JesuitBV",410,130);
newRank("WestviewAV","LincolnAV",350,220);
newRank("JesuitAV","LewisandClarkAV",350,130);
newRank("WestviewBV","ColumbiaRiverBV",250,70);
newRank("StollerKMS","StollerHMS",350,200);
newRank("StollerWMS","StollerTMS",210,110);
//Round 5
newRank("LincolnAV","ColumbiaRiverBV",300,110);
newRank("WestviewAV","JesuitBV",340,110);
newRank("ColumbiaRiverAV","LewisandClarkAV",300,160);
newRank("JesuitAV","WestviewBV",430,80);
//Varsity Playoffs
//Semifinals
newRank("WestviewAV","ColumbiaRiverAV",250,170);
newRank("JesuitAV","LincolnAV",320,130);
//Finals
newRank("JesuitAV","WestviewAV",220,180);
//MS Playoffs
//Finals
newRank("StollerHMS","StollerKMS",240,200);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Boston Fall C-Set
//Prelims
//Round 1
newRank("SalemBV","NorthfieldMtHermonAV",231,230);
newRank("BostonLatinAV","TantasquaBV",430,110);
newRank("PhillipsExeterAV","SalemAV",380,130);
newRank("LexingtonAV","TantasquaAV",380,150);
newRank("LexingtonBJV","BromfieldAJV",450,60);
newRank("PhillipsExeterBJV","PhillipsAndoverAJV",440,60);
//Round 2
newRank("TantasquaAV","SalemBV",230,210);
newRank("PhillipsExeterAV","NorthfieldMtHermonAV",370,150);
newRank("SalemAV","TantasquaBV",340,150);
newRank("BostonLatinAV","LexingtonAV",320,240);
newRank("BromfieldAJV","PhillipsAndoverAJV",180,170);
newRank("PhillipsExeterBJV","LexingtonBJV",310,280);
//Round 3
newRank("BostonLatinAV","TantasquaAV",470,120);
newRank("LexingtonAV","SalemAV",370,130);
newRank("NorthfieldMtHermonAV","TantasquaBV",280,220);
newRank("PhillipsExeterAV","SalemBV",350,150);
newRank("LexingtonBJV","PhillipsAndoverAJV",410,110);
newRank("PhillipsExeterBJV","BromfieldAJV",360,120);
//Round 4
newRank("LexingtonAV","NorthfieldMtHermonAV",420,140);
newRank("PhillipsExeterAV","TantasquaBV",450,90);
newRank("SalemAV","TantasquaBV",230,200);
newRank("BostonLatinAV","SalemBV",370,180);
newRank("LexingtonBJV","BromfieldAJV",440,80);
newRank("PhillipsExeterBJV","PhillipsAndoverAJV",450,110);
//Round 5
newRank("PhillipsExeterAV","LexingtonAV",370,210);
newRank("TantasquaAV","NorthfieldMtHermonAV",200,180);
newRank("BostonLatinAV","SalemAV",510,70);
newRank("SalemBV","TantasquaBV",280,110);
newRank("PhillipsAndoverAJV","BromfieldAJV",150,140);
newRank("LexingtonBJV","PhillipsExeterBJV",270,230);
//Round 6
newRank("LexingtonBJV","PhillipsAndoverAJV",300,130);
newRank("PhillipsExeterBJV","BromfieldAJV",330,130);
//Varsity Playoffs
//Semifinals
newRank("BostonLatinAV","SalemBV",290,180);
newRank("PhillipsExeterAV","LexingtonAV",260,250);
//Finals
newRank("BostonLatinAV","PhillipsExeterAV",300,170);
//JV Playoffs
//Finals
newRank("PhillipsExeterBJV","LexingtonBJV",240,180);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Washington DC C-Set
//Prelims
//Round
newRank("CentennialAV","GeorgetownDayAV",330,310);
newRank("ThomasJeffersonAV","MountVernonAV",490,110);
newRank("BASISMcLeanAV","ThomasJeffersonBV",320,290);
newRank("MontgomeryBlairAV","GlenelgAV",420,150);
newRank("StAnselmsAV","CentennialBV",380,190);
newRank("MontgomeryBlairCJV","CentennialEJV",260,190);
newRank("CentennialCJV","CentennialDJV",390,160);
newRank("MontgomeryBlairBJV","ThomasJeffersonDJV",390,180);
newRank("ThomasJeffersonCJV","GeorgetownDayBJV",400,160);
newRank("McLeanAJV","StAnselmsBJV",350,190);
newRank("CentennialLaneAMS","BurleighManorDMS",330,160);
newRank("BurleighManorAMS","NysmithBMS",410,60);
newRank("BurleighManorCMS","CentennialLaneBMS",210,180);
newRank("CompassMSA","CentennialLaneCMS",270,130);
newRank("NysmithAMS","RipponBMS",310,90);
newRank("BurleighManorBMS","RipponAMS",330,170);
//Round 2
newRank("GeorgetownDayAV","GlenelgAV",410,180);
newRank("RichardMontgomeryAV","BASISMcLeanAV",390,290);
newRank("ThomasJeffersonBV","MountVernonAV",540,80);
newRank("MontgomeryBlairAV","CentennialBV",470,140);
newRank("ThomasJeffersonAV","StAnselmsAV",420,230);
newRank("RichardMontgomeryBJV","StAnselmsBJV",450,100);
newRank("MontgomeryBlairBJV","CentennialEJV",510,90);
newRank("ThomasJeffersonCJV","ThomasJeffersonDJV",300,280);
newRank("CentennialCJV","MontgomeryBlairCJV",320,170);
newRank("McLeanAJV","CentennialDJV",300,150);
newRank("BurleighManorCMS","RipponBMS",230,140);
newRank("CentennialLaneAMS","CentennialLaneBMS",370,90);
newRank("BurleighManorBMS","BurleighManorDMS",340,150);
newRank("BurleighManorAMS","CentennialLaneCMS",350,90);
newRank("NysmithAMS","CompassMSA",300,200);
newRank("RipponAMS","NysmithBMS",260,140);
//Round 3
newRank("MontgomeryBlairAV","ThomasJeffersonBV",430,210);
newRank("StAnselmsAV","MountVernonAV",470,70);
newRank("GlenelgAV","CentennialBV",290,220);
newRank("CentennialAV","BASISMcLeanAV",350,250);
newRank("RichardMontgomeryAV","ThomasJeffersonAV",380,230);
newRank("GeorgetownDayBJV","StAnselmsBJV",300,250);
newRank("MontgomeryBlairBJV","McLeanAJV",350,220);
newRank("ThomasJeffersonDJV","CentennialEJV",290,210);
newRank("RichardMontgomeryBJV","CentennialLaneCMS",330,230);
newRank("MontgomeryBlairCJV","CentennialDJV",350,140);
newRank("RipponAMS","BurleighManorDMS",250,200);
newRank("BurleighManorBMS","CentennialLaneBMS",330,120);
newRank("NysmithBMS","CentennialLaneCMS",310,80);
newRank("NysmithAMS","CentennialLaneAMS",350,170);
newRank("BurleighManorAMS","BurleighManorCMS",430,70);
//Round 4
newRank("GeorgetownDayAV","MontgomeryBlairAV",380,290);
newRank("ThomasJeffersonBV","CentennialBV",520,100);
newRank("RichardMontgomeryAV","MountVernonAV",500,80);
newRank("StAnselmsAV","GlenelgAV",340,290);
newRank("McLeanAJV","CentennialEJV",360,120);
newRank("ThomasJeffersonDJV","MontgomeryBlairCJV",400,200);
newRank("GeorgetownDayBJV","CentennialCJV",280,250);
newRank("MontgomeryBlairBJV","ThomasJeffersonCJV",350,280);
newRank("BurleighManorDMS","CentennialLaneBMS",230,270);
newRank("CompassMSA","NysmithBMS",200,190);
newRank("CentennialLaneAMS","RipponBMS",340,70);
newRank("BurleighManorBMS","NysmithAMS",270,210);
newRank("BurleighManorAMS","RipponAMS",370,140);
newRank("BurleighManorCMS","CentennialLaneCMS",240,70);
//Round 5
newRank("BASISMcLeanAV","StAnselmsAV",350,240);
newRank("CentennialBV","MountVernonAV",380,80);
newRank("RichardMontgomeryAV","MontgomeryBlairAV",430,200);
newRank("CentennialAV","GlenelgAV",410,120);
newRank("GeorgetownDayAV","ThomasJeffersonAV",400,240);
newRank("CentennialEJV","CentennialDJV",240,180);
newRank("ThomasJeffersonDJV","GeorgetownDayBJV",360,180);
newRank("MontgomeryBlairBJV","RichardMontgomeryBJV",340,270);
newRank("ThomasJeffersonCJV","CentennialCJV",360,180);
newRank("StAnselmsBJV","MontgomeryBlairCJV",250,170);
newRank("CompassMSA","CentennialLaneBMS",320,80);
newRank("BurleighManorBMS","NysmithBMS",290,150);
newRank("CentennialLaneCMS","RipponBMS",180,100);
newRank("NysmithAMS","RipponAMS",270,120);
newRank("BurleighManorAMS","CentennialLaneAMS",270,230);
newRank("BurleighManorDMS","BurleighManorCMS",250,100);
//Varsity Playoffs
//Semifinals
newRank("RichardMontgomeryAV","MontgomeryBlairAV",360,260);
newRank("GeorgetownDayAV","ThomasJeffersonAV",390,200);
//Finals
newRank("GeorgetownDayAV","RichardMontgomeryAV",300,280);
//JV Playoffs
//Semifinals
newRank("MontgomeryBlairBJV","ThomasJeffersonDJV",360,190);
newRank("RichardMontgomeryBJV","ThomasJeffersonCJV",340,200);
//Finals
newRank("MontgomeryBlairBJV","RichardMontgomeryBJV",360,160);
//MS Playoffs
//Semifinals
newRank("BurleighManorBMS","NysmithAMS",220,190);
newRank("BurleighManorAMS","CompassMSA",220,190);
//Finals
newRank("BurleighManorAMS","BurleighManorBMS",220,140);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Southern New Jersey C-Set
//Prelims
//Round 1
newRank("RanneyAV","MoorestownBV",260,210);
newRank("PrincetonBV","MoorestownAV",360,170);
newRank("HighTechAV","FontbonneAV",400,120);
newRank("MoravianAV","FontbonneBV",440,70);
newRank("PrincetonAV","DonovanCatholicAV",480,30);
newRank("EastBrunswickAV","EastBrunswickBV",370,160);
newRank("RanneyBJV","FordhamBJV",270,180);
newRank("WiltonAnjoAJV","DonovanCatholicBJV",280,190);
newRank("PrincetonCJV","PrincetonDJV",340,150);
newRank("MillburnMSAJV","FontbonneCJV",350,80);
//Round 2
newRank("EastBrunswickBV","FontbonneAV",290,200);
newRank("MoravianAV","DonovanCatholicAV",480,40);
newRank("EastBrunswickAV","PrincetonBV",350,210);
newRank("MoorestownAV","MoorestownBV",310,140);
newRank("HighTechAV","FontbonneBV",470,40);
newRank("RanneyAV","FordhamAV",400,160);
newRank("WiltonAnjoAJV","HighTechBJV",360,120);
newRank("MillburnMSAJV","FordhamBJV",250,180);
newRank("FontbonneCJV","DonovanCatholicBJV",270,240);
newRank("PrincetonCJV","RanneyBJV",270,220);
//Round 3
newRank("PrincetonBV","FontbonneAV",330,140);
newRank("HighTechAV","MoorestownBV",460,100);
newRank("EastBrunswickBV","FontbonneBV",380,60);
newRank("MoravianAV","RanneyAV",270,250);
newRank("PrincetonAV","FordhamAV",340,130);
newRank("RanneyBJV","FontbonneCJV",280,100);
newRank("WiltonAnjoAJV","MillburnMSAJV",250,230);
newRank("PrincetonCJV","HighTechBJV",330,140);
newRank("FordhamBJV","PrincetonDJV",230,200);
//Round 4
newRank("PrincetonAV","MoravianAV",320,220);
newRank("RanneyAV","DonovanCatholicAV",450,30);
newRank("EastBrunswickAV","FontbonneAV",460,30);
newRank("EastBrunswickBV","PrincetonBV",270,260);
newRank("HighTechAV","MoorestownAV",480,90);
newRank("FordhamBJV","FontbonneBV",380,40);
newRank("FordhamBJV","DonovanCatholicBJV",330,100);
newRank("WiltonAnjoAJV","PrincetonDJV",290,220);
newRank("PrincetonCJV","MillburnMSAJV",340,190);
newRank("HighTechBJV","FontbonneCJV",250,100);
//Round 5
newRank("HighTechAV","RanneyAV",350,160);
newRank("FontbonneBV","DonovanCatholicAV",160,50);
newRank("EastBrunswickAV","PrincetonAV",320,260);
newRank("MoravianAV","FordhamAV",260,180);
newRank("MoorestownAV","FontbonneAV",210,160);
newRank("PrincetonBV","MoorestownBV",250,190);
newRank("WiltonAnjoAJV","RanneyBJV",300,190);
newRank("HighTechBJV","FordhamBJV",240,170);
newRank("PrincetonCJV","DonovanCatholicBJV",300,80);
//Varsity Playoffs
//Quarterfinals
//newRank("HighTechAV","FordhamAV",1,0);
newRank("EastBrunswickAV","PrincetonAV",250,230);
newRank("MoravianAV","EastBrunswickBV",220,150);
newRank("RanneyAV","PrincetonBV",320,130);
//Semifinals
newRank("EastBrunswickAV","MoravianAV",240,150);
newRank("HighTechAV","RanneyAV",290,150);
//Finals
newRank("HighTechAV","EastBrunswickAV",300,190);
//JV Playoffs
//Semifinals
newRank("PrincetonCJV","RanneyBJV",280,130);
newRank("WiltonAnjoAJV","MillburnMSAJV",200,120);
newRank("PrincetonCJV","WiltonAnjoAJV",290,170);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Northwest Illinois C-Set
//Prelims
//Round 1
newRank("HomewoodFlossmoorAV","WinnebagoAV",310,150);
newRank("WilliamsBayAV","WilliamsBayCV",410,60);
newRank("GlenbardWestAV","WilliamsBayBV",390,150);
newRank("AuburnAV","ElginAV",410,170);
newRank("AuburnBJV","WilliamsBayDJV",360,50);
newRank("HomewoodFlossmoorBJV","WinnebagoBJV",270,130);
//Round 2
newRank("ElginAV","WilliamsBayCV",340,100);
newRank("AuburnAV","WinnebagoAV",400,140);
newRank("GlenbardWestAV","WilliamsBayAV",420,110);
newRank("HomewoodFlossmoorAV","WilliamsBayBV",340,110);
newRank("AuburnBJV","HomewoodFlossmoorBJV",280,160);
newRank("WinnebagoBJV","WilliamsBayDJV",180,90);
//Round 3
newRank("AuburnAV","GlenbardWestAV",330,250);
newRank("WinnebagoAV","WilliamsBayCV",300,120);
newRank("ElginAV","WilliamsBayBV",330,130);
newRank("WilliamsBayAV","HomewoodFlossmoorAV",290,240);
newRank("AuburnBJV","WinnebagoBJV",430,60);
newRank("HomewoodFlossmoorBJV","WilliamsBayDJV",330,20);
//Round 4
newRank("GlenbardWestAV","WinnebagoAV",360,120);
newRank("HomewoodFlossmoorAV","ElginAV",270,240);
newRank("AuburnAV","WilliamsBayCV",440,70);
newRank("WilliamsBayAV","WilliamsBayBV",290,110);
newRank("HomewoodFlossmoorBJV","WinnebagoBJV",200,130);
newRank("AuburnBJV","WilliamsBayDJV",350,60);
//Round5
newRank("AuburnAV","WilliamsBayBV",430,80);
newRank("HomewoodFlossmoorAV","WilliamsBayCV",320,70);
newRank("GlenbardWestAV","ElginAV",241,240);
newRank("WilliamsBayAV","WinnebagoAV",210,160);
newRank("AuburnBJV","HomewoodFlossmoorBJV",290,90);
newRank("WinnebagoBJV","WilliamsBayDJV",150,90);
//Round6
newRank("GlenbardWestAV","WilliamsBayCV",320,80);
newRank("AuburnAV","HomewoodFlossmoorAV",390,110);
newRank("ElginAV","WilliamsBayAV",290,160);
newRank("WinnebagoAV","WilliamsBayBV",170,120);
newRank("AuburnBJV","WinnebagoBJV",290,90);
newRank("HomewoodFlossmoorBJV","WilliamsBayDJV",150,60);
//Round 7
newRank("GlenbardWestAV","HomewoodFlossmoorBJV",280,160);
newRank("WilliamsBayBV","WilliamsBayCV",110,100);
newRank("AuburnAV","WilliamsBayAV",320,150);
newRank("ElginAV","WinnebagoAV",480,50);
//Varsity Playoffs
//Finals
newRank("AuburnAV","GlenbardWestAV",250,240);
//4th Place Game
newRank("HomewoodFlossmoorAV","WilliamsBayAV",260,120);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Louisiana Fall C-Set
//Prelims
//Round 1
newRank("BatonRougeMagnetAV","NorthwesternAV",290,140);
newRank("ZacharyAV","ZacharyBV",260,170);
newRank("BatonRougeEpiscopalAV","ZacharyCV",290,110);
//Round 2
newRank("ZacharyAV","NorthwesternAV",320,80);
newRank("BatonRougeMagnetAV","ZacharyCV",350,60);
newRank("ZacharyBV","BatonRougeEpiscopalAV",270,180);
//Round 3
newRank("BatonRougeMagnetAV","ZacharyAV",280,220);
newRank("ZacharyBV","ZacharyCV",280,130);
newRank("BatonRougeEpiscopalAV","NorthwesternAV",290,140);
//Round 4
newRank("BatonRougeMagnetAV","BatonRougeEpiscopalAV",310,180);
newRank("ZacharyAV","ZacharyCV",330,70);
newRank("ZacharyBV","NorthwesternAV",300,110);
//Round 5
newRank("ZacharyBV","BatonRougeMagnetAV",240,190);
newRank("BatonRougeEpiscopalAV","ZacharyAV",240,140);
newRank("NorthwesternAV","ZacharyCV",220,150);
//Varsity Playoffs
//Semifinals
newRank("ZacharyBV","ZacharyAV",200,140);
newRank("BatonRougeEpiscopalAV","BatonRougeMagnetAV",210,190);
//Finals
newRank("ZacharyBV","BatonRougeEpiscopalAV",210,160);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Eastern Kentucky C-Set
//Prelims
//Round 1
newRank("BlazerAV","RussellAV",340,160);
newRank("JohnsonAV","JohnsonCV",410,70);
newRank("DunbarAV","JohnsonBV",410,80);
//Round 2
newRank("BlazerAV","DunbarAV",320,260);
newRank("JohnsonBV","JohnsonCV",300,110);
newRank("JohnsonAV","RussellAV",370,180);
//Round 3
newRank("JohnsonAV","BlazerAV",370,190);
newRank("RussellAV","JohnsonBV",250,200);
newRank("DunbarAV","JohnsonCV",390,70);
//Round 4
newRank("JohnsonAV","DunbarAV",380,140);
newRank("BlazerAV","JohnsonBV",390,120);
newRank("RussellAV","JohnsonCV",290,150);
//Round 5
newRank("DunbarAV","RussellAV",250,190);
newRank("JohnsonAV","JohnsonBV",350,90);
newRank("BlazerAV","JohnsonCV",390,70);
//Varsity Playoffs
//Semifinals
newRank("JohnsonAV","RussellAV",270,160);
newRank("BlazerAV","DunbarAV",211,210);
//Finals
newRank("BlazerAV","JohnsonAV",270,160);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Lower Hudson C-Set
//Prelims
//Round 1
newRank("RidgewoodAV","GothamAV",410,210);
newRank("ColdhugAV","LeoniaAV",470,160);
newRank("TenaflyAV","TenaflyBV",430,100);
newRank("ColdhugBJV","ChurchillIBJV",290,280);
newRank("TenaflyCJV","LeoniaBJV",310,200);
newRank("RidgewoodDJV","GeorgeWashingtonAJV",270,160);
//Round 2
newRank("RidgewoodAV","TenaflyBV",530,70);
newRank("ColdhugAV","GothamAV",430,180);
newRank("TenaflyAV","LeoniaAV",280,240);
newRank("ChurchillIIAJV","RidgewoodCJV",280,240);
newRank("TenaflyCJV","GeorgeWashingtonAJV",400,100);
newRank("LeoniaBJV","RidgewoodDJV",220,210);
//Round 3
newRank("RidgewoodAV","TenaflyAV",400,200);
newRank("ColdhugAV","TenaflyBV",510,70);
newRank("GothamAV","LeoniaAV",280,260);
newRank("RidgewoodCJV","GeorgeWashingtonAJV",480,60);
newRank("ColdhugBJV","LeoniaBJV",380,180);
newRank("TenaflyCJV","RidgewoodDJV",400,160);
//Round 4
newRank("RidgewoodAV","LeoniaAV",350,170);
newRank("ColdhugAV","TenaflyAV",450,130);
newRank("GothamAV","TenaflyBV",360,30);
newRank("RidgewoodCJV","RidgewoodDJV",380,110);
newRank("ColdhugBJV","TenaflyCJV",290,180);
newRank("ChurchillIIAJV","LeoniaBJV",350,140);
//Round 5
newRank("ColdhugAV","RidgewoodAV",400,220);
newRank("TenaflyAV","GothamAV",300,260);
newRank("LeoniaAV","TenaflyBV",350,130);
newRank("RidgewoodCJV","ColdhugBJV",280,240);
newRank("ChurchillIIAJV","RidgewoodDJV",370,80);
//Varsity Playoffs
//Semifinals
newRank("ColdhugAV","GothamAV",440,100);
newRank("RidgewoodAV","TenaflyAV",290,210);
//Finals
newRank("ColdhugAV","RidgewoodAV",360,180);
//JV Playoffs
newRank("RidgewoodCJV","ColdhugBJV",350,120);
newRank("ChurchillIIAJV","TenaflyCJV",400,130);
//Finals
newRank("RidgewoodCJV","ChurchillIIAJV",270,150);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Lower Hudson C-Set
//Prelims
//Round 1
newRank("DarienAV","HoraceGreeleyAV",450,90);
newRank("GreensFarmsAV","WhitePlainsAV",360,140);
newRank("WiltonAlexAV","DaltonAV",320,230);
newRank("IrvingtonAV","ArdsleyAV",370,160);
newRank("WiltonLukasAJV","YonkersAJV",350,210);
newRank("HoraceGreeleyBJV","GreensFarmsBJV",380,120);
newRank("ScarsdaleAV","YonkersBJV",380,180);
//Round 2
newRank("WiltonAlexAV","WhitePlainsAV",440,100);
newRank("DaltonAV","HoraceGreeleyAV",330,130);
newRank("GreensFarmsAV","ArdsleyAV",260,250);
newRank("IrvingtonAV","ScarsdaleAV",290,250);
newRank("YonkersBJV","GreensFarmsBJV",300,170);
newRank("YonkersAJV","HoraceGreeleyBJV",350,170);
newRank("DarienAV","WiltonLukasAJV",340,290);
//Round 3
newRank("ScarsdaleAV","GreensFarmsAV",280,230);
newRank("WiltonAlexAV","ArdsleyAV",460,100);
newRank("DarienAV","IrvingtonAV",330,260);
newRank("WhitePlainsAV","HoraceGreeleyAV",280,150);
newRank("HoraceGreeleyBJV","WiltonLukasAJV",290,270);
newRank("YonkersAJV","YonkersBJV",330,170);
newRank("DaltonAV","GreensFarmsBJV",360,110);
//Round 4
newRank("DarienAV","GreensFarmsAV",281,280);//Darien wins on TB
newRank("DaltonAV","IrvingtonAV",310,270);
newRank("WiltonAlexAV","ScarsdaleAV",360,200);
newRank("ArdsleyAV","HoraceGreeleyAV",270,160);
newRank("HoraceGreeleyBJV","YonkersBJV",370,190);
newRank("WiltonLukasAJV","GreensFarmsBJV",470,90);
newRank("YonkersAJV","WhitePlainsAV",420,150);
//Round 5
newRank("ScarsdaleAV","HoraceGreeleyAV",450,60);
newRank("IrvingtonAV","WhitePlainsAV",320,170);
newRank("GreensFarmsAV","DaltonAV",310,170);
newRank("DarienAV","WiltonAlexAV",320,290);
newRank("WiltonLukasAJV","HoraceGreeleyBJV",310,180);
newRank("YonkersAJV","GreensFarmsBJV",340,80);
newRank("HoraceGreeleyBJV","ArdsleyAV",250,140);
//Varsity Playoffs
//Quarterfinals
newRank("WiltonAlexAV","WhitePlainsAV",300,180);
newRank("DarienAV","ArdsleyAV",310,180);
newRank("DaltonAV","IrvingtonAV",230,210);
newRank("ScarsdaleAV","GreensFarmsBJV",270,220);
//Semifinals
newRank("ScarsdaleAV","WiltonAlexAV",260,240);
newRank("DarienAV","DaltonAV",320,160);
//Finals
newRank("DarienAV","ScarsdaleAV",260,230);
//JV Playoffs
//JV Semifinals
newRank("WiltonLukasAJV","YonkersBJV",380,90);
newRank("HoraceGreeleyBJV","YonkersAJV",270,200);
newRank("WiltonLukasAJV","HoraceGreeleyBJV",210,190);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();

//Delaware C-Set
//Prelims
//Round 1
newRank("WilmingtonFriendsDV","CaravelBV",220,140);
newRank("NewarkCharterCV","WilmingtonFriendsEV",260,240);
newRank("MethactonAV","WilmingtonFriendsCV",460,80);
newRank("WilmingtonFriendsAV","FriendsCentralAV",290,150);
newRank("MethactonCJV","WilmingtonFriendsKJV",470,40);
newRank("NewarkCharterAV","WilmingtonFriendsGV",360,90);
newRank("WilmingtonFriendsFV","NewarkCharterBV",200,180);
newRank("WilmingtonFriendsIJV","WilmingtonFriendsLJV",290,100);
newRank("DickinsonAV","CaravelAV",280,100);
newRank("WilmingtonFriendsHJV","WilmingtonFriendsMJV",350,70);
newRank("TowerHillCJV","WilmingtonFriendsJJV",200,80);
newRank("WilmingtonFriendsBV","TowerHillBV",270,190);
newRank("TowerHillAV","MethactonBV",290,220);
//Round 2
newRank("TowerHillAV","CaravelBV",340,80);
newRank("GreatValleyAV","DickinsonAV",470,80);
newRank("WilmingtonFriendsAV","NewarkCharterCV",240,200);
newRank("MethactonBV","FriendsCentralAV",270,160);
newRank("MethactonCJV","WilmingtonFriendsJJV",460,50);
newRank("MethactonAV","WilmingtonFriendsFV",390,70);
newRank("WilmingtonFriendsIJV","WilmingtonFriendsMJV",290,150);
newRank("TowerHillBV","WilmingtonFriendsCV",210,140);
newRank("NewarkCharterAV","WilmingtonFriendsEV",250,180);
newRank("WilmingtonFriendsHJV","WilmingtonFriendsLJV",300,130);
newRank("TowerHillCJV","WilmingtonFriendsKJV",250,90);
newRank("WilmingtonFriendsDV","WilmingtonFriendsGV",160,130);
newRank("WilmingtonFriendsBV","CaravelAV",250,110);
//Round 3
newRank("GreatValleyAV","WilmingtonFriendsFV",480,30);
newRank("NewarkCharterCV","WilmingtonFriendsGV",330,90);
newRank("NewarkCharterAV","CaravelBV",320,30);
newRank("TowerHillAV","WilmingtonFriendsAV",370,150);
newRank("WilmingtonFriendsIJV","WilmingtonFriendsJJV",180,170);
newRank("MethactonBV","WilmingtonFriendsDV",390,90);
newRank("DickinsonAV","TowerHillBV",230,150);
newRank("WilmingtonFriendsHJV","WilmingtonFriendsKJV",420,60);
newRank("MethactonCJV","TowerHillCJV",430,80);
newRank("MethactonAV","WilmingtonFriendsBV",350,170);
newRank("NewarkCharterBV","WilmingtonFriendsCV",240,110);
newRank("NewarkCharterBV","WilmingtonFriendsCV",240,110);
newRank("FriendsCentralAV","WilmingtonFriendsEV",250,170);
//Round 4
newRank("WilmingtonFriendsMJV","WilmingtonFriendsJJV",190,40);
newRank("WilmingtonFriendsLJV","WilmingtonFriendsKJV",140,70);
newRank("GreatValleyAV","WilmingtonFriendsBV",470,90);
newRank("WilmingtonFriendsEV","WilmingtonFriendsDV",190,180);
newRank("TowerHillAV","WilmingtonFriendsGV",440,30);
newRank("MethactonBV","NewarkCharterCV",380,190);
newRank("WilmingtonFriendsHJV","TowerHillCJV",360,70);
newRank("FriendsCentralAV","CaravelBV",280,110);
newRank("DickinsonAV","NewarkCharterBV",200,160);
newRank("MethactonCJV","WilmingtonFriendsIJV",450,70);
newRank("NewarkCharterAV","WilmingtonFriendsAV",300,200);
newRank("TowerHillBV","WilmingtonFriendsFV",250,150);
newRank("CaravelAV","WilmingtonFriendsCV",140,100);
//Round 5
newRank("WilmingtonFriendsJJV","WilmingtonFriendsKJV",180,60);
newRank("MethactonCJV","WilmingtonFriendsMJV",400,60);
newRank("CaravelAV","WilmingtonFriendsFV",190,10);
newRank("WilmingtonFriendsBV","NewarkCharterBV",170,100);
newRank("NewarkCharterCV","CaravelBV",250,80);
newRank("FriendsCentralAV","WilmingtonFriendsGV",240,100);
newRank("WilmingtonFriendsHJV","WilmingtonFriendsIJV",350,80);
newRank("WilmingtonFriendsAV","WilmingtonFriendsDV",210,100);
newRank("TowerHillCJV","WilmingtonFriendsLJV",220,90);
newRank("TowerHillAV","WilmingtonFriendsEV",280,130);
newRank("MethactonAV","NewarkCharterAV",280,120);
newRank("GreatValleyAV","WilmingtonFriendsCV",580,0);
//Varsity Playoffs
//Quarterfinals
newRank("NewarkCharterAV","MethactonBV",280,180);
//newRank("MethactonAV","WilmingtonFriendsAV",1,0);
newRank("GreatValleyAV","FriendsCentralAV",420,80);
newRank("TowerHillAV","NewarkCharterCV",280,140);
//Semifinals
newRank("GreatValleyAV","NewarkCharterAV",330,160);
newRank("MethactonAV","TowerHillAV",390,100);
//Finals
newRank("GreatValleyAV","MethactonAV",370,160);
//JV Playoffs
//Semifinals
newRank("MethactonCJV","WilmingtonFriendsIJV",400,50);
newRank("WilmingtonFriendsHJV","TowerHillCJV",280,60);
//Finals
newRank("MethactonCJV","WilmingtonFriendsHJV",340,110);
//console.log("q "+q);
teamAvgV = [];
teamAvgJV = [];
teamAvgMS = [];
//logTR();
*/

//cExpScore("HunterAV","MillburnAV");

/*
db.collection("teams").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        (`${doc.id} => ${doc.data()}`);
    });
});*/
