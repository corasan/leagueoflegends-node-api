const request = require('request-promise');
const LeagueofLegends = require('../LeagueofLegends');
const summonerURL = 'api.pvp.net/api/lol';
const classRef = LeagueofLegends.prototype;

classRef.statsRanked = function(summonerId, season) {
  return request({
    uri: `https://${this.region}.${summonerURL}/${this.region}/v1.3/stats/by-summoner/${summonerId}/ranked?api_key=${this.api_key}`,
    json: true
  });
}

classRef.statsSummary = function(summonerId, season) {
  return request({
    uri: `https://${this.region}.${summonerURL}/${this.region}/v1.3/stats/by-summoner/${summonerId}/summary?api_key=${this.api_key}`,
    json: true
  });
}
