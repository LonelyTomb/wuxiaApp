import puppeteer from 'puppeteer';

export default function(req, res, next) {
	const baseUrl = 'https://www.wuxiaworld.com/';
	const scrape = async () => {
		try {
			const browser = await puppeteer.launch({ headless: true });
			const page = await browser.newPage();
			await page.waitForSelector('body');
			await page.on(`console`, msg =>
				// eslint-disable-next-line no-console
				console.log(`Page Console: ${msg.text()}`)
			);
			await page.goto(baseUrl);
			const result = await page.evaluate(() => {
				const data = [];
				const elements = document.querySelectorAll(
					'ul.nav.navbar-nav.nav-public:nth-child(1) > li > a'
				);
				for (let i = 0; i < elements.length; i++) {
					data.push(elements[i].getAttribute('href'));
				}
				// eslint-disable-next-line no-console
				return data;
			});
			await browser.close();
			return result;
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log(e);
		}
	};

	scrape().then(value => {
		res.send(value); // Success!
	});
	// res.send(scrape());
}
