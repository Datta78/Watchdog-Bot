const axios = require('axios');

/**
 * Checks a website for a price and compares it with the last known price.
 * TODO: Implement actual scraping logic (cheerio/puppeteer) once a target URL is chosen.
 */
async function checkPrice() {
  try {
    // Placeholder result
    const result = {
      url: null,
      currentPrice: null,
      previousPrice: null,
      dropped: false
    };

    return result;
  } catch (error) {
    console.error('Error checking price:', error.message);
    return null;
  }
}

module.exports = {
  checkPrice
};
