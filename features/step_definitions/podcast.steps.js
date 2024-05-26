const { Given, When, Then } = require('@cucumber/cucumber');
const PodcastPage = require('../page_objects/PodcastPage');
const config = require('../../config');

let loginPage;
let podcastPage;
let expectedTitle;
setDefaultTimeout(60 * 1000); 

Given('user opened the podcast page', { timeout: 20 * 1000 }, async function () {
  loginPage = new LoginPage(this.page);
  podcastPage = new PodcastPage(this.page);
  await page.goto('https://www.ad.nl/');
  await loginPage.login(config.username, config.password);
  await this.page.goto('https://www.ad.nl/podcasts');
});

When('user should be able to open a random podcast', async function () {
  expectedTitle = await podcastPage.openRandomPodcast();
});

Then('the correct podcast should be opened', async function () {
  await podcastPage.verifyCorrectPodcastOpened(expectedTitle);
});

Then('user should be able to play a podcast', async function () {
  await podcastPage.playPodcast();
});
