const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './features',
  timeout: 5 * 1000,
  expect: {
    timeout: 5000
  },
  username: 'tinapatil879@gmail.com',
  password: 'TinaPatil879@',
  
  retries: 2,
 
  reporter: 
  [
    ['list'],
    ['allure-playwright'],
  ],
  
  use: {
    headless: true,
    actionTimeout: 30000,
    ignoreHTTPSErrors: true,
    permissions: ['geolocation'],
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },


  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },

    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },

    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    }

  ],

  outputDir: 'test-results/'
   
});

