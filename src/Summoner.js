const request = require('request-promise');
const Lol = require('./main');
const summonerURL = 'api.pvp.net/api/lol';

Lol.prototype.findSummoner = function(summonerNames) {
  return request({
    uri: `https://${this.region}.${summonerURL}/${this.region}/v1.4/summoner/by-name/${summonerNames}?api_key=${this.api_key}`,
    json: true
  });
}

Lol.prototype.summonerById = function(summonerIds) {
  return request({
    uri: `https://${this.region}.${summonerURL}/${this.region}/v1.4/summoner/${summonerIds}?api_key=${this.api_key}`,
    json: true
  });
}

Lol.prototype.getMasteries = function(summonerIds) {
  return request({
    uri: `https://${this.region}.${summonerURL}/${this.region}/v1.4/summoner/${summonerIds}/masteries?api_key=${this.api_key}`,
    json: true
  });
}
