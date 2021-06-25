const puppeteer = require('puppeteer');


(async function scrape() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.naqt.com/stats/tournament');
})();