const puppeteer = require('puppeteer');

const baseUrl = 'https://www.wuxiaworld.com/';
const scrape = async () => {
	try {
		const browser = await puppeteer.launch({
			// headless: false,
			// slowMo: 500,
			// devtools: true
		});
		const page = await browser.newPage();
		await page.on(`console`, msg => console.log(`Page Console: ${msg.text()}`));
		await page.goto(baseUrl);

		await page.waitForSelector('ul.nav.navbar-nav.nav-public');
		const result = await page.evaluate(() => {
			const data = [],
				navLinks = [];
			console.log('test');
			const query = document.querySelectorAll(
				'ul.nav.navbar-nav.nav-public:nth-child(1) > li > a'
			);
			// console.log(query.innerHTML);
			for (let i = 0; i < query.length; i++) {
				console.log(query[i].innerText);
				navLinks.push(query[i].getAttribute('href'));
			}
			console.log(navLinks);
			return navLinks;
		});
		await browser.close();
		return result;
	} catch (e) {
		console.log(e);
	}
};

scrape().then(value => {
	console.log(value); // Success!
});
