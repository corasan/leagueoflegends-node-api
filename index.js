require('dotenv').config();
const api_key = process.env.LOL_API_KEY;
const LeagueofLegends = require('./src/main');
require('./src/Summoner');

const lol = new LeagueofLegends(api_key, 'na');
lol.findSummoner('shp corasan');
// module.exports = LeagueofLegends;
