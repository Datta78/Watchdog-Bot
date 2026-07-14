const express = require('express');
const router = express.Router();

const github = require('../services/github');
const weather = require('../services/weather');
const priceWatcher = require('../services/priceWatcher');

router.get('/status', async (req, res) => {
  const githubData = await github.getTodayContributions();
  const weatherData = await weather.getCurrentWeather();
  const priceData = await priceWatcher.checkPrice();

  res.json({
    github: githubData,
    weather: weatherData,
    price: priceData,
    lastChecked: new Date().toISOString()
  });
});

router.get('/ping', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = router;
