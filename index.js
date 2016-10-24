require('dotenv').config();

const request = require('request-promise');
const api_key = process.env.LOL_API_KEY;

// https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/{summoner}?{api_key}
const Lol = {
  findSummoner: (summonerName, region) => {
    request({
      uri: `https://${region}.api.pvp.net/api/lol/na/v1.4/summoner/by-name/${summonerName}?api_key=${api_key}`,
      json: true
    })
    .then((response) => console.log(response));
  }
}


Lol.findSummoner('shp corasan', 'na');
