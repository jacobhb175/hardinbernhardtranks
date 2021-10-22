const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let tournamentUrls = [];
let teamUrls = [];
let roundUrls = [];

const dom = new JSDOM(``, {
    url: "https://www.naqt.com/stats/tournament/?year_code=2020&audience_id=1002&length=Any&state_code=&radius=&center_description=&include_online=true",
    referrer: "https://www.naqt.com/stats/tournament/?year_code=2020&audience_id=1002&length=Any&state_code=&radius=&center_description=&include_online=true",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000
});

for (let i = 0; i < 219; i++) {
    let tournamentUrl = document.querySelectorAll('th > a')[i].href;
    tournamentUrls.push(tournamentUrl);
}
console.log(tournamentUrls);

