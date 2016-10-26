require('dotenv').config();
const api_key = process.env.LOL_API_KEY;

const LeagueofLegends = require('./src/LeagueofLegends');
const lol = new LeagueofLegends(api_key, 'na');
require('./src/Summoner/Summoner');
require('./src/Summoner/Stats');


module.exports = LeagueofLegends;
