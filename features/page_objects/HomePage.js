class HomePage {
    constructor(page) {
      this.page = page;
      this.searchIcon = page.locator('.icons.icon-search');
      this.searchBox = page.locator("[type='text']");
      this.searchButton = page.locator('.css-15hth34');
      this.searchResults = page.locator('.css-1cpdbx7');
    }
  
    async searchArticle(article) {
      await this.searchIcon.click();
      await this.searchBox.fill(article);
      await this.searchButton.click();
    }

    async verifySearchResult() {
      // Add logic to verify search results, e.g., check for Results found text
      await expect(this.searchResults).toHaveText('(Results found for “Labor day”)');
    }
  }
  
  module.exports = HomePage;
  