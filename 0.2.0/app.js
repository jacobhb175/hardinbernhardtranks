var admin = require("firebase-admin");

var serviceAccount = require("./hardinbernhardtranks-170e9a2580ff.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hardinbernhardtranks.firebaseio.com"
});

const db = admin.firestore();

// Teams

//Varsity Teams
db.collection("teams").doc("AmherstA").set({
    name:"Amherst A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("AmherstB").set({
    name:"Amherst B",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ApalacheeA").set({
    name:"Apalachee A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ArchimedeanA").set({
    name:"Archimedean A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ArchimedeanB").set({
    name:"Archimedean B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ArchimedeanC").set({
    name:"Archimedean C",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ArchimedeanD").set({
    name:"Archimedean D",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ArchimedeanE").set({
    name:"Archimedean E",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ArdsleyA").set({
    name:"Ardsley A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("AuburnA").set({
    name:"Auburn A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BASISMcLeanA").set({
    name:"BASIS McLean A",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BarringtonA").set({
    name:"Barrington A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BarringtonB").set({
    name:"Barrington B",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BatonRougeEpiscopalA").set({
    name:"Baton Rouge Episcopal A",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BatonRougeMagnetA").set({
    name:"Baton Rouge Magnet A",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BeavercreekA").set({
    name:"Beavercreek A",
    state:"Ohio",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BeavercreekB").set({
    name:"Beavercreek B",
    state:"Ohio",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BelenA").set({
    name:"Belen Jesuit A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BelenB").set({
    name:"Belen Jesuit B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BerkeleyA").set({
    name:"Berkeley Prep A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BerkeleyB").set({
    name:"Berkeley Prep B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BillingsSeniorA").set({
    name:"Billings Senior A",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BillingsWestA").set({
    name:"Billings West A",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BillingsWestB").set({
    name:"Billings West B",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BlazerA").set({
    name:"Blazer A",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BostonLatinA").set({
    name:"Boston Latin A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BozemanA").set({
    name:"Bozeman A",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BozemanB").set({
    name:"Bozeman B",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BrookwoodA").set({
    name:"Brookwood A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CambridgeA").set({
    name:"Cambridge",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CaravelA").set({
    name:"Caravel A",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CaravelB").set({
    name:"Caravel B",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CentennialA").set({
    name:"Centennial HS A",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CentennialB").set({
    name:"Centennial HS B",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CentralKitsapA").set({
    name:"Central Kitsap A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CharlestonA").set({
    name:"Charleston Catholic A",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CharlestonB").set({
    name:"Charleston Catholic B",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ChattahoocheeA").set({
    name:"Chattahoochee A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ChoctawhatcheeA").set({
    name:"Choctawhatchee A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ClassicalA").set({
    name:"Classical Prep A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ColdhugA").set({
    name:"Team Coldhug A",
    state:"Connecticut",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CollegiateA").set({
    name:"Collegiate",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ColumbiaRiverA").set({
    name:"Columbia River A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ColumbiaRiverB").set({
    name:"Columbia River B",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CommerceA").set({
    name:"Commerce A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CoralReefA").set({
    name:"Coral Reef A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CoralReefB").set({
    name:"Coral Reef B",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CreeksideA").set({
    name:"Creekside A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("DaltonA").set({
    name:"Dalton A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("DarienA").set({
    name:"Darien A",
    state:"Connecticut",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("DickinsonA").set({
    name:"Dickinson A",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("DonovanCatholicA").set({
    name:"Donovan Catholic A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NorthHighlandsA").set({
    name:"North Highlands",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("DoralA").set({
    name:"Doral Academy A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("DunbarA").set({
    name:"Dunbar A",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("EastBrunswickA").set({
    name:"East Brunswick A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("EastBrunswickB").set({
    name:"East Brunswick B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("EastValleyA").set({
    name:"East Valley A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("EastValleyB").set({
    name:"East Valley B",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ElginA").set({
    name:"Elgin Academy A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("EriksenA").set({
    name:"Eriksen A",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("FontbonneA").set({
    name:"Fordham Hall Academy A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("FontbonneB").set({
    name:"Fordham Hall Academy B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("FoothillA").set({
    name:"Foothill A",
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
db.collection("teams").doc("FrenchtownA").set({
    name:"Frenchtown A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("FrenchtownB").set({
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
db.collection("teams").doc("GonzagaA").set({
    name:"Gonzaga Prep A",
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
db.collection("teams").doc("GreatValleyA").set({
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
db.collection("teams").doc("GundersonA").set({
    name:"Gunderson A",
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
db.collection("teams").doc("HunterA").set({
    name:"Hunter College High A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("IolaniA").set({
    name:"Iolani A",
    state:"Hawaii",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("IolaniB").set({
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
db.collection("teams").doc("JesuitA").set({
    name:"Jesuit A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("JesuitB").set({
    name:"Jesuit B",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("JohnPaulIIA").set({
    name:"John Paul II A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("JohnsCreekA").set({
    name:"Johns Creek A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("JohnsonA").set({
    name:"Johnson A",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("JohnsonB").set({
    name:"Johnson B",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("JohnsonC").set({
    name:"Johnson C",
    state:"Kentucky",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("KingA").set({
    name:"King A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("KingB").set({
    name:"King B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("LambertA").set({
    name:"Lambert A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("LargoA").set({
    name:"Largo A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("LargoB").set({
    name:"Largo B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("LeoniaA").set({
    name:"Leonia A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("LesQuizA").set({
    name:"Les Quiz A",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("LewisandClarkA").set({
    name:"Lewis and Clark A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("LexingtonA").set({
    name:"Lexington A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("LincolnA").set({
    name:"Lincoln A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("LynbrookA").set({
    name:"Lynbrook A",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ManateeA").set({
    name:"Manatee A",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MarmionA").set({
    name:"Marmion Academy A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MaryvilleA").set({
    name:"Maryville Jr. High A",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MethactonA").set({
    name:"Methacton A",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MethactonB").set({
    name:"Methacton B",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MillburnA").set({
    name:"Millburn A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MillburnB").set({
    name:"Millburn B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MillburnC").set({
    name:"Millburn C",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MillburnC").set({
    name:"Millburn C",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MontgomeryBlairA").set({
    name:"Montgomery Blair A",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MoorestownA").set({
    name:"Moorestown Friends A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MoorestownB").set({
    name:"Moorestown Friends B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MoravianA").set({
    name:"Moravian Academy A",
    state:"Pennsylvania",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MorristownA").set({
    name:"Morristown East A",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MorristownB").set({
    name:"Morristown East B",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MountainLakesA").set({
    name:"Mountain Lakes A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MtSpokaneA").set({
    name:"Mt. Spokane A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MtSpokaneB").set({
    name:"Mt. Spokane B",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MountVernonA").set({
    name:"Mount Vernon A",
    state:"Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NewarkA").set({
    name:"Newark Academy A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NewarkCharterA").set({
    name:"Newark Charter A",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NewarkCharterB").set({
    name:"Newark Charter B",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NewarkCharterC").set({
    name:"Newark Charter C",
    state:"Deleware",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NewnanA").set({
    name:"Newnan A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NicholsA").set({
    name:"Nichols A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NicholsB").set({
    name:"Nichols B",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NicholsC").set({
    name:"Nichols C",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NitroA").set({
    name:"Nitro A",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NitroB").set({
    name:"Nitro B",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NorthfieldMtHermonA").set({
    name:"Northfield Mt. Hermon A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NorthwesternA").set({
    name:"Northwestern Middle A",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("OakMountainA").set({
    name:"Oak Mountain A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("OratoryA").set({
    name:"Oratory Prep A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoA").set({
    name:"Miami Palmetto A",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoB").set({
    name:"Miami Palmetto B",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoC").set({
    name:"Miami Palmetto C",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoD").set({
    name:"Miami Palmetto D",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoE").set({
    name:"Miami Palmetto E",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoF").set({
    name:"Miami Palmetto F",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoG").set({
    name:"Miami Palmetto G",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoH").set({
    name:"Miami Palmetto H",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoI").set({
    name:"Miami Palmetto I",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("Palmetto").set({
    name:"Miami Palmetto J",
    state:"Florida",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("ParamusA").set({
    name:"Paramus A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("PhillipsExeterA").set({
    name:"Phillips Exeter A",
    state:"New Hampshire",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("PiedmontHillsA").set({
    name:"Piedmont Hills A",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PigeonForgeA").set({
    name:"Pigeon Forge A",
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
db.collection("teams").doc("PioneersA").set({
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
db.collection("teams").doc("PrincetonB").set({
    name:"Princeton B",
    state:"New Jersey",
    division:"Varsity",
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
db.collection("teams").doc("RansomB").set({
    name:"Ransom Everglades B",
    state:"Florida",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RidgewoodA").set({
    name:"Ridgewood A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RidgewoodB").set({
    name:"Ridgewood B",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RichardMontgomeryA").set({
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
db.collection("teams").doc("SalemA").set({
    name:"Salem A",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SalemB").set({
    name:"Salem B",
    state:"Massachusetts",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SandburgA").set({
    name:"Stanburg A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SaratogaA").set({
    name:"Saratoga A",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SaratogaB").set({
    name:"Saratoga B",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SaratogaC").set({
    name:"Saratoga C",
    state:"California",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ScarsdaleA").set({
    name:"Scarsdale A",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SeymourA").set({
    name:"Seymour A",
    state:"Tennessee",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SkyviewA").set({
    name:"Skyview A",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SkyviewB").set({
    name:"Skyview B",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SkyviewC").set({
    name:"Skyview C",
    state:"Montana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StAlbansA").set({
    name:"St. Albans A",
    state:"West Virginia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StAnselmsA").set({
    name:"St. Anselm's A",
    state:"Maryland",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StarrsMillA").set({
    name:"Starr's Mill A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StarrsMillB").set({
    name:"Starr's Mill B",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StarrsMillC").set({
    name:"Starr's Mill C",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StarrsMillD").set({
    name:"Starr's Mill D",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StarrsMillE").set({
    name:"Starr's Mill E",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StevensonA").set({
    name:"Stevenson A",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StevensonB").set({
    name:"Stevenson B",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StevensonC").set({
    name:"Stevenson C",
    state:"Illinois",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StGeorgesA").set({
    name:"St. George's A",
    state:"Washington",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StJosephA").set({
    name:"St. Joseph A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StPetersA").set({
    name:"St. Peter's Prep A",
    state:"New Jersey",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StPetersB").set({
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
db.collection("teams").doc("WoodwardA").set({
    name:"Woodward Academy A",
    state:"Georgia",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ZacharyA").set({
    name:"Zachary A",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ZacharyB").set({
    name:"Zachary B",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ZacharyC").set({
    name:"Zachary C",
    state:"Louisiana",
    division:"Varsity",
rank:1200,
games:0
}),


//JV Teams

db.collection("teams").doc("ApalacheeB").set({
    name:"Apalachee B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("AptakisicA").set({
    name:"Aptakisic A",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ArchimedeanF").set({
    name:"Archimedean F",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("AuburnB").set({
    name:"Auburn B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BASISBrooklynA").set({
    name:"BASIS Brooklyn A",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BeavercreekC").set({
    name:"Beavercreek C",
    state:"Ohio",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BelenC").set({
    name:"Belen Jesuit C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BerkeleyC").set({
    name:"Berkeley Prep C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BerkeleyD").set({
    name:"Berkeley Prep D",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BillingsSeniorB").set({
    name:"Billings Senior B",
    state:"Montana",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BozemanC").set({
    name:"Bozeman C",
    state:"Montana",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BromfieldA").set({
    name:"Bromfield A",
    state:"Massachusetts",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("BrookwoodB").set({
    name:"Brookwood B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CaliforniaA").set({
    name:"California A",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CentennialC").set({
    name:"Centennial HS C",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CentennialD").set({
    name:"Centennial HS D",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CentennialE").set({
    name:"Centennial HS E",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ChambleeA").set({
    name:"Chamblee Charter A",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CharlestonC").set({
    name:"Charleston Catholic C",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CharlestonD").set({
    name:"Charleston Catholic D",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ChattahoocheeB").set({
    name:"Chattahoochee B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("CherokeeBluff").set({
    name:"Cherokee Bluff",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ChurchillNJA").set({
    name:"Churchill A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ChurchillNJB").set({
    name:"Churchill B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ChurchillMDA").set({
    name:"Churchill",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ClassicalB").set({
    name:"Classical Prep B",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ColdhugB").set({
    name:"Team Coldhug B",
    state:"Connecticut",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("DonovanCatholicB").set({
    name:"Donovan Catholic B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("DoralB").set({
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
db.collection("teams").doc("EastValleyC").set({
    name:"East Valley C",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("EastValleyD").set({
    name:"East Valley C",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("EriksenB").set({
    name:"Eriksen B",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("GeorgeWaltonB").set({
    name:"George Walton B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("FontbonneC").set({
    name:"Fordham Hall Academy C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("FordhamB").set({
    name:"Fordham Prep B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("FultonA").set({
    name:"Fulton Science Academy A",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("GeorgetownDayB").set({
    name:"Georgetown Day B",
    state:"DC",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("GeorgeWashingtonNJA").set({
    name:"George Washington A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("GreensFarmsB").set({
    name:"Greens Farms B",
    state:"Connecticut",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HarkerA").set({
    name:"Harker A",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HermannA").set({
    name:"Hermann Homeschool A",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HewlettC").set({
    name:"Hewlett C",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("HewlettD").set({
    name:"Hewlett D",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("HighTechB").set({
    name:"High Tech B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HolmdelB").set({
    name:"Team Holmdel B",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("HolmdelA").set({
    name:"Holmdel",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("HomesteadA").set({
    name:"Homestead A",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HomewoodFlossmoorB").set({
    name:"Homewood-Flossmoor B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HoraceGreeleyB").set({
    name:"Horace Greeley B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HunterB").set({
    name:"Hunter College High B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("HunterC").set({
    name:"Hunter College High C",
    state:"New York",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("IroquoisB").set({
    name:"Iroquois B",
    state:"New York",
    division:"Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("IroquoisB").set({
    name:"Iroquois B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("IroquoisC").set({
    name:"Iroquois C",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("JohnAdamsA").set({
    name:"John Adams A",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("JohnPaulIIB").set({
    name:"John Paul II B",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("KinnelonA").set({
    name:"Kinnelon A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("LargoC").set({
    name:"Largo C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("LeoniaB").set({
    name:"Leonia A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("LibbyA").set({
    name:"Libby Middle School A",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("LexingtonB").set({
    name:"Lexington B",
    state:"Massachusetts",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ManateeB").set({
    name:"Manatee B",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MillburnMSA").set({
    name:"Millburn Middle School A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MillburnA").set({
    name:"Millburn Middle School A",
    state:"New Jersey",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("McLeanA").set({
    name:"McLean A",
    state:"Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MethactonC").set({
    name:"Methacton C",
    state:"Pennsylvania",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MillburnD").set({
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
db.collection("teams").doc("MissionSanJoseA").set({
    name:"Mission San Jose",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MontgomeryBlairB").set({
    name:"Montgomery Blair B",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MontgomeryBlairC").set({
    name:"Montgomery Blair C",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MorgantownA").set({
    name:"Morgantown A",
    state:"West Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MountainLakesB").set({
    name:"Mountain Lakes",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MountainViewCAA").set({
    name:"Mountain View California A",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MtSpokaneC").set({
    name:"Mt. Spokane C",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("MtSpokaneD").set({
    name:"Mt. Spokane D",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NewnanB").set({
    name:"Newnan B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NewnanC").set({
    name:"Newnan C",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NicholsD").set({
    name:"Nichols D",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("NicholsE").set({
    name:"Nichols E",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("OdleA").set({
    name:"Odle Middle A",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoK").set({
    name:"Miami Palmetto K",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoL").set({
    name:"Miami Palmetto L",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoM").set({
    name:"Miami Palmetto M",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PalmettonA").set({
    name:"Miami Palmetto N",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoO").set({
    name:"Miami Palmetto O",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoP").set({
    name:"Miami Palmetto P",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoQ").set({
    name:"Miami Palmetto Q",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PalmettoR").set({
    name:"Miami Palmetto R",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ParkCityA").set({
    name:"Park City A",
    state:"Montana",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ParkCityB").set({
    name:"Park City B",
    state:"Montana",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PhillipsAndoverA").set({
    name:"Phillips Andover A",
    state:"Massachusetts",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PhillipsExeterB").set({
    name:"Phillips Exeter B",
    state:"New Hampshire",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PrincetonC").set({
    name:"Princeton C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("PrincetonD").set({
    name:"Princeton D",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RanneyB").set({
    name:"Ranney B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RansomC").set({
    name:"Ransom Everglades C",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RansomD").set({
    name:"Ransom Everglades D",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RansomE").set({
    name:"Ransom Everglades E",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RansomF").set({
    name:"Ransom Everglades F",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RansomG").set({
    name:"Ransom Everglades G",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RichardMontgomeryB").set({
    name:"Richard Montgomery B",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RidgewoodC").set({
    name:"Ridgewood C",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("RidgewoodD").set({
    name:"Ridgewood D",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("RidgewoodE").set({
    name:"Ridgewood E",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("RidgewoodF").set({
    name:"Ridgewood F",
    state:"New Jersey",
    division:"Junior Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("RiverviewF").set({
    name:"Riverview F",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RiverviewG").set({
    name:"Riverview G",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RiverviewH").set({
    name:"Riverview H",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RiverviewI").set({
    name:"Riverview I",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("RiverviewJ").set({
    name:"Riverview J",
    state:"Florida",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SaggitariusA").set({
    name:"Saggitarius A",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SandburgB").set({
    name:"Stanburg B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SantaClaraA").set({
    name:"Santa Clara A",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SaratogaD").set({
    name:"Saratoga D",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SaratogaE").set({
    name:"Saratoga E",
    state:"California",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SkyviewD").set({
    name:"Skyview D",
    state:"Montana",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("SouthBrunswickA").set({
    name:"South Brunswick A",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StevensonD").set({
    name:"Stevenson D",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StevensonE").set({
    name:"Stevenson E",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StAnselmsB").set({
    name:"St. Anselm's B",
    state:"Maryland",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StevensonF").set({
    name:"Stevenson F",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StJosephB").set({
    name:"St. Joseph B",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("StPetersC").set({
    name:"St. Peter's Prep C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("TenaflyC").set({
    name:"Tenafly C",
    state:"New Jersey",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("TeslaA").set({
    name:"Tesla STEM A",
    state:"Washington",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ThomasJeffersonC").set({
    name:"Thomas Jefferson C",
    state:"Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ThomasJeffersonD").set({
    name:"Thomas Jefferson D",
    state:"Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("ThomasJeffersonE").set({
    name:"Thomas Jefferson E",
    state:"Virginia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("TippecanoeB").set({
    name:"Tippecanoe B",
    state:"Ohio",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("TowerHillC").set({
    name:"Tower Hill C",
    state:"Delaware",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("VeteransB").set({
    name:"Veterans B",
    state:"Georgia",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilliamsBayD").set({
    name:"Williams Bay D",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WinnebagoB").set({
    name:"Winnebago B",
    state:"Illinois",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilmingtonFriendsH").set({
    name:"Wilmington Friends H",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilmingtonFriendsI").set({
    name:"Wilmington Friends I",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilmingtonFriendsJ").set({
    name:"Wilmington Friends J",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilmingtonFriendsK").set({
    name:"Wilmington Friends K",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilmingtonFriendsL").set({
    name:"Wilmington Friends L",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WilmingtonFriendsM").set({
    name:"Wilmington Friends M",
    state:"Deleware",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WiltonAnjoA").set({
    name:"Wilton Anjo",
    state:"Connecticut",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("WiltonLukasA").set({
    name:"Wilton Lukas",
    state:"Connecticut",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("YonkersA").set({
    name:"Yonkers A",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),
db.collection("teams").doc("YonkersB").set({
    name:"Yonkers B",
    state:"New York",
    division:"Junior Varsity",
rank:1200,
games:0
}),


//MS Teams
db.collection("teams").doc("AlmadenMSA").set({
    name:"Challenger-Almaden A",
    state:"California",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("BRIGHTMSA").set({
    name:"BRIGHT Homeschool A",
    state:"New Jersey",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("BurleighManorA").set({
    name:"Burleigh Manor A",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("BurleighManorB").set({
    name:"Burleigh Manor B",
    state:"Maryland",
    division:"Middle School",
rank:1200,
games:0
}),
db.collection("teams").doc("BurleighManorC").set({
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
db.collection("teams").doc("HarvestParkMSA").set({
    name:"Harvest Park A",
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
db.collection("teams").doc("JLSMSA").set({
    name:"JLS A",
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
db.collection("teams").doc("LindseyA").set({
    name:"Lindsey Homeschool A",
    state:"Missouri",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("AltonA").set({
    name:"Alton A",
    state:"Illinois",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("GraniteCityA").set({
    name:"Granite City A",
    state:"Illinois",
    division:"Varsity",
    rank:1200,
games:0
}),
db.collection("teams").doc("SouthwesternA").set({
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
db.collection("teams").doc("NewtonNorthA").set({
    name:"Newton North A",
    state:"Massachusetts",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("NewtonNorthB").set({
    name:"Newton North B",
    state:"Massachusetts",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("NewtonNorthC").set({
    name:"Newton North C",
    state:"Massachusetts",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("NewtonSouthA").set({
    name:"Newton South A",
    state:"Massachusetts",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("NewtonSouthB").set({
    name:"Newton South B",
    state:"Massachusetts",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("NewtonSouthC").set({
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
db.collection("teams").doc("MCAA").set({
    name:"Middlesex County Academy A",
    state:"New Jersey",
    division:"Varsity",
    rank:1200,
    games:0
}),
db.collection("teams").doc("MCAB").set({
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
db.collection("teams").doc("TJClassicA").set({
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
                teamAvgV.push(AScore,BScore)
                teamAvgC.push(AScore,BScore);
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
                            if (gamesA<1){
                                gamesA = 1;
                                db.collection("teams").doc(A).update({games:gamesA});
                            }
                            await docRefB.get().then(async function(doc) {
                                if (doc.exists) {
                                    let gamesB=doc.data().games;
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
                                    rankA = rankA + q*Ka*(AScore/(AScore+BScore)-expScoreA);
                                    rankB = rankB + q*Kb*(BScore/(AScore+BScore)-expScoreB);
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

async function cSetData(){
    K = 100;
    y = false;
    cSet = true;
    
    //Northern California Fall C-Set
    //Prelims
    //Round 1
    await newRank("MissionSanJoseA","SaratogaE",450,70);
    await newRank("HomesteadA","MountainViewCAA",390,130);
    await newRank("SaggitariusA","SantaClaraA",390,180);
    await newRank("SaratogaD","CaliforniaA",340,210);
    await newRank("HarkerA","EriksenB",370,150);
    await newRank("AlmadenMSA","JLSMSA",360,200);
    await newRank("LynbrookA","LesQuizA",450,90);
    await newRank("PiedmontHillsA","SaratogaC",280,230);
    await newRank("GundersonA","EriksenA",300,280);
    await newRank("SaratogaA","FoothillA",440,190);
    await newRank("PioneersA","SaratogaB",350,290);
    //Round 2
    await newRank("LynbrookA","SaratogaC",490,80);
    await newRank("PioneersA","GundersonA",430,210);
    await newRank("FoothillA","PiedmontHillsA",310,300);
    await newRank("HomesteadA","SaratogaE",300,150);
    await newRank("SantaClaraA","HarkerA",320,250);
    await newRank("MissionSanJoseA","SaratogaD",330,270);
    await newRank("SaggitariusA","MountainViewCAA",370,170);
    await newRank("CaliforniaA","EriksenB",400,130);
    await newRank("SaratogaB","EriksenA",340,310);
    await newRank("SaratogaA","LesQuizA",540,90);
    await newRank("AlmadenMSA","HarvestParkMSA",320,270);
    //Round 3
    await newRank("SaratogaD","HomesteadA",330,210);
    await newRank("SaggitariusA","SaratogaE",400,160);
    await newRank("SantaClaraA","CaliforniaA",270,240);
    await newRank("SaratogaC","LesQuizA",280,230);
    await newRank("SaratogaA","SaratogaB",360,220);
    await newRank("EriksenA","PiedmontHillsA",370,180);
    await newRank("PioneersA","LynbrookA",370,210);
    await newRank("GundersonA","FoothillA",260,240);
    await newRank("MissionSanJoseA","EriksenB",400,100);
    await newRank("HarkerA","MountainViewCAA",360,120);
    await newRank("JLSMSA","HarvestParkMSA",260,220);
    //Round 4
    await newRank("SaratogaA","GundersonA",350,170);
    await newRank("MissionSanJoseA","SantaClaraA",340,240);
    await newRank("PioneersA","LesQuizA",560,50)
    await newRank("LynbrookA","FoothillA",390,200);
    await newRank("HomesteadA","EriksenB",400,80);
    await newRank("SaratogaB","PiedmontHillsA",440,140);
    await newRank("CaliforniaA","MountainViewCAA",420,80);
    await newRank("EriksenA","SaratogaC",440,150);
    await newRank("AlmadenMSA","JLSMSA",410,160);
    await newRank("HarkerA","SaratogaE",320,170);
    await newRank("SaggitariusA","SaratogaD",330,180);
    //Round 5
    await newRank("FoothillA","LesQuizA",380,130);
    await newRank("SaratogaB","GundersonA",290,280);
    await newRank("SaratogaA","EriksenA",320,290);
    await newRank("CaliforniaA","SaratogaE",320,140);
    await newRank("PioneersA","SaratogaC",490,110);
    await newRank("LynbrookA","PiedmontHillsA",390,180);
    await newRank("SaggitariusA","EriksenB",440,90);
    await newRank("MissionSanJoseA","MountainViewCAA",270,150);
    await newRank("AlmadenMSA","HarvestParkMSA",390,230);
    await newRank("SaratogaD","HarkerA",300,180);
    await newRank("SantaClaraA","HomesteadA",300,170);
    //Round 6
    await newRank("HarvestParkMSA","JLSMSA",270,150)
    //Varsity Playoffs
    //Semifinals
    await newRank("PioneersA","SaratogaB",370,210);
    await newRank("SaratogaA","LynbrookA",390,170);
    //Finals
    await newRank("PioneersA","SaratogaA",360,230);
    //JV Playoffs
    //Semifinals
    await newRank("SaggitariusA","HarkerA",310,170);
    await newRank("MissionSanJoseA","CaliforniaA",250,220);
    //Finals
    await newRank("MissionSanJoseA","SaggitariusA",280,210);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    allMS.push(teamAvgMS);
    teamAvgV = [];
    teamAvgJV = [];
    teamAvgMS = [];
    console.log("NorCal Fall C");
    
    
    //Eastern Washington C-Set
    //Prelims
    //Round 1
    await newRank("GonzagaA","MtSpokaneA",300,180);
    await newRank("StGeorgesA","FrenchtownA",250,140);
    await newRank("EastValleyA","FrenchtownB",370,70);
    await newRank("MtSpokaneB","EastValleyB",330,100);
    await newRank("LibbyA","EastValleyC",300,70);
    await newRank("MtSpokaneC","MtSpokaneD",260,130);
    //Round 2
    await newRank("MtSpokaneA","FrenchtownA",320,60);
    await newRank("StGeorgesA","MtSpokaneB",200,180);
    await newRank("GonzagaA","FrenchtownB",350,70);
    await newRank("EastValleyB","EastValleyA",190,180);
    await newRank("MtSpokaneD","EastValleyC",170,140);
    await newRank("LibbyA","MtSpokaneC",220,130);
    //Round 3
    await newRank("MtSpokaneB","MtSpokaneA",240,210);
    await newRank("FrenchtownA","FrenchtownB",250,90);
    await newRank("GonzagaA","EastValleyB",340,120);
    await newRank("StGeorgesA","EastValleyA",310,100);
    await newRank("MtSpokaneC","EastValleyC",210,100);
    await newRank("LibbyA","MtSpokaneD",240,110);
    //Round 4
    await newRank("MtSpokaneB","FrenchtownB",410,40);
    await newRank("EastValleyA","MtSpokaneA",250,210);
    await newRank("EastValleyB","FrenchtownA",220,150);
    await newRank("GonzagaA","StGeorgesA",340,180);
    await newRank("LibbyA","MtSpokaneD",220,80);
    await newRank("MtSpokaneC","EastValleyC",150,110);
    //Round 5
    await newRank("MtSpokaneB","EastValleyA",240,160);
    await newRank("StGeorgesA","EastValleyB",200,150);
    await newRank("MtSpokaneA","FrenchtownB",290,60);
    await newRank("GonzagaA","FrenchtownA",280,70);
    await newRank("LibbyA","MtSpokaneC",290,50);
    await newRank("MtSpokaneD","EastValleyC",140,100);
    //Round 6
    await newRank("LibbyA","EastValleyC",180,70);
    await newRank("MtSpokaneD","MtSpokaneC",120,110);
    //Varsity Playoffs
    //Quarterfinals
    await newRank("GonzagaA","FrenchtownB",340,80);
    await newRank("MtSpokaneA","EastValleyA",231,230);
    await newRank("StGeorgesA","EastValleyB",210,100);
    await newRank("MtSpokaneB","FrenchtownA",230,90);
    //Semifinals
    await newRank("MtSpokaneB","StGeorgesA",200,160);
    await newRank("GonzagaA","MtSpokaneA",320,120);
    //Finals
    await newRank("GonzagaA","MtSpokaneB",260,70)
    //JV Playoffs
    //Semifinals
    await newRank("LibbyA","EastValleyC",210,100);
    await newRank("MtSpokaneC","MtSpokaneD",140,90);
    //Finals
    //await newRank("LibbyA","MtSpokaneC",1,0);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("East WA C");
    
    
    //Central Georgia Fall C-Set
    //Prelims
    //Round 1
    await newRank("StarrsMillA","StarrsMillB",440,90);
    await newRank("CreeksideA","StarrsMillC",190,170);
    await newRank("ChambleeA","VeteransA",270,220);
    await newRank("OakMountainA","StarrsMillD",300,140);
    await newRank("StarrsMillE","VeteransB",240,120);
    //Round 2
    await newRank("OakMountainA","StarrsMillE",340,90);
    await newRank("ChambleeA","StarrsMillC",340,60);
    await newRank("CreeksideA","VeteransB",160,150);
    await newRank("StarrsMillA","StarrsMillD",430,90);
    await newRank("StarrsMillB","VeteransA",240,200);
    //Round 3
    await newRank("VeteransA","StarrsMillE",310,140);
    await newRank("OakMountainA","ChambleeA",250,220);
    await newRank("StarrsMillC","StarrsMillD",210,180);
    await newRank("StarrsMillB","VeteransB",370,80);
    await newRank("StarrsMillA","CreeksideA",390,100);
    //Round 4
    await newRank("OakMountainA","StarrsMillB",210,150);
    await newRank("StarrsMillA","ChambleeA",390,170);
    await newRank("VeteransA","CreeksideA",310,40);
    await newRank("StarrsMillD","VeteransB",290,90);
    await newRank("StarrsMillC","StarrsMillE",210,150);
    //Round 5
    await newRank("StarrsMillB","StarrsMillC",340,80);
    await newRank("VeteransA","StarrsMillD",240,180);
    await newRank("OakMountainA","CreeksideA",320,40);
    await newRank("ChambleeA","VeteransB",280,40);
    await newRank("StarrsMillA","StarrsMillE",390,80);
    //Varsity Playoffs
    //Semifinals
    await newRank("StarrsMillA","StarrsMillB",380,100);
    await newRank("OakMountainA","VeteransA",260,140);
    //Finals
    await newRank("StarrsMillA","OakMountainA",260,150);
    //JV Playoffs
    //Finals
    await newRank("ChambleeA","VeteransB",250,40);//Chamblee Charter
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("Central GA C");
    
    
    //Montana C-Set
    //Prelims
    //Round 1
    await newRank("BillingsSeniorA","SkyviewB",250,200);
    await newRank("BozemanB","BillingsWestA",300,140);
    await newRank("BozemanA","SkyviewC",230,80);
    await newRank("BillingsWestB","RiversideA",140,130);
    await newRank("SkyviewA","SkyviewD",430,50);
    await newRank("BillingsSeniorB","ParkCityB",150,80);
    await newRank("BozemanC","ParkCityA",260,80);
    //Round 2
    await newRank("BozemanA","RiversideA",240,90);
    await newRank("SkyviewA","BillingsSeniorA",250,190);
    await newRank("BillingsWestA","BillingsWestB",210,110);
    await newRank("SkyviewB","SkyviewC",300,80);
    await newRank("BozemanB","BozemanC",250,90);
    await newRank("BillingsSeniorB","ParkCityA",190,30);
    await newRank("SkyviewD","ParkCityB",190,110);
    //Round 3
    await newRank("BozemanB","SkyviewC",340,50);
    await newRank("SkyviewA","RiversideA",360,70);
    await newRank("BillingsSeniorA","BillingsWestB",380,70);
    await newRank("BillingsWestA","SkyviewD",240,180);
    await newRank("BozemanA","ParkCityB",340,100);
    await newRank("SkyviewD","ParkCityA",310,60);
    await newRank("BozemanC","BillingsSeniorB",250,30);
    //Round 4
    await newRank("SkyviewA","BillingsWestA",380,80);
    await newRank("BillingsWestB","SkyviewC",110,100);
    await newRank("BozemanB","RiversideA",340,40);
    await newRank("BillingsSeniorA","BozemanA",240,170);
    await newRank("SkyviewB","BillingsSeniorB",210,90);
    await newRank("BozemanC","SkyviewD",140,110);
    await newRank("ParkCityB","ParkCityA",120,50);
    //Round 5
    await newRank("SkyviewB","RiversideA",170,70);
    await newRank("BozemanB","BillingsSeniorA",220,150);
    await newRank("BillingsWestA","BozemanA",180,170);
    await newRank("SkyviewA","SkyviewC",310,50);
    await newRank("BillingsWestB","ParkCityA",120,60);
    await newRank("BozemanC","ParkCityB",190,40);
    await newRank("SkyviewD","BillingsSeniorB",150,90);
    //Varsity Playoffs
    //Semifinals
    await newRank("BozemanB","BillingsSeniorA",260,110);
    await newRank("SkyviewA","SkyviewB",350,70);
    //Finals
    await newRank("SkyviewA","BozemanB",240,90);
    //JV Playoffs
    //Finals
    await newRank("BozemanC","SkyviewD",110,80);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("MT C");
    
    //West Virginia Fall C-Set
    //Prelims
    //Round 1
    await newRank("PocaA","CharlestonB",280,170);
    await newRank("CharlestonA","PocaB",430,10);
    await newRank("GeorgeWashingtonB","NitroB",280,140);
    await newRank("StAlbansA","NitroA",260,200);
    await newRank("JohnAdamsA","CharlestonC",310,70);
    await newRank("MorgantownA","CharlestonD",240,110);
    //Round 2
    await newRank("StAlbansA","PocaB",290,110);
    await newRank("GeorgeWashingtonB","PocaA",280,180);
    await newRank("CharlestonB","NitroB",240,160);
    await newRank("CharlestonA","NitroA",260,220);
    await newRank("CharlestonD","CharlestonC",170,130);
    await newRank("MorgantownA","JohnAdamsA",260,160);
    //Round 3
    await newRank("GeorgeWashingtonB","PocaB",410,20);
    await newRank("StAlbansA","CharlestonB",240,170);
    await newRank("NitroA","PocaA",290,180);
    await newRank("CharlestonA","NitroB",330,160);
    await newRank("JohnAdamsA","CharlestonD",290,100);
    await newRank("MorgantownA","CharlestonC",280,110);
    //Round 4
    await newRank("PocaA","NitroB",220,170);
    await newRank("GeorgeWashingtonB","CharlestonB",300,140);
    await newRank("CharlestonA","StAlbansA",350,90);
    await newRank("NitroA","PocaB",360,10);
    await newRank("JohnAdamsA","CharlestonD",200,160);
    await newRank("MorgantownA","CharlestonC",220,130);
    //Round 5
    await newRank("NitroB","PocaB",220,50);
    await newRank("CharlestonB","NitroA",240,120);
    await newRank("CharlestonA","GeorgeWashingtonB",250,150);
    await newRank("StAlbansA","PocaA",230,140);
    await newRank("CharlestonD","CharlestonC",200,80);
    await newRank("MorgantownA","JohnAdamsA",240,130);
    //Round 6
    await newRank("JohnAdamsA","CharlestonC",260,80);
    await newRank("MorgantownA","CharlestonD",200,60);
    //Varsity Playoffs
    //Semifinals
    await newRank("CharlestonA","NitroA",230,110);
    await newRank("StAlbansA","GeorgeWashingtonB",190,110);
    //Finals
    await newRank("CharlestonA","StAlbansA",240,130);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("WV Fall C");
    
    //Northern New Jersey C-Set
    //Prelims
    //Round 1
    await newRank("MillburnA","StPetersA",550,70);
    await newRank("StJosephA","ParamusA",300,180);
    await newRank("MillburnB","StuyvesantA",280,250);
    await newRank("NewarkA","HewlettB",270,240);
    await newRank("OratoryA","MillburnC",310,280);
    await newRank("MountainLakesA","StPetersB",410,60);
    await newRank("HewlettA","HolmdelA",400,100);
    await newRank("KinnelonA","StPetersC",300,170);
    await newRank("HewlettC","ChurchillNJB",310,200);
    await newRank("ChurchillNJA","SouthBrunswickA",490,90);
    await newRank("StJosephB","BASISBrooklynA",200,180);
    await newRank("HunterB","HolmdelB",470,120);
    await newRank("MillburnD","MountainLakesB",390,160);
    await newRank("TenaflyB","IndianFieldsMSA",130,100);
    await newRank("TenaflyC","BRIGHTMSA",130,100);
    //Round 2
    await newRank("HewlettB","ParamusA",250,170);
    await newRank("MountainLakesA","NewarkA",280,210);
    await newRank("HunterA","StuyvesantA",450,120);
    await newRank("MillburnC","HolmdelA",520,80);
    await newRank("MillburnB","HewlettA",320,250);
    await newRank("OratoryA","StPetersB",390,60);
    await newRank("KinnelonA","StJosephB",260,150);
    await newRank("MillburnA","StJosephA",510,110);
    await newRank("HolmdelB","StPetersC",340,140);
    await newRank("ChurchillNJA","BASISBrooklynA",550,80);
    await newRank("MountainLakesB","ChurchillNJB",370,70);
    await newRank("HunterB","MillburnD",410,180);
    await newRank("HewlettC","SouthBrunswickA",240,200);
    await newRank("TenaflyA","TenaflyB",400,60);
    await newRank("IndianFieldsMSA","BRIGHTMSA",130,80);
    //Round 3
    await newRank("MillburnC","StPetersB",450,100);
    await newRank("MountainLakesA","ParamusA",280,180);
    await newRank("StuyvesantA","StPetersA",360,130);
    await newRank("OratoryA","NewarkA",370,170);
    await newRank("HunterB","ChurchillNJB",530,60);
    await newRank("MillburnB","HolmdelA",430,80);
    await newRank("HunterA","HewlettA",370,180);
    await newRank("MillburnA","HewlettB",470,100);
    await newRank("ChurchillNJA","KinnelonA",430,90);
    await newRank("HewlettC","BASISBrooklynA",360,90);
    await newRank("HolmdelB","StJosephB",360,130);
    await newRank("MillburnD","StPetersC",360,200);
    await newRank("MountainLakesB","SouthBrunswickA",290,150);
    await newRank("TenaflyA","TenaflyC",410,10);
    await newRank("TenaflyB","BRIGHTMSA",290,40);
    //Round 4
    await newRank("StuyvesantA","StJosephA",340,140);
    await newRank("OratoryA","ParamusA",500,100);
    await newRank("HunterA","MillburnC",410,230);
    await newRank("MillburnA","MountainLakesA",540,70);
    await newRank("HewlettA","StPetersA",400,90);
    await newRank("NewarkA","HolmdelA",340,150);
    await newRank("MillburnB","StPetersB",460,80);
    await newRank("ChurchillNJA","HolmdelB",380,210);
    await newRank("HunterB","SouthBrunswickA",480,100);
    await newRank("MillburnD","StJosephB",420,90);
    await newRank("StPetersC","ChurchillNJB",240,130);
    await newRank("MountainLakesB","BASISBrooklynA",320,50);
    await newRank("KinnelonA","HewlettC",240,210);
    await newRank("TenaflyC","IndianFieldsMSA",110,60);
    await newRank("TenaflyA","BRIGHTMSA",380,20);
    //Round 5
    await newRank("MillburnA","OratoryA",490,130);
    await newRank("StuyvesantA","HewlettB",380,110);
    await newRank("ParamusA","HolmdelA",190,180);
    await newRank("HunterA","StPetersB",450,40);
    await newRank("MillburnB","NewarkA",320,190);
    await newRank("MillburnC","StPetersA",460,80);
    await newRank("HewlettA","StJosephA",330,180);
    await newRank("SouthBrunswickA","StPetersC",240,160);
    await newRank("HunterB","BASISBrooklynA",440,70);
    await newRank("ChurchillNJB","StJosephB",170,90);
    await newRank("MountainLakesB","KinnelonA",190,180);
    await newRank("ChurchillNJA","MillburnD",370,210);
    await newRank("HolmdelB","HewlettC",240,180);
    await newRank("TenaflyA","IndianFieldsMSA",250,50);
    await newRank("TenaflyB","TenaflyC",190,60);
    //Varsity Playoffs
    //Octofinals
    await newRank("OratoryA","ParamusA",310,160);
    await newRank("HewlettB","HewlettA",221,220);
    await newRank("StuyvesantA","StJosephA",270,150);
    await newRank("MountainLakesA","NewarkA",220,210);
    //Quarterfinals
    await newRank("MillburnA","MountainLakesA",420,90);
    await newRank("HunterA","StuyvesantA",410,140);
    await newRank("MillburnC","HewlettB",330,110);
    await newRank("MillburnB","OratoryA",240,230);
    //Semifinals
    await newRank("MillburnA","MillburnB",400,120);
    await newRank("HunterA","MillburnC",300,210);
    //Finals
    await newRank("MillburnA","HunterA",280,260);
    //JV Playoffs
    //Quarterfinals
    await newRank("HunterB","StPetersC",500,40);
    await newRank("ChurchillNJA","KinnelonA",350,110);
    await newRank("HolmdelB","MountainLakesB",290,140);
    await newRank("MillburnD","HewlettC",300,140);
    //Semifinals
    await newRank("HunterB","MillburnD",360,170);
    await newRank("ChurchillNJA","HolmdelB",350,170);
    //Finals
    await newRank("HunterB","ChurchillNJA",290,260);
    //MS Playoffs
    //Semifinals
    //await newRank("TenaflyA","IndianFieldsMSA",1,0)
    await newRank("TenaflyB","TenaflyC",160,20);
    //Finals
    await newRank("TenaflyA","TenaflyB",200,90);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    allMS.push(teamAvgMS);
    teamAvgV = [];
    teamAvgJV = [];
    teamAvgMS = [];
    console.log("North NJ C");
    
    //Northern Illinois C-Set
    //Prelims
    //Round 1
    await newRank("StevensonA","StevensonC",340,300);
    await newRank("BarringtonA","BarringtonB",490,90);
    await newRank("SandburgA","MarmionA",320,230);
    await newRank("StevensonB","HinsdaleA",350,210);
    await newRank("StevensonE","StevensonF",400,120);
    await newRank("StevensonD","AptakisicA",360,150);
    //Round 2
    await newRank("MarmionA","BarringtonB",360,180);
    await newRank("HinsdaleA","SandburgA",300,290);
    await newRank("StevensonA","StevensonB",470,170);
    await newRank("StevensonC","BarringtonA",340,330);
    await newRank("StevensonF","AptakisicA",270,160);
    await newRank("StevensonE","SandburgB",470,140);
    //Round 3
    await newRank("StevensonA","MarmionA",460,180);
    await newRank("StevensonC","SandburgA",420,160);
    await newRank("HinsdaleA","BarringtonB",450,120);
    await newRank("StevensonB","BarringtonA",280,260);
    await newRank("SandburgB","StevensonF",340,160);
    await newRank("StevensonE","StevensonD",370,220);
    //Round 4
    await newRank("SandburgA","BarringtonA",350,280);
    await newRank("StevensonA","BarringtonB",530,40);
    await newRank("StevensonC","StevensonB",380,230);
    await newRank("HinsdaleA","MarmionA",400,190);
    await newRank("SandburgB","AptakisicA",310,180);
    await newRank("StevensonD","StevensonF",430,100);
    //Round 5
    await newRank("StevensonB","BarringtonB",390,140);
    await newRank("BarringtonA","HinsdaleA",320,270);
    await newRank("StevensonC","MarmionA",510,130);
    await newRank("StevensonA","SandburgA",440,160);
    await newRank("StevensonD","SandburgB",380,160);
    await newRank("StevensonE","AptakisicA",360,140);
    //Round 6
    await newRank("StevensonA","HinsdaleA",410,200);
    await newRank("BarringtonA","MarmionA",380,200);
    await newRank("StevensonC","BarringtonB",520,60);
    await newRank("SandburgA","SandburgB",270,240);
    //Round 7
    await newRank("StevensonB","MarmionA",340,170);
    await newRank("SandburgA","BarringtonB",370,70);
    await newRank("StevensonA","BarringtonA",320,240);
    await newRank("StevensonC","HinsdaleA",410,130);
    //Varsity Playoffs
    //Finals
    await newRank("StevensonA","StevensonC",390,210);
    //JV Playoffs
    //Finals
    await newRank("StevensonE","StevensonD",290,220);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("North IL C");
    
    //Greater Dayton C-Set
    //Prelims
    //Round 1
    await newRank("TippecanoeA","TippecanoeB",300,60);
    await newRank("GeorgeWashingtonWVA","BeavercreekC",530,70);
    await newRank("BeavercreekA","BeavercreekB",520,90);
    //Round 2
    await newRank("BeavercreekB","TippecanoeB",310,80);
    await newRank("GeorgeWashingtonWVA","TippecanoeA",460,140);
    await newRank("BeavercreekA","BeavercreekC",590,60);
    //Round 3
    await newRank("GeorgeWashingtonWVA","BeavercreekB",450,120);
    await newRank("TippecanoeA","BeavercreekC",220,160);
    await newRank("BeavercreekA","TippecanoeB",270,240);
    //Round 4
    await newRank("BeavercreekB","BeavercreekC",400,120);
    await newRank("GeorgeWashingtonWVA","TippecanoeB",560,20);
    await newRank("BeavercreekA","TippecanoeA",500,70);
    //Round 5
    await newRank("BeavercreekA","GeorgeWashingtonWVA",340,320);
    await newRank("TippecanoeA","BeavercreekB",280,80);
    await newRank("BeavercreekC","TippecanoeB",120,80);
    //Varsity Playoffs
    //Finals
    await newRank("GeorgeWashingtonWVA","BeavercreekA",310,300);//Beavercreek with advantage
    await newRank("BeavercreekA","GeorgeWashingtonWVA",320,290);
    //JV Playoffs
    //Finals
    await newRank("BeavercreekC","TippecanoeB",220,20);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("Greater Dayton C");
    
    //Buffalo C-Set
    //Prelims
    //Round 1
    await newRank("NicholsA","AmherstA",270,240);
    await newRank("NicholsB","AmherstB",320,180);
    await newRank("IroquoisA","NicholsC",340,210);
    await newRank("NicholsD","IroquoisB",250,70);
    //Round 2
    await newRank("NicholsA","AmherstB",250,210);
    await newRank("NicholsB","IroquoisA",350,110);
    await newRank("NicholsC","AmherstA",290,140);
    await newRank("NicholsE","IroquoisB",220,90);
    //Round 3
    await newRank("NicholsA","NicholsC",250,210);
    await newRank("NicholsB","AmherstA",390,120);
    await newRank("IroquoisA","AmherstB",350,110);
    await newRank("NicholsD","NicholsE",260,140);
    //Round 4
    await newRank("IroquoisA","NicholsA",280,170);
    await newRank("NicholsB","NicholsC",370,100);
    await newRank("AmherstB","AmherstA",290,180);
    await newRank("NicholsD","IroquoisB",290,40);
    //Round5
    await newRank("NicholsB","NicholsA",250,180);
    await newRank("NicholsC","AmherstB",170,150);
    await newRank("IroquoisA","AmherstA",270,130);
    await newRank("NicholsE","IroquoisB",140,60);
    //Round 6
    await newRank("NicholsD","NicholsE",190,90);
    //Varsity Playoffs
    //Semifinals
    await newRank("NicholsB","NicholsC",350,180);
    await newRank("IroquoisA","NicholsA",200,180);
    //Finals
    await newRank("NicholsB","IroquoisA",250,140);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    //logTR();
    
    //South Florida Fall C-Set
    //Prelims
    //Round 1
    await newRank("RansomA","PalmettoD",520,30);
    await newRank("ArchimedeanA","PalmettoE",330,130);
    await newRank("ArchimedeanC","PalmettoF",220,90);
    await newRank("CoralReefA","Palmetto",360,70);
    await newRank("PalmettoB","BelenB",280,210);
    await newRank("ArchimedeanE","PalmettoH",220,60);
    await newRank("BelenA","PalmettoI",420,40);
    await newRank("DoralA","ArchimedeanD",330,50);
    await newRank("ArchimedeanB","PalmettoA",240,180);
    await newRank("PalmettoC","WestminsterA",310,160);
    await newRank("CoralReefB","PalmettoG",300,120);
    await newRank("RansomB","PalmettoM",280,190);
    await newRank("PalmettoP","PalmettoO",310,160);
    await newRank("BelenC","PalmettonA",330,110);
    await newRank("PalmettoL","PalmettoQ",310,50);
    await newRank("DoralB","PalmettoR",270,140);
    await newRank("RansomC","PalmettoK",460,90);
    await newRank("ArchimedeanF","RansomD",180,170);
    //Round 2
    await newRank("RansomB","PalmettoC",230,230);
    await newRank("RansomA","CoralReefB",410,90);
    await newRank("PalmettoE","PalmettoD",260,100);
    await newRank("ArchimedeanA","ArchimedeanC",280,150);
    await newRank("Palmetto","PalmettoF",180,170);
    await newRank("CoralReefA","BelenB",300,210);
    await newRank("PalmettoB","PalmettoH",290,140);
    await newRank("BelenA","ArchimedeanE",360,40);
    await newRank("ArchimedeanD","PalmettoI",120,120);
    await newRank("DoralA","PalmettoA",230,190);
    await newRank("ArchimedeanB","WestminsterA",240,180);
    await newRank("RansomD","PalmettoG",210,150);
    await newRank("PalmettoM","PalmettoO",290,150);
    await newRank("PalmettoP","PalmettonA",260,140);
    await newRank("PalmettoL","BelenC",250,190);
    await newRank("DoralB","PalmettoQ",260,90);
    await newRank("RansomC","PalmettoR",450,90);
    await newRank("ArchimedeanF","PalmettoK",250,120);
    //Round 3
    await newRank("WestminsterA","DoralA",280,160);
    await newRank("ArchimedeanB","PalmettoG",240,150);
    await newRank("RansomA","PalmettoC",330,180);
    await newRank("CoralReefB","RansomB",250,220);
    await newRank("ArchimedeanC","PalmettoD",220,150);
    await newRank("ArchimedeanA","Palmetto",390,80);
    await newRank("BelenB","PalmettoF",370,110);
    await newRank("CoralReefA","PalmettoH",410,40);
    await newRank("PalmettoB","BelenA",340,210);
    await newRank("ArchimedeanD","ArchimedeanE",130,120);
    await newRank("PalmettoA","PalmettoI",410,90);
    await newRank("PalmettoE","PalmettoK",270,170);
    await newRank("ArchimedeanF","PalmettoR",220,140);
    await newRank("RansomD","PalmettoO",250,150);
    await newRank("PalmettoM","PalmettonA",330,130);
    await newRank("PalmettoP","PalmettoL",270,180);
    await newRank("BelenC","DoralB",240,200);
    await newRank("RansomC","PalmettoQ",460,50);
    //Round 4
    await newRank("PalmettoA","ArchimedeanE",410,50);
    await newRank("WestminsterA","PalmettoI",290,40);
    await newRank("DoralA","PalmettoG",210,160);
    await newRank("RansomA","ArchimedeanB",450,110);
    await newRank("PalmettoC","PalmettoE",240,230);
    await newRank("CoralReefB","ArchimedeanC",230,130);
    await newRank("PalmettoL","PalmettoD",140,70);
    await newRank("ArchimedeanA","BelenB",330,240);
    await newRank("PalmettoF","PalmettoH",160,70);
    await newRank("BelenA","CoralReefA",280,270);
    await newRank("PalmettoB","RansomB",370,130);
    await newRank("PalmettoR","ArchimedeanD",160,130);
    await newRank("RansomC","BelenC",520,110);
    await newRank("ArchimedeanF","PalmettoQ",320,40);
    await newRank("PalmettoO","PalmettoK",170,150);
    await newRank("RansomD","PalmettonA",280,80);
    await newRank("PalmettoM","PalmettoL",190,130);
    await newRank("PalmettoP","DoralB",300,140);
    //Round 5
    await newRank("PalmettoB","CoralReefA",260,190);
    await newRank("PalmettoA","ArchimedeanD",290,40);
    await newRank("WestminsterA","ArchimedeanE",250,50);
    await newRank("RansomA","PalmettoG",360,80);
    await newRank("DoralA","PalmettoI",250,80);
    await newRank("ArchimedeanB","PalmettoE",230,210);
    await newRank("PalmettoC","ArchimedeanC",230,150);
    await newRank("CoralReefB","Palmetto",260,80);
    await newRank("RansomB","PalmettoD",320,80);
    await newRank("ArchimedeanA","PalmettoH",330,40);
    await newRank("BelenB","PalmettoQ",350,60);
    await newRank("PalmettoM","DoralB",290,90);
    await newRank("RansomC","PalmettoP",390,130);
    await newRank("ArchimedeanF","BelenC",170,170);
    await newRank("PalmettoR","PalmettoO",180,140);
    await newRank("PalmettoK","PalmettonA",150,110);
    await newRank("PalmettoL","RansomD",180,170);
    //Varsity Playoffs
    //Octofinals
    //await newRank("RansomA","PalmettoG",1,0);
    await newRank("PalmettoC","DoralA",200,150);
    await newRank("PalmettoB","ArchimedeanB",320,150);
    await newRank("CoralReefA","RansomB",200,190);
    await newRank("ArchimedeanA","ArchimedeanC",280,70);
    await newRank("BelenB","WestminsterA",300,90);
    await newRank("BelenA","PalmettoE",270,150);
    await newRank("PalmettoA","CoralReefB",210,190);
    //Quarterfinals
    await newRank("RansomA","PalmettoC",310,150);
    await newRank("BelenB","ArchimedeanA",270,220);
    await newRank("BelenA","PalmettoA",230,200);
    await newRank("PalmettoB","CoralReefA",200,140);
    //Semifinals
    await newRank("RansomA","PalmettoB",220,190);
    await newRank("BelenB","BelenA",180,170);
    //Finals
    await newRank("RansomA","BelenB",260,170)
    //JV Playoffs
    //Quarterfinals
    await newRank("RansomC","DoralB",330,140);
    await newRank("RansomD","ArchimedeanF",180,130);
    await newRank("PalmettoP","PalmettoL",250,70);
    await newRank("BelenC","PalmettoM",200,180);
    //Semifinals
    await newRank("PalmettoP","BelenC",240,70);
    await newRank("RansomC","PalmettoP",340,90);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("South FL Fall C");
    
    //Oahu C-Set
    //Prelims
    //Round 1
    await newRank("IolaniB","PunahouB",400,130);
    await newRank("IolaniA","PunahouA",270,260);
    //Round 2
    await newRank("IolaniB","IolaniA",410,160);
    await newRank("PunahouA","PunahouB",320,150);
    //Round 3
    await newRank("IolaniB","PunahouA",350,210);
    await newRank("IolaniA","PunahouB",330,190);
    //Round 4
    await newRank("IolaniB","PunahouB",370,130);
    await newRank("IolaniA","PunahouA",280,280);
    //Round 5
    await newRank("IolaniB","PunahouA",380,120);
    await newRank("IolaniA","PunahouB",380,120);
    //Round 6
    await newRank("PunahouA","PunahouB",200,160);
    await newRank("IolaniA","IolaniB",260,210);
    allV.push(teamAvgV);
    teamAvgV = [];
    console.log("Oahu C");
    
    //Greater Knoxville Fall C-Set
    //Prelims
    //Round 3
    await newRank("SeymourA","PigeonForgeA",230,210);
    await newRank("MaryvilleA","MorristownA",370,140);
    await newRank("GatlinburgB","MorristownB",170,110);
    //Round 2
    await newRank("MaryvilleA","MorristownB",460,40);
    await newRank("GatlinburgA","MorristownA",270,140);
    await newRank("SeymourA","GatlinburgB",280,60);
    //Round 3
    await newRank("GatlinburgA","MorristownB",370,60);
    await newRank("MaryvilleA","SeymourA",320,140);
    await newRank("PigeonForgeA","MorristownA",230,190);
    //Round 4
    await newRank("GatlinburgA","SeymourA",330,90);
    await newRank("PigeonForgeA","MorristownB",250,70);
    await newRank("MorristownA","GatlinburgB",310,30);
    //Round 5
    await newRank("PigeonForgeA","GatlinburgB",310,20);
    await newRank("GatlinburgA","MaryvilleA",220,210);
    await newRank("MorristownA","SeymourA",190,130);
    //Varsity Playoffs
    //Semifinals
    await newRank("GatlinburgA","MorristownA",230,100);
    await newRank("MaryvilleA","PigeonForgeA",400,160);
    //Finals
    await newRank("MaryvilleA","GatlinburgA",230,140);
    allV.push(teamAvgV);
    teamAvgV = [];
    console.log("Greater Knoxville Fall C");
    
    //Eastern Geogia Fall C-Set
    //Prelims
    //Round 1
    await newRank("BrookwoodA","NewnanA",241,240);
    await newRank("LambertA","ChattahoocheeA",310,280);
    await newRank("WoodstockA","WoodwardA",350,90);
    await newRank("CambridgeA","JohnsCreekA",340,210);
    await newRank("CommerceA","ApalacheeA",300,180);
    await newRank("NewnanC","BrookwoodB",230,170);
    await newRank("ChattahoocheeB","NewnanB",240,220);
    await newRank("HermannA","CherokeeBluff",290,220);
    await newRank("FultonA","GeorgeWaltonB",410,40);
    //Round 2
    await newRank("LambertA","NewnanA",430,200);
    await newRank("BrookwoodA","WoodstockA",350,160);
    await newRank("ChattahoocheeA","WoodwardA",410,140);
    await newRank("ApalacheeA","GeorgeWaltonA",220,190);
    await newRank("CambridgeA","CommerceA",510,110);
    await newRank("ChattahoocheeB","ApalacheeB",360,60);
    await newRank("NewnanC","CherokeeBluff",240,190);
    await newRank("NewnanB","FultonA",210,150);
    await newRank("HermannA","GeorgeWaltonB",450,40);
    //Round 3
    await newRank("BrookwoodA","WoodwardA",360,110);
    await newRank("LambertA","WoodstockA",380,120);
    await newRank("ChattahoocheeA","NewnanA",370,170);
    await newRank("CommerceA","GeorgeWaltonA",250,220);
    await newRank("JohnsCreekA","ApalacheeA",340,130);
    await newRank("CherokeeBluff","BrookwoodB",240,220);
    await newRank("FultonA","ApalacheeB",330,100);
    await newRank("NewnanC","GeorgeWaltonB",230,200);
    await newRank("HermannA","NewnanB",310,170);
    //Round 4
    await newRank("LambertA","WoodwardA",460,140);
    await newRank("ChattahoocheeA","BrookwoodA",400,150);
    await newRank("NewnanA","WoodstockA",320,180);
    await newRank("CambridgeA","GeorgeWaltonA",490,80);
    await newRank("JohnsCreekA","CommerceA",280,140);
    await newRank("CherokeeBluff","GeorgeWaltonB",320,70);
    await newRank("HermannA","ChattahoocheeB",260,200);
    await newRank("BrookwoodB","NewnanB",200,190);
    await newRank("NewnanC","ApalacheeB",170,110);
    //Round 5
    await newRank("ChattahoocheeA","WoodstockA",370,200);
    await newRank("WoodwardA","NewnanA",200,180);
    await newRank("LambertA","BrookwoodA",380,200);
    await newRank("CambridgeA","ApalacheeA",510,60);
    await newRank("JohnsCreekA","GeorgeWaltonA",310,150);
    await newRank("HermannA","FultonA",270,200);
    await newRank("CherokeeBluff","NewnanB",230,180);
    await newRank("ChattahoocheeB","NewnanC",230,180);
    await newRank("BrookwoodB","ApalacheeB",250,80);
    //Varsity Playoffs
    //Quarterfinals
    await newRank("CambridgeA","CommerceA",340,130);
    await newRank("LambertA","WoodstockA",370,160);
    await newRank("ChattahoocheeA","NewnanA",350,160);
    await newRank("BrookwoodA","JohnsCreekA",220,190);
    //Semifinals
    await newRank("CambridgeA","BrookwoodA",320,150);
    await newRank("LambertA","ChattahoocheeA",271,270);
    //Finals
    await newRank("CambridgeA","LambertA",310,250);
    //JV Playoffs
    //Semifinals
    await newRank("HermannA","CherokeeBluff",370,80);
    await newRank("ChattahoocheeB","FultonA",210,160);
    //Finals
    await newRank("ChattahoocheeB","HermannA",280,140);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("East GA Fall C");
    
    //Central Florida Fall C-Set
    //Prelims
    //Round 1
    await newRank("PineViewA","RiverviewE",270,220);
    await newRank("RiverviewA","LargoB",280,240);
    await newRank("BerkeleyB","KingA",270,240);
    await newRank("TrinityB","ClassicalA",290,180);
    await newRank("TrinityA","RiverviewD",450,70);
    await newRank("LargoA","RiverviewB",380,160);
    await newRank("KingB","BerkeleyA",340,190);
    await newRank("ManateeA","RiverviewC",320,200);
    await newRank("RiverviewH","LargoC",230,170);
    await newRank("BerkeleyC","RiverviewI",330,20);
    await newRank("RiverviewF","RiverviewG",310,50);
    await newRank("ManateeB","RiverviewJ",330,30);
    await newRank("ClassicalB","BerkeleyD",140,110);
    await newRank("ClassicalB","BerkeleyD",140,110);
    await newRank("ClassicalC","ClassicalE",190,30);
    await newRank("TrinityD","ClassicalD",220,40);
    //Round 2
    await newRank("RiverviewC","ClassicalA",260,220);
    await newRank("KingA","RiverviewD",320,120);
    await newRank("TrinityA","BerkeleyB",320,310);
    await newRank("KingB","RiverviewA",230,220);
    await newRank("LargoA","RiverviewE",350,130);
    await newRank("ManateeA","TrinityB",240,220);
    await newRank("LargoB","BerkeleyA",340,140);
    await newRank("PineViewA","RiverviewB",250,200);
    await newRank("RiverviewF","RiverviewI",360,60);
    await newRank("RiverviewG","RiverviewJ",280,70);
    await newRank("ManateeB","BerkeleyD",170,130);
    await newRank("LargoC","ClassicalB",240,100);
    await newRank("BerkeleyC","RiverviewH",240,180);
    await newRank("TrinityC","ClassicalE",430,10);
    await newRank("ClassicalC","TrinityD",150,140);
    //Round 3
    await newRank("TrinityA","ManateeA",510,80);
    await newRank("TrinityB","RiverviewD",330,130);
    await newRank("KingA","ClassicalA",360,140);
    await newRank("BerkeleyA","PineViewA",230,220);
    await newRank("RiverviewC","BerkeleyB",320,250);
    await newRank("TrinityC","ClassicalD",490,10);
    await newRank("LargoB","RiverviewE",260,160);
    await newRank("RiverviewF","RiverviewH",210,150);
    await newRank("LargoA","RiverviewA",370,150);
    await newRank("KingB","RiverviewB",270,220);
    await newRank("ManateeB","LargoC",230,190);
    await newRank("RiverviewI","RiverviewJ",140,120);
    await newRank("BerkeleyC","ClassicalB",190,170);
    await newRank("TrinityC","ClassicalD",490,10);
    await newRank("TrinityD","ClassicalE",230,40);
    //Round 4
    await newRank("KingB","RiverviewE",330,110);
    await newRank("BerkeleyB","TrinityB",340,160);
    await newRank("BerkeleyC","ManateeB",250,130);
    await newRank("TrinityC","ClassicalC",410,40);
    await newRank("RiverviewA","PineViewA",290,200);
    await newRank("LargoA","BerkeleyA",330,170);
    await newRank("LargoB","RiverviewB",290,150);
    await newRank("LargoC","RiverviewG",190,110);
    await newRank("BerkeleyD","RiverviewI",160,70);
    await newRank("ClassicalD","ClassicalE",60,50);
    await newRank("RiverviewC","RiverviewD",470,110);
    await newRank("RiverviewH","RiverviewJ",180,90);
    await newRank("RiverviewF","ClassicalB",340,130);
    await newRank("KingA","ManateeA",270,160);
    await newRank("TrinityA","ClassicalA",500,70);
    //Round 5
    await newRank("TrinityA","LargoA",310,230);
    await newRank("RiverviewA","ManateeA",300,140);
    await newRank("ClassicalA","BerkeleyA",210,160);
    await newRank("BerkeleyB","RiverviewB",220,150);
    await newRank("TrinityC","TrinityD",330,60);
    await newRank("ClassicalB","RiverviewJ",220,60);
    await newRank("KingB","RiverviewC",320,150);
    await newRank("RiverviewF","ManateeB",210,90);
    await newRank("KingA","PineViewA",290,140);
    await newRank("LargoC","RiverviewI",150,80);
    await newRank("BerkeleyC","RiverviewG",260,70);
    await newRank("RiverviewE","RiverviewD",190,150);
    await newRank("RiverviewH","BerkeleyD",240,100);
    await newRank("TrinityB","LargoB",230,190);
    await newRank("ClassicalC","ClassicalD",120,50);
    //Varsity Playoffs
    //Quarterfinals
    await newRank("TrinityA","RiverviewA",370,100);
    await newRank("LargoA","BerkeleyB",280,130);
    await newRank("KingB","LargoB",190,170);
    await newRank("KingA","RiverviewC",290,150);
    //Semifinals
    await newRank("LargoA","KingB",280,150);
    await newRank("TrinityA","KingA",310,180);
    //Finals
    await newRank("TrinityA","LargoA",330,170);
    //JV Playoffs
    //Quarterfinals
    //await newRank("RiverviewF","BerkeleyD",1,0);
    await newRank("BerkeleyC","RiverviewG",260,50);
    await newRank("LargoC","ManateeB",180,80);
    await newRank("RiverviewH","ClassicalB",210,80);
    //Semifinals
    await newRank("RiverviewH","BerkeleyC",170,130);
    await newRank("RiverviewF","LargoC",200,100);
    await newRank("RiverviewH","RiverviewF",121,120);
    //MS Final
    await newRank("TrinityC","TrinityD",310,40);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    allMS.push(teamAvgMS);
    teamAvgV = [];
    teamAvgJV = [];
    teamAvgMS = [];
    //logTR();
    console.log("Central FL C");
    
    //Western Washington C-Set
    //Prelims
    //Round 1
    await newRank("CentralKitsapA","HolyNamesA",320,200);
    await newRank("OdleA","JohnPaulIIB",250,120);
    await newRank("TeslaA","Duvall",400,70);
    //Round 2
    await newRank("HolyNamesA","JohnPaulIIA",240,200);
    await newRank("TeslaA","JohnPaulIIB",390,70);
    await newRank("OdleA","Duvall",230,130);
    //Round 3
    await newRank("CentralKitsapA","JohnPaulIIA",330,80);
    await newRank("TeslaA","OdleA",330,140);
    await newRank("JohnPaulIIB","Duvall",190,120);
    //Round 4
    await newRank("HolyNamesA","JohnPaulIIA",330,110);
    await newRank("TeslaA","JohnPaulIIB",430,80);
    await newRank("OdleA","Duvall",190,60);
    //Round 5
    await newRank("CentralKitsapA","JohnPaulIIA",320,90);
    await newRank("TeslaA","OdleA",360,110);
    await newRank("JohnPaulIIB","Duvall",160,90);
    //Round 6
    await newRank("HolyNamesA","CentralKitsapA",300,160);
    //Varsity Playoffs
    //Finals
    await newRank("CentralKitsapA","HolyNamesA",250,150);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    //logTR();
    console.log("West WA C");
    
    //Southern Washington C-Set
    //Prelims
    //Round 1
    await newRank("JesuitA","LincolnA",340,180);
    await newRank("ColumbiaRiverA","WestviewA",271,270);//Columbia River wins on
    await newRank("LewisandClarkA","WestviewB",340,110);
    await newRank("JesuitB","ColumbiaRiverB",340,110);
    await newRank("StollerK","StollerT",340,140);
    await newRank("StollerH","StollerW",410,70);
    //Round 2
    await newRank("LewisandClarkA","JesuitB",220,140);
    await newRank("JesuitA","ColumbiaRiverA",360,180);
    await newRank("WestviewA","ColumbiaRiverA",380,100);
    //Round 3
    await newRank("JesuitA","ColumbiaRiverB",430,70);
    await newRank("WestviewA","LewisandClarkA",330,200);
    await newRank("JesuitB","LincolnA",260,210);
    await newRank("ColumbiaRiverA","WestviewB",410,120);
    await newRank("StollerK","StollerW",450,70);
    await newRank("StollerH","StollerT",380,90);
    //Round 4
    await newRank("ColumbiaRiverA","JesuitB",410,130);
    await newRank("WestviewA","LincolnA",350,220);
    await newRank("JesuitA","LewisandClarkA",350,130);
    await newRank("WestviewB","ColumbiaRiverB",250,70);
    await newRank("StollerK","StollerH",350,200);
    await newRank("StollerW","StollerT",210,110);
    //Round 5
    await newRank("LincolnA","ColumbiaRiverB",300,110);
    await newRank("WestviewA","JesuitB",340,110);
    await newRank("ColumbiaRiverA","LewisandClarkA",300,160);
    await newRank("JesuitA","WestviewB",430,80);
    //Varsity Playoffs
    //Semifinals
    await newRank("WestviewA","ColumbiaRiverA",250,170);
    await newRank("JesuitA","LincolnA",320,130);
    //Finals
    await newRank("JesuitA","WestviewA",220,180);
    //MS Playoffs
    //Finals
    await newRank("StollerH","StollerK",240,200);
    allV.push(teamAvgV);
    allMS.push(teamAvgMS);
    teamAvgV = [];
    teamAvgMS = [];
    console.log("South WA C");
    
    //Boston Fall C-Set
    //Prelims
    //Round 1
    await newRank("SalemB","NorthfieldMtHermonA",231,230);
    await newRank("BostonLatinA","TantasquaB",430,110);
    await newRank("PhillipsExeterA","SalemA",380,130);
    await newRank("LexingtonA","TantasquaA",380,150);
    await newRank("LexingtonB","BromfieldA",450,60);
    await newRank("PhillipsExeterB","PhillipsAndoverA",440,60);
    //Round 2
    await newRank("TantasquaA","SalemB",230,210);
    await newRank("PhillipsExeterA","NorthfieldMtHermonA",370,150);
    await newRank("SalemA","TantasquaB",340,150);
    await newRank("BostonLatinA","LexingtonA",320,240);
    await newRank("BromfieldA","PhillipsAndoverA",180,170);
    await newRank("PhillipsExeterB","LexingtonB",310,280);
    //Round 3
    await newRank("BostonLatinA","TantasquaA",470,120);
    await newRank("LexingtonA","SalemA",370,130);
    await newRank("NorthfieldMtHermonA","TantasquaB",280,220);
    await newRank("PhillipsExeterA","SalemB",350,150);
    await newRank("LexingtonB","PhillipsAndoverA",410,110);
    await newRank("PhillipsExeterB","BromfieldA",360,120);
    //Round 4
    await newRank("LexingtonA","NorthfieldMtHermonA",420,140);
    await newRank("PhillipsExeterA","TantasquaB",450,90);
    await newRank("SalemA","TantasquaB",230,200);
    await newRank("BostonLatinA","SalemB",370,180);
    await newRank("LexingtonB","BromfieldA",440,80);
    await newRank("PhillipsExeterB","PhillipsAndoverA",450,110);
    //Round 5
    await newRank("PhillipsExeterA","LexingtonA",370,210);
    await newRank("TantasquaA","NorthfieldMtHermonA",200,180);
    await newRank("BostonLatinA","SalemA",510,70);
    await newRank("SalemB","TantasquaB",280,110);
    await newRank("PhillipsAndoverA","BromfieldA",150,140);
    await newRank("LexingtonB","PhillipsExeterB",270,230);
    //Round 6
    await newRank("LexingtonB","PhillipsAndoverA",300,130);
    await newRank("PhillipsExeterB","BromfieldA",330,130);
    //Varsity Playoffs
    //Semifinals
    await newRank("BostonLatinA","SalemB",290,180);
    await newRank("PhillipsExeterA","LexingtonA",260,250);
    //Finals
    await newRank("BostonLatinA","PhillipsExeterA",300,170);
    //JV Playoffs
    //Finals
    await newRank("PhillipsExeterB","LexingtonB",240,180);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("Boston Fall C");
    
    
    //Washington DC C-Set
    //Prelims
    //Round
    await newRank("CentennialA","GeorgetownDayA",330,310);
    await newRank("ThomasJeffersonA","MountVernonA",490,110);
    await newRank("BASISMcLeanA","ThomasJeffersonB",320,290);
    await newRank("MontgomeryBlairA","GlenelgA",420,150);
    await newRank("StAnselmsA","CentennialB",380,190);
    await newRank("MontgomeryBlairC","CentennialE",260,190);
    await newRank("CentennialC","CentennialD",390,160);
    await newRank("MontgomeryBlairB","ThomasJeffersonD",390,180);
    await newRank("ThomasJeffersonC","GeorgetownDayB",400,160);
    await newRank("McLeanA","StAnselmsB",350,190);
    await newRank("CentennialLaneA","BurleighManorD",330,160);
    await newRank("BurleighManorA","NysmithB",410,60);
    await newRank("BurleighManorC","CentennialLaneB",210,180);
    await newRank("CompassMSA","CentennialLaneC",270,130);
    await newRank("NysmithA","RipponB",310,90);
    await newRank("BurleighManorB","RipponA",330,170);
    //Round 2
    await newRank("GeorgetownDayA","GlenelgA",410,180);
    await newRank("RichardMontgomeryA","BASISMcLeanA",390,290);
    await newRank("ThomasJeffersonB","MountVernonA",540,80);
    await newRank("MontgomeryBlairA","CentennialB",470,140);
    await newRank("ThomasJeffersonA","StAnselmsA",420,230);
    await newRank("RichardMontgomeryB","StAnselmsB",450,100);
    await newRank("MontgomeryBlairB","CentennialE",510,90);
    await newRank("ThomasJeffersonC","ThomasJeffersonD",300,280);
    await newRank("CentennialC","MontgomeryBlairC",320,170);
    await newRank("McLeanA","CentennialD",300,150);
    await newRank("BurleighManorC","RipponB",230,140);
    await newRank("CentennialLaneA","CentennialLaneB",370,90);
    await newRank("BurleighManorB","BurleighManorD",340,150);
    await newRank("BurleighManorA","CentennialLaneC",350,90);
    await newRank("NysmithA","CompassMSA",300,200);
    await newRank("RipponA","NysmithB",260,140);
    //Round 3
    await newRank("MontgomeryBlairA","ThomasJeffersonB",430,210);
    await newRank("StAnselmsA","MountVernonA",470,70);
    await newRank("GlenelgA","CentennialB",290,220);
    await newRank("CentennialA","BASISMcLeanA",350,250);
    await newRank("RichardMontgomeryA","ThomasJeffersonA",380,230);
    await newRank("GeorgetownDayB","StAnselmsB",300,250);
    await newRank("MontgomeryBlairB","McLeanA",350,220);
    await newRank("ThomasJeffersonD","CentennialE",290,210);
    await newRank("RichardMontgomeryB","CentennialLaneC",330,230);
    await newRank("MontgomeryBlairC","CentennialD",350,140);
    await newRank("RipponA","BurleighManorD",250,200);
    await newRank("BurleighManorB","CentennialLaneB",330,120);
    await newRank("NysmithB","CentennialLaneC",310,80);
    await newRank("NysmithA","CentennialLaneA",350,170);
    await newRank("BurleighManorA","BurleighManorC",430,70);
    //Round 4
    await newRank("GeorgetownDayA","MontgomeryBlairA",380,290);
    await newRank("ThomasJeffersonB","CentennialB",520,100);
    await newRank("ThomasJeffersonA","CentennialA",350,260);
    await newRank("RichardMontgomeryA","MountVernonA",500,80);
    await newRank("StAnselmsA","GlenelgA",340,290);
    await newRank("McLeanA","CentennialE",360,120);
    await newRank("ThomasJeffersonD","MontgomeryBlairC",400,200);
    await newRank("GeorgetownDayB","CentennialC",280,250);
    await newRank("MontgomeryBlairB","ThomasJeffersonC",350,280);
    await newRank("BurleighManorD","CentennialLaneB",230,270);
    await newRank("CompassMSA","NysmithB",200,190);
    await newRank("CentennialLaneA","RipponB",340,70);
    await newRank("BurleighManorB","NysmithA",270,210);
    await newRank("BurleighManorA","RipponA",370,140);
    await newRank("BurleighManorC","CentennialLaneC",240,70);
    //Round 5
    await newRank("BASISMcLeanA","StAnselmsA",350,240);
    await newRank("CentennialB","MountVernonA",380,80);
    await newRank("RichardMontgomeryA","MontgomeryBlairA",430,200);
    await newRank("CentennialA","GlenelgA",410,120);
    await newRank("GeorgetownDayA","ThomasJeffersonA",400,240);
    await newRank("CentennialE","CentennialD",240,180);
    await newRank("ThomasJeffersonD","GeorgetownDayB",360,180);
    await newRank("MontgomeryBlairB","RichardMontgomeryB",340,270);
    await newRank("ThomasJeffersonC","CentennialC",360,180);
    await newRank("StAnselmsB","MontgomeryBlairC",250,170);
    await newRank("CompassMSA","CentennialLaneB",320,80);
    await newRank("BurleighManorB","NysmithB",290,150);
    await newRank("CentennialLaneC","RipponB",180,100);
    await newRank("NysmithA","RipponA",270,120);
    await newRank("BurleighManorA","CentennialLaneA",270,230);
    await newRank("BurleighManorD","BurleighManorC",250,100);
    //Varsity Playoffs
    //Semifinals
    await newRank("RichardMontgomeryA","MontgomeryBlairA",360,260);
    await newRank("GeorgetownDayA","ThomasJeffersonA",390,200);
    //Finals
    await newRank("GeorgetownDayA","RichardMontgomeryA",300,280);
    //JV Playoffs
    //Semifinals
    await newRank("MontgomeryBlairB","ThomasJeffersonD",360,190);
    await newRank("RichardMontgomeryB","ThomasJeffersonC",340,200);
    //Finals
    await newRank("MontgomeryBlairB","RichardMontgomeryB",360,160);
    //MS Playoffs
    //Semifinals
    await newRank("BurleighManorB","NysmithA",220,190);
    await newRank("BurleighManorA","CompassMSA",220,190);
    //Finals
    await newRank("BurleighManorA","BurleighManorB",220,140);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    allMS.push(teamAvgMS);
    teamAvgV = [];
    teamAvgJV = [];
    teamAvgMS = [];
    console.log("DC C");
    
    
    //Southern New Jersey C-Set
    //Prelims
    //Round 1
    await newRank("RanneyA","MoorestownB",260,210);
    await newRank("PrincetonB","MoorestownA",360,170);
    await newRank("HighTechA","FontbonneA",400,120);
    await newRank("MoravianA","FontbonneB",440,70);
    await newRank("PrincetonA","DonovanCatholicA",480,30);
    await newRank("EastBrunswickA","EastBrunswickB",370,160);
    await newRank("RanneyB","FordhamB",270,180);
    await newRank("WiltonAnjoA","DonovanCatholicB",280,190);
    await newRank("PrincetonC","PrincetonD",340,150);
    await newRank("MillburnMSA","FontbonneC",350,80);
    //Round 2
    await newRank("EastBrunswickB","FontbonneA",290,200);
    await newRank("MoravianA","DonovanCatholicA",480,40);
    await newRank("EastBrunswickA","PrincetonB",350,210);
    await newRank("MoorestownA","MoorestownB",310,140);
    await newRank("HighTechA","FontbonneB",470,40);
    await newRank("RanneyA","FordhamA",400,160);
    await newRank("WiltonAnjoA","HighTechB",360,120);
    await newRank("MillburnMSA","FordhamB",250,180);
    await newRank("FontbonneC","DonovanCatholicB",270,240);
    await newRank("PrincetonC","RanneyB",270,220);
    //Round 3
    await newRank("PrincetonB","FontbonneA",330,140);
    await newRank("HighTechA","MoorestownB",460,100);
    await newRank("EastBrunswickB","FontbonneB",380,60);
    await newRank("MoravianA","RanneyA",270,250);
    await newRank("PrincetonA","FordhamA",340,130);
    await newRank("RanneyB","FontbonneC",280,100);
    await newRank("WiltonAnjoA","MillburnMSA",250,230);
    await newRank("PrincetonC","HighTechB",330,140);
    await newRank("FordhamB","PrincetonD",230,200);
    //Round 4
    await newRank("PrincetonA","MoravianA",320,220);
    await newRank("RanneyA","DonovanCatholicA",450,30);
    await newRank("EastBrunswickA","FontbonneA",460,30);
    await newRank("EastBrunswickB","PrincetonB",270,260);
    await newRank("HighTechA","MoorestownA",480,90);
    await newRank("FordhamB","FontbonneB",380,40);
    await newRank("FordhamB","DonovanCatholicB",330,100);
    await newRank("WiltonAnjoA","PrincetonD",290,220);
    await newRank("PrincetonC","MillburnMSA",340,190);
    await newRank("HighTechB","FontbonneC",250,100);
    //Round 5
    await newRank("HighTechA","RanneyA",350,160);
    await newRank("FontbonneB","DonovanCatholicA",160,50);
    await newRank("EastBrunswickA","PrincetonA",320,260);
    await newRank("MoravianA","FordhamA",260,180);
    await newRank("MoorestownA","FontbonneA",210,160);
    await newRank("PrincetonB","MoorestownB",250,190);
    await newRank("WiltonAnjoA","RanneyB",300,190);
    await newRank("HighTechB","FordhamB",240,170);
    await newRank("PrincetonC","DonovanCatholicB",300,80);
    //Varsity Playoffs
    //Quarterfinals
    //await newRank("HighTechA","FordhamA",1,0);
    await newRank("EastBrunswickA","PrincetonA",250,230);
    await newRank("MoravianA","EastBrunswickB",220,150);
    await newRank("RanneyA","PrincetonB",320,130);
    //Semifinals
    await newRank("EastBrunswickA","MoravianA",240,150);
    await newRank("HighTechA","RanneyA",290,150);
    //Finals
    await newRank("HighTechA","EastBrunswickA",300,190);
    //JV Playoffs
    //Semifinals
    await newRank("PrincetonC","RanneyB",280,130);
    await newRank("WiltonAnjoA","MillburnMSA",200,120);
    await newRank("PrincetonC","WiltonAnjoA",290,170);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("South NJ C");
    
    
    //Northwest Illinois C-Set
    //Prelims
    //Round 1
    await newRank("HomewoodFlossmoorA","WinnebagoA",310,150);
    await newRank("WilliamsBayA","WilliamsBayC",410,60);
    await newRank("GlenbardWestA","WilliamsBayB",390,150);
    await newRank("AuburnA","ElginA",410,170);
    await newRank("AuburnB","WilliamsBayD",360,50);
    await newRank("HomewoodFlossmoorB","WinnebagoB",270,130);
    //Round 2
    await newRank("ElginA","WilliamsBayC",340,100);
    await newRank("AuburnA","WinnebagoA",400,140);
    await newRank("GlenbardWestA","WilliamsBayA",420,110);
    await newRank("HomewoodFlossmoorA","WilliamsBayB",340,110);
    await newRank("AuburnB","HomewoodFlossmoorB",280,160);
    await newRank("WinnebagoB","WilliamsBayD",180,90);
    //Round 3
    await newRank("AuburnA","GlenbardWestA",330,250);
    await newRank("WinnebagoA","WilliamsBayC",300,120);
    await newRank("ElginA","WilliamsBayB",330,130);
    await newRank("WilliamsBayA","HomewoodFlossmoorA",290,240);
    await newRank("AuburnB","WinnebagoB",430,60);
    await newRank("HomewoodFlossmoorB","WilliamsBayD",330,20);
    //Round 4
    await newRank("GlenbardWestA","WinnebagoA",360,120);
    await newRank("HomewoodFlossmoorA","ElginA",270,240);
    await newRank("AuburnA","WilliamsBayC",440,70);
    await newRank("WilliamsBayA","WilliamsBayB",290,110);
    await newRank("HomewoodFlossmoorB","WinnebagoB",200,130);
    await newRank("AuburnB","WilliamsBayD",350,60);
    //Round5
    await newRank("AuburnA","WilliamsBayB",430,80);
    await newRank("HomewoodFlossmoorA","WilliamsBayC",320,70);
    await newRank("GlenbardWestA","ElginA",241,240);
    await newRank("WilliamsBayA","WinnebagoA",210,160);
    await newRank("AuburnB","HomewoodFlossmoorB",290,90);
    await newRank("WinnebagoB","WilliamsBayD",150,90);
    //Round6
    await newRank("GlenbardWestA","WilliamsBayC",320,80);
    await newRank("AuburnA","HomewoodFlossmoorA",390,110);
    await newRank("ElginA","WilliamsBayA",290,160);
    await newRank("WinnebagoA","WilliamsBayB",170,120);
    await newRank("AuburnB","WinnebagoB",290,90);
    await newRank("HomewoodFlossmoorB","WilliamsBayD",150,60);
    //Round 7
    await newRank("GlenbardWestA","HomewoodFlossmoorB",280,160);
    await newRank("WilliamsBayB","WilliamsBayC",110,100);
    await newRank("AuburnA","WilliamsBayA",320,150);
    await newRank("ElginA","WinnebagoA",480,50);
    //Varsity Playoffs
    //Finals
    await newRank("AuburnA","GlenbardWestA",250,240);
    //4th Place Game
    await newRank("HomewoodFlossmoorA","WilliamsBayA",260,120);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("NW IL C");
    
    
    //Louisiana Fall C-Set
    //Prelims
    //Round 1
    await newRank("BatonRougeMagnetA","NorthwesternA",290,140);
    await newRank("ZacharyA","ZacharyB",260,170);
    await newRank("BatonRougeEpiscopalA","ZacharyC",290,110);
    //Round 2
    await newRank("ZacharyA","NorthwesternA",320,80);
    await newRank("BatonRougeMagnetA","ZacharyC",350,60);
    await newRank("ZacharyB","BatonRougeEpiscopalA",270,180);
    //Round 3
    await newRank("BatonRougeMagnetA","ZacharyA",280,220);
    await newRank("ZacharyB","ZacharyC",280,130);
    await newRank("BatonRougeEpiscopalA","NorthwesternA",290,140);
    //Round 4
    await newRank("BatonRougeMagnetA","BatonRougeEpiscopalA",310,180);
    await newRank("ZacharyA","ZacharyC",330,70);
    await newRank("ZacharyB","NorthwesternA",300,110);
    //Round 5
    await newRank("ZacharyB","BatonRougeMagnetA",240,190);
    await newRank("BatonRougeEpiscopalA","ZacharyA",240,140);
    await newRank("NorthwesternA","ZacharyC",220,150);
    //Varsity Playoffs
    //Semifinals
    await newRank("ZacharyB","ZacharyA",200,140);
    await newRank("BatonRougeEpiscopalA","BatonRougeMagnetA",210,190);
    //Finals
    await newRank("ZacharyB","BatonRougeEpiscopalA",210,160);
    allV.push(teamAvgV);
    teamAvgV = [];
    console.log("Louisiana Fall C");
    
    
    //Eastern Kentucky C-Set
    //Prelims
    //Round 1
    await newRank("BlazerA","RussellA",340,160);
    await newRank("JohnsonA","JohnsonC",410,70);
    await newRank("DunbarA","JohnsonB",410,80);
    //Round 2
    await newRank("BlazerA","DunbarA",320,260);
    await newRank("JohnsonB","JohnsonC",300,110);
    await newRank("JohnsonA","RussellA",370,180);
    //Round 3
    await newRank("JohnsonA","BlazerA",370,190);
    await newRank("RussellA","JohnsonB",250,200);
    await newRank("DunbarA","JohnsonC",390,70);
    //Round 4
    await newRank("JohnsonA","DunbarA",380,140);
    await newRank("BlazerA","JohnsonB",390,120);
    await newRank("RussellA","JohnsonC",290,150);
    //Round 5
    await newRank("DunbarA","RussellA",250,190);
    await newRank("JohnsonA","JohnsonB",350,90);
    await newRank("BlazerA","JohnsonC",390,70);
    //Varsity Playoffs
    //Semifinals
    await newRank("JohnsonA","RussellA",270,160);
    await newRank("BlazerA","DunbarA",211,210);
    //Finals
    await newRank("BlazerA","JohnsonA",270,160);
    allV.push(teamAvgV);
    teamAvgV = [];
    console.log("Eastern KY C");
    
    
    //Bergen County C-Set
    //Prelims
    //Round 1
    await newRank("RidgewoodA","GothamA",410,210);
    await newRank("ColdhugA","LeoniaA",470,160);
    await newRank("TenaflyA","TenaflyB",430,100);
    await newRank("ColdhugB","ChurchillNJB",290,280);
    await newRank("TenaflyC","LeoniaB",310,200);
    await newRank("RidgewoodD","GeorgeWashingtonNJA",270,160);
    //Round 2
    await newRank("RidgewoodA","TenaflyB",530,70);
    await newRank("ColdhugA","GothamA",430,180);
    await newRank("TenaflyA","LeoniaA",280,240);
    await newRank("ChurchillMDA","RidgewoodC",280,240);
    await newRank("TenaflyC","GeorgeWashingtonNJA",400,100);
    await newRank("LeoniaB","RidgewoodD",220,210);
    //Round 3
    await newRank("RidgewoodA","TenaflyA",400,200);
    await newRank("ColdhugA","TenaflyB",510,70);
    await newRank("GothamA","LeoniaA",280,260);
    await newRank("RidgewoodC","GeorgeWashingtonNJA",480,60);
    await newRank("ColdhugB","LeoniaB",380,180);
    await newRank("TenaflyC","RidgewoodD",400,160);
    //Round 4
    await newRank("RidgewoodA","LeoniaA",350,170);
    await newRank("ColdhugA","TenaflyA",450,130);
    await newRank("GothamA","TenaflyB",360,30);
    await newRank("RidgewoodC","RidgewoodD",380,110);
    await newRank("ColdhugB","TenaflyC",290,180);
    await newRank("ChurchillMDA","LeoniaB",350,140);
    //Round 5
    await newRank("ColdhugA","RidgewoodA",400,220);
    await newRank("TenaflyA","GothamA",300,260);
    await newRank("LeoniaA","TenaflyB",350,130);
    await newRank("RidgewoodC","ColdhugB",280,240);
    await newRank("ChurchillMDA","RidgewoodD",370,80);
    //Varsity Playoffs
    //Semifinals
    await newRank("ColdhugA","GothamA",440,100);
    await newRank("RidgewoodA","TenaflyA",290,210);
    //Finals
    await newRank("ColdhugA","RidgewoodA",360,180);
    //JV Playoffs
    await newRank("RidgewoodC","ColdhugB",350,120);
    await newRank("ChurchillMDA","TenaflyC",400,130);
    //Finals
    await newRank("RidgewoodC","ChurchillMDA",270,150);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("Bergen C");
    
    
    //Lower Hudson C-Set
    //Prelims
    //Round 1
    await newRank("DarienA","HoraceGreeleyA",450,90);
    await newRank("GreensFarmsA","WhitePlainsA",360,140);
    await newRank("WiltonAlexA","DaltonA",320,230);
    await newRank("IrvingtonA","ArdsleyA",370,160);
    await newRank("WiltonLukasA","YonkersA",350,210);
    await newRank("HoraceGreeleyB","GreensFarmsB",380,120);
    await newRank("ScarsdaleA","YonkersB",380,180);
    //Round 2
    await newRank("WiltonAlexA","WhitePlainsA",440,100);
    await newRank("DaltonA","HoraceGreeleyA",330,130);
    await newRank("GreensFarmsA","ArdsleyA",260,250);
    await newRank("IrvingtonA","ScarsdaleA",290,250);
    await newRank("YonkersB","GreensFarmsB",300,170);
    await newRank("YonkersA","HoraceGreeleyB",350,170);
    await newRank("DarienA","WiltonLukasA",340,290);
    //Round 3
    await newRank("ScarsdaleA","GreensFarmsA",280,230);
    await newRank("WiltonAlexA","ArdsleyA",460,100);
    await newRank("DarienA","IrvingtonA",330,260);
    await newRank("WhitePlainsA","HoraceGreeleyA",280,150);
    await newRank("HoraceGreeleyB","WiltonLukasA",290,270);
    await newRank("YonkersA","YonkersB",330,170);
    await newRank("DaltonA","GreensFarmsB",360,110);
    //Round 4
    await newRank("DarienA","GreensFarmsA",281,280);//Darien wins on TB
    await newRank("DaltonA","IrvingtonA",310,270);
    await newRank("WiltonAlexA","ScarsdaleA",360,200);
    await newRank("ArdsleyA","HoraceGreeleyA",270,160);
    await newRank("HoraceGreeleyB","YonkersB",370,190);
    await newRank("WiltonLukasA","GreensFarmsB",470,90);
    await newRank("YonkersA","WhitePlainsA",420,150);
    //Round 5
    await newRank("ScarsdaleA","HoraceGreeleyA",450,60);
    await newRank("IrvingtonA","WhitePlainsA",320,170);
    await newRank("GreensFarmsA","DaltonA",310,170);
    await newRank("DarienA","WiltonAlexA",320,290);
    await newRank("WiltonLukasA","HoraceGreeleyB",310,180);
    await newRank("YonkersA","GreensFarmsB",340,80);
    await newRank("HoraceGreeleyB","ArdsleyA",250,140);
    //Varsity Playoffs
    //Quarterfinals
    await newRank("WiltonAlexA","WhitePlainsA",300,180);
    await newRank("DarienA","ArdsleyA",310,180);
    await newRank("DaltonA","IrvingtonA",230,210);
    await newRank("ScarsdaleA","GreensFarmsB",270,220);
    //Semifinals
    await newRank("ScarsdaleA","WiltonAlexA",260,240);
    await newRank("DarienA","DaltonA",320,160);
    //Finals
    await newRank("DarienA","ScarsdaleA",260,230);
    //JV Playoffs
    //JV Semifinals
    await newRank("WiltonLukasA","YonkersB",380,90);
    await newRank("HoraceGreeleyB","YonkersA",270,200);
    await newRank("WiltonLukasA","HoraceGreeleyB",210,190);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("Lower Hudson C");
    
    
    //Delaware C-Set
    //Prelims
    //Round 1
    await newRank("WilmingtonFriendsD","CaravelB",220,140);
    await newRank("NewarkCharterC","WilmingtonFriendsE",260,240);
    await newRank("MethactonA","WilmingtonFriendsC",460,80);
    await newRank("WilmingtonFriendsA","FriendsCentralA",290,150);
    await newRank("MethactonC","WilmingtonFriendsK",470,40);
    await newRank("NewarkCharterA","WilmingtonFriendsG",360,90);
    await newRank("WilmingtonFriendsF","NewarkCharterB",200,180);
    await newRank("WilmingtonFriendsI","WilmingtonFriendsL",290,100);
    await newRank("DickinsonA","CaravelA",280,100);
    await newRank("WilmingtonFriendsH","WilmingtonFriendsM",350,70);
    await newRank("TowerHillC","WilmingtonFriendsJ",200,80);
    await newRank("WilmingtonFriendsB","TowerHillB",270,190);
    await newRank("TowerHillA","MethactonB",290,220);
    //Round 2
    await newRank("TowerHillA","CaravelB",340,80);
    await newRank("GreatValleyA","DickinsonA",470,80);
    await newRank("WilmingtonFriendsA","NewarkCharterC",240,200);
    await newRank("MethactonB","FriendsCentralA",270,160);
    await newRank("MethactonC","WilmingtonFriendsJ",460,50);
    await newRank("MethactonA","WilmingtonFriendsF",390,70);
    await newRank("WilmingtonFriendsI","WilmingtonFriendsM",290,150);
    await newRank("TowerHillB","WilmingtonFriendsC",210,140);
    await newRank("NewarkCharterA","WilmingtonFriendsE",250,180);
    await newRank("WilmingtonFriendsH","WilmingtonFriendsL",300,130);
    await newRank("TowerHillC","WilmingtonFriendsK",250,90);
    await newRank("WilmingtonFriendsD","WilmingtonFriendsG",160,130);
    await newRank("WilmingtonFriendsB","CaravelA",250,110);
    //Round 3
    await newRank("GreatValleyA","WilmingtonFriendsF",480,30);
    await newRank("NewarkCharterC","WilmingtonFriendsG",330,90);
    await newRank("NewarkCharterA","CaravelB",320,30);
    await newRank("TowerHillA","WilmingtonFriendsA",370,150);
    await newRank("WilmingtonFriendsI","WilmingtonFriendsJ",180,170);
    await newRank("MethactonB","WilmingtonFriendsD",390,90);
    await newRank("DickinsonA","TowerHillB",230,150);
    await newRank("WilmingtonFriendsH","WilmingtonFriendsK",420,60);
    await newRank("MethactonC","TowerHillC",430,80);
    await newRank("MethactonA","WilmingtonFriendsB",350,170);
    await newRank("NewarkCharterB","WilmingtonFriendsC",240,110);
    await newRank("NewarkCharterB","WilmingtonFriendsC",240,110);
    await newRank("FriendsCentralA","WilmingtonFriendsE",250,170);
    //Round 4
    await newRank("WilmingtonFriendsM","WilmingtonFriendsJ",190,40);
    await newRank("WilmingtonFriendsL","WilmingtonFriendsK",140,70);
    await newRank("GreatValleyA","WilmingtonFriendsB",470,90);
    await newRank("WilmingtonFriendsE","WilmingtonFriendsD",190,180);
    await newRank("TowerHillA","WilmingtonFriendsG",440,30);
    await newRank("MethactonB","NewarkCharterC",380,190);
    await newRank("WilmingtonFriendsH","TowerHillC",360,70);
    await newRank("FriendsCentralA","CaravelB",280,110);
    await newRank("DickinsonA","NewarkCharterB",200,160);
    await newRank("MethactonC","WilmingtonFriendsI",450,70);
    await newRank("NewarkCharterA","WilmingtonFriendsA",300,200);
    await newRank("TowerHillB","WilmingtonFriendsF",250,150);
    await newRank("CaravelA","WilmingtonFriendsC",140,100);
    //Round 5
    await newRank("WilmingtonFriendsJ","WilmingtonFriendsK",180,60);
    await newRank("MethactonC","WilmingtonFriendsM",400,60);
    await newRank("CaravelA","WilmingtonFriendsF",190,10);
    await newRank("WilmingtonFriendsB","NewarkCharterB",170,100);
    await newRank("NewarkCharterC","CaravelB",250,80);
    await newRank("FriendsCentralA","WilmingtonFriendsG",240,100);
    await newRank("WilmingtonFriendsH","WilmingtonFriendsI",350,80);
    await newRank("WilmingtonFriendsA","WilmingtonFriendsD",210,100);
    await newRank("TowerHillC","WilmingtonFriendsL",220,90);
    await newRank("TowerHillA","WilmingtonFriendsE",280,130);
    await newRank("MethactonA","NewarkCharterA",280,120);
    await newRank("GreatValleyA","WilmingtonFriendsC",580,0);
    //Varsity Playoffs
    //Quarterfinals
    await newRank("NewarkCharterA","MethactonB",280,180);
    //await newRank("MethactonA","WilmingtonFriendsA",1,0);
    await newRank("GreatValleyA","FriendsCentralA",420,80);
    await newRank("TowerHillA","NewarkCharterC",280,140);
    //Semifinals
    await newRank("GreatValleyA","NewarkCharterA",330,160);
    await newRank("MethactonA","TowerHillA",390,100);
    //Finals
    await newRank("GreatValleyA","MethactonA",370,160);
    //JV Playoffs
    //Semifinals
    await newRank("MethactonC","WilmingtonFriendsI",400,50);
    await newRank("WilmingtonFriendsH","TowerHillC",280,60);
    //Finals
    await newRank("MethactonC","WilmingtonFriendsH",340,110);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("Delaware C");
    
    
    //Florida Panhandle C-Set
    //Prelims
    //Round 1
    await newRank("ChoctawhatcheeA","WashingtonA",280,140);
    await newRank("TateA","WashingtonB",310,60);
    await newRank("RansomG","RansomF",81,80);
    //Round 2
    await newRank("CollegiateA","TateA",400,180);
    await newRank("WashingtonA","WashingtonB",250,100);
    await newRank("RansomF","RansomE",100,80);
    //Round 3
    await newRank("CollegiateA","WashingtonA",360,120);
    await newRank("ChoctawhatcheeA","WashingtonB",390,20);
    await newRank("RansomG","RansomE",140,70);
    //Round 4
    await newRank("TateA","ChoctawhatcheeA",290,220);
    await newRank("CollegiateA","WashingtonB",460,60);
    await newRank("RansomG","RansomE",80,40);
    //Round 5
    await newRank("TateA","WashingtonA",210,80);
    await newRank("CollegiateA","ChoctawhatcheeA",460,110);
    await newRank("RansomE","RansomF",70,50);
    //Round 6
    await newRank("RansomG","RansomF",80,40);
    //Varsity Playoofs
    //Varsity Semifinals
    await newRank("CollegiateA","WashingtonA",390,50);
    await newRank("ChoctawhatcheeA","TateA",221,220);
    //Varsity Finals
    await newRank("CollegiateA","ChoctawhatcheeA",420,120);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("Florida Panhandle C");
    
    
    //Southwestern Illinois C-Set
    //Round 1
    await newRank("LindseyA","GraniteCityA",400,130);
    await newRank("AltonA","SouthwesternA",360,140);
    await newRank("KeithCountyDayA","SouthwesternC",330,130);
    await newRank("RochesterA","SouthwesternB",260,180);
    //Round 2
    await newRank("GraniteCityA","SouthwesternA",320,110);
    await newRank("AltonA","LindseyA",340,260);
    await newRank("RochesterA","SouthwesternC",240,200);
    await newRank("KeithCountyDayA","SouthwesternB",250,200);
    //Round 3
    await newRank("AltonA","GraniteCityA",380,140);
    await newRank("LindseyA","SouthwesternA",410,90);
    await newRank("SouthwesternB","SouthwesternC",320,150);
    await newRank("RochesterA","KeithCountyDayA",310,150);
    //Round 4
    await newRank("LindseyA","SouthwesternA",480,60);
    await newRank("AltonA","GraniteCityA",370,180);
    await newRank("KeithCountyDayA","RochesterA",260,160);
    await newRank("SouthwesternB","SouthwesternC",240,100);
    //Round 5
    await newRank("GraniteCityA","SouthwesternA",240,100);
    await newRank("LindseyA","AltonA",310,190);
    await newRank("KeithCountyDayA","SouthwesternB",310,180);
    await newRank("RochesterA","SouthwesternC",260,120);
    //Round 6
    await newRank("LindseyA","GraniteCityA",410,110);
    await newRank("AltonA","SouthwesternA",310,70);
    await newRank("RochesterA","SouthwesternB",280,150);
    await newRank("KeithCountyDayA","SouthwesternC",250,100);
    //Varsity Playoffs
    //Varsity Final
    await newRank("LindseyA","AltonA",280,200);
    //JV Playoffs
    //JV Final
    await newRank("KeithCountyDayA","RochesterA",210,150);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("SW IL C");
    
    
    //Western Pennsylvania C-Set
    //Prelims
    //Round 1
    await newRank("KiskiA","AllderdiceB",450,70);
    await newRank("NorthmontA","SaegertownA",480,80);
    await newRank("NAlleghenyHSA","NCatholicA",261,260);
    await newRank("AllderdiceA","SouthSideA",400,30);
    await newRank("NAlleghenyIntA","SouthSideB",270,220);
    await newRank("AlagarA","NAlleghenyIntB",250,220);
    //Round 2
    await newRank("NorthmontA","AllderdiceB",470,80);
    await newRank("KiskiA","SaegertownA",480,70);
    await newRank("NCatholicA","AllderdiceA",310,200);
    await newRank("NAlleghenyHSA","SouthSideA",280,70);
    await newRank("SouthSideB","AlagarA",300,190);
    await newRank("NAlleghenyIntA","NAlleghenyIntB",340,130);
    //Round 3
    await newRank("AllderdiceB","SouthSideA",260,80);
    await newRank("KiskiA","NAlleghenyHSA",280,240);
    await newRank("NCatholicA","AllderdiceA",300,160);
    await newRank("NorthmontA","SaegertownA",480,80);
    await newRank("SouthSideB","NAlleghenyIntB",250,160);
    await newRank("NAlleghenyIntA","AlagarA",320,210);
    //Round 4
    await newRank("NCatholicA","SaegertownA",300,110);
    await newRank("KiskiA","AllderdiceB",370,120);
    await newRank("NAlleghenyHSA","SouthSideA",370,80);
    await newRank("NorthmontA","AllderdiceA",440,80);
    await newRank("SouthSideB","AlagarA",220,210);
    await newRank("NAlleghenyIntA","NAlleghenyIntB",390,150);
    //Round 5
    await newRank("SaegertownA","SouthSideA",161,160);
    await newRank("KiskiA","AllderdiceA",370,150);
    await newRank("NCatholicA","AllderdiceB",240,110);
    await newRank("NorthmontA","NAlleghenyHSA",420,110);
    await newRank("AlagarA","NAlleghenyIntB",230,140);
    await newRank("NAlleghenyIntA","SouthSideB",270,160);
    //Round 6
    await newRank("NAlleghenyIntA","AlagarA",270,150);
    await newRank("SouthSideB","NAlleghenyIntB",270,90);
    //Varsity Playoffs
    //Varsity Semifinals
    await newRank("NorthmontA","NAlleghenyHSA",350,90);
    await newRank("KiskiA","NCatholicA",270,130);
    //Varsity Finals
    await newRank("NorthmontA","KiskiA",310,230);
    //JV PLayoffs
    //JV Finals
    await newRank("NAlleghenyIntA","SouthSideB",270,140);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("WPenn C");
    
    
    //Mississippi Winter C-Set
    //Prelims
    //Round 1
    await newRank("MadisonA","MadisonB",340,100);
    await newRank("HancockA","PetalB",230,180);
    await newRank("HancockC","HancockB",120,100);
    await newRank("ClintonA","WestJonesA",210,190);
    await newRank("PetalA","RichtonA",390,60);
    await newRank("CHECHA","RichtonB",200,190);
    await newRank("MadisonC","ClintonB",221,220);
    //Round 2
    await newRank("MadisonA","HancockB",470,30);
    await newRank("PetalA","WestJonesA",270,120);
    await newRank("PetalB","RichtonA",260,90);
    await newRank("HancockA","HancockC",280,110);
    await newRank("ClintonB","RichtonB",240,80);
    await newRank("MadisonC","RosaScottA",260,160);
    //Round 3
    await newRank("PetalB","HancockB",260,70);
    await newRank("MadisonB","HancockC",390,50);
    await newRank("MadisonA","WestJonesA",360,120);
    await newRank("PetalA","HancockA",310,150);
    await newRank("ClintonA","RichtonA",330,40);
    await newRank("CHECHA","ClintonB",240,150);
    await newRank("RosaScottA","RichtonB",360,40);
    //Round 4
    await newRank("MadisonA","HancockA",300,120);
    await newRank("HancockC","RichtonA",140,110);
    await newRank("ClintonA","HancockB",180,50);
    await newRank("PetalA","MadisonB",290,130);
    await newRank("PetalB","WestJonesA",250,120);
    await newRank("RosaScottA","ClintonB",260,150);
    await newRank("CHECHA","MadisonC",260,140);
    //Round 5
    await newRank("HancockA","ClintonA",200,160);
    await newRank("WestJonesA","HancockC",210,20);
    await newRank("MadisonB","PetalB",190,150);
    await newRank("PetalA","HancockB",270,40);
    await newRank("MadisonA","RichtonA",310,30);
    await newRank("RosaScottA","CHECHA",240,170);
    await newRank("MadisonC","RichtonB",290,40);
    //Varsity Playoffs
    //Varsity Quarterfinals
    await newRank("MadisonA","HancockC",290,20);
    await newRank("PetalA","WestJonesA",300,60);
    await newRank("PetalB","ClintonA",240,130);
    await newRank("HancockA","MadisonB",200,130);
    //Varsity Semifinals
    await newRank("MadisonA","HancockA",360,50);
    await newRank("PetalA","PetalB",190,120);
    //Varsity Finals
    await newRank("MadisonA","PetalA",290,90);
    //JV Playoffs
    //JV Semifinals
    await newRank("RosaScottA","ClintonB",190,140);
    await newRank("CHECHA","MadisonC",220,100);
    //JV Final
    await newRank("RosaScottA","CHECHA",190,140);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("Mississippi Winter C");
    
    
    //Nevada C-Set
    //Round 1
    await newRank("ClarkB","LibertyA",430,0);
    await newRank("ClarkA","LibertyB",480,60);
    //Round 2
    await newRank("LibertyB","LibertyA",290,0);
    await newRank("ClarkA","ClarkB",540,90);
    //Round 3
    await newRank("ClarkB","LibertyB",300,130);
    await newRank("ClarkA","LibertyA",580,0);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("Nevada C");
    
    //Eastern Iowa C-Set
    //Prelims
    //Round 1
    await newRank("PleasantValleyA","CentralA",280,270);
    await newRank("PleasantValleyB","CentralB",230,160);
    //Round 2
    await newRank("PleasantValleyA","SherrardA",320,160);
    await newRank("CentralB","PleasantValleyB",280,130);
    //Round 3
    await newRank("CentralA","SherrardA",370,170);
    await newRank("CentralB","PleasantValleyB",220,140);
    //Playoffs
    //Varsity Final
    await newRank("PleasantValleyA","CentralA",320,250);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("East Iowa C");
    
    //Upper Hudson C-Set
    //Prelims
    //Round 1
    await newRank("BethlehemA","BerlinB",490,80);
    await newRank("BethlehemB","LaurensA",370,80);
    await newRank("LoyolaA","BethlehemMSA",310,220);
    //Round 2
    await newRank("BethlehemB","BerlinB",260,140);
    await newRank("BethlehemA","LoyolaA",360,190);
    await newRank("BerlinA","LaurensA",360,190);
    //Round 3
    await newRank("BethlehemB","BerlinA",430,70);
    await newRank("BethlehemMSA","BerlinB",360,110);
    await newRank("LoyolaA","LaurensA",340,70);
    //Round 4
    await newRank("LoyolaA","BerlinB",280,80);
    await newRank("BethlehemA","BethlehemB",400,160);
    await newRank("BethlehemMSA","BerlinA",280,120);
    //Round 5
    await newRank("BethlehemA","LaurensA",390,90);
    await newRank("LoyolaA","BerlinA",280,140);
    await newRank("BethlehemB","BethlehemMSA",360,90);
    //Playoffs
    //Varsity Final
    await newRank("BethlehemA","LoyolaA",210,170);
    await newRank("BethlehemB","BethlehemMSA",240,110);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("Upper Hudson C");
    
    //Northern Pennsylvania C-Set
    //Prelims
    //Round 1
    await newRank("WyomingB","NanticokeA",230,190);
    await newRank("ParklandA","WyomingA",260,170);
    //Round 2
    await newRank("WyomingB","WyomingC",250,130);
    await newRank("WyomingA","NanticokeA",270,140);
    //Round 3
    await newRank("WyomingA","WyomingC",210,170);
    await newRank("ParklandA","NanticokeA",230,200);
    //Round 4
    await newRank("ParklandA","WyomingC",300,120);
    await newRank("WyomingA","WyomingB",210,200);
    //Round 5
    await newRank("WyomingB","ParklandA",230,200);
    await newRank("NanticokeA","WyomingC",220,120);
    //Playoffs
    //Finals
    await newRank("ParklandA","WyomingB",220,110);
    allV.push(teamAvgV);
    teamAvgV = [];
    console.log("NorPenn C");
    
    
    //New Hampshire C-Set
    //Round 1
    await newRank("PlymouthB","NewtonSouthB",210,170);
    await newRank("SouthBurlingtonA","NewtonSouthC",400,120);
    await newRank("HanoverA","NewtonNorthB",390,150);
    await newRank("NewtonNorthA","NewtonSouthA",440,110);
    await newRank("PlymouthA","NewtonNorthC",410,140);
    //Round 2
    await newRank("NewtonNorthB","NewtonSouthA",230,190);
    await newRank("NewtonNorthC","NewtonSouthB",230,170);
    await newRank("NewtonNorthA","PlymouthB",350,160);
    await newRank("HanoverA","NewtonSouthC",390,100);
    await newRank("PlymouthA","SouthBurlingtonA",380,170);
    //Round 3
    await newRank("NewtonNorthA","HanoverA",290,250);
    await newRank("PlymouthA","NewtonNorthA",300,170);
    await newRank("NewtonNorthB","NewtonSouthB",390,60);
    await newRank("SouthBurlingtonA","NewtonNorthC",260,250);
    await newRank("NewtonSouthC","PlymouthB",260,160);
    //Round 4
    await newRank("PlymouthA","NewtonSouthC",420,110);
    await newRank("HanoverA","NewtonNorthC",470,110);
    await newRank("NewtonNorthA","NewtonSouthB",490,90);
    await newRank("NewtonSouthA","PlymouthB",360,140);
    await newRank("SouthBurlingtonA","NewtonNorthB",260,240);
    //Round 5
    await newRank("SouthBurlingtonA","NewtonSouthA",300,170);
    await newRank("NewtonNorthB","PlymouthB",320,120);
    await newRank("NewtonNorthC","NewtonSouthC",200,180);
    await newRank("NewtonNorthA","PlymouthA",370,140);
    await newRank("HanoverA","NewtonSouthB",350,70);
    //Playoffs
    //Semifinals
    await newRank("NewtonNorthA","SouthBurlingtonA",380,150);
    await newRank("PlymouthA","HanoverA",280,250);
    //Varsity Finals
    await newRank("NewtonNorthA","PlymouthA",330,160);
    //JV Finals
    await newRank("PlymouthB","NewtonSouthC",160,110);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("NH C");
    
    //Arkansas C-Set
    //Prelims
    //Round 1
    await newRank("RussellvilleB","EpiscopalA",220,140);
    await newRank("FayettevilleA","VanBurenA",330,140);
    await newRank("RussellvilleA","ChesterCountyB",490,50);
    await newRank("ChesterCountyA","FortSmithSouthsideB",290,160);
    await newRank("MountainViewARA","FortSmithSouthsideA",390,140);
    await newRank("DeQueenA","ConwayChristianB",270,100);
    await newRank("ConwayChristianB","FortSmithSouthsideC",200,180);
    //Round 2
    await newRank("MountainViewARA","ChesterCountyA",350,150);
    await newRank("RussellvilleA","ConwayChristianB",520,30);
    await newRank("RussellvilleB","VanBurenA",300,100);
    await newRank("EpiscopalA","ChesterCountyB",210,140);
    await newRank("FortSmithSouthsideA","FortSmithSouthsideC",310,120);
    await newRank("DeQueenA","ConwayChristianA",350,120);
    await newRank("FayettevilleA","FortSmithSouthsideB",250,220);
    //Round 3
    await newRank("RussellvilleA","EpiscopalA",510,50);
    await newRank("FayettevilleA","ConwayChristianB",380,80);
    await newRank("FortSmithSouthsideC","MountainViewARA",340,120);
    await newRank("FortSmithSouthsideA","ConwayChristianA",370,140);
    await newRank("DeQueenA","ChesterCountyA",260,250);
    await newRank("ChesterCountyB","VanBurenA",180,170);
    await newRank("FortSmithSouthsideB","RussellvilleB",250,190);
    //Round 4
    await newRank("FortSmithSouthsideC","ConwayChristianB",210,110);
    await newRank("ChesterCountyA","FortSmithSouthsideA",260,220);
    await newRank("MountainViewARA","DeQueenA",380,180);
    await newRank("RussellvilleA","FayettevilleA",370,250);
    await newRank("EpiscopalA","VanBurenA",230,90);
    await newRank("RussellvilleB","ChesterCountyB",230,90);
    await newRank("ConwayChristianA","FortSmithSouthsideB",230,140);
    //Round 5
    await newRank("FayettevilleA","DeQueenA",260,220);
    await newRank("ConwayChristianA","VanBurenA",180,90);
    await newRank("RussellvilleA","ChesterCountyA",440,110);
    await newRank("RussellvilleB","FortSmithSouthsideC",180,160);
    await newRank("MountainViewARA","FortSmithSouthsideB",230,190);
    await newRank("ConwayChristianB","ChesterCountyB",140,110);
    await newRank("FortSmithSouthsideA","EpiscopalA",350,70);
    //Playoffs
    //Varsity Playoffs
    //Varsity Quarterfinals
    await newRank("RussellvilleA","EpiscopalA",400,90);
    await newRank("FortSmithSouthsideA","DeQueenA",250,200);
    await newRank("FayettevilleA","ConwayChristianA",240,110);
    await newRank("MountainViewARA","ChesterCountyA",360,130);
    //Varsity Semifinals
    await newRank("RussellvilleA","FortSmithSouthsideA",340,120);
    await newRank("MountainViewARA","FayettevilleA",270,140);
    //Varsity Final
    await newRank("RussellvilleA","MountainViewARA",350,160);
    //JV Playoffs (Best of 3 Final)
    await newRank("RussellvilleB","FortSmithSouthsideC",170,100);
    await newRank("RussellvilleB","FortSmithSouthsideC",200,130);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("AK C");
    
    //SoCal C-Set
    //Prelims
    //Round 1
    await newRank("SantaMonicaA","WhitneyA",450,140);
    await newRank("CanyonCrestA","ArcadiaC",410,160);
    await newRank("ArcadiaA","ScrippsRanchA",420,130);
    await newRank("ArcadiaB","TroyA",330,220);
    await newRank("StMargaretsA","LaCanadaA",470,70);
    await newRank("SantiagoA","ArcadiaD",240,210);
    await newRank("PegasusA","VistaVerdeA",240,210);
    //Round 2
    await newRank("SantaMonicaA","ScrippsRanchA",420,200);
    await newRank("CanyonCrestA","ArcadiaB",310,250);
    await newRank("ArcadiaA","CanyonCrestB",530,110);
    await newRank("ArcadiaD","LaCanadaA",260,150);
    await newRank("StMargaretsA","VistaVerdeA",520,70);
    await newRank("SantiagoA","PegasusA",240,220);
    await newRank("TroyA","WhitneyA",390,120);
    //Round 3
    await newRank("SantaMonicaA","CanyonCrestB",340,230);
    await newRank("ScrippsRanchA","TroyA",280,240);
    await newRank("CanyonCrestA","WhitneyA",390,160);
    await newRank("ArcadiaA","ArcadiaC",410,170);
    await newRank("PegasusA","ArcadiaD",330,180);
    await newRank("VistaVerdeA","LaCanadaA",250,160);
    await newRank("StMargaretsA","SantiagoA",370,140);
    //Round 4
    await newRank("SantaMonicaA","ArcadiaC",520,70);
    await newRank("ArcadiaA","ArcadiaB",330,230);
    await newRank("StMargaretsA","PegasusA",300,250);
    await newRank("TroyA","CanyonCrestB",310,300);
    await newRank("SantiagoA","LaCanadaA",390,150);
    await newRank("CanyonCrestA","ScrippsRanchA",390,180);
    //Round 5
    await newRank("CanyonCrestA","CanyonCrestB",450,140);
    await newRank("TroyA","ArcadiaC",290,180);
    await newRank("SantaMonicaA","ArcadiaB",360,190);
    await newRank("ArcadiaA","WhitneyA",530,60);
    await newRank("LaCanadaA","PegasusA",230,220);
    await newRank("StMargaretsA","ArcadiaD",380,110);
    //Playoffs
    //Varsity Playoffs
    //Varsity Quarterfinals
    await newRank("ArcadiaA","ArcadiaC",420,140);
    await newRank("SantaMonicaA","CanyonCrestB",390,170);
    await newRank("CanyonCrestA","ScrippsRanchA",430,110);
    await newRank("ArcadiaB","TroyA",300,210);
    //Varsity Semifinals
    await newRank("ArcadiaA","ArcadiaB",470,120);
    await newRank("CanyonCrestA","SantaMonicaA",320,240);
    //Varsity Finals
    await newRank("ArcadiaA","CanyonCrestA",350,180);
    //JV Playoffs
    //JV Semifinals
    await newRank("StMargaretsA","ArcadiaD",450,70);
    await newRank("SantiagoA","PegasusA",320,120);
    //JV Finals
    await newRank("StMargaretsA","SantiagoA",280,140);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("SoCal C");
    
    
    
    y = true;
    console.log(y);
    
    
    
    
    //Northern California Fall C-Set
    a = 0;
    b = 0;
    c = 0;
    a2 = a2+1;
    b2 = b2+1;
    c2 = c2+1;
    //Prelims
    //Round 1
    await newRank("MissionSanJoseA","SaratogaE",450,70);
    await newRank("HomesteadA","MountainViewCAA",390,130);
    await newRank("SaggitariusA","SantaClaraA",390,180);
    await newRank("SaratogaD","CaliforniaA",340,210);
    await newRank("HarkerA","EriksenB",370,150);
    await newRank("AlmadenMSA","JLSMSA",360,200);
    await newRank("LynbrookA","LesQuizA",450,90);
    await newRank("PiedmontHillsA","SaratogaC",280,230);
    await newRank("GundersonA","EriksenA",300,280);
    await newRank("SaratogaA","FoothillA",440,190);
    await newRank("PioneersA","SaratogaB",350,290);
    //Round 2
    await newRank("LynbrookA","SaratogaC",490,80);
    await newRank("PioneersA","GundersonA",430,210);
    await newRank("FoothillA","PiedmontHillsA",310,300);
    await newRank("HomesteadA","SaratogaE",300,150);
    await newRank("SantaClaraA","HarkerA",320,250);
    await newRank("MissionSanJoseA","SaratogaD",330,270);
    await newRank("SaggitariusA","MountainViewCAA",370,170);
    await newRank("CaliforniaA","EriksenB",400,130);
    await newRank("SaratogaB","EriksenA",340,310);
    await newRank("SaratogaA","LesQuizA",540,90);
    await newRank("AlmadenMSA","HarvestParkMSA",320,270);
    //Round 3
    await newRank("SaratogaD","HomesteadA",330,210);
    await newRank("SaggitariusA","SaratogaE",400,160);
    await newRank("SantaClaraA","CaliforniaA",270,240);
    await newRank("SaratogaC","LesQuizA",280,230);
    await newRank("SaratogaA","SaratogaB",360,220);
    await newRank("EriksenA","PiedmontHillsA",370,180);
    await newRank("PioneersA","LynbrookA",370,210);
    await newRank("GundersonA","FoothillA",260,240);
    await newRank("MissionSanJoseA","EriksenB",400,100);
    await newRank("HarkerA","MountainViewCAA",360,120);
    await newRank("JLSMSA","HarvestParkMSA",260,220);
    //Round 4
    await newRank("SaratogaA","GundersonA",350,170);
    await newRank("MissionSanJoseA","SantaClaraA",340,240);
    await newRank("PioneersA","LesQuizA",560,50)
    await newRank("LynbrookA","FoothillA",390,200);
    await newRank("HomesteadA","EriksenB",400,80);
    await newRank("SaratogaB","PiedmontHillsA",440,140);
    await newRank("CaliforniaA","MountainViewCAA",420,80);
    await newRank("EriksenA","SaratogaC",440,150);
    await newRank("AlmadenMSA","JLSMSA",410,160);
    await newRank("HarkerA","SaratogaE",320,170);
    await newRank("SaggitariusA","SaratogaD",330,180);
    //Round 5
    await newRank("FoothillA","LesQuizA",380,130);
    await newRank("SaratogaB","GundersonA",290,280);
    await newRank("SaratogaA","EriksenA",320,290);
    await newRank("CaliforniaA","SaratogaE",320,140);
    await newRank("PioneersA","SaratogaC",490,110);
    await newRank("LynbrookA","PiedmontHillsA",390,180);
    await newRank("SaggitariusA","EriksenB",440,90);
    await newRank("MissionSanJoseA","MountainViewCAA",270,150);
    await newRank("AlmadenMSA","HarvestParkMSA",390,230);
    await newRank("SaratogaD","HarkerA",300,180);
    await newRank("SantaClaraA","HomesteadA",300,170);
    //Round 6
    await newRank("HarvestParkMSA","JLSMSA",270,150)
    //Varsity Playoffs
    //Semifinals
    await newRank("PioneersA","SaratogaB",370,210);
    await newRank("SaratogaA","LynbrookA",390,170);
    //Finals
    await newRank("PioneersA","SaratogaA",360,230);
    //JV Playoffs
    //Semifinals
    await newRank("SaggitariusA","HarkerA",310,170);
    await newRank("MissionSanJoseA","CaliforniaA",250,220);
    //Finals
    await newRank("MissionSanJoseA","SaggitariusA",280,210);
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
    await newRank("GonzagaA","MtSpokaneA",300,180);
    await newRank("StGeorgesA","FrenchtownA",250,140);
    await newRank("EastValleyA","FrenchtownB",370,70);
    await newRank("MtSpokaneB","EastValleyB",330,100);
    await newRank("LibbyA","EastValleyC",300,70);
    await newRank("MtSpokaneC","MtSpokaneD",260,130);
    //Round 2
    await newRank("MtSpokaneA","FrenchtownA",320,60);
    await newRank("StGeorgesA","MtSpokaneB",200,180);
    await newRank("GonzagaA","FrenchtownB",350,70);
    await newRank("EastValleyB","EastValleyA",190,180);
    await newRank("MtSpokaneD","EastValleyC",170,140);
    await newRank("LibbyA","MtSpokaneC",220,130);
    //Round 3
    await newRank("MtSpokaneB","MtSpokaneA",240,210);
    await newRank("FrenchtownA","FrenchtownB",250,90);
    await newRank("GonzagaA","EastValleyB",340,120);
    await newRank("StGeorgesA","EastValleyA",310,100);
    await newRank("MtSpokaneC","EastValleyC",210,100);
    await newRank("LibbyA","MtSpokaneD",240,110);
    //Round 4
    await newRank("MtSpokaneB","FrenchtownB",410,40);
    await newRank("EastValleyA","MtSpokaneA",250,210);
    await newRank("EastValleyB","FrenchtownA",220,150);
    await newRank("GonzagaA","StGeorgesA",340,180);
    await newRank("LibbyA","MtSpokaneD",220,80);
    await newRank("MtSpokaneC"," EastValleyC",150,110);
    //Round 5
    await newRank("MtSpokaneB","EastValleyA",240,160);
    await newRank("StGeorgesA","EastValleyB",200,150);
    await newRank("MtSpokaneA","FrenchtownB",290,60);
    await newRank("GonzagaA","FrenchtownA",280,70);
    await newRank("LibbyA","MtSpokaneC",290,50);
    await newRank("MtSpokaneD","EastValleyC",140,100);
    //Round 6
    await newRank("LibbyA","EastValleyC",180,70);
    await newRank("MtSpokaneD","MtSpokaneC",120,110);
    //Varsity Playoffs
    //Quarterfinals
    await newRank("GonzagaA","FrenchtownB",340,80);
    await newRank("MtSpokaneA","EastValleyA",231,230);
    await newRank("StGeorgesA","EastValleyB",210,100);
    await newRank("MtSpokaneB","FrenchtownA",230,90);
    //Semifinals
    await newRank("MtSpokaneB","StGeorgesA",200,160);
    await newRank("GonzagaA","MtSpokaneA",320,120);
    //Finals
    await newRank("GonzagaA","MtSpokaneB",260,70)
    //JV Playoffs
    //Semifinals
    await newRank("LibbyA","EastValleyC",210,100);
    await newRank("MtSpokaneC","MtSpokaneD",140,90);
    //Finals
    //await newRank("await newRank("LibbyA","MtSpokaneC",1,0);
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
    await newRank("StarrsMillA","StarrsMillB",440,90);
    await newRank("CreeksideA","StarrsMillC",190,170);
    await newRank("ChambleeA","VeteransA",270,220);
    await newRank("OakMountainA","StarrsMillD",300,140);
    await newRank("StarrsMillE","VeteransB",240,120);
    //Round 2
    await newRank("OakMountainA","StarrsMillE",340,90);
    await newRank("ChambleeA","StarrsMillC",340,60);
    await newRank("CreeksideA","VeteransB",160,150);
    await newRank("StarrsMillA","StarrsMillD",430,90);
    await newRank("StarrsMillB","VeteransA",240,200);
    //Round 3
    await newRank("VeteransA","StarrsMillE",310,140);
    await newRank("OakMountainA","ChambleeA",250,220);
    await newRank("StarrsMillC","StarrsMillD",210,180);
    await newRank("StarrsMillB","VeteransB",370,80);
    await newRank("StarrsMillA","CreeksideA",390,100);
    //Round 4
    await newRank("OakMountainA","StarrsMillB",210,150);
    await newRank("StarrsMillA","ChambleeA",390,170);
    await newRank("VeteransA","CreeksideA",310,40);
    await newRank("StarrsMillD","VeteransB",290,90);
    await newRank("StarrsMillC","StarrsMillE",210,150);
    //Round 5
    await newRank("StarrsMillB","StarrsMillC",340,80);
    await newRank("VeteransA","StarrsMillD",240,180);
    await newRank("OakMountainA","CreeksideA",320,40);
    await newRank("ChambleeA","VeteransB",280,40);
    await newRank("StarrsMillA","StarrsMillE",390,80);
    //Varsity Playoffs
    //Semifinals
    await newRank("StarrsMillA","StarrsMillB",380,100);
    await newRank("OakMountainA","VeteransA",260,140);
    //Finals
    await newRank("StarrsMillA","OakMountainA",260,150);
    //JV Playoffs
    //Finals
    await newRank("ChambleeA","VeteransB",250,40);//Chamblee Charter
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
    await newRank("BillingsSeniorA","SkyviewB",250,200);
    await newRank("BozemanB","BillingsWestA",300,140);
    await newRank("BozemanA","SkyviewC",230,80);
    await newRank("BillingsWestB","RiversideA",140,130);
    await newRank("SkyviewA","SkyviewD",430,50);
    await newRank("BillingsSeniorB","ParkCityB",150,80);
    await newRank("BozemanC","ParkCityA",260,80);
    //Round 2
    await newRank("BozemanA","RiversideA",240,90);
    await newRank("SkyviewA","BillingsSeniorA",250,190);
    await newRank("BillingsWestA","BillingsWestB",210,110);
    await newRank("SkyviewB","SkyviewC",300,80);
    await newRank("BozemanB","BozemanC",250,90);
    await newRank("BillingsSeniorB","ParkCityA",190,30);
    await newRank("SkyviewD","ParkCityB",190,110);
    //Round 3
    await newRank("BozemanB","SkyviewC",340,50);
    await newRank("SkyviewA","RiversideA",360,70);
    await newRank("BillingsSeniorA","BillingsWestB",380,70);
    await newRank("BillingsWestA","SkyviewD",240,180);
    await newRank("BozemanA","ParkCityB",340,100);
    await newRank("SkyviewD","ParkCityA",310,60);
    await newRank("BozemanC","BillingsSeniorB",250,30);
    //Round 4
    await newRank("SkyviewA","BillingsWestA",380,80);
    await newRank("BillingsWestB","SkyviewC",110,100);
    await newRank("BozemanB","RiversideA",340,40);
    await newRank("BillingsSeniorA","BozemanA",240,170);
    await newRank("SkyviewB","BillingsSeniorB",210,90);
    await newRank("BozemanC","SkyviewD",140,110);
    await newRank("ParkCityB","ParkCityA",120,50);
    //Round 5
    await newRank("SkyviewB","RiversideA",170,70);
    await newRank("BozemanB","BillingsSeniorA",220,150);
    await newRank("BillingsWestA","BozemanA",180,170);
    await newRank("SkyviewA","SkyviewC",310,50);
    await newRank("BillingsWestB","ParkCityA",120,60);
    await newRank("BozemanC","ParkCityB",190,40);
    await newRank("SkyviewD","BillingsSeniorB",150,90);
    //Varsity Playoffs
    //Semifinals
    await newRank("BozemanB","BillingsSeniorA",260,110);
    await newRank("SkyviewA","SkyviewB",350,70);
    //Finals
    await newRank("SkyviewA","BozemanB",240,90);
    //JV Playoffs
    //Finals
    await newRank("BozemanC","SkyviewD",110,80);
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
    await newRank("PocaA","CharlestonB",280,170);
    await newRank("CharlestonA","PocaB",430,10);
    await newRank("GeorgeWashingtonB","NitroB",280,140);
    await newRank("StAlbansA","NitroA",260,200);
    await newRank("JohnAdamsA","CharlestonC",310,70);
    await newRank("MorgantownA","CharlestonD",240,110);
    //Round 2
    await newRank("StAlbansA","PocaB",290,110);
    await newRank("GeorgeWashingtonB","PocaA",280,180);
    await newRank("CharlestonB","NitroB",240,160);
    await newRank("CharlestonA","NitroA",260,220);
    await newRank("CharlestonD","CharlestonC",170,130);
    await newRank("MorgantownA","JohnAdamsA",260,160);
    //Round 3
    await newRank("GeorgeWashingtonB","PocaB",410,20);
    await newRank("StAlbansA","CharlestonB",240,170);
    await newRank("NitroA","PocaA",290,180);
    await newRank("CharlestonA","NitroB",330,160);
    await newRank("JohnAdamsA","CharlestonD",290,100);
    await newRank("MorgantownA","CharlestonC",280,110);
    //Round 4
    await newRank("PocaA","NitroB",220,170);
    await newRank("GeorgeWashingtonB","CharlestonB",300,140);
    await newRank("CharlestonA","StAlbansA",350,90);
    await newRank("NitroA","PocaB",360,10);
    await newRank("JohnAdamsA","CharlestonD",200,160);
    await newRank("MorgantownA","CharlestonC",220,130);
    //Round 5
    await newRank("NitroB","PocaB",220,50);
    await newRank("CharlestonB","NitroA",240,120);
    await newRank("CharlestonA","GeorgeWashingtonB",250,150);
    await newRank("StAlbansA","PocaA",230,140);
    await newRank("CharlestonD","CharlestonC",200,80);
    await newRank("MorgantownA","JohnAdamsA",240,130);
    //Round 6
    await newRank("JohnAdamsA","CharlestonC",260,80);
    await newRank("MorgantownA","CharlestonD",200,60);
    //Varsity Playoffs
    //Semifinals
    await newRank("CharlestonA","NitroA",230,110);
    await newRank("StAlbansA","GeorgeWashingtonB",190,110);
    //Finals
    await newRank("CharlestonA","StAlbansA",240,130);
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
    await newRank("MillburnA","StPetersA",550,70);
    await newRank("StJosephA","ParamusA",300,180);
    await newRank("MillburnB","StuyvesantA",280,250);
    await newRank("NewarkA","HewlettB",270,240);
    await newRank("OratoryA","MillburnC",310,280);
    await newRank("MountainLakesA","StPetersB",410,60);
    await newRank("HewlettA","HolmdelA",400,100);
    await newRank("KinnelonA","StPetersC",300,170);
    await newRank("HewlettC","ChurchillNJB",310,200);
    await newRank("ChurchillNJA","SouthBrunswickA",490,90);
    await newRank("StJosephB","BASISBrooklynA",200,180);
    await newRank("HunterB","HolmdelB",470,120);
    await newRank("MillburnD","MountainLakesB",390,160);
    await newRank("TenaflyB","IndianFieldsMSA",130,100);
    await newRank("TenaflyC","BRIGHTMSA",130,100);
    //Round 2
    await newRank("HewlettB","ParamusA",250,170);
    await newRank("MountainLakesA","NewarkA",280,210);
    await newRank("HunterA","StuyvesantA",450,120);
    await newRank("MillburnC","HolmdelA",520,80);
    await newRank("MillburnB","HewlettA",320,250);
    await newRank("OratoryA","StPetersB",390,60);
    await newRank("KinnelonA","StJosephB",260,150);
    await newRank("MillburnA","StJosephA",510,110);
    await newRank("HolmdelB","StPetersC",340,140);
    await newRank("ChurchillNJA","BASISBrooklynA",550,80);
    await newRank("MountainLakesB","ChurchillNJB",370,70);
    await newRank("HunterB","MillburnD",410,180);
    await newRank("HewlettC","SouthBrunswickA",240,200);
    await newRank("TenaflyA","TenaflyB",400,60);
    await newRank("IndianFieldsMSA","BRIGHTMSA",130,80);
    //Round 3
    await newRank("MillburnC","StPetersB",450,100);
    await newRank("MountainLakesA","ParamusA",280,180);
    await newRank("StuyvesantA","StPetersA",360,130);
    await newRank("OratoryA","NewarkA",370,170);
    await newRank("HunterB","ChurchillNJB",530,60);
    await newRank("MillburnB","HolmdelA",430,80);
    await newRank("HunterA","HewlettA",370,180);
    await newRank("MillburnA","HewlettB",470,100);
    await newRank("ChurchillNJA","KinnelonA",430,90);
    await newRank("HewlettC","BASISBrooklynA",360,90);
    await newRank("HolmdelB","StJosephB",360,130);
    await newRank("MillburnD","StPetersC",360,200);
    await newRank("MountainLakesB","SouthBrunswickA",290,150);
    await newRank("TenaflyA","TenaflyC",410,10);
    await newRank("TenaflyB","BRIGHTMSA",290,40);
    //Round 4
    await newRank("StuyvesantA","StJosephA",340,140);
    await newRank("OratoryA","ParamusA",500,100);
    await newRank("HunterA","MillburnC",410,230);
    await newRank("MillburnA","MountainLakesA",540,70);
    await newRank("HewlettA","StPetersA",400,90);
    await newRank("NewarkA","HolmdelA",340,150);
    await newRank("MillburnB","StPetersB",460,80);
    await newRank("ChurchillNJA","HolmdelB",380,210);
    await newRank("HunterB","SouthBrunswickA",480,100);
    await newRank("MillburnD","StJosephB",420,90);
    await newRank("StPetersC","ChurchillNJB",240,130);
    await newRank("MountainLakesB","BASISBrooklynA",320,50);
    await newRank("KinnelonA","HewlettC",240,210);
    await newRank("TenaflyC","IndianFieldsMSA",110,60);
    await newRank("TenaflyA","BRIGHTMSA",380,20);
    //Round 5
    await newRank("MillburnA","OratoryA",490,130);
    await newRank("StuyvesantA","HewlettB",380,110);
    await newRank("ParamusA","HolmdelA",190,180);
    await newRank("HunterA","StPetersB",450,40);
    await newRank("MillburnB","NewarkA",320,190);
    await newRank("MillburnC","StPetersA",460,80);
    await newRank("HewlettA","StJosephA",330,180);
    await newRank("SouthBrunswickA","StPetersC",240,160);
    await newRank("HunterB","BASISBrooklynA",440,70);
    await newRank("ChurchillNJB","StJosephB",170,90);
    await newRank("MountainLakesB","KinnelonA",190,180);
    await newRank("ChurchillNJA","MillburnD",370,210);
    await newRank("HolmdelB","HewlettC",240,180);
    await newRank("TenaflyA","IndianFieldsMSA",250,50);
    await newRank("TenaflyB","TenaflyC",190,60);
    //Varsity Playoffs
    //Octofinals
    await newRank("OratoryA","ParamusA",310,160);
    await newRank("HewlettB","HewlettA",221,220);
    await newRank("StuyvesantA","StJosephA",270,150);
    await newRank("MountainLakesA","NewarkA",220,210);
    //Quarterfinals
    await newRank("MillburnA","MountainLakesA",420,90);
    await newRank("HunterA","StuyvesantA",410,140);
    await newRank("MillburnC","HewlettB",330,110);
    await newRank("MillburnB","OratoryA",240,230);
    //Semifinals
    await newRank("MillburnA","MillburnB",400,120);
    await newRank("HunterA","MillburnC",300,210);
    //Finals
    await newRank("MillburnA","HunterA",280,260);
    //JV Playoffs
    //Quarterfinals
    await newRank("HunterB","StPetersC",500,40);
    await newRank("ChurchillNJA","KinnelonA",350,110);
    await newRank("HolmdelB","MountainLakesB",290,140);
    await newRank("MillburnD","HewlettC",300,140);
    //Semifinals
    await newRank("HunterB","MillburnD",360,170);
    await newRank("ChurchillNJA","HolmdelB",350,170);
    //Finals
    await newRank("HunterB","ChurchillNJA",290,260);
    //MS Playoffs
    //Semifinals
    //await newRank("TenaflyA","IndianFieldsMSA",1,0)
    await newRank("TenaflyB","TenaflyC",160,20);
    //Finals
    await newRank("TenaflyA","TenaflyB",200,90);
    console.log("Northern NJ C q V: "+qV[a2]);
    console.log("Northern NJ C q JV: "+qJV[b2]);
    console.log("Northern NJ C q MS: "+qMS[c2]);
    a = 0;
    b = 0;
    c = 0;
    
    //Northern Illinois C-Set
    a2 = a2+1;
    b2 = b2+1;
    //Prelims
    //Round 1
    await newRank("StevensonA","StevensonC",340,300);
    await newRank("BarringtonA","BarringtonB",490,90);
    await newRank("SandburgA","MarmionA",320,230);
    await newRank("StevensonB","HinsdaleA",350,210);
    await newRank("StevensonE","StevensonF",400,120);
    await newRank("StevensonD","AptakisicA",360,150);
    //Round 2
    await newRank("MarmionA","BarringtonB",360,180);
    await newRank("HinsdaleA","SandburgA",300,290);
    await newRank("StevensonA"," StevensonB",470,170);
    await newRank("StevensonC","BarringtonA",340,330);
    await newRank("StevensonF","AptakisicA",270,160);
    await newRank("StevensonE","SandburgB",470,140);
    //Round 3
    await newRank("StevensonA","MarmionA",460,180);
    await newRank("StevensonC","SandburgA",420,160);
    await newRank("HinsdaleA","BarringtonB",450,120);
    await newRank("StevensonB","BarringtonA",280,260);
    await newRank("SandburgB","StevensonF",340,160);
    await newRank("StevensonE","StevensonD",370,220);
    //Round 4
    await newRank("SandburgA","BarringtonA",350,280);
    await newRank("StevensonA","BarringtonB",530,40);
    await newRank("StevensonC","StevensonB",380,230);
    await newRank("HinsdaleA","MarmionA",400,190);
    await newRank("SandburgB","AptakisicA",310,180);
    await newRank("StevensonD","StevensonF",430,100);
    //Round 5
    await newRank("StevensonB","BarringtonB",390,140);
    await newRank("BarringtonA","HinsdaleA",320,270);
    await newRank("StevensonC","MarmionA",510,130);
    await newRank("StevensonA","SandburgA",440,160);
    await newRank("StevensonD","SandburgB",380,160);
    await newRank("StevensonE","AptakisicA",360,140);
    //Round 6
    await newRank("StevensonA","HinsdaleA",410,200);
    await newRank("BarringtonA","MarmionA",380,200);
    await newRank("StevensonC","BarringtonB",520,60);
    await newRank("SandburgA","SandburgB",270,240);
    //Round 7
    await newRank("StevensonB","MarmionA",340,170);
    await newRank("SandburgA","BarringtonB",370,70);
    await newRank("StevensonA","BarringtonA",320,240);
    await newRank("StevensonC","HinsdaleA",410,130);
    //Varsity Playoffs
    //Finals
    await newRank("StevensonA","StevensonC",390,210);
    //JV Playoffs
    //Finals
    await newRank("StevensonE","StevensonD",290,220);
    console.log("Northern IL C q V: "+qV[a2]);
    console.log("Northern IL C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    //Greater Dayton C-Set
    a2 = a2+1;
    b2 = b2+1;
    //Prelims
    //Round 1
    await newRank("TippecanoeA","TippecanoeB",300,60);
    await newRank("GeorgeWashingtonNJA","BeavercreekC",530,70);
    await newRank("BeavercreekA","BeavercreekB",520,90);
    //Round 2
    await newRank("BeavercreekB","TippecanoeB",310,80);
    await newRank("GeorgeWashingtonNJA","TippecanoeA",460,140);
    await newRank("BeavercreekA","BeavercreekC",590,60);
    //Round 3
    await newRank("GeorgeWashingtonNJA","BeavercreekB",450,120);
    await newRank("TippecanoeA","BeavercreekC",220,160);
    await newRank("BeavercreekA","TippecanoeB",270,240);
    //Round 4
    await newRank("BeavercreekB","BeavercreekC",400,120);
    await newRank("GeorgeWashingtonNJA","TippecanoeB",560,20);
    await newRank("BeavercreekA","TippecanoeA",500,70);
    //Round 5
    await newRank("BeavercreekA","GeorgeWashingtonNJA",340,320);
    await newRank("TippecanoeA","BeavercreekB",280,80);
    await newRank("BeavercreekC","TippecanoeB",120,80);
    //Varsity Playoffs
    //Finals
    await newRank("GeorgeWashingtonNJA","BeavercreekA",310,300);//Beavercreek with advantage
    await newRank("BeavercreekA","GeorgeWashingtonNJA",320,290);
    //JV Playoffs
    //Finals
    await newRank("BeavercreekC","TippecanoeB",220,20);
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
    await newRank("NicholsA","AmherstA",270,240);
    await newRank("NicholsB","AmherstB",320,180);
    await newRank("IroquoisA","NicholsC",340,210);
    await newRank("NicholsD","IroquoisB",250,70);
    //Round 2
    await newRank("NicholsA","AmherstB",250,210);
    await newRank("NicholsB","IroquoisA",350,110);
    await newRank("NicholsC","AmherstA",290,140);
    await newRank("NicholsE","IroquoisB",220,90);
    //Round 3
    await newRank("NicholsA","NicholsC",250,210);
    await newRank("NicholsB","AmherstA",390,120);
    await newRank("IroquoisA","AmherstB",350,110);
    await newRank("NicholsD","NicholsE",260,140);
    //Round 4
    await newRank("IroquoisA","NicholsA",280,170);
    await newRank("NicholsB","NicholsC",370,100);
    await newRank("AmherstB","AmherstA",290,180);
    await newRank("NicholsD","IroquoisB",290,40);
    //Round5
    await newRank("NicholsB","NicholsA",250,180);
    await newRank("NicholsC","AmherstB",170,150);
    await newRank("IroquoisA","AmherstA",270,130);
    await newRank("NicholsE","IroquoisB",140,60);
    //Round 6
    await newRank("NicholsD","NicholsE",190,90);
    //Varsity Playoffs
    //Semifinals
    await newRank("NicholsB","NicholsC",350,180);
    await newRank("IroquoisA","NicholsA",200,180);
    //Finals
    await newRank("NicholsB","IroquoisA",250,140);
    console.log("Buffalo C q V: "+qV[a2]);
    console.log("Buffalo C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    //South Florida Fall C-Set
    a2 = a2+1;
    b2 = b2+1;
    //Prelims
    //Round 1
    await newRank("RansomA","PalmettoD",520,30);
    await newRank("ArchimedeanA","PalmettoE",330,130);
    await newRank("ArchimedeanC","PalmettoF",220,90);
    await newRank("CoralReefA","Palmetto",360,70);
    await newRank("PalmettoB","BelenB",280,210);
    await newRank("ArchimedeanE","PalmettoH",220,60);
    await newRank("BelenA","PalmettoI",420,40);
    await newRank("DoralA","ArchimedeanD",330,50);
    await newRank("ArchimedeanB","PalmettoA",240,180);
    await newRank("PalmettoC","WestminsterA",310,160);
    await newRank("CoralReefB","PalmettoG",300,120);
    await newRank("RansomB","PalmettoM",280,190);
    await newRank("PalmettoP","PalmettoO",310,160);
    await newRank("BelenC","PalmettonA",330,110);
    await newRank("PalmettoL","PalmettoQ",310,50);
    await newRank("DoralB","PalmettoR",270,140);
    await newRank("RansomC","PalmettoK",460,90);
    await newRank("ArchimedeanF","RansomD",180,170);
    //Round 2
    await newRank("RansomB","PalmettoC",230,230);
    await newRank("RansomA","CoralReefB",410,90);
    await newRank("PalmettoE","PalmettoD",260,100);
    await newRank("ArchimedeanA","ArchimedeanC",280,150);
    await newRank("Palmetto","PalmettoF",180,170);
    await newRank("CoralReefA","BelenB",300,210);
    await newRank("PalmettoB","PalmettoH",290,140);
    await newRank("BelenA","ArchimedeanE",360,40);
    await newRank("ArchimedeanD","PalmettoI",120,120);
    await newRank("DoralA","PalmettoA",230,190);
    await newRank("ArchimedeanB","WestminsterA",240,180);
    await newRank("RansomD","PalmettoG",210,150);
    await newRank("PalmettoM","PalmettoO",290,150);
    await newRank("PalmettoP","PalmettonA",260,140);
    await newRank("PalmettoL","BelenC",250,190);
    await newRank("DoralB","PalmettoQ",260,90);
    await newRank("RansomC","PalmettoR",450,90);
    await newRank("ArchimedeanF","PalmettoK",250,120);
    //Round 3
    await newRank("WestminsterA","DoralA",280,160);
    await newRank("ArchimedeanB","PalmettoG",240,150);
    await newRank("RansomA","PalmettoC",330,180);
    await newRank("CoralReefB","RansomB",250,220);
    await newRank("ArchimedeanC","PalmettoD",220,150);
    await newRank("ArchimedeanA","Palmetto",390,80);
    await newRank("BelenB","PalmettoF",370,110);
    await newRank("CoralReefA","PalmettoH",410,40);
    await newRank("PalmettoB","BelenA",340,210);
    await newRank("ArchimedeanD","ArchimedeanE",130,120);
    await newRank("PalmettoA","PalmettoI",410,90);
    await newRank("PalmettoE","PalmettoK",270,170);
    await newRank("ArchimedeanF","PalmettoR",220,140);
    await newRank("RansomD","PalmettoO",250,150);
    await newRank("PalmettoM","PalmettonA",330,130);
    await newRank("PalmettoP","PalmettoL",270,180);
    await newRank("BelenC","DoralB",240,200);
    await newRank("RansomC","PalmettoQ",460,50);
    //Round 4
    await newRank("PalmettoA","ArchimedeanE",410,50);
    await newRank("WestminsterA","PalmettoI",290,40);
    await newRank("DoralA","PalmettoG",210,160);
    await newRank("RansomA","ArchimedeanB",450,110);
    await newRank("PalmettoC","PalmettoE",240,230);
    await newRank("CoralReefB","ArchimedeanC",230,130);
    await newRank("PalmettoL","PalmettoD",140,70);
    await newRank("ArchimedeanA","BelenB",330,240);
    await newRank("PalmettoF","PalmettoH",160,70);
    await newRank("BelenA","CoralReefA",280,270);
    await newRank("PalmettoB","RansomB",370,130);
    await newRank("PalmettoR","ArchimedeanD",160,130);
    await newRank("RansomC","BelenC",520,110);
    await newRank("ArchimedeanF","PalmettoQ",320,40);
    await newRank("PalmettoO","PalmettoK",170,150);
    await newRank("RansomD","PalmettonA",280,80);
    await newRank("PalmettoM","PalmettoL",190,130);
    await newRank("PalmettoP","DoralB",300,140);
    //Round 5
    await newRank("PalmettoB","CoralReefA",260,190);
    await newRank("PalmettoA","ArchimedeanD",290,40);
    await newRank("WestminsterA","ArchimedeanE",250,50);
    await newRank("RansomA","PalmettoG",360,80);
    await newRank("DoralA","PalmettoI",250,80);
    await newRank("ArchimedeanB","PalmettoE",230,210);
    await newRank("PalmettoC","ArchimedeanC",230,150);
    await newRank("CoralReefB","Palmetto",260,80);
    await newRank("RansomB","PalmettoD",320,80);
    await newRank("ArchimedeanA","PalmettoH",330,40);
    await newRank("BelenB","PalmettoQ",350,60);
    await newRank("PalmettoM","DoralB",290,90);
    await newRank("RansomC","PalmettoP",390,130);
    await newRank("ArchimedeanF","BelenC",170,170);
    await newRank("PalmettoR","PalmettoO",180,140);
    await newRank("PalmettoK","PalmettonA",150,110);
    await newRank("PalmettoL","RansomD",180,170);
    //Varsity Playoffs
    //Octofinals
    //await newRank("RansomA","PalmettoG",1,0);
    await newRank("PalmettoC","DoralA",200,150);
    await newRank("PalmettoB","ArchimedeanB",320,150);
    await newRank("CoralReefA","RansomB",200,190);
    await newRank("ArchimedeanA","ArchimedeanC",280,70);
    await newRank("BelenB","WestminsterA",300,90);
    await newRank("BelenA","PalmettoE",270,150);
    await newRank("PalmettoA","CoralReefB",210,190);
    //Quarterfinals
    await newRank("RansomA","PalmettoC",310,150);
    await newRank("BelenB","ArchimedeanA",270,220);
    await newRank("BelenA","PalmettoA",230,200);
    await newRank("PalmettoB","CoralReefA",200,140);
    //Semifinals
    await newRank("RansomA","PalmettoB",220,190);
    await newRank("BelenB","BelenA",180,170);
    //Finals
    await newRank("RansomA","BelenB",260,170)
    //JV Playoffs
    //Quarterfinals
    await newRank("RansomC","DoralB",330,140);
    await newRank("RansomD","ArchimedeanF",180,130);
    await newRank("PalmettoP","PalmettoL",250,70);
    await newRank("BelenC","PalmettoM",200,180);
    //Semifinals
    await newRank("PalmettoP","BelenC",240,70);
    await newRank("RansomC","PalmettoP",340,90);
    console.log("South FL C q V: "+qV[a2]);
    console.log("South FL C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    c = 0;
    
    
    
    //Oahu C-Set
    a2 = a2+1;
    //Prelims
    //Round 1
    await newRank("IolaniB","PunahouB",400,130);
    await newRank("IolaniA","PunahouA",270,260);
    //Round 2
    await newRank("IolaniB","IolaniA",410,160);
    await newRank("PunahouA","PunahouB",320,150);
    //Round 3
    await newRank("IolaniB","PunahouA",350,210);
    await newRank("IolaniA","PunahouB",330,190);
    //Round 4
    await newRank("IolaniB","PunahouB",370,130);
    await newRank("IolaniA","PunahouA",280,280);
    //Round 5
    await newRank("IolaniB","PunahouA",380,120);
    await newRank("IolaniA","PunahouB",380,120);
    //Round 6
    await newRank("PunahouA","PunahouB",200,160);
    await newRank("IolaniA","IolaniB",260,210);
    console.log("Oahu C q V: "+qV[a2]);
    a = 0;
    b = 0;
    c = 0;
    
    
    //Greater Knoxville Fall C-Set
    a2 = a2+1;
    //Prelims
    //Round 3
    await newRank("SeymourA","PigeonForgeA",230,210);
    await newRank("MaryvilleA","MorristownA",370,140);
    await newRank("GatlinburgB","MorristownB",170,110);
    //Round 2
    await newRank("MaryvilleA","MorristownB",460,40);
    await newRank("GatlinburgA","MorristownA",270,140);
    await newRank("SeymourA","GatlinburgB",280,60);
    //Round 3
    await newRank("GatlinburgA","MorristownB",370,60);
    await newRank("MaryvilleA","SeymourA",320,140);
    await newRank("PigeonForgeA","MorristownA",230,190);
    //Round 4
    await newRank("GatlinburgA","SeymourA",330,90);
    await newRank("PigeonForgeA","MorristownB",250,70);
    await newRank("MorristownA","GatlinburgB",310,30);
    //Round 5
    await newRank("PigeonForgeA","GatlinburgB",310,20);
    await newRank("GatlinburgA","MaryvilleA",220,210);
    await newRank("MorristownA","SeymourA",190,130);
    //Varsity Playoffs
    //Semifinals
    await newRank("GatlinburgA","MorristownA",230,100);
    await newRank("MaryvilleA","PigeonForgeA",400,160);
    //Finals
    await newRank("MaryvilleA","GatlinburgA",230,140);
    console.log("Knoxville C q V: "+qV[a2]);
    a = 0;
    
    
    //Eastern Geogia Fall C-Set
    a2 = a2+1;
    b2 = b2+1;
    //Prelims
    //Round 1
    await newRank("BrookwoodA","NewnanA",241,240);
    await newRank("LambertA","ChattahoocheeA",310,280);
    await newRank("WoodstockA","WoodwardA",350,90);
    await newRank("CambridgeA","JohnsCreekA",340,210);
    await newRank("CommerceA","ApalacheeA",300,180);
    await newRank("NewnanC","BrookwoodB",230,170);
    await newRank("ChattahoocheeB","NewnanB",240,220);
    await newRank("HermannA","CherokeeBluff",290,220);
    await newRank("FultonA","GeorgeWaltonB",410,40);
    //Round 2
    await newRank("LambertA","NewnanA",430,200);
    await newRank("BrookwoodA","WoodstockA",350,160);
    await newRank("ChattahoocheeA","WoodwardA",410,140);
    await newRank("ApalacheeA","GeorgeWaltonA",220,190);
    await newRank("CambridgeA","CommerceA",510,110);
    await newRank("ChattahoocheeB","ApalacheeB",360,60);
    await newRank("NewnanC","CherokeeBluff",240,190);
    await newRank("NewnanB","FultonA",210,150);
    await newRank("HermannA","GeorgeWaltonB",450,40);
    //Round 3
    await newRank("BrookwoodA","WoodwardA",360,110);
    await newRank("LambertA","WoodstockA",380,120);
    await newRank("ChattahoocheeA","NewnanA",370,170);
    await newRank("CommerceA","GeorgeWaltonA",250,220);
    await newRank("JohnsCreekA","ApalacheeA",340,130);
    await newRank("CherokeeBluff","BrookwoodB",240,220);
    await newRank("FultonA","ApalacheeB",330,100);
    await newRank("NewnanC","GeorgeWaltonB",230,200);
    await newRank("HermannA","NewnanB",310,170);
    //Round 4
    await newRank("LambertA","WoodwardA",460,140);
    await newRank("ChattahoocheeA","BrookwoodA",400,150);
    await newRank("NewnanA","WoodstockA",320,180);
    await newRank("CambridgeA","GeorgeWaltonA",490,80);
    await newRank("JohnsCreekA","CommerceA",280,140);
    await newRank("CherokeeBluff","GeorgeWaltonB",320,70);
    await newRank("HermannA","ChattahoocheeB",260,200);
    await newRank("BrookwoodB","NewnanB",200,190);
    await newRank("NewnanC","ApalacheeB",170,110);
    //Round 5
    await newRank("ChattahoocheeA","WoodstockA",370,200);
    await newRank("WoodwardA","NewnanA",200,180);
    await newRank("LambertA","BrookwoodA",380,200);
    await newRank("CambridgeA","ApalacheeA",510,60);
    await newRank("JohnsCreekA","GeorgeWaltonA",310,150);
    await newRank("HermannA","FultonA",270,200);
    await newRank("CherokeeBluff","NewnanB",230,180);
    await newRank("ChattahoocheeB","NewnanC",230,180);
    await newRank("BrookwoodB","ApalacheeB",250,80);
    //Varsity Playoffs
    //Quarterfinals
    await newRank("CambridgeA","CommerceA",340,130);
    await newRank("LambertA","WoodstockA",370,160);
    await newRank("ChattahoocheeA","NewnanA",350,160);
    await newRank("BrookwoodA","JohnsCreekA",220,190);
    //Semifinals
    await newRank("CambridgeA","BrookwoodA",320,150);
    await newRank("LambertA","ChattahoocheeA",271,270);
    //Finals
    await newRank("CambridgeA","LambertA",310,250);
    //JV Playoffs
    //Semifinals
    await newRank("HermannA","CherokeeBluff",370,80);
    await newRank("ChattahoocheeB","FultonA",210,160);
    //Finals
    await newRank("ChattahoocheeB","HermannA",280,140);
    console.log("Eastern GA C q V: "+qV[a2]);
    console.log("Eastern GA C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    //Central Florida Fall C-Set
    a2 = a2+1;
    b2 = b2+1;
    c2 = c2+1;
    //Prelims
    //Round 1
    await newRank("PineViewA","RiverviewE",270,220);
    await newRank("RiverviewA","LargoB",280,240);
    await newRank("BerkeleyB","KingA",270,240);
    await newRank("TrinityB","ClassicalA",290,180);
    await newRank("TrinityA","RiverviewD",450,70);
    await newRank("LargoA","RiverviewB",380,160);
    await newRank("KingB","BerkeleyA",340,190);
    await newRank("ManateeA","RiverviewC",320,200);
    await newRank("RiverviewH","LargoC",230,170);
    await newRank("BerkeleyC","RiverviewI",330,20);
    await newRank("RiverviewF","RiverviewG",310,50);
    await newRank("ManateeB","RiverviewJ",330,30);
    await newRank("ClassicalB","BerkeleyD",140,110);
    await newRank("ClassicalB","BerkeleyD",140,110);
    await newRank("ClassicalC","ClassicalE",190,30);
    await newRank("TrinityD","ClassicalD",220,40);
    //Round 2
    await newRank("RiverviewC","ClassicalA",260,220);
    await newRank("KingA","RiverviewD",320,120);
    await newRank("TrinityA","BerkeleyB",320,310);
    await newRank("KingB","RiverviewA",230,220);
    await newRank("LargoA","RiverviewE",350,130);
    await newRank("ManateeA","TrinityB",240,220);
    await newRank("LargoB","BerkeleyA",340,140);
    await newRank("PineViewA","RiverviewB",250,200);
    await newRank("RiverviewF","RiverviewI",360,60);
    await newRank("RiverviewG","RiverviewJ",280,70);
    await newRank("ManateeB","BerkeleyD",170,130);
    await newRank("LargoC","ClassicalB",240,100);
    await newRank("BerkeleyC","RiverviewH",240,180);
    await newRank("TrinityC","ClassicalE",430,10);
    await newRank("ClassicalC","TrinityD",150,140);
    //Round 3
    await newRank("TrinityA","ManateeA",510,80);
    await newRank("TrinityB","RiverviewD",330,130);
    await newRank("KingA","ClassicalA",360,140);
    await newRank("BerkeleyA","PineViewA",230,220);
    await newRank("RiverviewC","BerkeleyB",320,250);
    await newRank("TrinityC","ClassicalD",490,10);
    await newRank("LargoB","RiverviewE",260,160);
    await newRank("RiverviewF","RiverviewH",210,150);
    await newRank("LargoA","RiverviewA",370,150);
    await newRank("KingB","RiverviewB",270,220);
    await newRank("ManateeB","LargoC",230,190);
    await newRank("RiverviewI","RiverviewJ",140,120);
    await newRank("BerkeleyC","ClassicalB",190,170);
    await newRank("TrinityC","ClassicalD",490,10);
    await newRank("TrinityD","ClassicalE",230,40);
    //Round 4
    await newRank("KingB","RiverviewE",330,110);
    await newRank("BerkeleyB","TrinityB",340,160);
    await newRank("BerkeleyC","ManateeB",250,130);
    await newRank("TrinityC","ClassicalC",410,40);
    await newRank("RiverviewA","PineViewA",290,200);
    await newRank("LargoA","BerkeleyA",330,170);
    await newRank("LargoB","RiverviewB",290,150);
    await newRank("LargoC","RiverviewG",190,110);
    await newRank("BerkeleyD","RiverviewI",160,70);
    await newRank("ClassicalD","ClassicalE",60,50);
    await newRank("RiverviewC","RiverviewD",470,110);
    await newRank("RiverviewH","RiverviewJ",180,90);
    await newRank("RiverviewF","ClassicalB",340,130);
    await newRank("KingA","ManateeA",270,160);
    await newRank("TrinityA","ClassicalA",500,70);
    //Round 5
    await newRank("TrinityA","LargoA",310,230);
    await newRank("RiverviewA","ManateeA",300,140);
    await newRank("ClassicalA","BerkeleyA",210,160);
    await newRank("BerkeleyB","RiverviewB",220,150);
    await newRank("TrinityC","TrinityD",330,60);
    await newRank("ClassicalB","RiverviewJ",220,60);
    await newRank("KingB","RiverviewC",320,150);
    await newRank("RiverviewF","ManateeB",210,90);
    await newRank("KingA","PineViewA",290,140);
    await newRank("LargoC","RiverviewI",150,80);
    await newRank("BerkeleyC","RiverviewG",260,70);
    await newRank("RiverviewE","RiverviewD",190,150);
    await newRank("RiverviewH","BerkeleyD",240,100);
    await newRank("TrinityB","LargoB",230,190);
    await newRank("ClassicalC","ClassicalD",120,50);
    //Varsity Playoffs
    //Quarterfinals
    await newRank("TrinityA","RiverviewA",370,100);
    await newRank("LargoA","BerkeleyB",280,130);
    await newRank("KingB","LargoB",190,170);
    await newRank("KingA","RiverviewC",290,150);
    //Semifinals
    await newRank("LargoA","KingB",280,150);
    await newRank("TrinityA","KingA",310,180);
    //Finals
    await newRank("TrinityA","LargoA",330,170);
    //JV Playoffs
    //Quarterfinals
    //await newRank("RiverviewF","BerkeleyD",1,0);
    await newRank("BerkeleyC","RiverviewG",260,50);
    await newRank("LargoC","ManateeB",180,80);
    await newRank("RiverviewH","ClassicalB",210,80);
    //Semifinals
    await newRank("RiverviewH","BerkeleyC",170,130);
    await newRank("RiverviewF","LargoC",200,100);
    await newRank("RiverviewH","RiverviewF",121,120);
    //MS Final
    await newRank("TrinityC","TrinityD",310,40);
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
    await newRank("CentralKitsapA","HolyNamesA",320,200);
    await newRank("OdleA","JohnPaulIIB",250,120);
    await newRank("TeslaA","Duvall",400,70);
    //Round 2
    await newRank("HolyNamesA","JohnPaulIIA",240,200);
    await newRank("TeslaA","JohnPaulIIB",390,70);
    await newRank("OdleA","Duvall",230,130);
    //Round 3
    await newRank("CentralKitsapA","JohnPaulIIA",330,80);
    await newRank("TeslaA","OdleA",330,140);
    await newRank("JohnPaulIIB","Duvall",190,120);
    //Round 4
    await newRank("HolyNamesA","JohnPaulIIA",330,110);
    await newRank("TeslaA","JohnPaulIIB",430,80);
    await newRank("OdleA","Duvall",190,60);
    //Round 5
    await newRank("CentralKitsapA","JohnPaulIIA",320,90);
    await newRank("TeslaA","OdleA",360,110);
    await newRank("JohnPaulIIB","Duvall",160,90);
    //Round 6
    await newRank("HolyNamesA","CentralKitsapA",300,160);
    //Varsity Playoffs
    //Finals
    await newRank("CentralKitsapA","HolyNamesA",250,150);
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
    await newRank("JesuitA","LincolnA",340,180);
    await newRank("ColumbiaRiverA","WestviewA",270,270);//Columbia River wins on
    await newRank("LewisandClarkA","WestviewB",340,110);
    await newRank("JesuitB","ColumbiaRiverB",340,110);
    await newRank("StollerK","StollerT",340,140);
    await newRank("StollerH","StollerW",410,70);
    //Round 2
    await newRank("LewisandClarkA","JesuitB",220,140);
    await newRank("JesuitA","ColumbiaRiverA",360,180);
    await newRank("WestviewA","ColumbiaRiverA",380,100);
    //Round 3
    await newRank("JesuitA","ColumbiaRiverB",430,70);
    await newRank("WestviewA","LewisandClarkA",330,200);
    await newRank("JesuitB","LincolnA",260,210);
    await newRank("ColumbiaRiverA","WestviewB",410,120);
    await newRank("StollerK","StollerW",450,70);
    await newRank("StollerH","StollerT",380,90);
    //Round 4
    await newRank("ColumbiaRiverA","JesuitB",410,130);
    await newRank("WestviewA","LincolnA",350,220);
    await newRank("JesuitA","LewisandClarkA",350,130);
    await newRank("WestviewB","ColumbiaRiverB",250,70);
    await newRank("StollerK","StollerH",350,200);
    await newRank("StollerW","StollerT",210,110);
    //Round 5
    await newRank("LincolnA","ColumbiaRiverB",300,110);
    await newRank("WestviewA","JesuitB",340,110);
    await newRank("ColumbiaRiverA","LewisandClarkA",300,160);
    await newRank("JesuitA","WestviewB",430,80);
    //Varsity Playoffs
    //Semifinals
    await newRank("WestviewA","ColumbiaRiverA",250,170);
    await newRank("JesuitA","LincolnA",320,130);
    //Finals
    await newRank("JesuitA","WestviewA",220,180);
    //MS Playoffs
    //Finals
    await newRank("StollerH","StollerK",240,200);
    console.log("South WA C q V: "+qV[a2]);
    console.log("South WA C q MS: "+qMS[c2]);
    a = 0;
    c = 0;
    
    
    //Boston Fall C-Set
    a2 = a2+1;
    b2 = b2+1;
    //Prelims
    //Round 1
    await newRank("SalemB","NorthfieldMtHermonA",231,230);
    await newRank("BostonLatinA","TantasquaB",430,110);
    await newRank("PhillipsExeterA","SalemA",380,130);
    await newRank("LexingtonA","TantasquaA",380,150);
    await newRank("LexingtonB","BromfieldA",450,60);
    await newRank("PhillipsExeterB","PhillipsAndoverA",440,60);
    //Round 2
    await newRank("TantasquaA","SalemB",230,210);
    await newRank("PhillipsExeterA","NorthfieldMtHermonA",370,150);
    await newRank("SalemA","TantasquaB",340,150);
    await newRank("BostonLatinA","LexingtonA",320,240);
    await newRank("BromfieldA","PhillipsAndoverA",180,170);
    await newRank("PhillipsExeterB","LexingtonB",310,280);
    //Round 3
    await newRank("BostonLatinA","TantasquaA",470,120);
    await newRank("LexingtonA","SalemA",370,130);
    await newRank("NorthfieldMtHermonA","TantasquaB",280,220);
    await newRank("PhillipsExeterA","SalemB",350,150);
    await newRank("LexingtonB","PhillipsAndoverA",410,110);
    await newRank("PhillipsExeterB","BromfieldA",360,120);
    //Round 4
    await newRank("LexingtonA","NorthfieldMtHermonA",420,140);
    await newRank("PhillipsExeterA","TantasquaB",450,90);
    await newRank("SalemA","TantasquaB",230,200);
    await newRank("BostonLatinA","SalemB",370,180);
    await newRank("LexingtonB","BromfieldA",440,80);
    await newRank("PhillipsExeterB","PhillipsAndoverA",450,110);
    //Round 5
    await newRank("PhillipsExeterA","LexingtonA",370,210);
    await newRank("TantasquaA","NorthfieldMtHermonA",200,180);
    await newRank("BostonLatinA","SalemA",510,70);
    await newRank("SalemB","TantasquaB",280,110);
    await newRank("PhillipsAndoverA","BromfieldA",150,140);
    await newRank("LexingtonB","PhillipsExeterB",270,230);
    //Round 6
    await newRank("LexingtonB","PhillipsAndoverA",300,130);
    await newRank("PhillipsExeterB","BromfieldA",330,130);
    //Varsity Playoffs
    //Semifinals
    await newRank("BostonLatinA","SalemB",290,180);
    await newRank("PhillipsExeterA","LexingtonA",260,250);
    //Finals
    await newRank("BostonLatinA","PhillipsExeterA",300,170);
    //JV Playoffs
    //Finals
    await newRank("PhillipsExeterB","LexingtonB",240,180);
    console.log("Boston C q V: "+qV[a2]);
    console.log("Boston C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    
    //Washington DC C-Set
    a2 = a2+1;
    b2 = b2+1;
    c2 = c2+1;
    //Prelims
    //Round
    await newRank("CentennialA","GeorgetownDayA",330,310);
    await newRank("ThomasJeffersonA","MountVernonA",490,110);
    await newRank("BASISMcLeanA","ThomasJeffersonB",320,290);
    await newRank("MontgomeryBlairA","GlenelgA",420,150);
    await newRank("StAnselmsA","CentennialB",380,190);
    await newRank("MontgomeryBlairC","CentennialE",260,190);
    await newRank("CentennialC","CentennialD",390,160);
    await newRank("MontgomeryBlairB","ThomasJeffersonD",390,180);
    await newRank("ThomasJeffersonC","GeorgetownDayB",400,160);
    await newRank("McLeanA","StAnselmsB",350,190);
    await newRank("CentennialLaneA","BurleighManorD",330,160);
    await newRank("BurleighManorA","NysmithB",410,60);
    await newRank("BurleighManorC","CentennialLaneB",210,180);
    await newRank("CompassMSA","CentennialLaneC",270,130);
    await newRank("NysmithA","RipponB",310,90);
    await newRank("BurleighManorB","RipponA",330,170);
    //Round 2
    await newRank("GeorgetownDayA","GlenelgA",410,180);
    await newRank("RichardMontgomeryA","BASISMcLeanA",390,290);
    await newRank("ThomasJeffersonB","MountVernonA",540,80);
    await newRank("MontgomeryBlairA","CentennialB",470,140);
    await newRank("ThomasJeffersonA","StAnselmsA",420,230);
    await newRank("RichardMontgomeryB","StAnselmsB",450,100);
    await newRank("MontgomeryBlairB","CentennialE",510,90);
    await newRank("ThomasJeffersonC","ThomasJeffersonD",300,280);
    await newRank("CentennialC","MontgomeryBlairC",320,170);
    await newRank("McLeanA","CentennialD",300,150);
    await newRank("BurleighManorC","RipponB",230,140);
    await newRank("CentennialLaneA","CentennialLaneB",370,90);
    await newRank("BurleighManorB","BurleighManorD",340,150);
    await newRank("BurleighManorA","CentennialLaneC",350,90);
    await newRank("NysmithA","CompassMSA",300,200);
    await newRank("RipponA","NysmithB",260,140);
    //Round 3
    await newRank("MontgomeryBlairA","ThomasJeffersonB",430,210);
    await newRank("StAnselmsA","MountVernonA",470,70);
    await newRank("GlenelgA","CentennialB",290,220);
    await newRank("CentennialA","BASISMcLeanA",350,250);
    await newRank("RichardMontgomeryA","ThomasJeffersonA",380,230);
    await newRank("GeorgetownDayB","StAnselmsB",300,250);
    await newRank("MontgomeryBlairB","McLeanA",350,220);
    await newRank("ThomasJeffersonD","CentennialE",290,210);
    await newRank("RichardMontgomeryB","CentennialLaneC",330,230);
    await newRank("MontgomeryBlairC","CentennialD",350,140);
    await newRank("RipponA","BurleighManorD",250,200);
    await newRank("BurleighManorB","CentennialLaneB",330,120);
    await newRank("NysmithB","CentennialLaneC",310,80);
    await newRank("NysmithA","CentennialLaneA",350,170);
    await newRank("BurleighManorA","BurleighManorC",430,70);
    //Round 4
    await newRank("GeorgetownDayA","MontgomeryBlairA",380,290);
    await newRank("ThomasJeffersonB","CentennialB",520,100);
    await newRank("RichardMontgomeryA","MountVernonA",500,80);
    await newRank("StAnselmsA","GlenelgA",340,290);
    await newRank("McLeanA","CentennialE",360,120);
    await newRank("ThomasJeffersonD","MontgomeryBlairC",400,200);
    await newRank("GeorgetownDayB","CentennialC",280,250);
    await newRank("MontgomeryBlairB","ThomasJeffersonC",350,280);
    await newRank("BurleighManorD","CentennialLaneB",230,270);
    await newRank("CompassMSA","NysmithB",200,190);
    await newRank("CentennialLaneA","RipponB",340,70);
    await newRank("BurleighManorB","NysmithA",270,210);
    await newRank("BurleighManorA","RipponA",370,140);
    await newRank("BurleighManorC","CentennialLaneC",240,70);
    //Round 5
    await newRank("BASISMcLeanA","StAnselmsA",350,240);
    await newRank("CentennialB","MountVernonA",380,80);
    await newRank("RichardMontgomeryA","MontgomeryBlairA",430,200);
    await newRank("CentennialA","GlenelgA",410,120);
    await newRank("GeorgetownDayA","ThomasJeffersonA",400,240);
    await newRank("CentennialE","CentennialD",240,180);
    await newRank("ThomasJeffersonD","GeorgetownDayB",360,180);
    await newRank("MontgomeryBlairB","RichardMontgomeryB",340,270);
    await newRank("ThomasJeffersonC","CentennialC",360,180);
    await newRank("StAnselmsB","MontgomeryBlairC",250,170);
    await newRank("CompassMSA","CentennialLaneB",320,80);
    await newRank("BurleighManorB","NysmithB",290,150);
    await newRank("CentennialLaneC","RipponB",180,100);
    await newRank("NysmithA","RipponA",270,120);
    await newRank("BurleighManorA","CentennialLaneA",270,230);
    await newRank("BurleighManorD","BurleighManorC",250,100);
    //Varsity Playoffs
    //Semifinals
    await newRank("RichardMontgomeryA","MontgomeryBlairA",360,260);
    await newRank("GeorgetownDayA","ThomasJeffersonA",390,200);
    //Finals
    await newRank("GeorgetownDayA","RichardMontgomeryA",300,280);
    //JV Playoffs
    //Semifinals
    await newRank("MontgomeryBlairB","ThomasJeffersonD",360,190);
    await newRank("RichardMontgomeryB","ThomasJeffersonC",340,200);
    //Finals
    await newRank("MontgomeryBlairB","RichardMontgomeryB",360,160);
    //MS Playoffs
    //Semifinals
    await newRank("BurleighManorB","NysmithA",220,190);
    await newRank("BurleighManorA","CompassMSA",220,190);
    //Finals
    await newRank("BurleighManorA","BurleighManorB",220,140);
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
    await newRank("RanneyA","MoorestownB",260,210);
    await newRank("PrincetonB","MoorestownA",360,170);
    await newRank("HighTechA","FontbonneA",400,120);
    await newRank("MoravianA","FontbonneB",440,70);
    await newRank("PrincetonA","DonovanCatholicA",480,30);
    await newRank("EastBrunswickA","EastBrunswickB",370,160);
    await newRank("RanneyB","FordhamB",270,180);
    await newRank("WiltonAnjoA","DonovanCatholicB",280,190);
    await newRank("PrincetonC","PrincetonD",340,150);
    await newRank("MillburnMSA","FontbonneC",350,80);
    //Round 2
    await newRank("EastBrunswickB","FontbonneA",290,200);
    await newRank("MoravianA","DonovanCatholicA",480,40);
    await newRank("EastBrunswickA","PrincetonB",350,210);
    await newRank("MoorestownA","MoorestownB",310,140);
    await newRank("HighTechA","FontbonneB",470,40);
    await newRank("RanneyA","FordhamA",400,160);
    await newRank("WiltonAnjoA","HighTechB",360,120);
    await newRank("MillburnMSA","FordhamB",250,180);
    await newRank("FontbonneC","DonovanCatholicB",270,240);
    await newRank("PrincetonC","RanneyB",270,220);
    //Round 3
    await newRank("PrincetonB","FontbonneA",330,140);
    await newRank("HighTechA","MoorestownB",460,100);
    await newRank("EastBrunswickB","FontbonneB",380,60);
    await newRank("MoravianA","RanneyA",270,250);
    await newRank("PrincetonA","FordhamA",340,130);
    await newRank("RanneyB","FontbonneC",280,100);
    await newRank("WiltonAnjoA","MillburnMSA",250,230);
    await newRank("PrincetonC","HighTechB",330,140);
    await newRank("FordhamB","PrincetonD",230,200);
    //Round 4
    await newRank("PrincetonA","MoravianA",320,220);
    await newRank("RanneyA","DonovanCatholicA",450,30);
    await newRank("EastBrunswickA","FontbonneA",460,30);
    await newRank("EastBrunswickB","PrincetonB",270,260);
    await newRank("HighTechA","MoorestownA",480,90);
    await newRank("FordhamB","FontbonneB",380,40);
    await newRank("FordhamB","DonovanCatholicB",330,100);
    await newRank("WiltonAnjoA","PrincetonD",290,220);
    await newRank("PrincetonC","MillburnMSA",340,190);
    await newRank("HighTechB","FontbonneC",250,100);
    //Round 5
    await newRank("HighTechA","RanneyA",350,160);
    await newRank("FontbonneB","DonovanCatholicA",160,50);
    await newRank("EastBrunswickA","PrincetonA",320,260);
    await newRank("MoravianA","FordhamA",260,180);
    await newRank("MoorestownA","FontbonneA",210,160);
    await newRank("PrincetonB","MoorestownB",250,190);
    await newRank("WiltonAnjoA","RanneyB",300,190);
    await newRank("HighTechB","FordhamB",240,170);
    await newRank("PrincetonC","DonovanCatholicB",300,80);
    //Varsity Playoffs
    //Quarterfinals
    //await newRank("HighTechA","FordhamA",1,0);
    await newRank("EastBrunswickA","PrincetonA",250,230);
    await newRank("MoravianA","EastBrunswickB",220,150);
    await newRank("RanneyA","PrincetonB",320,130);
    //Semifinals
    await newRank("EastBrunswickA","MoravianA",240,150);
    await newRank("HighTechA","RanneyA",290,150);
    //Finals
    await newRank("HighTechA","EastBrunswickA",300,190);
    //JV Playoffs
    //Semifinals
    await newRank("PrincetonC","RanneyB",280,130);
    await newRank("WiltonAnjoA","MillburnMSA",200,120);
    await newRank("PrincetonC","WiltonAnjoA",290,170);
    console.log("South NJ C q V: "+qV[a2]);
    console.log("South NJ C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    
    
    //Northwest Illinois C-Set
    a2 = a2+1;
    b2 = b2+1;
    //Prelims
    //Round 1
    await newRank("HomewoodFlossmoorA","WinnebagoA",310,150);
    await newRank("WilliamsBayA","WilliamsBayC",410,60);
    await newRank("GlenbardWestA","WilliamsBayB",390,150);
    await newRank("AuburnA","ElginA",410,170);
    await newRank("AuburnB","WilliamsBayD",360,50);
    await newRank("HomewoodFlossmoorB","WinnebagoB",270,130);
    //Round 2
    await newRank("ElginA","WilliamsBayC",340,100);
    await newRank("AuburnA","WinnebagoA",400,140);
    await newRank("GlenbardWestA","WilliamsBayA",420,110);
    await newRank("HomewoodFlossmoorA","WilliamsBayB",340,110);
    await newRank("AuburnB","HomewoodFlossmoorB",280,160);
    await newRank("WinnebagoB","WilliamsBayD",180,90);
    //Round 3
    await newRank("AuburnA","GlenbardWestA",330,250);
    await newRank("WinnebagoA","WilliamsBayC",300,120);
    await newRank("ElginA","WilliamsBayB",330,130);
    await newRank("WilliamsBayA","HomewoodFlossmoorA",290,240);
    await newRank("AuburnB","WinnebagoB",430,60);
    await newRank("HomewoodFlossmoorB","WilliamsBayD",330,20);
    //Round 4
    await newRank("GlenbardWestA","WinnebagoA",360,120);
    await newRank("HomewoodFlossmoorA","ElginA",270,240);
    await newRank("AuburnA","WilliamsBayC",440,70);
    await newRank("WilliamsBayA","WilliamsBayB",290,110);
    await newRank("HomewoodFlossmoorB","WinnebagoB",200,130);
    await newRank("AuburnB","WilliamsBayD",350,60);
    //Round5
    await newRank("AuburnA","WilliamsBayB",430,80);
    await newRank("HomewoodFlossmoorA","WilliamsBayC",320,70);
    await newRank("GlenbardWestA","ElginA",241,240);
    await newRank("WilliamsBayA","WinnebagoA",210,160);
    await newRank("AuburnB","HomewoodFlossmoorB",290,90);
    await newRank("WinnebagoB","WilliamsBayD",150,90);
    //Round6
    await newRank("GlenbardWestA","WilliamsBayC",320,80);
    await newRank("AuburnA","HomewoodFlossmoorA",390,110);
    await newRank("ElginA","WilliamsBayA",290,160);
    await newRank("WinnebagoA","WilliamsBayB",170,120);
    await newRank("AuburnB","WinnebagoB",290,90);
    await newRank("HomewoodFlossmoorB","WilliamsBayD",150,60);
    //Round 7
    await newRank("GlenbardWestA","HomewoodFlossmoorB",280,160);
    await newRank("WilliamsBayB","WilliamsBayC",110,100);
    await newRank("AuburnA","WilliamsBayA",320,150);
    await newRank("ElginA","WinnebagoA",480,50);
    //Varsity Playoffs
    //Finals
    await newRank("AuburnA","GlenbardWestA",250,240);
    //4th Place Game
    await newRank("HomewoodFlossmoorA","WilliamsBayA",260,120);
    console.log("NW IL C q V: "+qV[a2]);
    console.log("NW IL C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    
    //Louisiana Fall C-Set
    a2 = a2+1;
    //Prelims
    //Round 1
    await newRank("BatonRougeMagnetA","NorthwesternA",290,140);
    await newRank("ZacharyA","ZacharyB",260,170);
    await newRank("BatonRougeEpiscopalA","ZacharyC",290,110);
    //Round 2
    await newRank("ZacharyA","NorthwesternA",320,80);
    await newRank("BatonRougeMagnetA","ZacharyC",350,60);
    await newRank("ZacharyB","BatonRougeEpiscopalA",270,180);
    //Round 3
    await newRank("BatonRougeMagnetA","ZacharyA",280,220);
    await newRank("ZacharyB","ZacharyC",280,130);
    await newRank("BatonRougeEpiscopalA","NorthwesternA",290,140);
    //Round 4
    await newRank("BatonRougeMagnetA","BatonRougeEpiscopalA",310,180);
    await newRank("ZacharyA","ZacharyC",330,70);
    await newRank("ZacharyB","NorthwesternA",300,110);
    //Round 5
    await newRank("ZacharyB","BatonRougeMagnetA",240,190);
    await newRank("BatonRougeEpiscopalA","ZacharyA",240,140);
    await newRank("NorthwesternA","ZacharyC",220,150);
    //Varsity Playoffs
    //Semifinals
    await newRank("ZacharyB","ZacharyA",200,140);
    await newRank("BatonRougeEpiscopalA","BatonRougeMagnetA",210,190);
    //Finals
    await newRank("ZacharyB","BatonRougeEpiscopalA",210,160);
    console.log("LA C q V: "+qV[a2]);
    a = 0;
    
    
    //Eastern Kentucky C-Set
    a2 = a2+1;
    //Prelims
    //Round 1
    await newRank("BlazerA","RussellA",340,160);
    await newRank("JohnsonA","JohnsonC",410,70);
    await newRank("DunbarA","JohnsonB",410,80);
    //Round 2
    await newRank("BlazerA","DunbarA",320,260);
    await newRank("JohnsonB","JohnsonC",300,110);
    await newRank("JohnsonA","RussellA",370,180);
    //Round 3
    await newRank("JohnsonA","BlazerA",370,190);
    await newRank("RussellA","JohnsonB",250,200);
    await newRank("DunbarA","JohnsonC",390,70);
    //Round 4
    await newRank("JohnsonA","DunbarA",380,140);
    await newRank("BlazerA","JohnsonB",390,120);
    await newRank("RussellA","JohnsonC",290,150);
    //Round 5
    await newRank("DunbarA","RussellA",250,190);
    await newRank("JohnsonA","JohnsonB",350,90);
    await newRank("BlazerA","JohnsonC",390,70);
    //Varsity Playoffs
    //Semifinals
    await newRank("JohnsonA","RussellA",270,160);
    await newRank("BlazerA","DunbarA",211,210);
    //Finals
    await newRank("BlazerA","JohnsonA",270,160);
    console.log("East KY C q V: "+qV[a2]);
    a = 0;
    
    
    //Bergen County C-Set
    a2 = a2+1;
    b2 = b2+1;
    //Prelims
    //Round 1
    await newRank("RidgewoodA","GothamA",410,210);
    await newRank("ColdhugA","LeoniaA",470,160);
    await newRank("TenaflyA","TenaflyB",430,100);
    await newRank("ColdhugB","ChurchillNJB",290,280);
    await newRank("TenaflyC","LeoniaB",310,200);
    await newRank("RidgewoodD","GeorgeWashingtonNJA",270,160);
    //Round 2
    await newRank("RidgewoodA","TenaflyB",530,70);
    await newRank("ColdhugA","GothamA",430,180);
    await newRank("TenaflyA","LeoniaA",280,240);
    await newRank("ChurchillMDA","RidgewoodC",280,240);
    await newRank("TenaflyC","GeorgeWashingtonNJA",400,100);
    await newRank("LeoniaB","RidgewoodD",220,210);
    //Round 3
    await newRank("RidgewoodA","TenaflyA",400,200);
    await newRank("ColdhugA","TenaflyB",510,70);
    await newRank("GothamA","LeoniaA",280,260);
    await newRank("RidgewoodC","GeorgeWashingtonNJA",480,60);
    await newRank("ColdhugB","LeoniaB",380,180);
    await newRank("TenaflyC","RidgewoodD",400,160);
    //Round 4
    await newRank("RidgewoodA","LeoniaA",350,170);
    await newRank("ColdhugA","TenaflyA",450,130);
    await newRank("GothamA","TenaflyB",360,30);
    await newRank("RidgewoodC","RidgewoodD",380,110);
    await newRank("ColdhugB","TenaflyC",290,180);
    await newRank("ChurchillMDA","LeoniaB",350,140);
    //Round 5
    await newRank("ColdhugA","RidgewoodA",400,220);
    await newRank("TenaflyA","GothamA",300,260);
    await newRank("LeoniaA","TenaflyB",350,130);
    await newRank("RidgewoodC","ColdhugB",280,240);
    await newRank("ChurchillMDA","RidgewoodD",370,80);
    //Varsity Playoffs
    //Semifinals
    await newRank("ColdhugA","GothamA",440,100);
    await newRank("RidgewoodA","TenaflyA",290,210);
    //Finals
    await newRank("ColdhugA","RidgewoodA",360,180);
    //JV Playoffs
    await newRank("RidgewoodC","ColdhugB",350,120);
    await newRank("ChurchillMDA","TenaflyC",400,130);
    //Finals
    await newRank("RidgewoodC","ChurchillMDA",270,150);
    console.log("Bergen C q V: "+qV[a2]);
    console.log("Bergen C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    
    //Lower Hudson C-Set
    a2 = a2+1;
    b2 = b2+1;
    //Prelims
    //Round 1
    await newRank("DarienA","HoraceGreeleyA",450,90);
    await newRank("GreensFarmsA","WhitePlainsA",360,140);
    await newRank("WiltonAlexA","DaltonA",320,230);
    await newRank("IrvingtonA","ArdsleyA",370,160);
    await newRank("WiltonLukasA","YonkersA",350,210);
    await newRank("HoraceGreeleyB","GreensFarmsB",380,120);
    await newRank("ScarsdaleA","YonkersB",380,180);
    //Round 2
    await newRank("WiltonAlexA","WhitePlainsA",440,100);
    await newRank("DaltonA","HoraceGreeleyA",330,130);
    await newRank("GreensFarmsA","ArdsleyA",260,250);
    await newRank("IrvingtonA","ScarsdaleA",290,250);
    await newRank("YonkersB","GreensFarmsB",300,170);
    await newRank("YonkersA","HoraceGreeleyB",350,170);
    await newRank("DarienA","WiltonLukasA",340,290);
    //Round 3
    await newRank("ScarsdaleA","GreensFarmsA",280,230);
    await newRank("WiltonAlexA","ArdsleyA",460,100);
    await newRank("DarienA","IrvingtonA",330,260);
    await newRank("WhitePlainsA","HoraceGreeleyA",280,150);
    await newRank("HoraceGreeleyB","WiltonLukasA",290,270);
    await newRank("YonkersA","YonkersB",330,170);
    await newRank("DaltonA","GreensFarmsB",360,110);
    //Round 4
    await newRank("DarienA","GreensFarmsA",281,280);//Darien wins on TB
    await newRank("DaltonA","IrvingtonA",310,270);
    await newRank("WiltonAlexA","ScarsdaleA",360,200);
    await newRank("ArdsleyA","HoraceGreeleyA",270,160);
    await newRank("HoraceGreeleyB","YonkersB",370,190);
    await newRank("WiltonLukasA","GreensFarmsB",470,90);
    await newRank("YonkersA","WhitePlainsA",420,150);
    //Round 5
    await newRank("ScarsdaleA","HoraceGreeleyA",450,60);
    await newRank("IrvingtonA","WhitePlainsA",320,170);
    await newRank("GreensFarmsA","DaltonA",310,170);
    await newRank("DarienA","WiltonAlexA",320,290);
    await newRank("WiltonLukasA","HoraceGreeleyB",310,180);
    await newRank("YonkersA","GreensFarmsB",340,80);
    await newRank("HoraceGreeleyB","ArdsleyA",250,140);
    //Varsity Playoffs
    //Quarterfinals
    await newRank("WiltonAlexA","WhitePlainsA",300,180);
    await newRank("DarienA","ArdsleyA",310,180);
    await newRank("DaltonA","IrvingtonA",230,210);
    await newRank("ScarsdaleA","GreensFarmsB",270,220);
    //Semifinals
    await newRank("ScarsdaleA","WiltonAlexA",260,240);
    await newRank("DarienA","DaltonA",320,160);
    //Finals
    await newRank("DarienA","ScarsdaleA",260,230);
    //JV Playoffs
    //JV Semifinals
    await newRank("WiltonLukasA","YonkersB",380,90);
    await newRank("HoraceGreeleyB","YonkersA",270,200);
    await newRank("WiltonLukasA","HoraceGreeleyB",210,190);
    console.log("Lower Hudson C q V: "+qV[a2]);
    console.log("Lower Hudson C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    
    //Delaware C-Set
    a2 = a2+1;
    b2 = b2+1;
    //Prelims
    //Round 1
    await newRank("WilmingtonFriendsD","CaravelB",220,140);
    await newRank("NewarkCharterC","WilmingtonFriendsE",260,240);
    await newRank("MethactonA","WilmingtonFriendsC",460,80);
    await newRank("WilmingtonFriendsA","FriendsCentralA",290,150);
    await newRank("MethactonC","WilmingtonFriendsK",470,40);
    await newRank("NewarkCharterA","WilmingtonFriendsG",360,90);
    await newRank("WilmingtonFriendsF","NewarkCharterB",200,180);
    await newRank("WilmingtonFriendsI","WilmingtonFriendsL",290,100);
    await newRank("DickinsonA","CaravelA",280,100);
    await newRank("WilmingtonFriendsH","WilmingtonFriendsM",350,70);
    await newRank("TowerHillC","WilmingtonFriendsJ",200,80);
    await newRank("WilmingtonFriendsB","TowerHillB",270,190);
    await newRank("TowerHillA","MethactonB",290,220);
    //Round 2
    await newRank("TowerHillA","CaravelB",340,80);
    await newRank("GreatValleyA","DickinsonA",470,80);
    await newRank("WilmingtonFriendsA","NewarkCharterC",240,200);
    await newRank("MethactonB","FriendsCentralA",270,160);
    await newRank("MethactonC","WilmingtonFriendsJ",460,50);
    await newRank("MethactonA","WilmingtonFriendsF",390,70);
    await newRank("WilmingtonFriendsI","WilmingtonFriendsM",290,150);
    await newRank("TowerHillB","WilmingtonFriendsC",210,140);
    await newRank("NewarkCharterA","WilmingtonFriendsE",250,180);
    await newRank("WilmingtonFriendsH","WilmingtonFriendsL",300,130);
    await newRank("TowerHillC","WilmingtonFriendsK",250,90);
    await newRank("WilmingtonFriendsD","WilmingtonFriendsG",160,130);
    await newRank("WilmingtonFriendsB","CaravelA",250,110);
    //Round 3
    await newRank("GreatValleyA","WilmingtonFriendsF",480,30);
    await newRank("NewarkCharterC","WilmingtonFriendsG",330,90);
    await newRank("NewarkCharterA","CaravelB",320,30);
    await newRank("TowerHillA","WilmingtonFriendsA",370,150);
    await newRank("WilmingtonFriendsI","WilmingtonFriendsJ",180,170);
    await newRank("MethactonB","WilmingtonFriendsD",390,90);
    await newRank("DickinsonA","TowerHillB",230,150);
    await newRank("WilmingtonFriendsH","WilmingtonFriendsK",420,60);
    await newRank("MethactonC","TowerHillC",430,80);
    await newRank("MethactonA","WilmingtonFriendsB",350,170);
    await newRank("NewarkCharterB","WilmingtonFriendsC",240,110);
    await newRank("NewarkCharterB","WilmingtonFriendsC",240,110);
    await newRank("FriendsCentralA","WilmingtonFriendsE",250,170);
    //Round 4
    await newRank("WilmingtonFriendsM","WilmingtonFriendsJ",190,40);
    await newRank("WilmingtonFriendsL","WilmingtonFriendsK",140,70);
    await newRank("GreatValleyA","WilmingtonFriendsB",470,90);
    await newRank("WilmingtonFriendsE","WilmingtonFriendsD",190,180);
    await newRank("TowerHillA","WilmingtonFriendsG",440,30);
    await newRank("MethactonB","NewarkCharterC",380,190);
    await newRank("WilmingtonFriendsH","TowerHillC",360,70);
    await newRank("FriendsCentralA","CaravelB",280,110);
    await newRank("DickinsonA","NewarkCharterB",200,160);
    await newRank("MethactonC","WilmingtonFriendsI",450,70);
    await newRank("NewarkCharterA","WilmingtonFriendsA",300,200);
    await newRank("TowerHillB","WilmingtonFriendsF",250,150);
    await newRank("CaravelA","WilmingtonFriendsC",140,100);
    //Round 5
    await newRank("WilmingtonFriendsJ","WilmingtonFriendsK",180,60);
    await newRank("MethactonC","WilmingtonFriendsM",400,60);
    await newRank("CaravelA","WilmingtonFriendsF",190,10);
    await newRank("WilmingtonFriendsB","NewarkCharterB",170,100);
    await newRank("NewarkCharterC","CaravelB",250,80);
    await newRank("FriendsCentralA","WilmingtonFriendsG",240,100);
    await newRank("WilmingtonFriendsH","WilmingtonFriendsI",350,80);
    await newRank("WilmingtonFriendsA","WilmingtonFriendsD",210,100);
    await newRank("TowerHillC","WilmingtonFriendsL",220,90);
    await newRank("TowerHillA","WilmingtonFriendsE",280,130);
    await newRank("MethactonA","NewarkCharterA",280,120);
    await newRank("GreatValleyA","WilmingtonFriendsC",580,0);
    //Varsity Playoffs
    //Quarterfinals
    await newRank("NewarkCharterA","MethactonB",280,180);
    //await newRank("MethactonA","WilmingtonFriendsA",1,0);
    await newRank("GreatValleyA","FriendsCentralA",420,80);
    await newRank("TowerHillA","NewarkCharterC",280,140);
    //Semifinals
    await newRank("GreatValleyA","NewarkCharterA",330,160);
    await newRank("MethactonA","TowerHillA",390,100);
    //Finals
    await newRank("GreatValleyA","MethactonA",370,160);
    //JV Playoffs
    //Semifinals
    await newRank("MethactonC","WilmingtonFriendsI",400,50);
    await newRank("WilmingtonFriendsH","TowerHillC",280,60);
    //Finals
    await newRank("MethactonC","WilmingtonFriendsH",340,110);
    console.log("Delaware C q V: "+qV[a2]);
    console.log("Delaware C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    
    //Florida Panhandle C-Set
    a2 = a2+1;
    b2 = b2+1;
    //Prelims
    //Round 1
    await newRank("ChoctawhatcheeA","WashingtonA",280,140);
    await newRank("TateA","WashingtonB",310,60);
    await newRank("RansomG","RansomF",81,80);
    //Round 2
    await newRank("CollegiateA","TateA",400,180);
    await newRank("WashingtonA","WashingtonB",250,100);
    await newRank("RansomF","RansomE",100,80);
    //Round 3
    await newRank("CollegiateA","WashingtonA",360,120);
    await newRank("ChoctawhatcheeA","WashingtonB",390,20);
    await newRank("RansomG","RansomE",140,70);
    //Round 4
    await newRank("TateA","ChoctawhatcheeA",290,220);
    await newRank("CollegiateA","WashingtonB",460,60);
    await newRank("RansomG","RansomE",80,40);
    //Round 5
    await newRank("TateA","WashingtonA",210,80);
    await newRank("CollegiateA","ChoctawhatcheeA",460,110);
    await newRank("RansomE","RansomF",70,50);
    //Round 6
    await newRank("RansomG","RansomF",80,40);
    //Varsity Playoofs
    //Varsity Semifinals
    await newRank("CollegiateA","WashingtonA",390,50);
    await newRank("ChoctawhatcheeA","TateA",221,220);
    //Varsity Finals
    await newRank("CollegiateA","ChoctawhatcheeA",420,120);
    console.log("FL Panhandle C q V: "+qV[a2]);
    console.log("FL Panhandle C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    
    
    //Southwestern Illinois C-Set
    a2 = a2+1;
    b2 = b2+1;
    //Round 1
    await newRank("LindseyA","GraniteCityA",400,130);
    await newRank("AltonA","SouthwesternA",360,140);
    await newRank("KeithCountyDayA","SouthwesternC",330,130);
    await newRank("RochesterA","SouthwesternB",260,180);
    //Round 2
    await newRank("GraniteCityA","SouthwesternA",320,110);
    await newRank("AltonA","LindseyA",340,260);
    await newRank("RochesterA","SouthwesternC",240,200);
    await newRank("KeithCountyDayA","SouthwesternB",250,200);
    //Round 3
    await newRank("AltonA","GraniteCityA",380,140);
    await newRank("LindseyA","SouthwesternA",410,90);
    await newRank("SouthwesternB","SouthwesternC",320,150);
    await newRank("RochesterA","KeithCountyDayA",310,150);
    //Round 4
    await newRank("LindseyA","SouthwesternA",480,60);
    await newRank("AltonA","GraniteCityA",370,180);
    await newRank("KeithCountyDayA","RochesterA",260,160);
    await newRank("SouthwesternB","SouthwesternC",240,100);
    //Round 5
    await newRank("GraniteCityA","SouthwesternA",240,100);
    await newRank("LindseyA","AltonA",310,190);
    await newRank("KeithCountyDayA","SouthwesternB",310,180);
    await newRank("RochesterA","SouthwesternC",260,120);
    //Round 6
    await newRank("LindseyA","GraniteCityA",410,110);
    await newRank("AltonA","SouthwesternA",310,70);
    await newRank("RochesterA","SouthwesternB",280,150);
    await newRank("KeithCountyDayA","SouthwesternC",250,100);
    //Varsity Playoffs
    //Varsity Final
    await newRank("LindseyA","AltonA",280,200);
    //JV Playoffs
    //JV Final
    await newRank("KeithCountyDayA","RochesterA",210,150);
    console.log("SW IL C q V: "+qV[a2]);
    console.log("SW IL C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    
    //Western Pennsylvania C-Set
    a2 = a2+1;
    b2 = b2+1;
    //Prelims
    //Round 1
    await newRank("KiskiA","AllderdiceB",450,70);
    await newRank("NorthmontA","SaegertownA",480,80);
    await newRank("NAlleghenyHSA","NCatholicA",261,260);
    await newRank("AllderdiceA","SouthSideA",400,30);
    await newRank("NAlleghenyIntA","SouthSideB",270,220);
    await newRank("AlagarA","NAlleghenyIntB",250,220);
    //Round 2
    await newRank("NorthmontA","AllderdiceB",470,80);
    await newRank("KiskiA","SaegertownA",480,70);
    await newRank("NCatholicA","AllderdiceA",310,200);
    await newRank("NAlleghenyHSA","SouthSideA",280,70);
    await newRank("SouthSideB","AlagarA",300,190);
    await newRank("NAlleghenyIntA","NAlleghenyIntB",340,130);
    //Round 3
    await newRank("AllderdiceB","SouthSideA",260,80);
    await newRank("KiskiA","NAlleghenyHSA",280,240);
    await newRank("NCatholicA","AllderdiceA",300,160);
    await newRank("NorthmontA","SaegertownA",480,80);
    await newRank("SouthSideB","NAlleghenyIntB",250,160);
    await newRank("NAlleghenyIntA","AlagarA",320,210);
    //Round 4
    await newRank("NCatholicA","SaegertownA",300,110);
    await newRank("KiskiA","AllderdiceB",370,120);
    await newRank("NAlleghenyHSA","SouthSideA",370,80);
    await newRank("NorthmontA","AllderdiceA",440,80);
    await newRank("SouthSideB","AlagarA",220,210);
    await newRank("NAlleghenyIntA","NAlleghenyIntB",390,150);
    //Round 5
    await newRank("SaegertownA","SouthSideA",161,160);
    await newRank("KiskiA","AllderdiceA",370,150);
    await newRank("NCatholicA","AllderdiceB",240,110);
    await newRank("NorthmontA","NAlleghenyHSA",420,110);
    await newRank("AlagarA","NAlleghenyIntB",230,140);
    await newRank("NAlleghenyIntA","SouthSideB",270,160);
    //Round 6
    await newRank("NAlleghenyIntA","AlagarA",270,150);
    await newRank("SouthSideB","NAlleghenyIntB",270,90);
    //Varsity Playoffs
    //Varsity Semifinals
    await newRank("NorthmontA","NAlleghenyHSA",350,90);
    await newRank("KiskiA","NCatholicA",270,130);
    //Varsity Finals
    await newRank("NorthmontA","KiskiA",310,230);
    //JV PLayoffs
    //JV Finals
    await newRank("NAlleghenyIntA","SouthSideB",270,140);
    console.log("W PA C q V: "+qV[a2]);
    console.log("W PA C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    
    
    //Mississippi Winter
    a2 = a2+1;
    b2 = b2+1;
    //Prelims
    //Round 1
    await newRank("MadisonA","MadisonB",340,100);
    await newRank("HancockA","PetalB",230,180);
    await newRank("HancockC","HancockB",120,100);
    await newRank("ClintonA","WestJonesA",210,190);
    await newRank("PetalA","RichtonA",390,60);
    await newRank("CHECHA","RichtonB",200,190);
    await newRank("MadisonC","ClintonB",221,220);
    //Round 2
    await newRank("MadisonA","HancockB",470,30);
    await newRank("PetalA","WestJonesA",270,120);
    await newRank("PetalB","RichtonA",260,90);
    await newRank("HancockA","HancockC",280,110);
    await newRank("ClintonB","RichtonB",240,80);
    await newRank("MadisonC","RosaScottA",260,160);
    //Round 3
    await newRank("PetalB","HancockB",260,70);
    await newRank("MadisonB","HancockC",390,50);
    await newRank("MadisonA","WestJonesA",360,120);
    await newRank("PetalA","HancockA",310,150);
    await newRank("ClintonA","RichtonA",330,40);
    await newRank("CHECHA","ClintonB",240,150);
    await newRank("RosaScottA","RichtonB",360,40);
    //Round 4
    await newRank("MadisonA","HancockA",300,120);
    await newRank("HancockC","RichtonA",140,110);
    await newRank("ClintonA","HancockB",180,50);
    await newRank("PetalA","MadisonB",290,130);
    await newRank("PetalB","WestJonesA",250,120);
    await newRank("RosaScottA","ClintonB",260,150);
    await newRank("CHECHA","MadisonC",260,140);
    //Round 5
    await newRank("HancockA","ClintonA",200,160);
    await newRank("WestJonesA","HancockC",210,20);
    await newRank("MadisonB","PetalB",190,150);
    await newRank("PetalA","HancockB",270,40);
    await newRank("MadisonA","RichtonA",310,30);
    await newRank("RosaScottA","CHECHA",240,170);
    await newRank("MadisonC","RichtonB",290,40);
    //Varsity Playoffs
    //Varsity Quarterfinals
    await newRank("MadisonA","HancockC",290,20);
    await newRank("PetalA","WestJonesA",300,60);
    await newRank("PetalB","ClintonA",240,130);
    await newRank("HancockA","MadisonB",200,130);
    //Varsity Semifinals
    await newRank("MadisonA","HancockA",360,50);
    await newRank("PetalA","PetalB",190,120);
    //Varsity Finals
    await newRank("MadisonA","PetalA",290,90);
    //JV Playoffs
    //JV Semifinals
    await newRank("RosaScottA","ClintonB",190,140);
    await newRank("CHECHA","MadisonC",220,100);
    //JV Final
    await newRank("RosaScottA","CHECHA",190,140);
    console.log("Miss C q V: "+qV[a2]);
    console.log("Miss C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    
    a2 = a2+1;
    b2 = b2+1;
    //Nevada C-Set
    //Round 1
    await newRank("ClarkB","LibertyA",430,0);
    await newRank("ClarkA","LibertyB",480,60);
    //Round 2
    await newRank("LibertyB","LibertyA",290,0);
    await newRank("ClarkA","ClarkB",540,90);
    //Round 3
    await newRank("ClarkB","LibertyB",300,130);
    await newRank("ClarkA","LibertyA",580,0);
    console.log("Nevada C q V: "+qV[a2]);
    console.log("Nevada C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    
    a2 = a2+1;
    b2 = b2+1;
    //Eastern Iowa C-Set
    //Round 1
    await newRank("PleasantValleyA","CentralA",280,270);
    await newRank("PleasantValleyB","CentralB",230,160);
    //Round 2
    await newRank("PleasantValleyA","SherrardA",320,160);
    await newRank("CentralB","PleasantValleyB",280,130);
    //Round 3
    await newRank("CentralA","SherrardA",370,170);
    await newRank("CentralB","PleasantValleyB",220,140);
    //Varsity Final
    await newRank("PleasantValleyA","CentralA",320,250);
    console.log("Eastern Iowa C q V: "+qV[a2]);
    console.log("Eastern Iowa C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    
    a2 = a2+1;
    b2 = b2+1;
    //Upper Hudson C-Set
    //Round 1
    await newRank("BethlehemA","BerlinB",490,80);
    await newRank("BethlehemB","LaurensA",370,80);
    await newRank("LoyolaA","BethlehemMSA",310,220);
    //Round 2
    await newRank("BethlehemB","BerlinB",260,140);
    await newRank("BethlehemA","LoyolaA",360,190);
    await newRank("BerlinA","LaurensA",360,190);
    //Round 3
    await newRank("BethlehemB","BerlinA",430,70);
    await newRank("BethlehemMSA","BerlinB",360,110);
    await newRank("LoyolaA","LaurensA",340,70);
    //Round 4
    await newRank("LoyolaA","BerlinB",280,80);
    await newRank("BethlehemA","BethlehemB",400,160);
    await newRank("BethlehemMSA","BerlinA",280,120);
    //Round 5
    await newRank("BethlehemA","LaurensA",390,90);
    await newRank("LoyolaA","BerlinA",280,140);
    await newRank("BethlehemB","BethlehemMSA",360,90);
    //Playoffs
    //Varsity Final
    await newRank("BethlehemA","LoyolaA",210,170);
    await newRank("BethlehemB","BethlehemMSA",240,110);
    console.log("Upper Hudson C q V: "+qV[a2]);
    console.log("Upper Hudson C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    
    a2 = a2+1;
    //Northern Pennsylvania C-Set
    //Prelims
    //Round 1
    await newRank("WyomingB","NanticokeA",230,190);
    await newRank("ParklandA","WyomingA",260,170);
    //Round 2
    await newRank("WyomingB","WyomingC",250,130);
    await newRank("WyomingA","NanticokeA",270,140);
    //Round 3
    await newRank("WyomingA","WyomingC",210,170);
    await newRank("ParklandA","NanticokeA",230,200);
    //Round 4
    await newRank("ParklandA","WyomingC",300,120);
    await newRank("WyomingA","WyomingB",210,200);
    //Round 5
    await newRank("WyomingB","ParklandA",230,200);
    await newRank("NanticokeA","WyomingC",220,120);
    //Playoffs
    //Finals
    await newRank("ParklandA","WyomingB",220,110);
    console.log("Northern Pennsylvania C q V: "+qV[a2]);
    a = 0;
    
    
    a2 = a2+1;
    b2 = b2+1;
    //New Hampshire C-Set
    //Round 1
    await newRank("PlymouthB","NewtonSouthB",210,170);
    await newRank("SouthBurlingtonA","NewtonSouthC",400,120);
    await newRank("HanoverA","NewtonNorthB",390,150);
    await newRank("NewtonNorthA","NewtonSouthA",440,110);
    await newRank("PlymouthA","NewtonNorthC",410,140);
    //Round 2
    await newRank("NewtonNorthB","NewtonSouthA",230,190);
    await newRank("NewtonNorthC","NewtonSouthB",230,170);
    await newRank("NewtonNorthA","PlymouthB",350,160);
    await newRank("HanoverA","NewtonSouthC",390,100);
    await newRank("PlymouthA","SouthBurlingtonA",380,170);
    //Round 3
    await newRank("NewtonNorthA","HanoverA",290,250);
    await newRank("PlymouthA","NewtonNorthA",300,170);
    await newRank("NewtonNorthB","NewtonSouthB",390,60);
    await newRank("SouthBurlingtonA","NewtonNorthC",260,250);
    await newRank("NewtonSouthC","PlymouthB",260,160);
    //Round 4
    await newRank("PlymouthA","NewtonSouthC",420,110);
    await newRank("HanoverA","NewtonNorthC",470,110);
    await newRank("NewtonNorthA","NewtonSouthB",490,90);
    await newRank("NewtonSouthA","PlymouthB",360,140);
    await newRank("SouthBurlingtonA","NewtonNorthB",260,240);
    //Round 5
    await newRank("SouthBurlingtonA","NewtonSouthA",300,170);
    await newRank("NewtonNorthB","PlymouthB",320,120);
    await newRank("NewtonNorthC","NewtonSouthC",200,180);
    await newRank("NewtonNorthA","PlymouthA",370,140);
    await newRank("HanoverA","NewtonSouthB",350,70);
    //Playoffs
    //Semifinals
    await newRank("NewtonNorthA","SouthBurlingtonA",380,150);
    await newRank("PlymouthA","HanoverA",280,250);
    //Varsity Finals
    await newRank("NewtonNorthA","PlymouthA",330,160);
    //JV Finals
    await newRank("PlymouthB","NewtonSouthC",160,110);
    console.log("NH C q V: "+qV[a2]);
    console.log("NH C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    a2 = a2+1;
    b2 = b2+1;
    //Arkansas C-Set
    //Prelims
    //Round 1
    await newRank("RussellvilleB","EpiscopalA",220,140);
    await newRank("FayettevilleA","VanBurenA",330,140);
    await newRank("RussellvilleA","ChesterCountyB",490,50);
    await newRank("ChesterCountyA","FortSmithSouthsideB",290,160);
    await newRank("MountainViewARA","FortSmithSouthsideA",390,140);
    await newRank("DeQueenA","ConwayChristianB",270,100);
    await newRank("ConwayChristianB","FortSmithSouthsideC",200,180);
    //Round 2
    await newRank("MountainViewARA","ChesterCountyA",350,150);
    await newRank("RussellvilleA","ConwayChristianB",520,30);
    await newRank("RussellvilleB","VanBurenA",300,100);
    await newRank("EpiscopalA","ChesterCountyB",210,140);
    await newRank("FortSmithSouthsideA","FortSmithSouthsideC",310,120);
    await newRank("DeQueenA","ConwayChristianA",350,120);
    await newRank("FayettevilleA","FortSmithSouthsideB",250,220);
    //Round 3
    await newRank("RussellvilleA","EpiscopalA",510,50);
    await newRank("FayettevilleA","ConwayChristianB",380,80);
    await newRank("FortSmithSouthsideC","MountainViewARA",340,120);
    await newRank("FortSmithSouthsideA","ConwayChristianA",370,140);
    await newRank("DeQueenA","ChesterCountyA",260,250);
    await newRank("ChesterCountyB","VanBurenA",180,170);
    await newRank("FortSmithSouthsideB","RussellvilleB",250,190);
    //Round 4
    await newRank("FortSmithSouthsideC","ConwayChristianB",210,110);
    await newRank("ChesterCountyA","FortSmithSouthsideA",260,220);
    await newRank("MountainViewARA","DeQueenA",380,180);
    await newRank("RussellvilleA","FayettevilleA",370,250);
    await newRank("EpiscopalA","VanBurenA",230,90);
    await newRank("RussellvilleB","ChesterCountyB",230,90);
    await newRank("ConwayChristianA","FortSmithSouthsideB",230,140);
    //Round 5
    await newRank("FayettevilleA","DeQueenA",260,220);
    await newRank("ConwayChristianA","VanBurenA",180,90);
    await newRank("RussellvilleA","ChesterCountyA",440,110);
    await newRank("RussellvilleB","FortSmithSouthsideC",180,160);
    await newRank("MountainViewARA","FortSmithSouthsideB",230,190);
    await newRank("ConwayChristianB","ChesterCountyB",140,110);
    await newRank("FortSmithSouthsideA","EpiscopalA",350,70);
    //Playoffs
    //Varsity Playoffs
    //Varsity Quarterfinals
    await newRank("RussellvilleA","EpiscopalA",400,90);
    await newRank("FortSmithSouthsideA","DeQueenA",250,200);
    await newRank("FayettevilleA","ConwayChristianA",240,110);
    await newRank("MountainViewARA","ChesterCountyA",360,130);
    //Varsity Semifinals
    await newRank("RussellvilleA","FortSmithSouthsideA",340,120);
    await newRank("MountainViewARA","FayettevilleA",270,140);
    //Varsity Final
    await newRank("RussellvilleA","MountainViewARA",350,160);
    //JV Playoffs (Best of 3 Final)
    await newRank("RussellvilleB","FortSmithSouthsideC",170,100);
    await newRank("RussellvilleB","FortSmithSouthsideC",200,130);
    console.log("Arkansas C q V: "+qV[a2]);
    console.log("Arkansas C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    
    a2 = a2+1;
    b2 = b2+1;
    //SoCal C-Set
    //Prelims
    //Round 1
    await newRank("SantaMonicaA","WhitneyA",450,140);
    await newRank("CanyonCrestA","ArcadiaC",410,160);
    await newRank("ArcadiaA","ScrippsRanchA",420,130);
    await newRank("ArcadiaB","TroyA",330,220);
    await newRank("StMargaretsA","LaCanadaA",470,70);
    await newRank("SantiagoA","ArcadiaD",240,210);
    await newRank("PegasusA","VistaVerdeA",240,210);
    //Round 2
    await newRank("SantaMonicaA","ScrippsRanchA",420,200);
    await newRank("CanyonCrestA","ArcadiaB",310,250);
    await newRank("ArcadiaA","CanyonCrestB",530,110);
    await newRank("ArcadiaD","LaCanadaA",260,150);
    await newRank("StMargaretsA","VistaVerdeA",520,70);
    await newRank("SantiagoA","PegasusA",240,220);
    await newRank("TroyA","WhitneyA",390,120);
    //Round 3
    await newRank("SantaMonicaA","CanyonCrestB",340,230);
    await newRank("ScrippsRanchA","TroyA",280,240);
    await newRank("CanyonCrestA","WhitneyA",390,160);
    await newRank("ArcadiaA","ArcadiaC",410,170);
    await newRank("PegasusA","ArcadiaD",330,180);
    await newRank("VistaVerdeA","LaCanadaA",250,160);
    await newRank("StMargaretsA","SantiagoA",370,140);
    //Round 4
    await newRank("SantaMonicaA","ArcadiaC",520,70);
    await newRank("ArcadiaA","ArcadiaB",330,230);
    await newRank("StMargaretsA","PegasusA",300,250);
    await newRank("TroyA","CanyonCrestB",310,300);
    await newRank("SantiagoA","LaCanadaA",390,150);
    await newRank("CanyonCrestA","ScrippsRanchA",390,180);
    //Round 5
    await newRank("CanyonCrestA","CanyonCrestB",450,140);
    await newRank("TroyA","ArcadiaC",290,180);
    await newRank("SantaMonicaA","ArcadiaB",360,190);
    await newRank("ArcadiaA","WhitneyA",530,60);
    await newRank("LaCanadaA","PegasusA",230,220);
    await newRank("StMargaretsA","ArcadiaD",380,110);
    //Playoffs
    //Varsity Playoffs
    //Varsity Quarterfinals
    await newRank("ArcadiaA","ArcadiaC",420,140);
    await newRank("SantaMonicaA","CanyonCrestB",390,170);
    await newRank("CanyonCrestA","ScrippsRanchA",430,110);
    await newRank("ArcadiaB","TroyA",300,210);
    //Varsity Semifinals
    await newRank("ArcadiaA","ArcadiaB",470,120);
    await newRank("CanyonCrestA","SantaMonicaA",320,240);
    //Varsity Finals
    await newRank("ArcadiaA","CanyonCrestA",350,180);
    //JV Playoffs
    //JV Semifinals
    await newRank("StMargaretsA","ArcadiaD",450,70);
    await newRank("SantiagoA","PegasusA",320,120);
    //JV Finals
    await newRank("StMargaretsA","SantiagoA",280,140);
    console.log("SoCal C q V: "+qV[a2]);
    console.log("SoCal C q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    cSet = false;
    y = false;
    
    console.log("C-Set Rankings");
    await printRanks("Varsity");
    await printRanks("Junior Varsity");
    await printRanks("Middle School");
};

async function bSetData() {
    y = false;
    K = 100;
    bSet = true
    
    //Western New York B-Set
    //Prelims
    //Round 1
    await newRank("FayettevilleManliusA","IroquoisA",250,240);
    await newRank("IthacaA","IroquoisB",410,60);
    await newRank("NicholsA","NicholsB",360,70);
    await newRank("IthacaB","SacredHeartA",380,20);
    await newRank("ParkSchoolA","IroquoisC",320,40);
    //Round 2
    await newRank("FayettevilleManliusA","IroquoisB",410,60);
    await newRank("IthacaA","NicholsA",350,160);
    await newRank("IroquoisA","NicholsB",260,160);
    await newRank("IthacaB","ParkSchoolA",240,200);
    await newRank("IroquoisC","SacredHeartB",90,80);
    //Round 3
    await newRank("NicholsA","IroquoisA",260,230);
    await newRank("IthacaA","FayettevilleManliusA",370,150);
    await newRank("NicholsB","IroquoisB",250,150);
    await newRank("SacredHeartA","SacredHeartB",150,100);
    await newRank("IthacaB","IroquoisC",380,30);
    //Round 4
    await newRank("IthacaA","IroquoisA",330,190);
    await newRank("NicholsA","IroquoisB",250,110);
    await newRank("FayettevilleManliusA","NicholsB",270,110);
    await newRank("SacredHeartA","IroquoisC",100,20);
    await newRank("ParkSchoolA","SacredHeartB",210,40);
    //Round 5
    await newRank("NicholsA","FayettevilleManliusA",250,180);
    await newRank("IroquoisA","IroquoisB",230,180);
    await newRank("IthacaA","NicholsB",400,60);
    await newRank("IthacaB","SacredHeartB",230,30);
    await newRank("ParkSchoolA","SacredHeartA",230,50);
    //Playoffs
    //Varsity Semifinals
    await newRank("IthacaA","IroquoisA",420,80);
    await newRank("FayettevilleManliusA","NicholsA",220,210);
    //Varsity Finals
    await newRank("IthacaA","FayettevilleManliusA",360,110);
    //JV Semifinals
    await newRank("IthacaB","IroquoisC",210,30);
    await newRank("ParkSchoolA","SacredHeartA",160,40);
    //JV Finals
    await newRank("IthacaB","ParkSchoolA",180,140);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("Western NY B");
    
    //Hawaii State B-Set
    //Prelims
    //Round 1
    await newRank("IolaniB","PunahouB",340,60);
    await newRank("IolaniA","PunahouA",320,200);
    await newRank("McKinleyA","IolaniC",220,140);
    //Round 2
    await newRank("IolaniA","IolaniB",370,140);
    await newRank("McKinleyA","PunahouB",150,110);
    await newRank("PunahouA","IolaniC",320,90);
    //Round 3
    await newRank("PunahouA","PunahouB",380,50);
    await newRank("IolaniA","IolaniC",370,70);
    await newRank("IolaniB","McKinleyA",300,120);
    //Round 4
    await newRank("PunahouA","IolaniB",290,120);
    await newRank("IolaniC","PunahouB",100,80);
    await newRank("IolaniA","McKinleyA",540,40);
    //Round 5
    await newRank("IolaniA","PunahouB",400,60);
    await newRank("IolaniB","IolaniC",250,20);
    await newRank("PunahouA","McKinleyA",350,70);
    //Playoffs
    //Varsity Semifinals
    await newRank("IolaniA","McKinleyA",430,20);
    await newRank("PunahouA","IolaniB",270,150);
    //Varsity Finals
    await newRank("IolaniA","PunahouA",320,120);
    //JV Finals
    await newRank("IolaniC","PunahouB",110,90);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("Hawaii B")

    
    //Northern Virginia B-Set
    //Prelims
    //Round 1
    await newRank("RichardMontgomeryA","OaktonA",390,170);
    await newRank("WhitmanA","OaktonB",430,100);
    await newRank("ThomasJeffersonA","PotomacA",360,200);
    await newRank("ThomasJeffersonB","ThomasJeffersonC",350,160);
    await newRank("RichardMontgomeryB","ThomasJeffersonD",360,200);
    //Round 2
    await newRank("ThomasJeffersonB","WoodsonA",310,200);
    await newRank("RichardMontgomeryA","PotomacA",400,180);
    await newRank("WhitmanA","ThomasJeffersonC",370,130);
    await newRank("OaktonB","OaktonA",210,160);
    await newRank("RichardMontgomeryB","ThomasJeffersonE",400,140);
    //Round 3
    await newRank("ThomasJeffersonA","OaktonA",490,90);
    await newRank("RichardMontgomeryA","WhitmanA",420,170);
    await newRank("PotomacA","WoodsonA",270,240);
    await newRank("ThomasJeffersonB","OaktonB",330,130);
    await newRank("ThomasJeffersonD","ThomasJeffersonE",340,210);
    //Round 4
    await newRank("PotomacA","OaktonB",320,100);
    await newRank("ThomasJeffersonA","ThomasJeffersonB",380,150);
    await newRank("ThomasJeffersonC","OaktonA",210,110);
    await newRank("WhitmanA","WoodsonA",320,160);
    await newRank("ThomasJeffersonD","RichardMontgomeryB",270,250);
    //Round 5
    await newRank("ThomasJeffersonA","WhitmanA",290,220);
    await newRank("PotomacA","ThomasJeffersonC",320,130);
    await newRank("RichardMontgomeryA","ThomasJeffersonB",390,160);
    await newRank("WoodsonA","OaktonA",340,110);
    await newRank("RichardMontgomeryB","ThomasJeffersonE",280,220);
    //Playoffs
    //Varsity Semifinals
    await newRank("ThomasJeffersonA","WhitmanA",400,160);
    await newRank("RichardMontgomeryA","ThomasJeffersonB",450,90);
    //Varsity Finals
    await newRank("RichardMontgomeryA","ThomasJeffersonA",290,280);
    //JV Finals
    await newRank("RichardMontgomeryB","ThomasJeffersonD",300,200);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("NoVa B");
    
    //Idaho Falls B-Set
    //Prelims
    //Round 1
    await newRank("HillcrestA","ThunderRidgeB",201,200);
    await newRank("ThunderRidgeA","IdahoFallsA",270,200);
    await newRank("ThunderRidgeC","HillcrestB",220,90);
    //Round 2
    await newRank("IdahoFallsA","HillcrestA",210,110);
    await newRank("ThunderRidgeB","HillcrestB",330,20);
    await newRank("ThunderRidgeA","ThunderRidgeC",290,20);
    //Round 3
    await newRank("HillcrestA","HillcrestB",280,30);
    await newRank("IdahoFallsA","ThunderRidgeC",330,80);
    await newRank("ThunderRidgeB","ThunderRidgeA",220,150);
    //Round 4
    await newRank("HillcrestA","ThunderRidgeC",220,110);
    await newRank("ThunderRidgeA","HillcrestB",160,40);
    await newRank("ThunderRidgeB","IdahoFallsA",210,140);
    //Round 5
    await newRank("ThunderRidgeB","ThunderRidgeC",130,110);
    await newRank("IdahoFallsA","HillcrestB",290,70);
    await newRank("ThunderRidgeA","HillcrestA",180,140);
    //Playoffs
    //Semifinals
    await newRank("ThunderRidgeA","IdahoFallsA",170,140);
    await newRank("ThunderRidgeB","HillcrestA",110,70);
    //Finals
    await newRank("ThunderRidgeA","ThunderRidgeB",180,50);
    allV.push(teamAvgV);
    teamAvgV = [];
    console.log("Idaho Falls B");


    //Chattanooga B-Set
    //Prelims
    //Round 1
    await newRank("RedBankA","RedBankB",210,30);
    await newRank("SignalMountainB","SignalMountainD",170,150);
    //Round 2
    await newRank("SignalMountainA","RedBankA",250,80);
    await newRank("SignalMountainD","SignalMountainC",100,80);
    //Round 3
    await newRank("SignalMountainA","RedBankB",290,30);
    await newRank("SignalMountainB","SignalMountainC",190,90);
    allV.push(teamAvgV);
    allMS.push(teamAvgMS);
    teamAvgV = [];
    teamAvgMS = [];
    console.log("Chattanooga B");

    //Spokane B-Set
    //Prelims
    //Round 1
    await newRank("GonzagaA","EastValleyD",430,10);
    await newRank("MtSpokaneB","EastValleyB",260,90);
    await newRank("LewisandClarkA","EastValleyA",230,130);
    await newRank("MtSpokaneA","EastValleyC",250,50);
    //Round 2
    await newRank("GonzagaA","EastValleyC",270,80);
    await newRank("MtSpokaneB","EastValleyA",250,170);
    await newRank("LewisandClarkA","EastValleyB",310,70);
    await newRank("MtSpokaneA","EastValleyD",300,30);
    //Round 3
    await newRank("EastValleyB","EastValleyC",180,90);
    await newRank("GonzagaA","MtSpokaneA",340,140);
    await newRank("EastValleyA","EastValleyD",340,50);
    await newRank("MtSpokaneB","LewisandClarkA",250,220);
    //Round 4
    await newRank("MtSpokaneB","EastValleyD",280,0);
    await newRank("LewisandClarkA","EastValleyC",300,40);
    await newRank("GonzagaA","EastValleyB",310,80);
    await newRank("MtSpokaneA","EastValleyA",230,140);
    //Round 5
    await newRank("EastValleyA","EastValleyB",190,70);
    await newRank("MtSpokaneA","MtSpokaneB",250,170);
    await newRank("GonzagaA","LewisandClarkA",310,150);
    await newRank("EastValleyC","EastValleyD",80,60);
    //Playoffs
    //Varsity Semifinals
    await newRank("GonzagaA","LewisandClarkA",360,80);
    await newRank("MtSpokaneA","MtSpokaneB",160,110);
    await newRank("GonzagaA","MtSpokaneA",150,110);
    //JV Finals
    await newRank("EastValleyC","EastValleyD",80,60);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("Spokane B");


    //New Jersey State B-Set
    //Prelims
    //Round 1
    await newRank("GeorgeWashingtonWVA","OratoryA",440,180);
    await newRank("HunterA","MillburnC",420,160);
    await newRank("RanneyA","WestMilfordA",370,150);
    await newRank("EastBrunswickA","ParamusA",390,150);
    await newRank("EastBrunswickB","DemarestB",260,230);
    await newRank("DemarestA","TenaflyB",300,180);
    await newRank("MillburnA","WestMilfordB",520,60);
    await newRank("RidgewoodB","HewlettA",500,120);
    await newRank("RidgewoodA","NorthHighlandsA",290,170);
    await newRank("MillburnB","MCAB",280,240);
    await newRank("HighTechA","PascackHillsA",490,70);
    await newRank("RamseyA","MCAA",280,230);
    await newRank("SetonHallA","TenaflyA",350,250);
    await newRank("BethlehemA","HewlettB",320,210);
    await newRank("HunterB","MillburnE",510,80);
    await newRank("ChurchillNJA","HewlettD",420,170);
    await newRank("BethlehemMSA","RidgewoodF",400,20);
    await newRank("BergenA","HewlettC",380,120);
    await newRank("KinnelonA","SetonHallB",280,170);
    await newRank("HunterC","MillburnD",350,240);
    await newRank("RidgewoodC","HighTechB",330,110);
    await newRank("TenaflyC","RidgewoodD",350,150);
    await newRank("RanneyB","RidgewoodE",270,60);
    await newRank("TenaflyB","CavalliniB",161,160);
    await newRank("TenaflyA","BenFranklinA",250,110);
    await newRank("PEARLSA","TenaflyC",310,20);
    await newRank("PrimorisA","HomeschoolA",160,90);
    await newRank("CavalliniA","NyackA",120,70);
    //Round 2
    await newRank("HewlettB","WestMilfordA",320,130);
    await newRank("GeorgeWashingtonWVA","RanneyA",370,210);
    await newRank("OratoryA","MillburnC",340,150);
    await newRank("HunterA","PascackHillsA",490,100);
    await newRank("EastBrunswickA","RamseyA",410,160);
    await newRank("ParamusA","DemarestB",200,150);
    await newRank("EastBrunswickB","TenaflyB",210,170);
    await newRank("MillburnA","DemarestA",540,90);
    await newRank("RidgewoodB","WestMilfordB",470,70);
    await newRank("HewlettA","NorthHighlandsA",250,130);
    await newRank("MCAB","RidgewoodA",220,210);
    await newRank("HighTechA","MillburnB",400,130);
    await newRank("TenaflyA","BethlehemA",300,220);
    await newRank("SetonHallA","MCAA",410,130);
    await newRank("RidgewoodD","RidgewoodE",290,70);
    await newRank("HunterB","RanneyB",480,50);
    await newRank("HewlettD","MillburnE",250,120);
    await newRank("ChurchillNJA","BethlehemMSA",460,110);
    await newRank("BergenA","RidgewoodF",380,30);
    await newRank("HewlettC","SetonHallB",240,110);
    await newRank("MillburnD","KinnelonA",300,150);
    await newRank("HunterC","RidgewoodC",390,130);
    await newRank("TenaflyC","HolmdelA",241,240);
    await newRank("PrimorisA","CavalliniA",120,90);
    await newRank("TenaflyB","NyackA",170,70);
    await newRank("BenFranklinA","CavalliniB",150,90);
    await newRank("TenaflyA","PEARLSA",160,130);
    await newRank("MillburnA","HomeschoolA",210,40);
    //Round 3
    await newRank("BethlehemA","MCAA",310,240);
    await newRank("TenaflyA","WestMilfordA",390,180);
    await newRank("GeorgeWashingtonWVA","HewlettB",500,150);
    await newRank("RanneyA","MillburnC",270,240);
    await newRank("OratoryA","PascackHillsA",250,190);
    await newRank("HunterA","EastBrunswickA",330,230);
    await newRank("SetonHallA","DemarestB",340,150);
    await newRank("ParamusA","TenaflyB",260,200);
    await newRank("MillburnA","EastBrunswickB",490,160);
    await newRank("RidgewoodB","DemarestA",400,160);
    await newRank("NorthHighlandsA","WestMilfordB",210,170);
    await newRank("MCAB","HewlettA",260,240);
    await newRank("HighTechA","RidgewoodA",460,100);
    await newRank("RamseyA","MillburnB",300,240);
    await newRank("TenaflyC","HighTechB",390,120);
    await newRank("HolmdelA","RidgewoodE",360,50);
    await newRank("HunterB","RidgewoodD",450,100);
    await newRank("HewlettD","RanneyB",230,190);
    await newRank("BethlehemMSA","MillburnE",250,210);
    await newRank("ChurchillNJA","BergenA",330,170);
    await newRank("SetonHallB","RidgewoodF",230,60);
    await newRank("MillburnD","HewlettC",370,170);
    await newRank("RidgewoodC","KinnelonA",220,210);
    await newRank("TenaflyC","HomeschoolA",140,130);
    await newRank("MillburnA","CavalliniA",310,80);
    await newRank("PrimorisA","TenaflyB",210,130);
    await newRank("BenFranklinA","NyackA",210,70);
    await newRank("PEARLSA","CavalliniB",250,110);
    await newRank("JohnAdamsA","TenaflyA",220,190);
    //Round 4
    await newRank("SetonHallA","MillburnB",260,240);
    await newRank("BethlehemA","TenaflyB",310,120);
    await newRank("MCAA","WestMilfordA",270,160);
    await newRank("GeorgeWashingtonWVA","TenaflyA",480,120);
    await newRank("HewlettB","MillburnC",240,150);
    await newRank("RanneyA","PascackHillsA",320,120);
    await newRank("EastBrunswickA","OratoryA",360,200);
    await newRank("HunterA","DemarestB",530,70);
    await newRank("RamseyA","RidgewoodA",230,190);
    await newRank("MillburnA","ParamusA",440,140);
    await newRank("RidgewoodB","EastBrunswickB",540,40);
    await newRank("DemarestA","NorthHighlandsA",290,90);
    await newRank("HighTechA","HewlettA",380,150);
    await newRank("MCAB","WestMilfordB",290,70);
    await newRank("MillburnD","RidgewoodF",360,20);
    await newRank("HunterC","TenaflyC",360,190);
    await newRank("HewlettC","RidgewoodC",180,170);
    await newRank("HunterB","HolmdelA",350,210);
    await newRank("HewlettD","RidgewoodD",290,170);
    await newRank("BethlehemMSA","RanneyB",190,100);
    await newRank("BergenA","MillburnE",240,140);
    await newRank("ChurchillNJA","SetonHallB",490,30);
    await newRank("JohnAdamsA","CavalliniB",210,60);
    await newRank("TenaflyA","HomeschoolA",210,60);
    await newRank("CavalliniA","TenaflyC",90,50);
    await newRank("MillburnA","TenaflyB",210,50);
    await newRank("BenFranklinA","PrimorisA",140,90);
    await newRank("PEARLSA","NyackA",220,40);
    //Round 5
    await newRank("HewlettA","RamseyA",250,170);
    await newRank("SetonHallA","RidgewoodA",440,120);
    await newRank("MillburnB","BethlehemA",280,250);
    await newRank("HighTechA","WestMilfordB",440,60);
    await newRank("GeorgeWashingtonWVA","MCAA",510,110);
    await newRank("TenaflyA","MillburnC",300,160);
    await newRank("HewlettB","PascackHillsA",330,80);
    await newRank("EastBrunswickA","RanneyA",360,130);
    await newRank("OratoryA","DemarestB",230,190);
    await newRank("HunterA","TenaflyB",380,140);
    await newRank("MillburnA","SetonHallB",480,70);
    await newRank("RidgewoodB","ParamusA",430,90);
    await newRank("EastBrunswickB","NorthHighlandsA",200,100);
    await newRank("MCAB","DemarestA",270,170);
    await newRank("HewlettC","RidgewoodF",280,40);
    await newRank("KinnelonA","TenaflyC",280,210);
    await newRank("HunterB","HighTechB",410,80);
    await newRank("HolmdelA","HewlettD",260,150);
    await newRank("BethlehemMSA","RidgewoodD",240,200);
    await newRank("BergenA","RanneyB",310,130);
    await newRank("MillburnE","SetonHallB",230,150);
    await newRank("ChurchillNJA","MillburnD",400,210);
    await newRank("PEARLSA","PrimorisA",180,100);
    await newRank("JohnAdamsA","NyackA",240,30);
    await newRank("CavalliniB","HomeschoolA",190,40);
    await newRank("TenaflyA","CavalliniA",310,60);
    await newRank("BenFranklinA","TenaflyB",150,90);
    await newRank("MillburnA","TenaflyC",200,60);
    //Playoffs
    //Varsity Playoffs
    //Round of 26
    await newRank("EastBrunswickA","WestMilfordA",390,60);
    await newRank("MCAB","DemarestB",200,120);
    await newRank("BethlehemA","TenaflyB",270,90);
    await newRank("TenaflyA","MillburnC",380,70);
    await newRank("RanneyA","NorthernHighlandsA",300,50);
    await newRank("HewlettB","RidgewoodA",250,90);
    await newRank("OratoryA","MCAA",210,200);
    await newRank("RamseyA","ParamusA",290,170);
    await newRank("DemarestA","EastBrunswickB",310,90);
    await newRank("MillburnB","HewlettA",240,180);
    //Octofinals
    await newRank("MillburnA","MillburnB",400,120);
    await newRank("RidgewoodB","DemarestA",330,160);
    await newRank("GeorgeWashingtonWVA","RamseyA",490,100);
    await newRank("HighTechA","OratoryA",320,190);
    await newRank("HunterA","HewlettB",400,80);
    await newRank("SetonHallA","RanneyA",240,170);
    await newRank("EastBrunswickA","TenaflyA",290,200);
    await newRank("BethlehemA","MCAB",230,160);
    //Quarterfinals
    await newRank("MillburnA","BethlehemA",360,150);
    await newRank("RidgewoodB","EastBrunswickA",250,210);
    await newRank("GeorgeWashingtonWVA","SetonHallA",370,130);
    await newRank("HunterA","HighTechA",290,220);
    //Semifinals
    await newRank("HunterA","MillburnA",270,260);
    await newRank("GeorgeWashingtonWVA","RidgewoodA",350,180);
    //Finals
    await newRank("HunterA","GeorgeWashingtonWVA",330,260);
    //JV Playoffs
    //Octofinals
    //await newRank("HunterC","MillburnE",1,0);
    await newRank("MillburnD","RidgewoodD",300,80);
    await newRank("BergenA","HewlettC",310,110);
    await newRank("TenaflyC","RidgewoodC",340,60);
    await newRank("HolmdelA","HewlettD",240,180);
    await newRank("BethlehemMSA","KinnelonA",200,140);
    //Quarterfinals
    await newRank("HunterB","BethlehemMSA",340,150);
    await newRank("ChurchillNJA","HolmdelA",360,140);
    await newRank("HunterC","TenaflyC",380,130);
    await newRank("MillburnD","BergenA",310,110);
    //Semifinals
    await newRank("HunterB","MillburnD",280,190);
    await newRank("HunterC","ChurchillNJA",280,230);
    //Finals
    await newRank("HunterB","HunterC",280,220);
    //MS Playoffs
    //Quarterfinals
    await newRank("TenaflyA","TenaflyB",340,80);
    await newRank("MillburnA","CavalliniB",220,50);
    await newRank("PEARLSA","PrimorisA",200,70);
    await newRank("JohnAdamsA","BenFranklinA",230,70);
    //Semifinals
    await newRank("MillburnA","PEARLSA",140,120);
    await newRank("JohnAdamsA","TenaflyA",180,120);
    await newRank("JohnAdamsA","MillburnA",140,120);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    allMS.push(teamAvgMS);
    teamAvgV = [];
    teamAvgJV = [];
    teamAvgMS = [];
    console.log("NJ State B");

    

    //Central Georgia Winter B-Set
    //Prelims
    //Round 1
    await newRank("StarrsMillA","DeerfieldWindsorA",380,90);
    await newRank("StarrsMillB","JacksonA",350,80);
    await newRank("TJClassicA","StarrsMillE",450,90);
    await newRank("WandoA","StarrsMillC",260,150);
    await newRank("StarrsMillD","NortheastA");
    //Round 2
    await newRank("StarrsMillD","JacksonA",200,120);
    await newRank("StarrsMillB","StarrsMillC",240,100);
    await newRank("StarrsMillA","StarrsMillE",390,90);
    await newRank("TJClassicA","NortheastA",390,20);
    await newRank("WandoA","DeerfieldWindsorA",240,100);
    //Round 3
    await newRank("StarrsMillB","JacksonA",280,100);
    await newRank("StarrsMillA","StarrsMillD",400,80);
    await newRank("DeerfieldWindsorA","StarrsMillC",260,160);
    await newRank("StarrsMillE","NortheastA",260,50);
    await newRank("TJClassicA","WandoA",20,130);
    //Round 4
    await newRank("StarrsMillC","StarrsMillD",130,110);
    await newRank("StarrsMillA","JacksonA",370,20);
    await newRank("DeerfieldWindsorA","StarrsMillE",190,130);
    await newRank("TJClassicA","StarrsMillB",360,130);
    await newRank("WandoA","NortheastA",260,30);
    //Round 5
    await newRank("DeerfieldWindsorA","JacksonA",230,20);
    await newRank("StarrsMillB","StarrsMillC",330,60);
    await newRank("StarrsMillA","TJClassicA",250,220);
    await newRank("StarrsMillD","StarrsMillE",140,130);
    await newRank("WandoA","NortheastA",280,50);
    //Playoffs
    //Varsity Semifinals
    await newRank("StarrsMillA","DeerfieldWindsorA",350,50);
    await newRank("TJClassicA","StarrsMillB",310,130);
    //Varsity Finals
    await newRank("TJClassicA","StarrsMillA",240,190);
    allV.push(teamAvgV);
    allJV.push(teamAvgJV);
    teamAvgV = [];
    teamAvgJV = [];
    console.log("Central Georgia Winter B");



    y = true
    console.log(y);
    
    
    
    
    a2 = a2+1;
    b2 = b2+1;
    //Western New York B-Set
    //Prelims
    //Round 1
    await newRank("FayettevilleManliusA","IroquoisA",250,240);
    await newRank("IthacaA","IroquoisB",410,60);
    await newRank("NicholsA","NicholsB",360,70);
    await newRank("IthacaB","SacredHeartA",380,20);
    await newRank("ParkSchoolA","IroquoisC",320,40);
    //Round 2
    await newRank("FayettevilleManliusA","IroquoisB",410,60);
    await newRank("IthacaA","NicholsA",350,160);
    await newRank("IroquoisA","NicholsB",260,160);
    await newRank("IthacaB","ParkSchoolA",240,200);
    await newRank("IroquoisC","SacredHeartB",90,80);
    //Round 3
    await newRank("NicholsA","IroquoisA",260,230);
    await newRank("IthacaA","FayettevilleManliusA",370,150);
    await newRank("NicholsB","IroquoisB",250,150);
    await newRank("SacredHeartA","SacredHeartB",150,100);
    await newRank("IthacaB","IroquoisC",380,30);
    //Round 4
    await newRank("IthacaA","IroquoisA",330,190);
    await newRank("NicholsA","IroquoisB",250,110);
    await newRank("FayettevilleManliusA","NicholsB",270,110);
    await newRank("SacredHeartA","IroquoisC",100,20);
    await newRank("ParkSchoolA","SacredHeartB",210,40);
    //Round 5
    await newRank("NicholsA","FayettevilleManliusA",250,180);
    await newRank("IroquoisA","IroquoisB",230,180);
    await newRank("IthacaA","NicholsB",400,60);
    await newRank("IthacaB","SacredHeartB",230,30);
    await newRank("ParkSchoolA","SacredHeartA",230,50);
    //Playoffs
    //Varsity Semifinals
    await newRank("IthacaA","IroquoisA",420,80);
    await newRank("FayettevilleManliusA","NicholsA",220,210);
    //Varsity Finals
    await newRank("IthacaA","FayettevilleManliusA",360,110);
    //JV Semifinals
    await newRank("IthacaB","IroquoisC",210,30);
    await newRank("ParkSchoolA","SacredHeartA",160,40);
    //JV Finals
    await newRank("IthacaB","ParkSchoolA",180,140);
    console.log("WestNY B q V: "+qV[a2]);
    console.log("WestNY B q JV: "+qJV[b2]);
    a = 0;
    b = 0;
    
    a2 = a2+1;
    b2 = b2+1;
    //Hawaii State B-Set
    //Prelims
    //Round 1
    await newRank("IolaniB","PunahouB",340,60);
    await newRank("IolaniA","PunahouA",320,200);
    await newRank("McKinleyA","IolaniC",220,140);
    //Round 2
    await newRank("IolaniA","IolaniB",370,140);
    await newRank("McKinleyA","PunahouB",150,110);
    await newRank("PunahouA","IolaniC",320,90);
    //Round 3
    await newRank("PunahouA","PunahouB",380,50);
    await newRank("IolaniA","IolaniC",370,70);
    await newRank("IolaniB","McKinleyA",300,120);
    //Round 4
    await newRank("PunahouA","IolaniB",290,120);
    await newRank("IolaniC","PunahouB",100,80);
    await newRank("IolaniA","McKinleyA",540,40);
    //Round 5
    await newRank("IolaniA","PunahouB",400,60);
    await newRank("IolaniB","IolaniC",250,20);
    await newRank("PunahouA","McKinleyA",350,70);
    //Playoffs
    //Varsity Semifinals
    await newRank("IolaniA","McKinleyA",430,20);
    await newRank("PunahouA","IolaniB",270,150);
    //Varsity Finals
    await newRank("IolaniA","PunahouA",320,120);
    //JV Finals
    await newRank("IolaniC","PunahouB",110,90);
    console.log("Hawaii B q V: "+qV[a2]);
    console.log("Hawaii B q JV: "+qJV[b2]);
    a = 0;
    b = 0;

    a2 = a2+1;
    b2 = b2+1;
    //Northern Virginia B-Set
    //Prelims
    //Round 1
    await newRank("RichardMontgomeryA","OaktonA",390,170);
    await newRank("WhitmanA","OaktonB",430,100);
    await newRank("ThomasJeffersonA","PotomacA",360,200);
    await newRank("ThomasJeffersonB","ThomasJeffersonC",350,160);
    await newRank("RichardMontgomeryB","ThomasJeffersonD",360,200);
    //Round 2
    await newRank("ThomasJeffersonB","WoodsonA",310,200);
    await newRank("RichardMontgomeryA","PotomacA",400,180);
    await newRank("WhitmanA","ThomasJeffersonC",370,130);
    await newRank("OaktonB","OaktonA",210,160);
    await newRank("RichardMontgomeryB","ThomasJeffersonE",400,140);
    //Round 3
    await newRank("ThomasJeffersonA","OaktonA",490,90);
    await newRank("RichardMontgomeryA","WhitmanA",420,170);
    await newRank("PotomacA","WoodsonA",270,240);
    await newRank("ThomasJeffersonB","OaktonB",330,130);
    await newRank("ThomasJeffersonD","ThomasJeffersonE",340,210);
    //Round 4
    await newRank("PotomacA","OaktonB",320,100);
    await newRank("ThomasJeffersonA","ThomasJeffersonB",380,150);
    await newRank("ThomasJeffersonC","OaktonA",210,110);
    await newRank("WhitmanA","WoodsonA",320,160);
    await newRank("ThomasJeffersonD","RichardMontgomeryB",270,250);
    //Round 5
    await newRank("ThomasJeffersonA","WhitmanA",290,220);
    await newRank("PotomacA","ThomasJeffersonC",320,130);
    await newRank("RichardMontgomeryA","ThomasJeffersonB",390,160);
    await newRank("WoodsonA","OaktonA",340,110);
    await newRank("RichardMontgomeryB","ThomasJeffersonE",280,220);
    //Playoffs
    //Varsity Semifinals
    await newRank("ThomasJeffersonA","WhitmanA",400,160);
    await newRank("RichardMontgomeryA","ThomasJeffersonB",450,90);
    //Varsity Finals
    await newRank("RichardMontgomeryA","ThomasJeffersonA",290,280);
    //JV Finals
    await newRank("RichardMontgomeryB","ThomasJeffersonD",300,200);
    console.log("NoVa B q V: "+qV[a2]);
    console.log("NoVa B q JV: "+qJV[b2]);
    a = 0;
    b = 0;

    a2 = a2+1;
    //Idaho Falls B-Set
    //Prelims
    //Round 1
    await newRank("HillcrestA","ThunderRidgeB",201,200);
    await newRank("ThunderRidgeA","IdahoFallsA",270,200);
    await newRank("ThunderRidgeC","HillcrestB",220,90);
    //Round 2
    await newRank("IdahoFallsA","HillcrestA",210,110);
    await newRank("ThunderRidgeB","HillcrestB",330,20);
    await newRank("ThunderRidgeA","ThunderRidgeC",290,20);
    //Round 3
    await newRank("HillcrestA","HillcrestB",280,30);
    await newRank("IdahoFallsA","ThunderRidgeC",330,80);
    await newRank("ThunderRidgeB","ThunderRidgeA",220,150);
    //Round 4
    await newRank("HillcrestA","ThunderRidgeC",220,110);
    await newRank("ThunderRidgeA","HillcrestB",160,40);
    await newRank("ThunderRidgeB","IdahoFallsA",210,140);
    //Round 5
    await newRank("ThunderRidgeB","ThunderRidgeC",130,110);
    await newRank("IdahoFallsA","HillcrestB",290,70);
    await newRank("ThunderRidgeA","HillcrestA",180,140);
    //Playoffs
    //Semifinals
    await newRank("ThunderRidgeA","IdahoFallsA",170,140);
    await newRank("ThunderRidgeB","HillcrestA",110,70);
    //Finals
    await newRank("ThunderRidgeA","ThunderRidgeB",180,50);
    console.log("Idaho Falls B q V: "+qV[a2]);
    a = 0;

    a2 = a2+1;
    c2 = c2+1;
    //Chattanooga B-Set
    //Prelims
    //Round 1
    await newRank("RedBankA","RedBankB",210,30);
    await newRank("SignalMountainB","SignalMountainD",170,150);
    //Round 2
    await newRank("SignalMountainA","RedBankA",250,80);
    await newRank("SignalMountainD","SignalMountainC",100,80);
    //Round 3
    await newRank("SignalMountainA","RedBankB",290,30);
    await newRank("SignalMountainB","SignalMountainC",190,90);
    console.log("Chattanooga B q V: "+qV[a2]);
    console.log("Chattanooga B q MS: "+qMS[c2]);
    a = 0;
    c = 0;

    a2 = a2+1;
    b2 = b2+1;
    //Spokane B-Set
    //Prelims
    //Round 1
    await newRank("GonzagaA","EastValleyD",430,10);
    await newRank("MtSpokaneB","EastValleyB",260,90);
    await newRank("LewisandClarkA","EastValleyA",230,130);
    await newRank("MtSpokaneA","EastValleyC",250,50);
    //Round 2
    await newRank("GonzagaA","EastValleyC",270,80);
    await newRank("MtSpokaneB","EastValleyA",250,170);
    await newRank("LewisandClarkA","EastValleyB",310,70);
    await newRank("MtSpokaneA","EastValleyD",300,30);
    //Round 3
    await newRank("EastValleyB","EastValleyC",180,90);
    await newRank("GonzagaA","MtSpokaneA",340,140);
    await newRank("EastValleyA","EastValleyD",340,50);
    await newRank("MtSpokaneB","LewisandClarkA",250,220);
    //Round 4
    await newRank("MtSpokaneB","EastValleyD",280,0);
    await newRank("LewisandClarkA","EastValleyC",300,40);
    await newRank("GonzagaA","EastValleyB",310,80);
    await newRank("MtSpokaneA","EastValleyA",230,140);
    //Round 5
    await newRank("EastValleyA","EastValleyB",190,70);
    await newRank("MtSpokaneA","MtSpokaneB",250,170);
    await newRank("GonzagaA","LewisandClarkA",310,150);
    await newRank("EastValleyC","EastValleyD",80,60);
    //Playoffs
    //Varsity Semifinals
    await newRank("GonzagaA","LewisandClarkA",360,80);
    await newRank("MtSpokaneA","MtSpokaneB",160,110);
    await newRank("GonzagaA","MtSpokaneA",150,110);
    //JV Finals
    await newRank("EastValleyC","EastValleyD",80,60);
    console.log("Spokane B q V: "+qV[a2]);
    console.log("Spokane B q JV: "+qJV[b2]);
    a = 0;
    b = 0;

    a2 = a2+1;
    b2 = b2+1;
    c2 = c2+1;
    //New Jersey State B-Set
    //Prelims
    //Round 1
    await newRank("GeorgeWashingtonWVA","OratoryA",440,180);
    await newRank("HunterA","MillburnC",420,160);
    await newRank("RanneyA","WestMilfordA",370,150);
    await newRank("EastBrunswickA","ParamusA",390,150);
    await newRank("EastBrunswickB","DemarestB",260,230);
    await newRank("DemarestA","TenaflyB",300,180);
    await newRank("MillburnA","WestMilfordB",520,60);
    await newRank("RidgewoodB","HewlettA",500,120);
    await newRank("RidgewoodA","NorthHighlandsA",290,170);
    await newRank("MillburnB","MCAB",280,240);
    await newRank("HighTechA","PascackHillsA",490,70);
    await newRank("RamseyA","MCAA",280,230);
    await newRank("SetonHallA","TenaflyA",350,250);
    await newRank("BethlehemA","HewlettB",320,210);
    await newRank("HunterB","MillburnE",510,80);
    await newRank("ChurchillNJA","HewlettD",420,170);
    await newRank("BethlehemMSA","RidgewoodF",400,20);
    await newRank("BergenA","HewlettC",380,120);
    await newRank("KinnelonA","SetonHallB",280,170);
    await newRank("HunterC","MillburnD",350,240);
    await newRank("RidgewoodC","HighTechB",330,110);
    await newRank("TenaflyC","RidgewoodD",350,150);
    await newRank("RanneyB","RidgewoodE",270,60);
    await newRank("TenaflyB","CavalliniB",161,160);
    await newRank("TenaflyA","BenFranklinA",250,110);
    await newRank("PEARLSA","TenaflyC",310,20);
    await newRank("PrimorisA","HomeschoolA",160,90);
    await newRank("CavalliniA","NyackA",120,70);
    //Round 2
    await newRank("HewlettB","WestMilfordA",320,130);
    await newRank("GeorgeWashingtonWVA","RanneyA",370,210);
    await newRank("OratoryA","MillburnC",340,150);
    await newRank("HunterA","PascackHillsA",490,100);
    await newRank("EastBrunswickA","RamseyA",410,160);
    await newRank("ParamusA","DemarestB",200,150);
    await newRank("EastBrunswickB","TenaflyB",210,170);
    await newRank("MillburnA","DemarestA",540,90);
    await newRank("RidgewoodB","WestMilfordB",470,70);
    await newRank("HewlettA","NorthHighlandsA",250,130);
    await newRank("MCAB","RidgewoodA",220,210);
    await newRank("HighTechA","MillburnB",400,130);
    await newRank("TenaflyA","BethlehemA",300,220);
    await newRank("SetonHallA","MCAA",410,130);
    await newRank("RidgewoodD","RidgewoodE",290,70);
    await newRank("HunterB","RanneyB",480,50);
    await newRank("HewlettD","MillburnE",250,120);
    await newRank("ChurchillNJA","BethlehemMSA",460,110);
    await newRank("BergenA","RidgewoodF",380,30);
    await newRank("HewlettC","SetonHallB",240,110);
    await newRank("MillburnD","KinnelonA",300,150);
    await newRank("HunterC","RidgewoodC",390,130);
    await newRank("TenaflyC","HolmdelA",241,240);
    await newRank("PrimorisA","CavalliniA",120,90);
    await newRank("TenaflyB","NyackA",170,70);
    await newRank("BenFranklinA","CavalliniB",150,90);
    await newRank("TenaflyA","PEARLSA",160,130);
    await newRank("MillburnA","HomeschoolA",210,40);
    //Round 3
    await newRank("BethlehemA","MCAA",310,240);
    await newRank("TenaflyA","WestMilfordA",390,180);
    await newRank("GeorgeWashingtonWVA","HewlettB",500,150);
    await newRank("RanneyA","MillburnC",270,240);
    await newRank("OratoryA","PascackHillsA",250,190);
    await newRank("HunterA","EastBrunswickA",330,230);
    await newRank("SetonHallA","DemarestB",340,150);
    await newRank("ParamusA","TenaflyB",260,200);
    await newRank("MillburnA","EastBrunswickB",490,160);
    await newRank("RidgewoodB","DemarestA",400,160);
    await newRank("NorthHighlandsA","WestMilfordB",210,170);
    await newRank("MCAB","HewlettA",260,240);
    await newRank("HighTechA","RidgewoodA",460,100);
    await newRank("RamseyA","MillburnB",300,240);
    await newRank("TenaflyC","HighTechB",390,120);
    await newRank("HolmdelA","RidgewoodE",360,50);
    await newRank("HunterB","RidgewoodD",450,100);
    await newRank("HewlettD","RanneyB",230,190);
    await newRank("BethlehemMSA","MillburnE",250,210);
    await newRank("ChurchillNJA","BergenA",330,170);
    await newRank("SetonHallB","RidgewoodF",230,60);
    await newRank("MillburnD","HewlettC",370,170);
    await newRank("RidgewoodC","KinnelonA",220,210);
    await newRank("TenaflyC","HomeschoolA",140,130);
    await newRank("MillburnA","CavalliniA",310,80);
    await newRank("PrimorisA","TenaflyB",210,130);
    await newRank("BenFranklinA","NyackA",210,70);
    await newRank("PEARLSA","CavalliniB",250,110);
    await newRank("JohnAdamsA","TenaflyA",220,190);
    //Round 4
    await newRank("SetonHallA","MillburnB",260,240);
    await newRank("BethlehemA","TenaflyB",310,120);
    await newRank("MCAA","WestMilfordA",270,160);
    await newRank("GeorgeWashingtonWVA","TenaflyA",480,120);
    await newRank("HewlettB","MillburnC",240,150);
    await newRank("RanneyA","PascackHillsA",320,120);
    await newRank("EastBrunswickA","OratoryA",360,200);
    await newRank("HunterA","DemarestB",530,70);
    await newRank("RamseyA","RidgewoodA",230,190);
    await newRank("MillburnA","ParamusA",440,140);
    await newRank("RidgewoodB","EastBrunswickB",540,40);
    await newRank("DemarestA","NorthHighlandsA",290,90);
    await newRank("HighTechA","HewlettA",380,150);
    await newRank("MCAB","WestMilfordB",290,70);
    await newRank("MillburnD","RidgewoodF",360,20);
    await newRank("HunterC","TenaflyC",360,190);
    await newRank("HewlettC","RidgewoodC",180,170);
    await newRank("HunterB","HolmdelA",350,210);
    await newRank("HewlettD","RidgewoodD",290,170);
    await newRank("BethlehemMSA","RanneyB",190,100);
    await newRank("BergenA","MillburnE",240,140);
    await newRank("ChurchillNJA","SetonHallB",490,30);
    await newRank("JohnAdamsA","CavalliniB",210,60);
    await newRank("TenaflyA","HomeschoolA",210,60);
    await newRank("CavalliniA","TenaflyC",90,50);
    await newRank("MillburnA","TenaflyB",210,50);
    await newRank("BenFranklinA","PrimorisA",140,90);
    await newRank("PEARLSA","NyackA",220,40);
    //Round 5
    await newRank("HewlettA","RamseyA",250,170);
    await newRank("SetonHallA","RidgewoodA",440,120);
    await newRank("MillburnB","BethlehemA",280,250);
    await newRank("HighTechA","WestMilfordB",440,60);
    await newRank("GeorgeWashingtonWVA","MCAA",510,110);
    await newRank("TenaflyA","MillburnC",300,160);
    await newRank("HewlettB","PascackHillsA",330,80);
    await newRank("EastBrunswickA","RanneyA",360,130);
    await newRank("OratoryA","DemarestB",230,190);
    await newRank("HunterA","TenaflyB",380,140);
    await newRank("MillburnA","SetonHallB",480,70);
    await newRank("RidgewoodB","ParamusA",430,90);
    await newRank("EastBrunswickB","NorthHighlandsA",200,100);
    await newRank("MCAB","DemarestA",270,170);
    await newRank("HewlettC","RidgewoodF",280,40);
    await newRank("KinnelonA","TenaflyC",280,210);
    await newRank("HunterB","HighTechB",410,80);
    await newRank("HolmdelA","HewlettD",260,150);
    await newRank("BethlehemMSA","RidgewoodD",240,200);
    await newRank("BergenA","RanneyB",310,130);
    await newRank("MillburnE","SetonHallB",230,150);
    await newRank("ChurchillNJA","MillburnD",400,210);
    await newRank("PEARLSA","PrimorisA",180,100);
    await newRank("JohnAdamsA","NyackA",240,30);
    await newRank("CavalliniB","HomeschoolA",190,40);
    await newRank("TenaflyA","CavalliniA",310,60);
    await newRank("BenFranklinA","TenaflyB",150,90);
    await newRank("MillburnA","TenaflyC",200,60);
    //Playoffs
    //Varsity Playoffs
    //Round of 26
    await newRank("EastBrunswickA","WestMilfordA",390,60);
    await newRank("MCAB","DemarestB",200,120);
    await newRank("BethlehemA","TenaflyB",270,90);
    await newRank("TenaflyA","MillburnC",380,70);
    await newRank("RanneyA","NorthernHighlandsA",300,50);
    await newRank("HewlettB","RidgewoodA",250,90);
    await newRank("OratoryA","MCAA",210,200);
    await newRank("RamseyA","ParamusA",290,170);
    await newRank("DemarestA","EastBrunswickB",310,90);
    await newRank("MillburnB","HewlettA",240,180);
    //Octofinals
    await newRank("MillburnA","MillburnB",400,120);
    await newRank("RidgewoodB","DemarestA",330,160);
    await newRank("GeorgeWashingtonWVA","RamseyA",490,100);
    await newRank("HighTechA","OratoryA",320,190);
    await newRank("HunterA","HewlettB",400,80);
    await newRank("SetonHallA","RanneyA",240,170);
    await newRank("EastBrunswickA","TenaflyA",290,200);
    await newRank("BethlehemA","MCAB",230,160);
    //Quarterfinals
    await newRank("MillburnA","BethlehemA",360,150);
    await newRank("RidgewoodB","EastBrunswickA",250,210);
    await newRank("GeorgeWashingtonWVA","SetonHallA",370,130);
    await newRank("HunterA","HighTechA",290,220);
    //Semifinals
    await newRank("HunterA","MillburnA",270,260);
    await newRank("GeorgeWashingtonWVA","RidgewoodA",350,180);
    //Finals
    await newRank("HunterA","GeorgeWashingtonWVA",330,260);
    //JV Playoffs
    //Octofinals
    //await newRank("HunterC","MillburnE",1,0);
    await newRank("MillburnD","RidgewoodD",300,80);
    await newRank("BergenA","HewlettC",310,110);
    await newRank("TenaflyC","RidgewoodC",340,60);
    await newRank("HolmdelA","HewlettD",240,180);
    await newRank("BethlehemMSA","KinnelonA",200,140);
    //Quarterfinals
    await newRank("HunterB","BethlehemMSA",340,150);
    await newRank("ChurchillNJA","HolmdelA",360,140);
    await newRank("HunterC","TenaflyC",380,130);
    await newRank("MillburnD","BergenA",310,110);
    //Semifinals
    await newRank("HunterB","MillburnD",280,190);
    await newRank("HunterC","ChurchillNJA",280,230);
    //Finals
    await newRank("HunterB","HunterC",280,220);
    //MS Playoffs
    //Quarterfinals
    await newRank("TenaflyA","TenaflyB",340,80);
    await newRank("MillburnA","CavalliniB",220,50);
    await newRank("PEARLSA","PrimorisA",200,70);
    await newRank("JohnAdamsA","BenFranklinA",230,70);
    //Semifinals
    await newRank("MillburnA","PEARLSA",140,120);
    await newRank("JohnAdamsA","TenaflyA",180,120);
    await newRank("JohnAdamsA","MillburnA",140,120);
    console.log("New Jersey State B q V: "+qV[a2]);
    console.log("New Jersey State B q JV: "+qJV[b2]);
    console.log("New Jersey State B q MS: "+qMS[c2]);
    a = 0;
    b = 0;
    c = 0;

    a2 = a2+1;
    b2 = b2+1;
    //Central Georgia Winter B-Set
    //Prelims
    //Round 1
    await newRank("StarrsMillA","DeerfieldWindsorA",380,90);
    await newRank("StarrsMillB","JacksonA",350,80);
    await newRank("TJClassicA","StarrsMillE",450,90);
    await newRank("WandoA","StarrsMillC",260,150);
    await newRank("StarrsMillD","NortheastA");
    //Round 2
    await newRank("StarrsMillD","JacksonA",200,120);
    await newRank("StarrsMillB","StarrsMillC",240,100);
    await newRank("StarrsMillA","StarrsMillE",390,90);
    await newRank("TJClassicA","NortheastA",390,20);
    await newRank("WandoA","DeerfieldWindsorA",240,100);
    //Round 3
    await newRank("StarrsMillB","JacksonA",280,100);
    await newRank("StarrsMillA","StarrsMillD",400,80);
    await newRank("DeerfieldWindsorA","StarrsMillC",260,160);
    await newRank("StarrsMillE","NortheastA",260,50);
    await newRank("TJClassicA","WandoA",20,130);
    //Round 4
    await newRank("StarrsMillC","StarrsMillD",130,110);
    await newRank("StarrsMillA","JacksonA",370,20);
    await newRank("DeerfieldWindsorA","StarrsMillE",190,130);
    await newRank("TJClassicA","StarrsMillB",360,130);
    await newRank("WandoA","NortheastA",260,30);
    //Round 5
    await newRank("DeerfieldWindsorA","JacksonA",230,20);
    await newRank("StarrsMillB","StarrsMillC",330,60);
    await newRank("StarrsMillA","TJClassicA",250,220);
    await newRank("StarrsMillD","StarrsMillE",140,130);
    await newRank("WandoA","NortheastA",280,50);
    //Playoffs
    //Varsity Semifinals
    await newRank("StarrsMillA","DeerfieldWindsorA",350,50);
    await newRank("TJClassicA","StarrsMillB",310,130);
    //Varsity Finals
    await newRank("TJClassicA","StarrsMillA",240,190);
    console.log("Central GA B q V: "+qV[a2]);
    console.log("Central GA B q JV: "+qJV[b2]);
    a = 0;
    b = 0;

    bSet = false;
    y = false;
}

//cSetData();
        
async function allSets() {
    await cSetData();
    await bSetData();
    console.log("Overall Rankings")
    await printRanks("Varsity");
    await printRanks("Junior Varsity");
    //await printRanks("Middle School");
}
    
allSets();

/*
db.collection("teams").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        (`${doc.id} => ${doc.data()}`);
    });
});*/

