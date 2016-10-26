const request = require('request-promise');
const Lol = require('./main');
const summonerURL = 'api.pvp.net/api/lol/na/v1.4/summoner/';

Lol.prototype.findSummoner = function(summonerNames, callback) {
  return request({
    uri: `https://${this.region}.${summonerURL}by-name/${summonerNames}?api_key=${this.api_key}`,
    json: true
  });
}

Lol.prototype.summonerById = function(summonerIds) {
  request({
    uri: `https://${this.region}${summonerURL}/${summonerIds}$`,
    json: true
  });
}
