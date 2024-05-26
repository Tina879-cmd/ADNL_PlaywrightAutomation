const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../page_objects/LoginPage');
const HomePage = require('../page_objects/HomePage');
const config = require('../../config');

let loginPage;
let homePage;

setDefaultTimeout(60 * 1000);

Given('user opens the home page', { timeout: 20 * 1000 }, async function () {
  loginPage = new LoginPage(this.page);
  homePage = new HomePage(this.page);
  await this.page.goto('https://www.ad.nl/');
  await loginPage.login(config.username, config.password);
});

When('user search for {string}', async function (article) {
  await homePage.searchArticle(article);
});

Then('user should be able to see the search results', async function () {
  await homePage.verifySearchResult();
});
