// stats-v1.3
const request = require('request-promise');
const LeagueofLegends = require('../LeagueofLegends');
const url = 'api.pvp.net/api/lol';
const classRef = LeagueofLegends.prototype;

classRef.rankedStats = function(summonerId, season) {
  season = (typeof season !== 'undefined') ? `season=${season}` : '';
  return request({
    uri: `https://${this.region}.${url}/${this.region}/v1.3/stats/by-summoner/${summonerId}/ranked?api_key=${this.api_key}`,
    json: true
  });
}

classRef.statsSummary = function(summonerId, season) {
  season = (typeof season !== 'undefined') ? `season=${season}` : '';
  return request({
    uri: `https://${this.region}.${url}/${this.region}/v1.3/stats/by-summoner/${summonerId}/summary?api_key=${this.api_key}`,
    json: true
  });
}
