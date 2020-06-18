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
let rankA;
let rankB;
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
    await docRefA.get().then(function(doc) {
    if (doc.exists) {
        let divA = doc.data().division;
        docRefB.get().then(function(doc) {
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
            rankA=doc.data().rank;
            console.log("rankA " + rankA);
            await docRefB.get().then(async function(doc) {
                if (doc.exists) {
                    rankB=doc.data().rank; 
                    console.log("rankB " + rankA);  
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
                    console.log("expScore",expScore);
                    expScoreA = expScore;
                    console.log("expScoreA",expScoreA);
                    expScoreB = 1-expScoreA;
                    console.log("expScoreB",expScoreB);
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
    console.log("t",t);
    let sumT = 0;
    let l;
    let tLen = t.length;
    for(l = 0; l < tLen; l++){
        sumT += parseInt(t[l],10);
    };
    console.log("sumT",sumT);
    console.log("t.length",t.length)
    avgT = sumT/t.length;
    console.log("avgT",avgT);
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

async function nRank(A,B,AScore,BScore){
    rankA = rankA + q*K*((AScore/((AScore+BScore)*avgT))-expScoreA);
    rankA = rankB + q*K*((BScore/((AScore+BScore)*avgT))-expScoreB);
    console.log(rankA,rankB);
}

newRank("HunterAV","MillburnAV",280,140);


/*
db.collection("teams").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        (`${doc.id} => ${doc.data()}`);
    });
});*/
