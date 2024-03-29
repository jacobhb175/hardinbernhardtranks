

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const database = firebase.database();

// Teams
//Varsity Teams
db.collection("nhbbteams").doc("Amherst A").set({
    name:"Amherst A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Amherst B").set({
    name:"Amherst B",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Auburn").set({
    name:"Auburn",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("AUC A").set({
    name:"AUC A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Team ALEX").set({
    name:"Detroit Country Day School",
    state:"Michigan",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Plainedge A").set({
    name:"Plainedge A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Plainedge B").set({
    name:"Plainedge B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Apalachee A").set({
    name:"Apalachee A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("AUC A").set({
    name:"Archimedean A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("AUC B").set({
    name:"Archimedean B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("AUC C").set({
    name:"Archimedean C",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("AUC D").set({
    name:"Archimedean D",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Archimedean E").set({
    name:"Archimedean E",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Baldwin").set({
    name:"Baldwin",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ardsley A").set({
    name:"Ardsley A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Auburn A").set({
    name:"Auburn A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("BASIS McLean A").set({
    name:"BASIS McLean A",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("BASIS Scottsdale A").set({
    name:"BASIS Scottsdale A",
    state:"Arizona",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("BASIS Scottsdale B").set({
    name:"BASIS Scottsdale B",
    state:"Arizona",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("BASIS Scottsdale C").set({
    name:"BASIS Scottsdale C",
    state:"Arizona",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Barrington A").set({
    name:"Barrington A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Barrington B").set({
    name:"Barrington B",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Baton Rouge Episcopal A").set({
    name:"Baton Rouge Episcopal A",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Baton Rouge Magnet A").set({
    name:"Baton Rouge Magnet A",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Beavercreek A").set({
    name:"Beavercreek A",
    state:"Ohio",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Beavercreek B").set({
    name:"Beavercreek B",
    state:"Ohio",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Beaver Country Day").set({
    name:"Beaver Country Day",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Jesuit Portland").set({
    name:"Jesuit Portland",
    state:"Oregon",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Belen A").set({
    name:"Belen Jesuit A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Belen B").set({
    name:"Belen Jesuit B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Berkeley Prep A").set({
    name:"Berkeley Prep A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Berkeley Prep B").set({
    name:"Berkeley Prep B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Billings Senior A").set({
    name:"Billings Senior A",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Billings West A").set({
    name:"Billings West A",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Billings West B").set({
    name:"Billings West B",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Blazer A").set({
    name:"Blazer A",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Boston Latin").set({
    name:"Boston Latin",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Bozeman A").set({
    name:"Bozeman A",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Bozeman B").set({
    name:"Bozeman B",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Brookwood A").set({
    name:"Brookwood A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Cambridge A").set({
    name:"Cambridge",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Caravel A").set({
    name:"Caravel A",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Caravel B").set({
    name:"Caravel B",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Centennial A").set({
    name:"Centennial A",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Centennial B").set({
    name:"Centennial B",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Central Kitsap").set({
    name:"Central Kitsap",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Charleston A").set({
    name:"Charleston Catholic A",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Charleston B").set({
    name:"Charleston Catholic B",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Chattahoochee A").set({
    name:"Chattahoochee A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Choctawhatchee A").set({
    name:"Choctawhatchee A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Classical A").set({
    name:"Classical Prep A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Hotchkiss A").set({
    name:"Hotchkiss A",
    state:"Connecticut",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Collegiate A").set({
    name:"Collegiate",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Columbia River A").set({
    name:"Columbia River A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Columbia River B").set({
    name:"Columbia River B",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Commerce A").set({
    name:"Commerce A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Not Coral Reef").set({
    name:"Not Coral Reef",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Coral Springs").set({
    name:"Coral Springs",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Coral Reef A").set({
    name:"Coral Reef A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Coral Reef B").set({
    name:"Coral Reef B",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Dreyfoos").set({
    name:"Dreyfoos",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Creekside A").set({
    name:"Creekside A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Dalton A").set({
    name:"Dalton A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Darien A").set({
    name:"Darien A",
    state:"Connecticut",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Dickinson A").set({
    name:"Dickinson A",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Donovan Catholic A").set({
    name:"Donovan Catholic A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("North Highlands").set({
    name:"North Highlands",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Doral A").set({
    name:"Doral Academy A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Dunbar A").set({
    name:"Dunbar A",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("East Brunswick A").set({
    name:"East Brunswick A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("East Brunswick B").set({
    name:"East Brunswick B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("East Valley A").set({
    name:"East Valley A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("East Valley B").set({
    name:"East Valley B",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Elgin Academy A").set({
    name:"Elgin Academy A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Eriksen A").set({
    name:"Eriksen A",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("California Connection Academy").set({
    name:"California Connection Academy",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Fontbonne A").set({
    name:"Fordham Hall Academy A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Fontbonne B").set({
    name:"Fordham Hall Academy B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Foothill").set({
    name:"Foothill",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("FordhamA").set({
    name:"Fordham Prep A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Frenchtown A").set({
    name:"Frenchtown A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Frenchtown B").set({
    name:"Frenchtown B",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Friends Central").set({
    name:"Friends Central A",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("GatlinburgA").set({
    name:"Gatlinburg-Pittman A",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("GatlinburgB").set({
    name:"Gatlinburg-Pittman B",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Georgetown Day").set({
    name:"Georgetown Day School",
    state:"DC",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("GW A").set({
    name:"George Walton A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("George Washington (WV)").set({
    name:"George Washington",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("GeorgeWashingtonB").set({
    name:"George Washington B",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("George Washington A (CO)").set({
    name:"George Washington A",
    state:"Colorado",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("George Washington B (CO)").set({
    name:"George Washington B",
    state:"Colorado",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("GlenbardWestA").set({
    name:"Glenbard West A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Glenelg").set({
    name:"Glenelg Country School",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Gonzaga Prep").set({
    name:"Gonzaga Prep",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("GothamA").set({
    name:"Team Gotham A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Great Valley A").set({
    name:"Great Valley A",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("GreensFarmsA").set({
    name:"Greens Farms A",
    state:"Connecticut",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Gunderson").set({
    name:"Gunderson",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Hewlett A").set({
    name:"Hewlett A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Hewlett B").set({
    name:"Hewlett B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("HighTechA").set({
    name:"High Tech A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("HinsdaleA").set({
    name:"Hinsdale Central A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("HolmdelA").set({
    name:"Team Holmdel A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("HolyNamesA").set({
    name:"Holy Names Academy A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Homewood-Flossmoor").set({
    name:"Homewood-Flossmoor ",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ISMA").set({
    name:"ISMA",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("HoraceGreeleyA").set({
    name:"Horace Greeley A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Hunter A").set({
    name:"Hunter College High A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Iolani A").set({
    name:"Iolani A",
    state:"Hawaii",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Iolani B").set({
    name:"Iolani B",
    state:"Hawaii",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("IolaniC").set({
    name:"Iolani C",
    state:"Hawaii",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Iroquois").set({
    name:"Iroquois",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("IrvingtonA").set({
    name:"Irvington A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Jesuit A").set({
    name:"Jesuit A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Jesuit B").set({
    name:"Jesuit B",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("John Paul II A").set({
    name:"John Paul II A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Johns Creek A").set({
    name:"Johns Creek A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Johnson A").set({
    name:"Johnson A",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Johnson B").set({
    name:"Johnson B",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Johnson C").set({
    name:"Johnson C",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("King A").set({
    name:"King A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("King B").set({
    name:"King B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Lambert").set({
    name:"Lambert",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Largo A").set({
    name:"Largo A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Largo B").set({
    name:"Largo B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Leonia A").set({
    name:"Leonia A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Les Quiz").set({
    name:"Les Quiz",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Lewis and Clark").set({
    name:"Lewis and Clark",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Lexington A").set({
    name:"Lexington A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Lincoln A").set({
    name:"Lincoln A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Lynbrook").set({
    name:"Lynbrook",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Magee").set({
    name:"Magee Secondary Academy",
    state:"British Columbia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Manatee A").set({
    name:"Manatee A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Marmion Academy A").set({
    name:"Marmion Academy A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Maryville Jr. High A").set({
    name:"Maryville Jr. High A",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Methacton A").set({
    name:"Methacton A",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Methacton B").set({
    name:"Methacton B",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Millburn A").set({
    name:"Millburn A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Millburn B").set({
    name:"Millburn B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Millburn C").set({
    name:"Millburn C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("MB A").set({
    name:"Montgomery Blair A",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Moorestown Friends A").set({
    name:"Moorestown Friends A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Moorestown Friends B").set({
    name:"Moorestown Friends B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Moravian Academy A").set({
    name:"Moravian Academy A",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Morristown East A").set({
    name:"Morristown East A",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Morristown East B").set({
    name:"Morristown East B",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Mountain Lakes").set({
    name:"Mountain Lakes",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Mt. Spokane A").set({
    name:"Mt. Spokane A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Mt. Spokane B").set({
    name:"Mt. Spokane B",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("MountV ernon").set({
    name:"Mount Vernon",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Newark Academy").set({
    name:"Newark Academy",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Newark Charter A").set({
    name:"Newark Charter A",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Newark Charter B").set({
    name:"Newark Charter B",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Newark Charter C").set({
    name:"Newark Charter C",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Newnan A").set({
    name:"Newnan A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Nichols A").set({
    name:"Nichols A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Nichols B").set({
    name:"Nichols B",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Nichols C").set({
    name:"Nichols C",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Nitro A").set({
    name:"Nitro A",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Nitro B").set({
    name:"Nitro B",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Norman North").set({
    name:"Norman North",
    state:"Oklahoma",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Northfield Mt. Hermon").set({
    name:"Northfield Mt. Hermon",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Northfield A").set({
    name:"Northfield A",
    state:"Minnesota",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Northfield B").set({
    name:"Northfield B",
    state:"Minnesota",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Northwestern Middle").set({
    name:"Northwestern Middle",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Western Reserve").set({
    name:"Western Reserve",
    state:"Ohio",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Lincoln").set({
    name:"Lincoln",
    state:"Nebraska",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Oak Mountain").set({
    name:"Oak Mountain",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Oratory Prep").set({
    name:"Oratory Prep",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto A").set({
    name:"Miami Palmetto A",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto B").set({
    name:"Miami Palmetto B",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto C").set({
    name:"Miami Palmetto C",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto D").set({
    name:"Miami Palmetto D",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto E").set({
    name:"Miami Palmetto E",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto F").set({
    name:"Miami Palmetto F",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto G").set({
    name:"Miami Palmetto G",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto H").set({
    name:"Miami Palmetto H",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto I Varsity").set({
    name:"Miami Palmetto I",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto I Junior Varsity").set({
    name:"Miami Palmetto I",
    state:"Florida",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto J Varsity").set({
    name:"Miami Palmetto J",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto J Junior").set({
    name:"Miami Palmetto J",
    state:"Florida",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Paramus").set({
    name:"Paramus",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Frisch").set({
    name:"Frisch",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Phillips Exeter").set({
    name:"Phillips Exeter",
    state:"New Hampshire",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Piedmont Hills").set({
    name:"Piedmont Hills",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Pigeon Forge").set({
    name:"Pigeon Forge",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Pine View A").set({
    name:"Pine View A",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Pine View B").set({
    name:"Pine View B",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Southwestern").set({
    name:"Southwestern",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Team Pi-oneers").set({
    name:"Team Pi-oneers",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Poca A").set({
    name:"Poca A",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("PocaB").set({
    name:"Poca B",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Princeton A").set({
    name:"Princeton A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Princeton B").set({
    name:"Princeton B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("PunahouA").set({
    name:"Punahou A",
    state:"Hawaii",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("PunahouB").set({
    name:"Punahou B",
    state:"Hawaii",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("McKinleyA").set({
    name:"McKinley",
    state:"Hawaii",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ranney A").set({
    name:"Ranney A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("James Clemens").set({
    name:"James Clemens",
    state:"Alabama",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Hoover").set({
    name:"Hoover",
    state:"Alabama",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Vestavia Hills").set({
    name:"Vestavia Hills",
    state:"Alabama",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ransom A").set({
    name:"Ransom Everglades A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ransom B").set({
    name:"Ransom Everglades B",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RansomMS").set({
    name:"Ransom Middle",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ridgewood A").set({
    name:"Ridgewood A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ridgewood B").set({
    name:"Ridgewood B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Richard Montgomery A").set({
    name:"Richard Montgomery A",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RiversideA").set({
    name:"Riverside A",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RiverviewA").set({
    name:"Riverview A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RiverviewB").set({
    name:"Riverview B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RiverviewC").set({
    name:"Riverview C",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RiverviewD").set({
    name:"Riverview D",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RiverviewE").set({
    name:"Riverview E",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RussellA").set({
    name:"Russell A",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Salem A").set({
    name:"Salem A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Salem B").set({
    name:"Salem B",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SandburgA ").set({
    name:"Stanburg A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Saratoga A").set({
    name:"Saratoga A",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Saratoga B").set({
    name:"Saratoga B",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Saratoga C").set({
    name:"Saratoga C",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Scarsdale A").set({
    name:"Scarsdale A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Seymour").set({
    name:"Seymour",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SkyviewA ").set({
    name:"Skyview A",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Skyview B").set({
    name:"Skyview B",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Skyview C").set({
    name:"Skyview C",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("St. Alban's A").set({
    name:"St. Albans A",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("St. Anselm's A").set({
    name:"St. Anselm's A",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Starr's Mill A").set({
    name:"Starr's Mill A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Starr's Mill B").set({
    name:"Starr's Mill B",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Starr's Mill C").set({
    name:"Starr's Mill C",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Starr's Mill D").set({
    name:"Starr's Mill D",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Starr's Mill E").set({
    name:"Starr's Mill E",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Stevenson A").set({
    name:"Stevenson A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Stevenson B").set({
    name:"Stevenson B",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Stevenson C").set({
    name:"Stevenson C",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("St. Georges").set({
    name:"St. George's",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("St. Joseph A").set({
    name:"St. Joseph A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("St. Peter's Prep A").set({
    name:"St. Peter's Prep A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("St. Peter's Prep A").set({
    name:"St. Peter's Prep B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Stuyvesant").set({
    name:"Stuyvesant",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TantasquaA").set({
    name:"Tantasqua A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TantasquaB").set({
    name:"Tantasqua B",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TateA").set({
    name:"Tate A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ThomasJeffersonA").set({
    name:"Thomas Jefferson A",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ThomasJeffersonB").set({
    name:"Thomas Jefferson B",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ThomasJeffersonC").set({
    name:"Thomas Jefferson C",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TippecanoeA").set({
    name:"Tippecanoe A",
    state:"Ohio",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TowerHillA").set({
    name:"Tower Hill A",
    state:"Delaware",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TowerHillB").set({
    name:"Tower Hill B",
    state:"Delaware",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TrinityA").set({
    name:"Trinity Prep A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TrinityB").set({
    name:"Trinity Prep B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Tenafly").set({
    name:"Tenafly",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TenaflyB").set({
    name:"Tenafly B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("VeteransA").set({
    name:"Veterans A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WashingtonA").set({
    name:"Washington A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WashingtonB").set({
    name:"Washington B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WilliamsBayA").set({
    name:"Williams Bay A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WilliamsBayB").set({
    name:"Williams Bay B",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WilliamsBayC").set({
    name:"Williams Bay C",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WilmingtonFriendsA").set({
    name:"Wilmington Friends A",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WilmingtonFriendsB").set({
    name:"Wilmington Friends B",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WilmingtonFriendsC").set({
    name:"Wilmington Friends C",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WilmingtonFriendsD").set({
    name:"Wilmington Friends D",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WilmingtonFriendsE").set({
    name:"Wilmington Friends E",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WilmingtonFriendsF").set({
    name:"Wilmington Friends F",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WilmingtonFriendsG").set({
    name:"Wilmington Friends G",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Wilton T").set({
    name:"Wilton T",
    state:"Connecticut",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WinnebagoA").set({
    name:"Winnebago A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WestminsterA").set({
    name:"Westminster Christian A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WestviewA").set({
    name:"Westview A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WestviewB").set({
    name:"Westview B",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WhitePlainsA").set({
    name:"White Plains A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WoodstockA").set({
    name:"Woodstock A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Woodward Academy A").set({
    name:"Woodward Academy A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Zachary A").set({
    name:"Zachary A",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Zachary B").set({
    name:"Zachary B",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Zachary C").set({
    name:"Zachary C",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),


//JV Teams

db.collection("nhbbteams").doc("Apalachee B").set({
    name:"Apalachee B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Aptakisic A").set({
    name:"Aptakisic A",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Archimedean F").set({
    name:"Archimedean F",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Auburn B").set({
    name:"Auburn B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("BASIS Brooklyn").set({
    name:"BASIS Brooklyn",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Beavercreek C").set({
    name:"Beavercreek C",
    state:"Ohio",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Belen C").set({
    name:"Belen Jesuit C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Berkeley Prep C").set({
    name:"Berkeley Prep C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Berkeley Prep D").set({
    name:"Berkeley Prep D",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Billings Senior B").set({
    name:"Billings Senior B",
    state:"Montana",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Bozeman C").set({
    name:"Bozeman C",
    state:"Montana",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Bromfield A").set({
    name:"Bromfield A",
    state:"Massachusetts",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Brookwood B").set({
    name:"Brookwood B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("California").set({
    name:"California",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Amador A").set({
    name:"Amador Valley A",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Amador B").set({
    name:"Amador Valley B",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Magee Secondary Academy").set({
    name:"Magee Secondary Academy",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Wakeland").set({
    name:"Wakeland",
    state:"Texas",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Van Nuys A").set({
    name:"Van Nuys A",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Van Nuys B").set({
    name:"Van Nuys B",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Centennial C").set({
    name:"Centennial C",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Centennial D").set({
    name:"Centennial D",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Centennial E").set({
    name:"Centennial E",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Chamblee Charter").set({
    name:"Chamblee Charter A",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Charleston Catholic C").set({
    name:"Charleston Catholic C",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Charleston Catholic D").set({
    name:"Charleston Catholic D",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Chattahoochee B").set({
    name:"Chattahoochee B",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Chattahoochee C").set({
    name:"Chattahoochee C",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Cherokee Bluff").set({
    name:"Cherokee Bluff",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Churchill").set({
    name:"Churchill",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Classical B").set({
    name:"Classical Prep B",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Hotchkiss B").set({
    name:"Hotchkiss B",
    state:"Connecticut",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Donovan Catholic B").set({
    name:"Donovan Catholic B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Doral B").set({
    name:"Doral Academy B",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Doral C").set({
    name:"Doral Academy C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Duvall").set({
    name:"Duvall",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("East Valley C").set({
    name:"East Valley C",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("East Valley D").set({
    name:"East Valley C",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Eriksen B").set({
    name:"Eriksen B",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Eriksen C").set({
    name:"Eriksen C",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("GW B").set({
    name:"George Walton B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Fontbonne C").set({
    name:"Fontbonne C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Fordham Prep B").set({
    name:"Fordham Prep B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Fulton Science Academy A").set({
    name:"Fulton Science Academy A",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Georgetown Day B").set({
    name:"Georgetown Day B",
    state:"DC",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("George Washington A New Jersey").set({
    name:"George Washington A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Greens Farms B").set({
    name:"Greens Farms B",
    state:"Connecticut",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Harker").set({
    name:"Harker",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Hermann Homeschool A").set({
    name:"Hermann Homeschool A",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Penn-Trafford").set({
    name:"Penn-Trafford",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Fox Chapel A").set({
    name:"Fox Chapel A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Fox Chapel B").set({
    name:"Fox Chapel B",
    state:"Pennsylvania",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Hewlett C").set({
    name:"Hewlett C",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Hewlett D").set({
    name:"Hewlett D",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Hewlett E").set({
    name:"Hewlett E",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("High Tech B").set({
    name:"High Tech B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Holmdel B").set({
    name:"Holmdel B",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Holmdel").set({
    name:"Holmdel",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Homestead").set({
    name:"Homestead",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Homewood-Flossmoor B").set({
    name:"Homewood-Flossmoor B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Horace Greeley B").set({
    name:"Horace Greeley B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Hunter B").set({
    name:"Hunter College High B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Hunter C").set({
    name:"Hunter College High C",
    state:"New York",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Iroquois B Varsity").set({
    name:"Iroquois B",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Iroquois B Junior Varsity").set({
    name:"Iroquois B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Iroquois C").set({
    name:"Iroquois C",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("John Adams A").set({
    name:"John Adams A",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("John Paul II B").set({
    name:"John Paul II B",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Kinnelon").set({
    name:"Kinnelon",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Largo C").set({
    name:"Largo C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Leonia B").set({
    name:"Leonia A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Libby").set({
    name:"Libby Middle School",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Lexington B").set({
    name:"Lexington B",
    state:"Massachusetts",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Manatee B").set({
    name:"Manatee B",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Millburn Middle School A").set({
    name:"Millburn Middle School A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("McLean A").set({
    name:"McLean A",
    state:"Virginia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Methacton C").set({
    name:"Methacton C",
    state:"Pennsylvania",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Millburn D").set({
    name:"Millburn D",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("MillburnE").set({
    name:"Millburn E",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Mission San Jose").set({
    name:"Mission San Jose",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("MB B").set({
    name:"Montgomery Blair B",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("MB C").set({
    name:"Montgomery Blair C",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Morgantown A").set({
    name:"Morgantown A",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Morgantown B").set({
    name:"Morgantown B",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Morgantown C").set({
    name:"Morgantown C",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Mountain Lakes B").set({
    name:"Mountain Lakes",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Mountain View California").set({
    name:"Mountain View California",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Mt. Spokane C").set({
    name:"Mt. Spokane C",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Mt. Spokane D").set({
    name:"Mt. Spokane D",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Newnan B").set({
    name:"Newnan B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Newnan C").set({
    name:"Newnan C",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Nichols D").set({
    name:"Nichols D",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Nichols E").set({
    name:"Nichols E",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Odle Middle A").set({
    name:"Odle Middle A",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto K").set({
    name:"Miami Palmetto K",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto L").set({
    name:"Miami Palmetto L",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto M").set({
    name:"Miami Palmetto M",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto N").set({
    name:"Miami Palmetto N",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto O").set({
    name:"Miami Palmetto O",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto P").set({
    name:"Miami Palmetto P",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto Q").set({
    name:"Miami Palmetto Q",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Miami Palmetto R").set({
    name:"Miami Palmetto R",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Park City A").set({
    name:"Park City A",
    state:"Montana",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Park City B").set({
    name:"Park City B",
    state:"Montana",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Phillips Andover A").set({
    name:"Phillips Andover A",
    state:"Massachusetts",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Phillips Exeter B").set({
    name:"Phillips Exeter B",
    state:"New Hampshire",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Shaker").set({
    name:"Shaker",
    state:"New Hampshire",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Princeton C").set({
    name:"Princeton C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Princeton D").set({
    name:"Princeton D",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ranney B").set({
    name:"Ranney B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ransom C").set({
    name:"Ransom Everglades C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ransom D").set({
    name:"Ransom Everglades D",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ransom E").set({
    name:"Ransom Everglades E",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ransom F").set({
    name:"Ransom Everglades F",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ransom G").set({
    name:"Ransom Everglades G",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Buchholz A").set({
    name:"Buchholz A",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Buchholz A").set({
    name:"Buchholz A",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),db.collection("nhbbteams").doc("Buchholz B").set({
    name:"Buchholz B",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Richard Montgomery B").set({
    name:"Richard Montgomery B",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ridgewood C").set({
    name:"Ridgewood C",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ridgewood D").set({
    name:"Ridgewood D",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ridgewood E").set({
    name:"Ridgewood E",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Ridgewood F").set({
    name:"Ridgewood F",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Riverview F").set({
    name:"Riverview F",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Riverview G").set({
    name:"Riverview G",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Riverview H").set({
    name:"Riverview H",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Riverview I").set({
    name:"Riverview I",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Riverview J").set({
    name:"Riverview J",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Sagittarius").set({
    name:"Sagittarius",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Sandburg B").set({
    name:"Stanburg B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Santa Clara").set({
    name:"Santa Clara",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Saratoga D").set({
    name:"Saratoga D",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Saratoga E").set({
    name:"Saratoga E",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Harvard-Westlake").set({
    name:"Harvard-Westlake",
    state:"California",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Skyview D").set({
    name:"Skyview D",
    state:"Montana",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("South Brunswick A").set({
    name:"South Brunswick A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("West Brunswick").set({
    name:"East Brunswick",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Stevenson D").set({
    name:"Stevenson D",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Stevenson E").set({
    name:"Stevenson E",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("St Anselms B").set({
    name:"St. Anselm's B",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Stevenson F").set({
    name:"Stevenson F",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("St Joseph B").set({
    name:"St. Joseph B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("St Peters C").set({
    name:"St. Peter's Prep C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Tenafly C").set({
    name:"Tenafly C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Tesla STEM").set({
    name:"Tesla STEM",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Thomas Jefferson C").set({
    name:"Thomas Jefferson C",
    state:"Virginia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Thomas Jefferson D").set({
    name:"Thomas Jefferson D",
    state:"Virginia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Thomas Jefferson E").set({
    name:"Thomas Jefferson E",
    state:"Virginia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Tippecanoe B").set({
    name:"Tippecanoe B",
    state:"Ohio",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Tower Hill C").set({
    name:"Tower Hill C",
    state:"Delaware",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Veterans B").set({
    name:"Veterans B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Williams Bay D").set({
    name:"Williams Bay D",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Winnebago B").set({
    name:"Winnebago B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Wilmington Friends H").set({
    name:"Wilmington Friends H",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Wilmington Friends I").set({
    name:"Wilmington Friends I",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Wilmington Friends J").set({
    name:"Wilmington Friends J",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Wilmington Friends K").set({
    name:"Wilmington Friends K",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Wilmington Friends L").set({
    name:"Wilmington Friends L",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Wilmington Friends M").set({
    name:"Wilmington Friends M",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Wilton K").set({
    name:"Wilton K",
    state:"Connecticut",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Yonkers").set({
    name:"Yonkers",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Yonkers B").set({
    name:"Yonkers B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),


//MS Teams
db.collection("nhbbteams").doc("Challenger Almaden").set({
    name:"Challenger Almaden",
    state:"California",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("BRIGHT Homeschool A").set({
    name:"BRIGHT Homeschool A",
    state:"New Jersey",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Burleigh Manor A").set({
    name:"Burleigh Manor A",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Burleigh Manor B").set({
    name:"Burleigh Manor B",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Burleigh Manor C").set({
    name:"Burleigh Manor C",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("BurleighManorD").set({
    name:"Burleigh Manor D",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("CentennialLaneA").set({
    name:"Centennial Lane ES A",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("CentennialLaneB").set({
    name:"Centennial Lane ES B",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("CentennialLaneC").set({
    name:"Centennial Lane ES C",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ClassicalC").set({
    name:"Classical Prep C",
    state:"Florida",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ClassicalD").set({
    name:"Classical Prep D",
    state:"Florida",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ClassicalE").set({
    name:"Classical Prep E",
    state:"Florida",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("CompassMSA").set({
    name:"Compass A",
    state:"Virginia",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Harvest Park").set({
    name:"Harvest Park",
    state:"California",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("IndianFieldsMSA").set({
    name:"Indian Fields A",
    state:"New Jersey",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("JLS").set({
    name:"JLS",
    state:"California",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("NysmithA").set({
    name:"Nysmith A",
    state:"Virginia",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("NysmithB").set({
    name:"Nysmith B",
    state:"Virginia",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RipponA").set({
    name:"Rippon A",
    state:"Virginia",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RipponB").set({
    name:"Rippon B",
    state:"Virginia",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("StollerH").set({
    name:"Stoller H",
    state:"Washington",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("StollerK").set({
    name:"Stoller K",
    state:"Washington",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("StollerT").set({
    name:"Stoller T",
    state:"Washington",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("StollerW").set({
    name:"Stoller W",
    state:"Washington",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TenaflyA").set({
    name:"Tenafly Middle A",
    state:"New Jersey",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TenaflyB").set({
    name:"Tenafly Middle B",
    state:"New Jersey",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TenaflyC").set({
    name:"Tenafly Middle C",
    state:"New Jersey",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TrinityC").set({
    name:"Trinity Prep C",
    state:"Florida",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TrinityD").set({
    name:"Trinity Prep D",
    state:"Florida",
    division:"Middle School",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Lindsey Homeschool").set({
    name:"Lindsey Homeschool",
    state:"Missouri",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Marquette A").set({
    name:"Marquette A",
    state:"Missouri",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Marquette B").set({
    name:"Marquette B",
    state:"Missouri",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Alton A").set({
    name:"Alton A",
    state:"Illinois",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Glenwood").set({
    name:"Glenwood",
    state:"Illinois",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Granite City A").set({
    name:"Granite City A",
    state:"Illinois",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Southwestern A").set({
    name:"Southwestern A",
    state:"Illinois",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SouthwesternB").set({
    name:"Southwestern B",
    state:"Illinois",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SouthwesternC").set({
    name:"Southwestern B",
    state:"Illinois",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("KeithCountyDayA").set({
    name:"Keith County Day A",
    state:"Illinois",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RochesterA").set({
    name:"Rochester A",
    state:"Illinois",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("NorthmontA").set({
    name:"Northmont A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("KiskiA").set({
    name:"Kiski A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("NCatholicA").set({
    name:"N. Catholic A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("NAlleghenyHSA").set({
    name:"N. Allegheny HS A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("AllderdiceA").set({
    name:"Allderdice A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("AllderdiceB").set({
    name:"Allderdice B",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SaegertownA").set({
    name:"Saegertown A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SouthSideA").set({
    name:"South Side A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SouthSideB").set({
    name:"South Side B",
    state:"Pennsylvania",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("AlagarA").set({
    name:"Algar Homeschool A",
    state:"Pennsylvania",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("NAlleghenyIntA").set({
    name:"N. Allegheny Intermediate A",
    state:"Pennsylvania",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("NAlleghenyIntB").set({
    name:"N. Allegheny Intermediate B",
    state:"Pennsylvania",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Madison A").set({
    name:"Madison Central A",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Madison B").set({
    name:"Madison Central B",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Madison C").set({
    name:"Madison Central C",
    state:"Mississippi",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("PetalA").set({
    name:"Petal A",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("PetalB").set({
    name:"Petal B",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("HancockA").set({
    name:"Hancock A",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("HancockB").set({
    name:"Hancock B",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("HancockC").set({
    name:"Hancock C",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ClintonA").set({
    name:"Clinton A",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ClintonB").set({
    name:"Clinton B",
    state:"Mississippi",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WestJonesA").set({
    name:"West Jones A",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RichtonA").set({
    name:"Richton A",
    state:"Mississippi",
    division:"Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RichtonB").set({
    name:"Richton B",
    state:"Mississippi",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RosaScottA").set({
    name:"Rosa Scott A",
    state:"Mississippi",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("CHECHA").set({
    name:"CHEC A",
    state:"Mississippi",
    division:"Junior Varsity",
    rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Clark A").set({
    name:"Clark A",
    state:"Nevada",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Clark B").set({
    name:"Clark B",
    state:"Nevada",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("LibertyA").set({
    name:"Liberty A",
    state:"Nevada",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("LibertyB").set({
    name:"Liberty B",
    state:"Nevada",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("PleasantValleyA").set({
    name:"Pleasant Valley A",
    state:"Iowa",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("PleasantValleyB").set({
    name:"Pleasant Valley B",
    state:"Iowa",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("CentralA").set({
    name:"Central A",
    state:"Iowa",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("CentralB").set({
    name:"Central B",
    state:"Iowa",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SherrardA").set({
    name:"Sherrard A",
    state:"Iowa",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Bethlehem Central").set({
    name:"Bethlehem Central",
    state:"New York",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("BethlehemA").set({
    name:"Bethlehem A",
    state:"New York",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("BethlehemB").set({
    name:"Bethlehem B",
    state:"New York",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("BethlehemMSA").set({
    name:"Bethlehem ",
    state:"New York",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("BerlinA").set({
    name:"Berlin A",
    state:"New York",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("BerlinB").set({
    name:"Berlin B",
    state:"New York",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("LoyolaA").set({
    name:"Loyola A",
    state:"New York",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("LaurensA").set({
    name:"Laurens A",
    state:"New York",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ParklandA").set({
    name:"Parkland A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WyomingA").set({
    name:"Wyoming Area A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WyomingB").set({
    name:"Wyoming Area B",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WyomingC").set({
    name:"Wyoming Area ",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("NanticokeA").set({
    name:"Greater Nanticoke A",
    state:"Pennsylvania",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Newton North A").set({
    name:"Newton North A",
    state:"Massachusetts",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Newton North B").set({
    name:"Newton North B",
    state:"Massachusetts",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Newton North C").set({
    name:"Newton North C",
    state:"Massachusetts",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Newton South A").set({
    name:"Newton South A",
    state:"Massachusetts",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Newton South B").set({
    name:"Newton South B",
    state:"Massachusetts",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Newton South C").set({
    name:"Newton South C",
    state:"Massachusetts",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("HanoverA").set({
    name:"Hanover A",
    state:"New Hampshire",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("PlymouthA").set({
    name:"Plymouth A",
    state:"New Hampshire",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("PlymouthB").set({
    name:"Plymouth B",
    state:"New Hampshire",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SouthBurlingtonA").set({
    name:"South Burlington A",
    state:"Vermont",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RussellvilleA").set({
    name:"Russellville A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RussellvilleB").set({
    name:"Russellville B",
    state:"Arkansas",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("MountainViewARA").set({
    name:"Mountain View Arkansas",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("FayettevilleA").set({
    name:"Fayetteville A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("FortSmithSouthsideA").set({
    name:"Fort Smith Southside A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("FortSmithSouthsideB").set({
    name:"Fort Smith Southside B",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("FortSmithSouthsideC").set({
    name:"Fort Smith Southside C",
    state:"Arkansas",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("DeQueenA").set({
    name:"De Queen A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ConwayChristianA").set({
    name:"Conway Christian A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ConwayChristianB").set({
    name:"Conway Christian B",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ChesterCountyA").set({
    name:"Chester County A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ChesterCountyB").set({
    name:"Chester County B",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("EpiscopalA").set({
    name:"Episcopal A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("VanBurenA").set({
    name:"Van Buren A",
    state:"Arkansas",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Sage Hill").set({
    name:"Sage Hill",
    state:"California",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ArcadiaA").set({
    name:"Arcadia A",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ArcadiaB").set({
    name:"Arcadia B",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ArcadiaC").set({
    name:"Arcadia C",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ArcadiaD").set({
    name:"Arcadia D",
    state:"California",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SantaMonicaA").set({
    name:"Santa Monica A",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("CanyonCrestA").set({
    name:"Canyon Crest A",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("CanyonCrestB").set({
    name:"Canyon Crest B",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TroyA").set({
    name:"Troy A",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ScrippsRanchA").set({
    name:"Scripps Ranch A",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WhitneyA").set({
    name:"Whitney A",
    state:"California",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("St. Margaret's A").set({
    name:"St. Margaret's A",
    state:"California",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("PegasusA").set({
    name:"Pegasus A",
    state:"California",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SantiagoA").set({
    name:"Santiago A",
    state:"California",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("LaCanadaA").set({
    name:"La Canada Prep A",
    state:"California",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("VistaVerdeA").set({
    name:"Vista Verde A",
    state:"California",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("FayettevilleManliusA").set({
    name:"Fayetteville-Manlius",
    state:"New York",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("IthacaA").set({
    name:"Ithaca A",
    state:"New York",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("IthacaB").set({
    name:"Ithaca B",
    state:"New York",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ParkSchoolA").set({
    name:"Park School",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SacredHeartA").set({
    name:"Sacred Heart A",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SacredHeartB").set({
    name:"Sacred Heart B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WhitmanA").set({
    name:"Walt Whitman",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Key School").set({
    name:"Key School",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("PotomacA").set({
    name:"Potomac",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WoodsonA").set({
    name:"W. T. Woodson",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("OaktonA").set({
    name:"Oakton A",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("OaktonB").set({
    name:"Oakton B",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ThunderRidgeA").set({
    name:"Thunder Ridge A",
    state:"Idaho",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ThunderRidgeB").set({
    name:"Thunder Ridge B",
    state:"Idaho",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("ThunderRidgeC").set({
    name:"Thunder Ridge C",
    state:"Idaho",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("IdahoFallsA").set({
    name:"Idaho Falls",
    state:"Idaho",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("HillcrestA").set({
    name:"Hillcrest A",
    state:"Idaho",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("HillcrestB").set({
    name:"Hillcrest B",
    state:"Idaho",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Hume Fogg").set({
    name:"Hume-Fogg",
    state:"Tennessee",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SignalMountainA").set({
    name:"Signal Mountain A",
    state:"Tennessee",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SignalMountainB").set({
    name:"Signal Mountain B",
    state:"Tennessee",
    division:"Middle School",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SignalMountainC").set({
    name:"Signal Mountain C",
    state:"Tennessee",
    division:"Middle School",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SignalMountainD").set({
    name:"Signal Mountain D",
    state:"Tennessee",
    division:"Middle School",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RedBankA").set({
    name:"Red Bank A",
    state:"Tennessee",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RedBankB").set({
    name:"Red Bank B",
    state:"Tennessee",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SetonHallA").set({
    name:"Seton Hall Prep A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("SetonHallB").set({
    name:"Seton Hall Prep B",
    state:"",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("MCA A").set({
    name:"Middlesex County Academy A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("MCA B").set({
    name:"Middlesex County Academy B",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("RamseyA").set({
    name:"Ramsey",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("DemarestA").set({
    name:"North Valley Demarest A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("DemarestB").set({
    name:"North Valley Demarest B",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("DemarestA").set({
    name:"North Valley Demarest A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("NorthernHighlandsA").set({
    name:"Northern Highlands",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WestMilfordA").set({
    name:"West Milford A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WestMilfordB").set({
    name:"West Milford B",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("PascackHillsA").set({
    name:"Pascack Hills",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("BergenA").set({
    name:"Bergen Academies",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("PEARLSA").set({
    name:"PEARLS Hawthorne",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("JohnAdamsA").set({
    name:"John Adams",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("BenFranklinA").set({
    name:"Ben Franklin",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("PrimorisA").set({
    name:"Primoris Academy",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("CavalliniA").set({
    name:"Cavallini A",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("CavalliniB").set({
    name:"Cavallini B",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("NyackA").set({
    name:"Nyack Middle",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("HomeschoolA").set({
    name:"Team Homeschool",
    state:"New Jersey",
    division:"Middle School",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("TJClassicalA").set({
    name:"Thomas Jefferson Classic",
    state:"Georgia",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("DeerfieldWindsorA").set({
    name:"Deerfield-Windsor",
    state:"Georgia",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("JacksonA").set({
    name:"Jackson",
    state:"Georgia",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("WandoA").set({
    name:"Wando",
    state:"Georgia",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("Cinco Ranch").set({
    name:"Cinco Ranch",
    state:"Texas",
    division:"Varsity",
    rank:1200,
    games:0,
totalGames:0
}),
db.collection("nhbbteams").doc("NortheastA").set({
    name:"Northeast",
    state:"Georgia",
    division:"Junior Varsity",
    rank:1200,
    games:0,
totalGames:0
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
let qV = [];
let qJV = [];
let qMS = [];
let z = 0;

let artemis = [];
const artemisTF = true;

let Aq = 1;
let Bq = 1;
let Aq2 = 1;
let Bq2 = 1;

let AoverABminusEA;
let BoverABminusEB;
let AoverAB;
let BoverAB;

let gamesA = 0;
let gamesB = 0;
let totalGamesA = 0;
let totalGamesB = 0;

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
    if (y != true) {
        //console.log("working"+y);
        var docRefA = db.collection("nhbbteams").doc(A);
        var docRefB = db.collection("nhbbteams").doc(B);
        await docRefA.get().then(async function(doc) {
            if (doc.exists) {
                let totalGamesA=doc.data().totalGames;
                await docRefB.get().then(async function(doc) {
                    if (doc.exists) {
                        let totalGamesB=doc.data().totalGames;
                        totalGamesA = totalGamesA + 1;
                        totalGamesB = totalGamesB + 1;
                        db.collection("nhbbteams").doc(A).update({totalGames:totalGamesA});
                        db.collection("nhbbteams").doc(B).update({totalGames:totalGamesB});
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
        //console.log("working"+y);
        var docRefA = db.collection("nhbbteams").doc(A);
        var docRefB = db.collection("nhbbteams").doc(B);
        await docRefA.get().then(async function(doc) {
            if (doc.exists) {
                let gamesA=doc.data().games;
                await docRefB.get().then(async function(doc) {
                    if (doc.exists) {
                        let gamesB=doc.data().games;
                        gamesA = gamesA + 1;
                        gamesB = gamesB + 1;
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

//test if 2 teams are in a div
async function includes(A,B,div) {
    let docRefA = db.collection("nhbbteams").doc(A);
    let docRefB = db.collection("nhbbteams").doc(B);
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
async function cExpScore(A,B,AScore,BScore){
    for(i=0;i<artemis.length;i++){
        if(artemis[i] == A || artemis[i] == B){
            //artemisTF = true;
            //console.log(artemisTF);
            i=100;
        }
    }
    var docRefA = db.collection("nhbbteams").doc(A);
    var docRefB = db.collection("nhbbteams").doc(B);
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
    games(A,B);
    if(AScore=="Forfeit"||BScore=="Forfeit"||A==null||B==null||A=="Bye"||B=="Bye"){
        //console.log(A,B,AScore,BScore);
        return;
    }
    else if(A=="consolation"||AScore=="consolation"||B=="consolation"||BScore=="consolation"){
        if(y==true){
            consolation = true;
        }
        return;
    }
    else if(A=="consolation"||AScore=="consolation"||B=="consolation"||BScore=="consolation"){
        if(y==true){
            consolation = true;
        }
        return;
    }
    else if(A=="St. Margaret's"||B=="St. Margaret's"||A=="Phillips Exeter"||B=="Phillips Exeter"||A=="Sage Hill"||B=="Sage Hill"){
        return;
    }
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
                //console.log(teamAvgJV,teamAvgCJV);
            }
            else if (evalMS == true) {
                //push game results to array
                teamAvgMS.push(AScore,BScore);
                teamAvgCMS.push(AScore,BScore);
            }
            else {
                console.log(A,B,"is cross-divisional");
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
        }    
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
    var docRefA = db.collection("nhbbteams").doc(A);
    var docRefB = db.collection("nhbbteams").doc(B);
    await docRefA.get().then(async function(doc) {
        if (doc.exists) {
            let rankA=doc.data().rank;
            let gamesA=doc.data().games;
            let totalGamesA=doc.data().totalGames;
            //console.log("rankA",rankA);
            await docRefB.get().then(async function(doc) {
                if (doc.exists) {
                    let rankB=doc.data().rank; 
                    let gamesB=doc.data().games;
                    let totalGamesB=doc.data().totalGames;
                    if (gamesA<1){
                        gamesA = 1;
                        db.collection("nhbbteams").doc(A).update({games:gamesA});
                    }     
                    if (gamesB<1){
                        gamesB = 1;
                        db.collection("nhbbteams").doc(B).update({games:gamesB});
                    }
                    let rootA = 0;
                    let rootB = 0;
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
                        Kb = (800/totalGamesB);
                        rootA = Math.sqrt(gamesA);
                        rootB = Math.sqrt(gamesB);
                        Ka=Ka*rootA;
                        Kb=Kb*rootB;
                    }
                    else if(consolation==true){
                        Ka = (800/totalGamesA);
                        Kb = (800/totalGamesB);
                        Aq2 = 0.75;
                        Bq2 = 0.75;
                    }
                    /*if (Ka>800){
                        Ka = 800;
                    }
                    if (Kb>800){
                        Kb = 800;
                    }*/
                    console.log(Ka,Kb,gamesA,gamesB,totalGamesA,totalGamesB);
                    for(i=0;i<artemis.length;i++){
                        if(artemis[i] == A || artemis[i] == B){
                            //artemisTF = true;
                            //console.log(artemisTF);
                            i=100;
                        }
                    }
                    if(artemisTF === true){

                        //Calculate exp scores
                        await cExpScore(A,B);
                        console.log("A,rankA,B,rankB",A,rankA,B,rankB);
                        console.log("A,B,AScore,BScore",A,B,AScore,BScore);
                        console.log("q",q,"Ka",Ka,"expScoreA",expScoreA);
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
                            AoverABminusEA = (q*AoverAB*Aq*Aq2)-expScoreA;
                            BoverABminusEB = (q*BoverAB*Bq*Bq2)-expScoreB;
                        }
                        console.log("AoverABminusEA",AoverABminusEA,"BoverABminusEB",BoverABminusEB);
                        console.log("q",q,"Ka",Ka,"Kb",Kb)
                        rankA = rankA + 2*Ka*AoverABminusEA;
                        rankB = rankB + 2*Kb*BoverABminusEB;
                        console.log("A,rankA,B,rankB",A,rankA,B,rankB);
                        //artemisTF = false;
                    }
                    /*else {
                        //Calculate exp scores
                        await cExpScore(A,B);
                        rankA = rankA + 2*q*Ka*(AoverABminusEA);
                        rankB = rankB + 2*q*Kb*(BoverABminusEB);
                    }*/
                    Aq = 1;
                    Bq = 1;
                    Aq2 = 1;
                    Bq2 = 1;
                    //console.log("rankA,rankB "+rankA+rankB);
                    //console.log("rankAB",rankA,rankB);
                    //update rank
                    db.collection("nhbbteams").doc(A).update({rank:rankA})
                    db.collection("nhbbteams").doc(B).update({rank:rankB})           
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
    //let teamsRef = db.collection("nhbbteams");
    //console.log(teamsRef.where("division","==",div).orderBy("rank").limit(10));
    db.collection("nhbbteams").where("division", "==", div).orderBy("rank","desc").limit(25)
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

async function Data(){
    K = 100;
    y = false;
    cSet = true;

    console.log("hello world");
    await gameData(1,232,"NEC");
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    //allMS.push(teamAvgMS);
    teamAvgV = [];
    teamAvgJV = [];
    //teamAvgMS = [];
    console.log("NEC");

    await gameData(1,67,"MC");
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    //allMS.push(teamAvgMS);
    teamAvgV = [];
    teamAvgJV = [];
    //teamAvgMS = [];
    console.log("MC");

    await gameData(1,93,"WC");
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    //allMS.push(teamAvgMS);
    teamAvgV = [];
    teamAvgJV = [];
    //teamAvgMS = [];
    console.log("WC");

    await gameData(1,107,"SC");
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    allMS.push(teamAvgMS);
    teamAvgV = [];
    teamAvgJV = [];
    //teamAvgMS = [];
    console.log("SC");

    cSet = false;
    bSet = true;
    await gameData(1,107,"213WLV");
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    allMS.push(teamAvgMS);
    teamAvgV = [];
    teamAvgJV = [];
    //teamAvgMS = [];
    console.log("213WLV");

    y = true;

    bSet = false;
    cSet = true;
    a2 = a2+1;
    b2 = b2+1;
    //c2 = c2+1;
    consolation = false;
    await gameData(1,232,"NEC");
    console.log("NEC q V: "+qV[a2]);
    console.log("NEC q JV: "+qJV[b2]);
    //console.log("NEC q MS: "+qMS[c2]);
    a = 0;
    b = 0;
    //c = 0;

    consolation = false;
    a2 = a2+1;
    b2 = b2+1;
    //c2 = c2+1;
    await gameData(1,67,"MC");
    console.log("MC q V: "+qV[a2]);
    console.log("MC q JV: "+qJV[b2]);
    //console.log("MC q MS: "+qMS[c2]);
    a = 0;
    b = 0;
    //c = 0;

    consolation = false;
    a2 = a2+1;
    b2 = b2+1;
    //c2 = c2+1;
    await gameData(1,93,"WC");
    console.log("WC q V: "+qV[a2]);
    console.log("WC q JV: "+qJV[b2]);
    //console.log("WC q MS: "+qMS[c2]);
    a = 0;
    b = 0;
    //c = 0;

    consolation = false;
    a2 = a2+1;
    b2 = b2+1;
    //c2 = c2+1;
    await gameData(1,107,"SC");
    console.log("SC q V: "+qV[a2]);
    console.log("SC q JV: "+qJV[b2]);
    //console.log("SC q MS: "+qMS[c2]);
    a = 0;
    b = 0;
    //c = 0;

    cSet = false;
    bSet = true;
    consolation = false;
    a2 = a2+1;
    b2 = b2+1;
    //c2 = c2+1;
    await gameData(1,107,"213WLV");
    console.log("213WLV q V: "+qV[a2]);
    console.log("213WLV q JV: "+qJV[b2]);
    //console.log("SC q MS: "+qMS[c2]);
    a = 0;
    b = 0;
    //c = 0;

    cSet = false;
    y = false;
    
    console.log("Rankings");
    await printRanks("Varsity");
    await printRanks("Junior Varsity");
    //await printRanks("Middle School");
}
Data();