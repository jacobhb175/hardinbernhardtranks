let tournamentUrls = [];
let teamUrls = [];
let roundUrls = [];

const dom = new JSDOM(``, {
    url: "https://www.naqt.com/stats/tournament",
    referrer: "https://www.naqt.com/stats/tournament",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000
});

for (let i = 0; i < 219; i++) {
    let tournamentUrl = document.querySelectorAll('th > a')[i].href;   
    tournamentUrls.push(tournamentUrl);
}
console.log(tournamentUrls);

