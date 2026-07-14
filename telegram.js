const TelegramBot = require('node-telegram-bot-api');
const config = require('../config');

let bot = null;

function initBot() {
  if (!config.telegram.botToken) {
    console.warn('Telegram bot token not set. Notifications will not be sent.');
    return null;
  }
  bot = new TelegramBot(config.telegram.botToken, { polling: false });
  return bot;
}

/**
 * Sends a text message to the configured Telegram chat.
 * TODO: Hook this up once bot token and chat ID are added to .env
 */
async function sendMessage(message) {
  try {
    if (!bot) initBot();
    if (!bot || !config.telegram.chatId) {
      console.log('[Telegram - not configured] Would send:', message);
      return;
    }
    await bot.sendMessage(config.telegram.chatId, message);
  } catch (error) {
    console.error('Error sending Telegram message:', error.message);
  }
}

module.exports = {
  sendMessage
};
