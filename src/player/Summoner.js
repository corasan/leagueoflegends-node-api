// summoner-v1.4
const request = require('request-promise');
const LeagueofLegends = require('../LeagueofLegends');
const url = 'api.pvp.net/api/lol';
const classRef = LeagueofLegends.prototype;

classRef.findSummoner = function(summonerNames) {
  return request({
    uri: `https://${this.region}.${url}/${this.region}/v1.4/summoner/by-name/${summonerNames}?api_key=${this.api_key}`,
    json: true
  });
}

classRef.summonerById = function(summonerIds) {
  return request({
    uri: `https://${this.region}.${url}/${this.region}/v1.4/summoner/${summonerIds}?api_key=${this.api_key}`,
    json: true
  });
}

classRef.getMasteries = function(summonerIds) {
  return request({
    uri: `https://${this.region}.${url}/${this.region}/v1.4/summoner/${summonerIds}/masteries?api_key=${this.api_key}`,
    json: true
  });
}

classRef.getRunes = function(summonerIds) {
  return request({
    uri: `https://${this.region}.${url}/${this.region}/v1.4/summoner/${summonerIds}/runes?api_key=${this.api_key}`,
    json: true
  });
}

classRef.summonerName = function(summonerIds) {
  return request({
    uri: `https://${this.region}.${url}/${this.region}/v1.4/summoner/${summonerIds}/name?api_key=${this.api_key}`,
    json: true
  });
}
