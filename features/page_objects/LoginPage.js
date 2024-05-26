const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.initialLoginButton = page.locator("span[class='primary-nav__profile-text']");
    this.emailInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator("[type='submit']");
    this.userIcon = page.locator('.#userMenu');
    this.settings = page.locator("[title='Akkoord']");
  }

  async login(email, password) {
    await this.settings.click();
    await this.initialLoginButton.click();
    await this.emailInput.fill(email);
    await this.submitButton.click();
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async verifyLogin() {
    // Add logic to verify login success, e.g., check for a user profile
    await this.userIcon.click();
    const userProfileMenu = this.page.locator('.menu__popover');
    await expect(userProfileMenu).toBeVisible();
  }
}

module.exports = LoginPage;
