// summoner-v1.4
const request = require('request-promise');
const LeagueofLegends = require('../LeagueofLegends');
const url = 'api.pvp.net/api/lol';
const classRef = LeagueofLegends.prototype;

classRef.findSummoner = function(summonerNames) {
  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v1.4/summoner/by-name/${summonerNames}?api_key=${this.api_key}`,
    json: true
  });
}

classRef.summonerById = function(summonerIds) {
  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v1.4/summoner/${summonerIds}?api_key=${this.api_key}`,
    json: true
  });
}

classRef.getMasteries = function(summonerIds) {
  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v1.4/summoner/${summonerIds}/masteries?api_key=${this.api_key}`,
    json: true
  });
}

classRef.getRunes = function(summonerIds) {
  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v1.4/summoner/${summonerIds}/runes?api_key=${this.api_key}`,
    json: true
  });
}

classRef.summonerName = function(summonerIds) {
  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v1.4/summoner/${summonerIds}/name?api_key=${this.api_key}`,
    json: true
  });
}
