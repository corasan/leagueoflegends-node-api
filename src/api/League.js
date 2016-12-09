'use strict';
const request = require('request-promise');
const LeagueofLegends = require('../LeagueofLegends');
const url = 'api.pvp.net/api/lol';
const classRef = LeagueofLegends.prototype;

classRef.leagues = function(summonerIds) {
  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v2.5/league/by-summoner/${summonerIds}?api_key=${this.api_key}`,
    json: true
  });
}

classRef.leagueEntries = function(summonerIds) {
  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v2.5/league/by-summoner/${summonerIds}/entry?api_key=${this.api_key}`,
    json: true
  });
}

classRef.master = function(type) {
  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v2.5/league/master?type=${type}&api_key=${this.api_key}`,
    json: true
  });
}

classRef.challenger = function(type) {
  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v2.5/league/challenger?type=${type}&api_key=${this.api_key}`,
    json: true
  });
}
