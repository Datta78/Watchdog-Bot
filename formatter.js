/**
 * Formats the daily summary message sent via Telegram.
 * TODO: Add price watcher section once that service is implemented.
 */
function formatDailySummary({ github, weather, price }) {
  const lines = [];

  lines.push('Watchdog-Bot Daily Summary');
  lines.push('---------------------------');

  if (github) {
    lines.push(`GitHub (@${github.username}): ${github.contributionsToday} contributions today`);
  }

  if (weather) {
    lines.push(`Weather in ${weather.city}: ${weather.temperature}`);
  }

  if (price) {
    lines.push(`Price watch: ${price.dropped ? 'Price dropped!' : 'No change'}`);
  }

  return lines.join('\n');
}

module.exports = {
  formatDailySummary
};
