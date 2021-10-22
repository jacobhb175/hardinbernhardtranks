const scraperObject = {
    url: 'https://www.naqt.com/stats/tournament/?year_code=2020&audience_id=1002&length=Any&state_code=&radius=&center_description=&include_online=true',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
        // Wait for the required DOM to be rendered
        //const navigationPromise = page.waitForNavigation({waitUntil: "domcontentloaded"});
        //await page.waitForSelector('.page_inner');
        // Get the link to all the required books
        //let links = links.map(el => el.querySelector('th > a').href)
        //console.log(links)
        let urls = await page.$$eval(links => {
            // Make sure the book to be scraped is in stock
            links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
            // Extract the links from the data
            links = links.map(el => el.querySelector('th > a').href)
            return links;
        });
        console.log(urls);
    }
}
/*
const scraperObject = {
    url: 'http://books.toscrape.com',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        // Navigate to the selected page
        await page.goto(this.url);
        // Wait for the required DOM to be rendered
        await page.waitForSelector('.page_inner');
        // Get the link to all the required books
        let urls = await page.$$eval('section ol > li', links => {
            // Make sure the book to be scraped is in stock
            links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
            // Extract the links from the data
            links = links.map(el => el.querySelector('h3 > a').href)
            return links;
        });
        console.log(urls);
    }
}*/

module.exports = scraperObject;