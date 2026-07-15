# Personal Automation Bot

A daily automation bot that checks your GitHub contributions and local weather, then sends you a summary via Telegram. Includes a small dashboard to view the latest status manually.

## Features
- Daily cron job (configurable time)
- GitHub contribution check
- Weather check (OpenWeatherMap)
- Telegram notifications
- Simple web dashboard (HTML/CSS/JS) to check status on demand

## Tech Stack
- Node.js + Express
- node-cron
- node-telegram-bot-api
- Vanilla HTML/CSS/JS frontend

## Project Structure
```
automation-bot/
├── .env.example
├── .gitignore
├── package.json
├── config.js
├── services/
│   ├── github.js
│   ├── weather.js
│   └── telegram.js
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── index.js
└── README.md
```

## Setup
1. Clone this repo
2. Run `npm install`
3. Copy `.env.example` to `.env` and fill in your keys:
   - GitHub username / token
   - OpenWeatherMap API key
   - Telegram bot token and chat ID
4. Run `npm start`
5. Visit `http://localhost:3000` to view the dashboard

## Status
Work in progress — core logic in `services/` is currently placeholder and being implemented step by step.
for people who like me who forgot about things