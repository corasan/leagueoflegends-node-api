// stats-v1.3
const request = require('request-promise');
const LeagueofLegends = require('../LeagueofLegends');
const url = 'api.pvp.net/api/lol';
const classRef = LeagueofLegends.prototype;

classRef.rankedStats = function(summonerId, season) {
  season = (typeof season !== 'undefined') ? `season=${season}` : '';
  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v1.3/stats/by-summoner/${summonerId}/ranked?api_key=${this.api_key}`,
    json: true
  });
}

classRef.statsSummary = function(summonerId, season) {
  season = (typeof season !== 'undefined') ? `season=${season}` : '';
  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v1.3/stats/by-summoner/${summonerId}/summary?api_key=${this.api_key}`,
    json: true
  });
}
