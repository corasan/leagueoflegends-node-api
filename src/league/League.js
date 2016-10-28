const request = require('request-promise');
const LeagueofLegends = require('../LeagueofLegends');
const url = 'api.pvp.net/api/lol';
const classRef = LeagueofLegends.prototype;

classRef.leagues = function(summonerIds) {
  return request({
    uri: `https://${this.region}.${url}/${this.region}/v2.5/league/by-summoner/${summonerIds}?api_key=${this.api_key}`,
    json: true
  });
}

classRef.leagueEntries = function(summonerIds) {
  return request({
    uri: `https://${this.region}.${url}/${this.region}/v2.5/league/by-summoner/${summonerIds}/entry?api_key=${this.api_key}`,
    json: true
  });
}
