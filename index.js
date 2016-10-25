require('dotenv').config();
const api_key = process.env.LOL_API_KEY;
const LeagueofLegends = require('./dummy');
require('./src/Summoner');

module.exports = LeagueofLegends;
