require('dotenv').config();
const api_key = process.env.LOL_API_KEY;

const LeagueofLegends = require('./src/LeagueofLegends');
require('./src/api/Summoner');
require('./src/api/Stats');
require('./src/api/Match');
require('./src/api/League');
require('./src/api/Games');

module.exports = LeagueofLegends;
