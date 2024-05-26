const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../page_objects/LoginPage');
const config = require('../../config');

let loginPage;

setDefaultTimeout(60 * 1000); 

Given('user should open  login page to adnl site',{ timeout: 20 * 1000 }, async function () {
  loginPage = new LoginPage(this.page);
  await this.page.goto('https://www.ad.nl/');
});

When('logged with username and password', { timeout: 20 * 1000 }, async function () {
  await loginPage.login(config.username, config.password);
});

Then('user should see the user profile', async function () {
  await loginPage.verifyLogin();
}); 

