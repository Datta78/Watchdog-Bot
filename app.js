const githubCountEl = document.getElementById('github-count');
const githubUpdatedEl = document.getElementById('github-updated');

const weatherCityEl = document.getElementById('weather-city');
const weatherTempEl = document.getElementById('weather-temp');
const weatherConditionEl = document.getElementById('weather-condition');

const lastCheckedEl = document.getElementById('last-checked');
const refreshBtn = document.getElementById('refresh-btn');

async function fetchStatus() {
  try {
    const response = await fetch('/api/status');
    const data = await response.json();

    // GitHub section
    if (data.github) {
      githubCountEl.textContent = data.github.contributionsToday ?? '--';
      githubUpdatedEl.textContent = `@${data.github.username || 'unknown'}`;
    }

    // Weather section
    if (data.weather) {
      weatherCityEl.textContent = data.weather.city || '--';
      weatherTempEl.textContent = data.weather.temperature ? `${data.weather.temperature}°C` : '--°C';
      weatherConditionEl.textContent = data.weather.condition || 'No data yet';
    }

    // Last checked
    lastCheckedEl.textContent = new Date(data.lastChecked).toLocaleString();

  } catch (error) {
    console.error('Failed to fetch status:', error);
    lastCheckedEl.textContent = 'Error fetching data';
  }
}

refreshBtn.addEventListener('click', fetchStatus);

// Load status on page load
fetchStatus();
