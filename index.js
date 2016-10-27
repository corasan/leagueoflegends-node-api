require('dotenv').config();
const api_key = process.env.LOL_API_KEY;

const LeagueofLegends = require('./src/LeagueofLegends');
require('./src/player/Summoner');
require('./src/player/Stats');
require('./src/match/Match');
require('./src/league/League');

module.exports = LeagueofLegends;
