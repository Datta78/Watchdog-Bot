require('dotenv').config();

module.exports = {
  github: {
    username: process.env.GITHUB_USERNAME || 'Datta78',
    token: process.env.GITHUB_TOKEN || ''
  },
  weather: {
    apiKey: process.env.WEATHER_API_KEY || '',
    city: process.env.WEATHER_CITY || 'Kolhapur'
  },
  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN || '',
    chatId: process.env.TELEGRAM_CHAT_ID || ''
  },
  schedule: {
    // cron format: minute hour day month weekday
    dailyCheckTime: process.env.CRON_TIME || '0 8 * * *' // 8:00 AM daily
  }
};
