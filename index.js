require('dotenv').config();

const request = require('request-promise');

// https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/{summoner}?{api_key}
const Lol = function(api_key, region) {
  this.findSummoner = (summonerName) => {
    request({
      uri: `https://${region}.api.pvp.net/api/lol/na/v1.4/summoner/by-name/${summonerName}?api_key=${api_key}`,
      json: true
    })
    .then((response) => console.log(response));
  }
}

const api_key = process.env.LOL_API_KEY;
lol1 = new Lol(api_key, 'na');

lol1.findSummoner('shp corasan');
