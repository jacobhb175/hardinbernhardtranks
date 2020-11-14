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

// Teams

//Varsity Teams
db.collection("teams").doc("Amherst A").set({
    name:"Amherst A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Amherst B").set({
    name:"Amherst B",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Plainedge A").set({
    name:"Plainedge A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Plainedge B").set({
    name:"Plainedge B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Apalachee A").set({
    name:"Apalachee A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Archimedean A").set({
    name:"Archimedean A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Archimedean B").set({
    name:"Archimedean B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Archimedean C").set({
    name:"Archimedean C",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Archimedean D").set({
    name:"Archimedean D",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Archimedean E").set({
    name:"Archimedean E",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Ardsley A").set({
    name:"Ardsley A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Auburn A").set({
    name:"Auburn A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BASIS McLean A").set({
    name:"BASIS McLean A",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Barrington A").set({
    name:"Barrington A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Barrington B").set({
    name:"Barrington B",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Baton Rouge Episcopal A").set({
    name:"Baton Rouge Episcopal A",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Baton Rouge Magnet A").set({
    name:"Baton Rouge Magnet A",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Beavercreek A").set({
    name:"Beavercreek A",
    state:"Ohio",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Beavercreek B").set({
    name:"Beavercreek B",
    state:"Ohio",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Belen Jesuit A").set({
    name:"Belen Jesuit A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Belen Jesuit B").set({
    name:"Belen Jesuit B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Berkeley Prep A").set({
    name:"Berkeley Prep A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Berkeley Prep B").set({
    name:"Berkeley Prep B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Billings Senior A").set({
    name:"Billings Senior A",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Billings West A").set({
    name:"Billings West A",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Billings West B").set({
    name:"Billings West B",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Blazer A").set({
    name:"Blazer A",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Boston Latin A").set({
    name:"Boston Latin A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Bozeman A").set({
    name:"Bozeman A",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Bozeman B").set({
    name:"Bozeman B",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Brookwood A").set({
    name:"Brookwood A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Cambridge A").set({
    name:"Cambridge",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Caravel A").set({
    name:"Caravel A",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Caravel B").set({
    name:"Caravel B",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Centennial A").set({
    name:"Centennial A",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Centennial B").set({
    name:"Centennial B",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Central Kitsap A").set({
    name:"Central Kitsap A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Charleston A").set({
    name:"Charleston Catholic A",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Charleston B").set({
    name:"Charleston Catholic B",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Chattahoochee A").set({
    name:"Chattahoochee A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Choctawhatchee A").set({
    name:"Choctawhatchee A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Classical A").set({
    name:"Classical Prep A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Hotchkiss A").set({
    name:"Hotchkiss A",
    state:"Connecticut",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Collegiate A").set({
    name:"Collegiate",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Columbia River A").set({
    name:"Columbia River A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Columbia River B").set({
    name:"Columbia River B",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Commerce A").set({
    name:"Commerce A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Not Coral Reef").set({
    name:"Not Coral Reef",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Coral Springs").set({
    name:"Coral Springs",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Coral Reef A").set({
    name:"Coral Reef A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Coral Reef B").set({
    name:"Coral Reef B",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Dreyfoos").set({
    name:"Dreyfoos",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Creekside A").set({
    name:"Creekside A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Dalton A").set({
    name:"Dalton A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Darien A").set({
    name:"Darien A",
    state:"Connecticut",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Dickinson A").set({
    name:"Dickinson A",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Donovan Catholic A").set({
    name:"Donovan Catholic A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("North Highlands").set({
    name:"North Highlands",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Doral Academy A").set({
    name:"Doral Academy A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Dunbar A").set({
    name:"Dunbar A",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("East Brunswick A").set({
    name:"East Brunswick A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("East Brunswick B").set({
    name:"East Brunswick B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("East Valley A").set({
    name:"East Valley A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("East Valley B").set({
    name:"East Valley B",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Elgin Academy A").set({
    name:"Elgin Academy A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Eriksen A").set({
    name:"Eriksen A",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Fontbonne A").set({
    name:"Fordham Hall Academy A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Fontbonne B").set({
    name:"Fordham Hall Academy B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Foothill").set({
    name:"Foothill",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("FordhamA").set({
    name:"Fordham Prep A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Frenchtown A").set({
    name:"Frenchtown A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Frenchtown B").set({
    name:"Frenchtown B",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("FriendsCentralA").set({
    name:"Friends Central A",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("GatlinburgA").set({
    name:"Gatlinburg-Pittman A",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("GatlinburgB").set({
    name:"Gatlinburg-Pittman B",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("GeorgetownDayA").set({
    name:"Georgetown Day School A",
    state:"DC",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("GeorgeWaltonA").set({
    name:"George Walton A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("GeorgeWashingtonWVA").set({
    name:"George Washington A",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("GeorgeWashingtonB").set({
    name:"George Washington B",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("GlenbardWestA").set({
    name:"Glenbard West A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("GlenelgA").set({
    name:"Glenelg Country School A",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Gonzaga Prep").set({
    name:"Gonzaga Prep",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("GothamA").set({
    name:"Team Gotham A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Great Valley A").set({
    name:"Great Valley A",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("GreensFarmsA").set({
    name:"Greens Farms A",
    state:"Connecticut",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Gunderson").set({
    name:"Gunderson",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HewlettA").set({
    name:"Hewlett A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HewlettB").set({
    name:"Hewlett B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HighTechA").set({
    name:"High Tech A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HinsdaleA").set({
    name:"Hinsdale Central A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HolmdelA").set({
    name:"Team Holmdel A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HolyNamesA").set({
    name:"Holy Names Academy A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HomewoodFlossmoorA").set({
    name:"Homewood-Flossmoor A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HoraceGreeleyA").set({
    name:"Horace Greeley A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Hunter A").set({
    name:"Hunter College High A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Iolani A").set({
    name:"Iolani A",
    state:"Hawaii",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Iolani B").set({
    name:"Iolani B",
    state:"Hawaii",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("IolaniC").set({
    name:"Iolani C",
    state:"Hawaii",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("IroquoisA").set({
    name:"Iroquois A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("IrvingtonA").set({
    name:"Irvington A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Jesuit A").set({
    name:"Jesuit A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Jesuit B").set({
    name:"Jesuit B",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("John Paul II A").set({
    name:"John Paul II A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Johns Creek A").set({
    name:"Johns Creek A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Johnson A").set({
    name:"Johnson A",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Johnson B").set({
    name:"Johnson B",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Johnson C").set({
    name:"Johnson C",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("King A").set({
    name:"King A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("King B").set({
    name:"King B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Lambert A").set({
    name:"Lambert A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Largo A").set({
    name:"Largo A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Largo B").set({
    name:"Largo B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Leonia A").set({
    name:"Leonia A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Les Quiz").set({
    name:"Les Quiz",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Lewis and Clark A").set({
    name:"Lewis and Clark A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Lexington A").set({
    name:"Lexington A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Lincoln A").set({
    name:"Lincoln A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Lynbrook").set({
    name:"Lynbrook",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Manatee A").set({
    name:"Manatee A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Marmion Academy A").set({
    name:"Marmion Academy A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Maryville Jr. High A").set({
    name:"Maryville Jr. High A",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Methacton A").set({
    name:"Methacton A",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Methacton B").set({
    name:"Methacton B",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Millburn A").set({
    name:"Millburn A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Millburn B").set({
    name:"Millburn B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Millburn C").set({
    name:"Millburn C",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MB A").set({
    name:"Montgomery Blair A",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Moorestown Friends A").set({
    name:"Moorestown Friends A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Moorestown Friends B").set({
    name:"Moorestown Friends B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Moravian Academy A").set({
    name:"Moravian Academy A",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Morristown East A").set({
    name:"Morristown East A",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Morristown East B").set({
    name:"Morristown East B",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Mountain Lakes A").set({
    name:"Mountain Lakes A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Mt. Spokane A").set({
    name:"Mt. Spokane A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Mt. Spokane B").set({
    name:"Mt. Spokane B",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MountV ernon").set({
    name:"Mount Vernon",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Newark Academy A").set({
    name:"Newark Academy A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Newark Charter A").set({
    name:"Newark Charter A",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Newark Charter B").set({
    name:"Newark Charter B",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Newark Charter C").set({
    name:"Newark Charter C",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Newnan A").set({
    name:"Newnan A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Nichols A").set({
    name:"Nichols A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Nichols B").set({
    name:"Nichols B",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Nichols C").set({
    name:"Nichols C",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Nitro A").set({
    name:"Nitro A",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Nitro B").set({
    name:"Nitro B",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Northfield Mt. Hermon").set({
    name:"Northfield Mt. Hermon",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Northwestern Middle").set({
    name:"Northwestern Middle",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Oak Mountain").set({
    name:"Oak Mountain",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Oratory Prep A").set({
    name:"Oratory Prep A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto A").set({
    name:"Miami Palmetto A",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto B").set({
    name:"Miami Palmetto B",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto C").set({
    name:"Miami Palmetto C",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto D").set({
    name:"Miami Palmetto D",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto E").set({
    name:"Miami Palmetto E",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto F").set({
    name:"Miami Palmetto F",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto G").set({
    name:"Miami Palmetto G",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto H").set({
    name:"Miami Palmetto H",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto I Varsity").set({
    name:"Miami Palmetto I",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto I Junior Varsity").set({
    name:"Miami Palmetto I",
    state:"Florida",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto J Varsity").set({
    name:"Miami Palmetto J",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto J Junior").set({
    name:"Miami Palmetto J",
    state:"Florida",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Paramus A").set({
    name:"Paramus A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Phillips Exeter").set({
    name:"Phillips Exeter",
    state:"New Hampshire",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Piedmont Hills").set({
    name:"Piedmont Hills",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Pigeon Forge").set({
    name:"Pigeon Forge",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PineViewA").set({
    name:"Pine View A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Team Pi-oneers").set({
    name:"Team Pi-oneers",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PocaA").set({
    name:"Poca A",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PocaB").set({
    name:"Poca B",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PrincetonA").set({
    name:"Princeton A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Princeton B").set({
    name:"Princeton B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PunahouA").set({
    name:"Punahou A",
    state:"Hawaii",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PunahouB").set({
    name:"Punahou B",
    state:"Hawaii",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("McKinleyA").set({
    name:"McKinley",
    state:"Hawaii",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RanneyA").set({
    name:"Ranney A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RansomA").set({
    name:"Ransom Everglades A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RansomBV").set({
    name:"Ransom Everglades B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),db.collection("teams").doc("RansomBJV").set({
    name:"Ransom Everglades B",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RansomMS").set({
    name:"Ransom Middle",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Ridgewood A").set({
    name:"Ridgewood A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Ridgewood B").set({
    name:"Ridgewood B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Richard Montgomery A").set({
    name:"Richard Montgomery A",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RiversideA").set({
    name:"Riverside A",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RiverviewA").set({
    name:"Riverview A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RiverviewB").set({
    name:"Riverview B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RiverviewC").set({
    name:"Riverview C",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RiverviewD").set({
    name:"Riverview D",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RiverviewE").set({
    name:"Riverview E",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RussellA").set({
    name:"Russell A",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Salem A").set({
    name:"Salem A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Salem B").set({
    name:"Salem B",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SandburgA ").set({
    name:"Stanburg A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Saratoga A").set({
    name:"Saratoga A",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Saratoga B").set({
    name:"Saratoga B",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Saratoga C").set({
    name:"Saratoga C",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Scarsdale A").set({
    name:"Scarsdale A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Seymour").set({
    name:"Seymour",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SkyviewA ").set({
    name:"Skyview A",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Skyview B").set({
    name:"Skyview B",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Skyview C").set({
    name:"Skyview C",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("St. Alban's A").set({
    name:"St. Albans A",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("St. Anselm's A").set({
    name:"St. Anselm's A",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Starr's Mill A").set({
    name:"Starr's Mill A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Starr's Mill B").set({
    name:"Starr's Mill B",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Starr's Mill C").set({
    name:"Starr's Mill C",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Starr's Mill D").set({
    name:"Starr's Mill D",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Starr's Mill E").set({
    name:"Starr's Mill E",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Stevenson A").set({
    name:"Stevenson A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Stevenson B").set({
    name:"Stevenson B",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Stevenson C").set({
    name:"Stevenson C",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("St. Georges").set({
    name:"St. George's",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("St. Joseph A").set({
    name:"St. Joseph A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("St. Peter's Prep A").set({
    name:"St. Peter's Prep A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("St. Peter's Prep A").set({
    name:"St. Peter's Prep B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StuyvesantA").set({
    name:"Stuyvesant A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("TantasquaA").set({
    name:"Tantasqua A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("TantasquaB").set({
    name:"Tantasqua B",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("TateA").set({
    name:"Tate A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ThomasJeffersonA").set({
    name:"Thomas Jefferson A",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ThomasJeffersonB").set({
    name:"Thomas Jefferson B",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ThomasJeffersonC").set({
    name:"Thomas Jefferson C",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("TippecanoeA").set({
    name:"Tippecanoe A",
    state:"Ohio",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("TowerHillA").set({
    name:"Tower Hill A",
    state:"Delaware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("TowerHillB").set({
    name:"Tower Hill B",
    state:"Delaware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("TrinityA").set({
    name:"Trinity Prep A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("TrinityB").set({
    name:"Trinity Prep B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("TenaflyA").set({
    name:"Tenafly A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("TenaflyB").set({
    name:"Tenafly B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("VeteransA").set({
    name:"Veterans A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WashingtonA").set({
    name:"Washington A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WashingtonB").set({
    name:"Washington B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilliamsBayA").set({
    name:"Williams Bay A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilliamsBayB").set({
    name:"Williams Bay B",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilliamsBayC").set({
    name:"Williams Bay C",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilmingtonFriendsA").set({
    name:"Wilmington Friends A",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilmingtonFriendsB").set({
    name:"Wilmington Friends B",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilmingtonFriendsC").set({
    name:"Wilmington Friends C",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilmingtonFriendsD").set({
    name:"Wilmington Friends D",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilmingtonFriendsE").set({
    name:"Wilmington Friends E",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilmingtonFriendsF").set({
    name:"Wilmington Friends F",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilmingtonFriendsG").set({
    name:"Wilmington Friends G",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WiltonAlexA").set({
    name:"Wilton Alex",
    state:"Connecticut",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WinnebagoA").set({
    name:"Winnebago A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WestminsterA").set({
    name:"Westminster Christian A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WestviewA").set({
    name:"Westview A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WestviewB").set({
    name:"Westview B",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WhitePlainsA").set({
    name:"White Plains A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WoodstockA").set({
    name:"Woodstock A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Woodward Academy A").set({
    name:"Woodward Academy A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Zachary A").set({
    name:"Zachary A",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Zachary B").set({
    name:"Zachary B",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Zachary C").set({
    name:"Zachary C",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0
}),


//JV Teams

db.collection("teams").doc("Apalachee B").set({
    name:"Apalachee B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Aptakisic A").set({
    name:"Aptakisic A",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Archimedean F").set({
    name:"Archimedean F",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Auburn B").set({
    name:"Auburn B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BASIS Brooklyn").set({
    name:"BASIS Brooklyn",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Beavercreek C").set({
    name:"Beavercreek C",
    state:"Ohio",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Belen Jesuit C").set({
    name:"Belen Jesuit C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Berkeley Prep C").set({
    name:"Berkeley Prep C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Berkeley Prep D").set({
    name:"Berkeley Prep D",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Billings Senior B").set({
    name:"Billings Senior B",
    state:"Montana",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Bozeman C").set({
    name:"Bozeman C",
    state:"Montana",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Bromfield A").set({
    name:"Bromfield A",
    state:"Massachusetts",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Brookwood B").set({
    name:"Brookwood B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("California").set({
    name:"California",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Centennial C").set({
    name:"Centennial C",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Centennial D").set({
    name:"Centennial D",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Centennial E").set({
    name:"Centennial E",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Chamblee Charter").set({
    name:"Chamblee Charter A",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Charleston Catholic C").set({
    name:"Charleston Catholic C",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Charleston Catholic D").set({
    name:"Charleston Catholic D",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Chattahoochee B").set({
    name:"Chattahoochee B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Cherokee Bluff").set({
    name:"Cherokee Bluff",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Churchill A").set({
    name:"Churchill",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Classical B").set({
    name:"Classical Prep B",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Hotchkiss B").set({
    name:"Hotchkiss B",
    state:"Connecticut",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Donovan Catholic B").set({
    name:"Donovan Catholic B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Doral B").set({
    name:"Doral Academy B",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Duvall").set({
    name:"Duvall",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("East Valley C").set({
    name:"East Valley C",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("East Valley D").set({
    name:"East Valley C",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Eriksen B").set({
    name:"Eriksen B",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("George Walton B").set({
    name:"George Walton B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Fontbonne C").set({
    name:"Fontbonne C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Fordham Prep B").set({
    name:"Fordham Prep B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Fulton Science Academy A").set({
    name:"Fulton Science Academy A",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Georgetown Day B").set({
    name:"Georgetown Day B",
    state:"DC",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("George Washington A New Jersey").set({
    name:"George Washington A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Greens Farms B").set({
    name:"Greens Farms B",
    state:"Connecticut",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Harker").set({
    name:"Harker",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Hermann Homeschool A").set({
    name:"Hermann Homeschool A",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Fox Chapel B").set({
    name:"Fox Chapel B",
    state:"Pennsylvania",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Hewlett C").set({
    name:"Hewlett C",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Hewlett D").set({
    name:"Hewlett D",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Hewlett E").set({
    name:"Hewlett E",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("High Tech B").set({
    name:"High Tech B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Team Holmdel B").set({
    name:"Team Holmdel B",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Holmdel A").set({
    name:"Holmdel",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Homestead").set({
    name:"Homestead",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Homewood-Flossmoor B").set({
    name:"Homewood-Flossmoor B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Horace Greeley B").set({
    name:"Horace Greeley B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Hunter B").set({
    name:"Hunter College High B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Hunter C").set({
    name:"Hunter College High C",
    state:"New York",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Iroquois B Varsity").set({
    name:"Iroquois B",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Iroquois B Junior Varsity").set({
    name:"Iroquois B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Iroquois C").set({
    name:"Iroquois C",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("John Adams A").set({
    name:"John Adams A",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("John Paul II B").set({
    name:"John Paul II B",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Kinnelon A").set({
    name:"Kinnelon A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Largo C").set({
    name:"Largo C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Leonia B").set({
    name:"Leonia A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Libby").set({
    name:"Libby Middle School",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Lexington B").set({
    name:"Lexington B",
    state:"Massachusetts",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Manatee B").set({
    name:"Manatee B",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Millburn Middle School A").set({
    name:"Millburn Middle School A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("McLean A").set({
    name:"McLean A",
    state:"Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Methacton C").set({
    name:"Methacton C",
    state:"Pennsylvania",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Millburn D").set({
    name:"Millburn D",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("MillburnE").set({
    name:"Millburn E",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Mission San Jose").set({
    name:"Mission San Jose",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MB B").set({
    name:"Montgomery Blair B",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MB C").set({
    name:"Montgomery Blair C",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Morgantown A").set({
    name:"Morgantown A",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Mountain Lakes B").set({
    name:"Mountain Lakes",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Mountain View California").set({
    name:"Mountain View California",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Mt. Spokane C").set({
    name:"Mt. Spokane C",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Mt. Spokane D").set({
    name:"Mt. Spokane D",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Newnan B").set({
    name:"Newnan B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Newnan C").set({
    name:"Newnan C",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Nichols D").set({
    name:"Nichols D",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Nichols E").set({
    name:"Nichols E",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Odle Middle A").set({
    name:"Odle Middle A",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto K").set({
    name:"Miami Palmetto K",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto L").set({
    name:"Miami Palmetto L",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto M").set({
    name:"Miami Palmetto M",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto N").set({
    name:"Miami Palmetto N",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto O").set({
    name:"Miami Palmetto O",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto P").set({
    name:"Miami Palmetto P",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto Q").set({
    name:"Miami Palmetto Q",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Miami Palmetto R").set({
    name:"Miami Palmetto R",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Park City A").set({
    name:"Park City A",
    state:"Montana",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Park City B").set({
    name:"Park City B",
    state:"Montana",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Phillips Andover A").set({
    name:"Phillips Andover A",
    state:"Massachusetts",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Phillips Exeter B").set({
    name:"Phillips Exeter B",
    state:"New Hampshire",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Shaker").set({
    name:"Shaker",
    state:"New Hampshire",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Princeton C").set({
    name:"Princeton C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Princeton D").set({
    name:"Princeton D",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Ranney B").set({
    name:"Ranney B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Ransom Everglades C").set({
    name:"Ransom Everglades C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Ransom Everglades D").set({
    name:"Ransom Everglades D",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Ransom Everglades E").set({
    name:"Ransom Everglades E",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Ransom Everglades F").set({
    name:"Ransom Everglades F",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Ransom Everglades G").set({
    name:"Ransom Everglades G",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Richard Montgomery B").set({
    name:"Richard Montgomery B",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Ridgewood C").set({
    name:"Ridgewood C",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Ridgewood D").set({
    name:"Ridgewood D",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Ridgewood E").set({
    name:"Ridgewood E",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Ridgewood F").set({
    name:"Ridgewood F",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Riverview F").set({
    name:"Riverview F",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Riverview G").set({
    name:"Riverview G",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Riverview H").set({
    name:"Riverview H",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Riverview I").set({
    name:"Riverview I",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Riverview J").set({
    name:"Riverview J",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Sagittarius").set({
    name:"Sagittarius",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Sandburg B").set({
    name:"Stanburg B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Santa Clara").set({
    name:"Santa Clara",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Saratoga D").set({
    name:"Saratoga D",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Saratoga E").set({
    name:"Saratoga E",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Skyview D").set({
    name:"Skyview D",
    state:"Montana",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("South Brunswick A").set({
    name:"South Brunswick A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("West Brunswick").set({
    name:"West Brunswick",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Stevenson D").set({
    name:"Stevenson D",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Stevenson E").set({
    name:"Stevenson E",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("St Anselms B").set({
    name:"St. Anselm's B",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Stevenson F").set({
    name:"Stevenson F",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("St Joseph B").set({
    name:"St. Joseph B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("St Peters C").set({
    name:"St. Peter's Prep C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Tenafly C").set({
    name:"Tenafly C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Tesla").set({
    name:"Tesla STEM",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Thomas Jefferson C").set({
    name:"Thomas Jefferson C",
    state:"Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Thomas Jefferson D").set({
    name:"Thomas Jefferson D",
    state:"Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Thomas Jefferson E").set({
    name:"Thomas Jefferson E",
    state:"Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Tippecanoe B").set({
    name:"Tippecanoe B",
    state:"Ohio",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Tower Hill C").set({
    name:"Tower Hill C",
    state:"Delaware",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Veterans B").set({
    name:"Veterans B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Williams Bay D").set({
    name:"Williams Bay D",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Winnebago B").set({
    name:"Winnebago B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Wilmington Friends H").set({
    name:"Wilmington Friends H",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Wilmington Friends I").set({
    name:"Wilmington Friends I",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Wilmington Friends J").set({
    name:"Wilmington Friends J",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Wilmington Friends K").set({
    name:"Wilmington Friends K",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Wilmington Friends L").set({
    name:"Wilmington Friends L",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Wilmington Friends M").set({
    name:"Wilmington Friends M",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Wilton K").set({
    name:"Wilton K",
    state:"Connecticut",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Yonkers A").set({
    name:"Yonkers A",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Yonkers B").set({
    name:"Yonkers B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),


//MS Teams
db.collection("teams").doc("Challenger Almaden").set({
    name:"Challenger Almaden",
    state:"California",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("BRIGHT Homeschool A").set({
    name:"BRIGHT Homeschool A",
    state:"New Jersey",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("Burleigh Manor A").set({
    name:"Burleigh Manor A",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("Burleigh Manor B").set({
    name:"Burleigh Manor B",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("Burleigh Manor C").set({
    name:"Burleigh Manor C",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("BurleighManorD").set({
    name:"Burleigh Manor D",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("CentennialLaneA").set({
    name:"Centennial Lane ES A",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("CentennialLaneB").set({
    name:"Centennial Lane ES B",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("CentennialLaneC").set({
    name:"Centennial Lane ES C",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("ClassicalC").set({
    name:"Classical Prep C",
    state:"Florida",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("ClassicalD").set({
    name:"Classical Prep D",
    state:"Florida",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("ClassicalE").set({
    name:"Classical Prep E",
    state:"Florida",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("CompassMSA").set({
    name:"Compass A",
    state:"Virginia",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("Harvest Park").set({
    name:"Harvest Park",
    state:"California",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("IndianFieldsMSA").set({
    name:"Indian Fields A",
    state:"New Jersey",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("JLS").set({
    name:"JLS",
    state:"California",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("NysmithA").set({
    name:"Nysmith A",
    state:"Virginia",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("NysmithB").set({
    name:"Nysmith B",
    state:"Virginia",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("RipponA").set({
    name:"Rippon A",
    state:"Virginia",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("RipponB").set({
    name:"Rippon B",
    state:"Virginia",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("StollerH").set({
    name:"Stoller H",
    state:"Washington",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("StollerK").set({
    name:"Stoller K",
    state:"Washington",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("StollerT").set({
    name:"Stoller T",
    state:"Washington",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("StollerW").set({
    name:"Stoller W",
    state:"Washington",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("TenaflyA").set({
    name:"Tenafly Middle A",
    state:"New Jersey",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("TenaflyB").set({
    name:"Tenafly Middle B",
    state:"New Jersey",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("TenaflyC").set({
    name:"Tenafly Middle C",
    state:"New Jersey",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("TrinityC").set({
    name:"Trinity Prep C",
    state:"Florida",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("TrinityD").set({
    name:"Trinity Prep D",
    state:"Florida",
    division:"Middle School",
rank:1200,
games:0
}),
//Later teams added
db.collection("teams").doc("Lindsey Homeschool A").set({
    name:"Lindsey Homeschool A",
    state:"Missouri",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Alton A").set({
    name:"Alton A",
    state:"Illinois",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Granite City A").set({
    name:"Granite City A",
    state:"Illinois",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Southwestern A").set({
    name:"Southwestern A",
    state:"Illinois",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("SouthwesternB").set({
    name:"Southwestern B",
    state:"Illinois",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("SouthwesternC").set({
    name:"Southwestern B",
    state:"Illinois",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("KeithCountyDayA").set({
    name:"Keith County Day A",
    state:"Illinois",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("RochesterA").set({
    name:"Rochester A",
    state:"Illinois",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("NorthmontA").set({
    name:"Northmont A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("KiskiA").set({
    name:"Kiski A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("NCatholicA").set({
    name:"N. Catholic A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("NAlleghenyHSA").set({
    name:"N. Allegheny HS A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("AllderdiceA").set({
    name:"Allderdice A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("AllderdiceB").set({
    name:"Allderdice B",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("SaegertownA").set({
    name:"Saegertown A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("SouthSideA").set({
    name:"South Side A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("SouthSideB").set({
    name:"South Side B",
    state:"Pennsylvania",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("AlagarA").set({
    name:"Algar Homeschool A",
    state:"Pennsylvania",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("NAlleghenyIntA").set({
    name:"N. Allegheny Intermediate A",
    state:"Pennsylvania",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("NAlleghenyIntB").set({
    name:"N. Allegheny Intermediate B",
    state:"Pennsylvania",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("MadisonA").set({
    name:"Madison Central A",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("MadisonB").set({
    name:"Madison Central B",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("MadisonC").set({
    name:"Madison Central C",
    state:"Mississippi",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("PetalA").set({
    name:"Petal A",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("PetalB").set({
    name:"Petal B",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("HancockA").set({
    name:"Hancock A",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("HancockB").set({
    name:"Hancock B",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("HancockC").set({
    name:"Hancock C",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("ClintonA").set({
    name:"Clinton A",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("ClintonB").set({
    name:"Clinton B",
    state:"Mississippi",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("WestJonesA").set({
    name:"West Jones A",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("RichtonA").set({
    name:"Richton A",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("RichtonB").set({
    name:"Richton B",
    state:"Mississippi",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("RosaScottA").set({
    name:"Rosa Scott A",
    state:"Mississippi",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("CHECHA").set({
    name:"CHEC A",
    state:"Mississippi",
    division:"Junior Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("ClarkA").set({
    name:"Clark A",
    state:"Nevada",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("ClarkB").set({
    name:"Clark B",
    state:"Nevada",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("LibertyA").set({
    name:"Liberty A",
    state:"Nevada",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("LibertyB").set({
    name:"Liberty B",
    state:"Nevada",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("PleasantValleyA").set({
    name:"Pleasant Valley A",
    state:"Iowa",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("PleasantValleyB").set({
    name:"Pleasant Valley B",
    state:"Iowa",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("CentralA").set({
    name:"Central A",
    state:"Iowa",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("CentralB").set({
    name:"Central B",
    state:"Iowa",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("SherrardA").set({
    name:"Sherrard A",
    state:"Iowa",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Bethlehem Central").set({
    name:"Bethlehem Central",
    state:"New York",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("BethlehemA").set({
    name:"Bethlehem A",
    state:"New York",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("BethlehemB").set({
    name:"Bethlehem B",
    state:"New York",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("BethlehemMSA").set({
    name:"Bethlehem ",
    state:"New York",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("BerlinA").set({
    name:"Berlin A",
    state:"New York",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("BerlinB").set({
    name:"Berlin B",
    state:"New York",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("LoyolaA").set({
    name:"Loyola A",
    state:"New York",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("LaurensA").set({
    name:"Laurens A",
    state:"New York",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("ParklandA").set({
    name:"Parkland A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("WyomingA").set({
    name:"Wyoming Area A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("WyomingB").set({
    name:"Wyoming Area B",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("WyomingC").set({
    name:"Wyoming Area ",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("NanticokeA").set({
    name:"Greater Nanticoke A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Newton North A").set({
    name:"Newton North A",
    state:"Massachusetts",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Newton North B").set({
    name:"Newton North B",
    state:"Massachusetts",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Newton North C").set({
    name:"Newton North C",
    state:"Massachusetts",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Newton South A").set({
    name:"Newton South A",
    state:"Massachusetts",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Newton South B").set({
    name:"Newton South B",
    state:"Massachusetts",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("Newton South C").set({
    name:"Newton South C",
    state:"Massachusetts",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("HanoverA").set({
    name:"Hanover A",
    state:"New Hampshire",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("PlymouthA").set({
    name:"Plymouth A",
    state:"New Hampshire",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("PlymouthB").set({
    name:"Plymouth B",
    state:"New Hampshire",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("SouthBurlingtonA").set({
    name:"South Burlington A",
    state:"Vermont",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("RussellvilleA").set({
    name:"Russellville A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("RussellvilleB").set({
    name:"Russellville B",
    state:"Arkansas",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("MountainViewARA").set({
    name:"Mountain View Arkansas",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("FayettevilleA").set({
    name:"Fayetteville A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("FortSmithSouthsideA").set({
    name:"Fort Smith Southside A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("FortSmithSouthsideB").set({
    name:"Fort Smith Southside B",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("FortSmithSouthsideC").set({
    name:"Fort Smith Southside C",
    state:"Arkansas",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("DeQueenA").set({
    name:"De Queen A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("ConwayChristianA").set({
    name:"Conway Christian A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("ConwayChristianB").set({
    name:"Conway Christian B",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("ChesterCountyA").set({
    name:"Chester County A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("ChesterCountyB").set({
    name:"Chester County B",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("EpiscopalA").set({
    name:"Episcopal A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("VanBurenA").set({
    name:"Van Buren A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("ArcadiaA").set({
    name:"Arcadia A",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("ArcadiaB").set({
    name:"Arcadia B",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("ArcadiaC").set({
    name:"Arcadia C",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("ArcadiaD").set({
    name:"Arcadia D",
    state:"California",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("SantaMonicaA").set({
    name:"Santa Monica A",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("CanyonCrestA").set({
    name:"Canyon Crest A",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("CanyonCrestB").set({
    name:"Canyon Crest B",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("TroyA").set({
    name:"Troy A",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("ScrippsRanchA").set({
    name:"Scripps Ranch A",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("WhitneyA").set({
    name:"Whitney A",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("StMargaretsA").set({
    name:"St. Margaret's A",
    state:"California",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("PegasusA").set({
    name:"Pegasus A",
    state:"California",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("SantiagoA").set({
    name:"Santiago A",
    state:"California",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("LaCanadaA").set({
    name:"La Canada Prep A",
    state:"California",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("VistaVerdeA").set({
    name:"Vista Verde A",
    state:"California",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("FayettevilleManliusA").set({
    name:"Fayetteville-Manlius",
    state:"New York",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("IthacaA").set({
    name:"Ithaca A",
    state:"New York",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("IthacaB").set({
    name:"Ithaca B",
    state:"New York",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("ParkSchoolA").set({
    name:"Park School",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SacredHeartA").set({
    name:"Sacred Heart A",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SacredHeartB").set({
    name:"Sacred Heart B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WhitmanA").set({
    name:"Walt Whitman",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("Key School").set({
    name:"Key School",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PotomacA").set({
    name:"Potomac",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WoodsonA").set({
    name:"W. T. Woodson",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("OaktonA").set({
    name:"Oakton A",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("OaktonB").set({
    name:"Oakton B",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ThunderRidgeA").set({
    name:"Thunder Ridge A",
    state:"Idaho",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("ThunderRidgeB").set({
    name:"Thunder Ridge B",
    state:"Idaho",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("ThunderRidgeC").set({
    name:"Thunder Ridge C",
    state:"Idaho",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("IdahoFallsA").set({
    name:"Idaho Falls",
    state:"Idaho",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("HillcrestA").set({
    name:"Hillcrest A",
    state:"Idaho",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("HillcrestB").set({
    name:"Hillcrest B",
    state:"Idaho",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("SignalMountainA").set({
    name:"Signal Mountain A",
    state:"Tennessee",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("SignalMountainB").set({
    name:"Signal Mountain B",
    state:"Tennessee",
    division:"Middle School",
    rank:1200,
    games:0
}),
db.collection("teams").doc("SignalMountainC").set({
    name:"Signal Mountain C",
    state:"Tennessee",
    division:"Middle School",
    rank:1200,
    games:0
}),
db.collection("teams").doc("SignalMountainD").set({
    name:"Signal Mountain D",
    state:"Tennessee",
    division:"Middle School",
    rank:1200,
    games:0
}),
db.collection("teams").doc("RedBankA").set({
    name:"Red Bank A",
    state:"Tennessee",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("RedBankB").set({
    name:"Red Bank B",
    state:"Tennessee",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("SetonHallA").set({
    name:"Seton Hall Prep A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("SetonHallB").set({
    name:"Seton Hall Prep B",
    state:"",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("MCA A").set({
    name:"Middlesex County Academy A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("MCA B").set({
    name:"Middlesex County Academy B",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("RamseyA").set({
    name:"Ramsey",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("DemarestA").set({
    name:"North Valley Demarest A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("DemarestB").set({
    name:"North Valley Demarest B",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("DemarestA").set({
    name:"North Valley Demarest A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("NorthernHighlandsA").set({
    name:"Northern Highlands",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("WestMilfordA").set({
    name:"West Milford A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("WestMilfordB").set({
    name:"West Milford B",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("PascackHillsA").set({
    name:"Pascack Hills",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("BergenA").set({
    name:"Bergen Academies",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("PEARLSA").set({
    name:"PEARLS Hawthorne",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0
}),
db.collection("teams").doc("JohnAdamsA").set({
    name:"John Adams",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0
}),
db.collection("teams").doc("BenFranklinA").set({
    name:"Ben Franklin",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0
}),
db.collection("teams").doc("PrimorisA").set({
    name:"Primoris Academy",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0
}),
db.collection("teams").doc("CavalliniA").set({
    name:"Cavallini A",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0
}),
db.collection("teams").doc("CavalliniB").set({
    name:"Cavallini B",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0
}),
db.collection("teams").doc("NyackA").set({
    name:"Nyack Middle",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0
}),
db.collection("teams").doc("HomeschoolA").set({
    name:"Team Homeschool",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0
}),
db.collection("teams").doc("TJClassicalA").set({
    name:"Thomas Jefferson Classic",
    state:"Georgia",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("DeerfieldWindsorA").set({
    name:"Deerfield-Windsor",
    state:"Georgia",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("JacksonA").set({
    name:"Jackson",
    state:"Georgia",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("WandoA").set({
    name:"Wando",
    state:"Georgia",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("NortheastA").set({
    name:"Northeast",
    state:"Georgia",
    division:"Junior Varsity",
    rank:1200,
    games:0
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
let teamAvgC = [];
let teamAvgCJV = [];
let teamAvgCMS = [];
let teamAvgB = [];
let teamAvgBJV = [];
let teamAvgBMS = [];
let teamAvgA = [];
let teamAvgAJV = [];
let teamAvgAMS = [];
let teamAvgPrV = [];
let teamAvgPrJV = []
let teamAvgPlV = [];
let teamAvgPlJV = [];

let a = 0;
let b = 0;
let c = 0;
let a2 = -1;
let b2 = -1;
let c2 = -1;

let q = 0;
let t = [];
let avgT = 0;
let y = false;
let qV = [];
let qJV = [];
let qMS = [];
let z = 0;
let artemis;

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

async function games(crossDiv,A,B) {
    if (crossDiv != true) {
        //console.log("working");
        var docRefA = db.collection("teams").doc(A);
        var docRefB = db.collection("teams").doc(B);
        await docRefA.get().then(async function(doc) {
            if (doc.exists) {
                let gamesA=doc.data().games;
                await docRefB.get().then(async function(doc) {
                    if (doc.exists) {
                        let gamesB=doc.data().games;
                        gamesA = gamesA + 1;
                        gamesB = gamesB + 1;
                        db.collection("teams").doc(A).update({games:gamesA});
                        db.collection("teams").doc(B).update({games:gamesB});
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
    //console.log("cExpScore");
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
async function newRank(A, B, AScore, BScore) {
    //Calculate exp scores
    await cExpScore(A,B);
    //Update t value
    t.push((AScore/(AScore+BScore))/expScoreA);
    t.push((BScore/(AScore+BScore))/expScoreB);
    /*let sumT = 0;
    let l;
    let tLen = t.length;
    for(l = 0; l < tLen; l++){
        sumT += parseInt(t[l],10);
    };
    avgT = sumT/t.length;*/
    avgT = average(t);
    //console.log(avgT);
    //console.log("avgTA,avgTB",avgTA,avgTB);
    //console.log("avgT, sumT, t.length",avgT, sumT, t.length);
    //console.log("t",t);
    //check what division
    await includes(A,B,"Varsity");
    await includes(A,B,"Junior Varsity");
    await includes(A,B,"Middle School");
    if (y == false){
        //if C-Set games
        if (cSet == true){
            if (evalV == true) {
                //push game results to array
                teamAvgV.push(AScore,BScore);
                teamAvgC.push(AScore,BScore);
                //console.log(teamAvgV);
            }
            else if (evalJV == true) {
                //push game results to array
                teamAvgJV.push(AScore,BScore);
                teamAvgCJV.push(AScore,BScore);
            }
            else if (evalMS == true) {
                //push game results to array
                teamAvgMS.push(AScore,BScore);
                teamAvgCMS.push(AScore,BScore);
            }
            else {
                //console.log(A,B,"is cross-divisional");
            }
        }
        //if B-Set games
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
        } 
    }
    else if (y == true){
        crossDiv = false;
        //C-Set games
        if (cSet == true) {
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
                //console.log(A,B,"is cross-divisional");
            }
            games(crossDiv,A,B);
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
                //console.log(A,B,"is cross-divisional");
            }
            games(crossDiv,A,B);
        }    
    }
};  

//calculate and update rank
async function nRank(A,B,AScore,BScore){
    //console.log("nRank");
    var docRefA = db.collection("teams").doc(A);
    var docRefB = db.collection("teams").doc(B);
    await docRefA.get().then(async function(doc) {
        if (doc.exists) {
            let rankA=doc.data().rank;
            //console.log("rankA",rankA);
            await docRefB.get().then(async function(doc) {
                if (doc.exists) {
                    let rankB=doc.data().rank; 
                    var docRefA = db.collection("teams").doc(A);
                    var docRefB = db.collection("teams").doc(B);
                    await docRefA.get().then(async function(doc) {
                        if (doc.exists) {
                            let gamesA=doc.data().games;
                            let teamA=doc.data().name;
                            let rankA=doc.data().rank;
                            if (gamesA<1){
                                gamesA = 1;
                                db.collection("teams").doc(A).update({games:gamesA});
                            }
                            await docRefB.get().then(async function(doc) {
                                if (doc.exists) {
                                    let gamesB=doc.data().games;
                                    let teamB=doc.data().name;
                                    let rankB=doc.data().rank;
                                    if (gamesB<1){
                                        gamesB = 1;
                                        db.collection("teams").doc(B).update({games:gamesB});
                                    }
                                    let Ka = 800/gamesA;
                                    let Kb = 800/gamesB;
                                    if (Ka>800){
                                        Ka = 800;
                                    }
                                    if (Kb>800){
                                        Kb = 800;
                                    }
                                    //console.log("q,Ka,Kb,avgTA,avgTB ",q,Ka,Kb,avgTA,avgTB);
                                    //console.log("rankA,rankB ",rankA,rankB);
                                    if (artemis == teamA || artemis == teamB){
                                        console.log("teamA","rankA","teamB","rankB");
                                        console.log(A,B,AScore,BScore);
                                        rankA = rankA + q*Ka*(AScore/(AScore+BScore)-expScoreA);
                                        rankB = rankB + q*Kb*(BScore/(AScore+BScore)-expScoreB);
                                        console.log("teamA","rankA","teamB","rankB");
                                    }
                                    else {
                                        rankA = rankA + q*Ka*(AScore/(AScore+BScore)-expScoreA);
                                        rankB = rankB + q*Kb*(BScore/(AScore+BScore)-expScoreB);
                                    }
                                    //console.log("rankA,rankB "+rankA+rankB);
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
    //let teamsRef = db.collection("teams");
    //console.log(teamsRef.where("division","==",div).orderBy("rank").limit(10));
    db.collection("teams").where("division", "==", div).orderBy("rank","desc").limit(25)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
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
        //await console.log(A,B,AScore,BScore);
        await newRank(A,B,AScore,BScore);
    }
}

async function cSetData(){
    K = 100;
    y = false;
    cSet = true;

    console.log("hello world");
    await gameData(1,61,"NEC");
    //allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    //allMS.push(teamAvgMS);
    //teamAvgV = [];
    teamAvgJV = [];
    //teamAvgMS = [];
    console.log("NEC");

    y = true;

    a = 0;
    b = 0;
    c = 0;
    a2 = a2+1;
    b2 = b2+1;
    c2 = c2+1;

    await gameData(1,61,"NEC");
    //console.log("NEC q V: "+qV[a2]);
    console.log("NEC q JV: "+qJV[b2]);
    //console.log("NEC q MS: "+qMS[c2]);
    a = 0;
    b = 0;
    c = 0;

    cSet = false;
    y = false;
    
    console.log("C-Set Rankings");
    await printRanks("Varsity");
    await printRanks("Junior Varsity");
    await printRanks("Middle School");
}

cSetData();