const axios = require('axios');
const config = require('../config');

/**
 * Fetches today's GitHub contribution count for the configured user.
 * TODO: Implement actual GitHub GraphQL API call using config.github.token
 */
async function getTodayContributions() {
  try {
    // Placeholder - replace with real GitHub GraphQL contributions query
    const response = {
      username: config.github.username,
      contributionsToday: 0
    };

    return response;
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error.message);
    return null;
  }
}

/**
 * Fetches public repo count / basic profile stats.
 * TODO: Implement using GitHub REST API
 */
async function getProfileStats() {
  try {
    // Placeholder for GET https://api.github.com/users/{username}
    return {
      followers: 0,
      publicRepos: 0
    };
  } catch (error) {
    console.error('Error fetching GitHub profile stats:', error.message);
    return null;
  }
}

module.exports = {
  getTodayContributions,
  getProfileStats
};
