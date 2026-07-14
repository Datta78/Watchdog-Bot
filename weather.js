const axios = require('axios');
const config = require('../config');

/**
 * Fetches current weather for the configured city.
 * TODO: Implement actual OpenWeatherMap API call using config.weather.apiKey
 */
async function getCurrentWeather() {
  try {
    // Placeholder - replace with real call to:
    // https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric
    const data = {
      city: config.weather.city,
      temperature: null,
      condition: null,
      humidity: null
    };

    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    return null;
  }
}

module.exports = {
  getCurrentWeather
};
