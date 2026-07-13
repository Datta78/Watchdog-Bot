const express = require('express');
const cron = require('node-cron');
const path = require('path');

const config = require('./config');
const github = require('./services/github');
const weather = require('./services/weather');
const telegram = require('./services/telegram');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Simple API endpoint to check current status manually from the dashboard
app.get('/api/status', async (req, res) => {
  const contributions = await github.getTodayContributions();
  const weatherData = await weather.getCurrentWeather();

  res.json({
    github: contributions,
    weather: weatherData,
    lastChecked: new Date().toISOString()
  });
});

// Runs the daily check and sends a Telegram notification
async function runDailyCheck() {
  console.log('Running daily automation check...');

  const contributions = await github.getTodayContributions();
  const weatherData = await weather.getCurrentWeather();

  const message = buildMessage(contributions, weatherData);
  await telegram.sendMessage(message);

  console.log('Daily check complete.');
}

function buildMessage(contributions, weatherData) {
  // TODO: format this nicely once real data is flowing in
  return `Daily Update\nGitHub contributions today: ${contributions ? contributions.contributionsToday : 'N/A'}\nWeather in ${weatherData ? weatherData.city : 'N/A'}: ${weatherData ? weatherData.temperature : 'N/A'}`;
}

// Schedule the daily check (default: 8:00 AM)
cron.schedule(config.schedule.dailyCheckTime, runDailyCheck);

app.listen(PORT, () => {
  console.log(`Automation bot dashboard running at http://localhost:${PORT}`);
});
