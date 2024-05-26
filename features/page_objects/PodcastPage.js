const { expect } = require('@playwright/test');

class PodcastPage {
  constructor(page) {
    this.page = page;
    this.podcastLink = page.locator("[data-content_id='25313239']");
    this.randomPodcast = page.locator("a[data-content_id='25313239'] span[class='sc-gKAblj bVGAsC']");
    this.openedPodcast = this.page.locator('.sc-gKAblj cImlfT');
  }

  async openRandomPodcast() {
    const podcastTitle = await this.randomPodcast.textContent();
    return podcastTitle;
  }

  async verifyCorrectPodcastOpened(expectedTitle) {
    await this.podcastLink.click();
    const openedPodcastTitle = await this.openedPodcast.textContent();
    expect(openedPodcastTitle).toBe(expectedTitle);
  }

  async playPodcast() {
    // Verification for podcast playing
    const isPlaying = await this.page.evaluate(() => {
    const audio = document.querySelector('audio');
    return !audio.paused;
    });
    expect(isPlaying).toBeTruthy();
  }
  
}

module.exports = PodcastPage;
