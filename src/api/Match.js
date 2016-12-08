'use strict';
const request = require('request-promise');
const LeagueofLegends = require('../LeagueofLegends');
const url = 'api.pvp.net/api/lol';
const classRef = LeagueofLegends.prototype;
const urlQuery = require('../utils.js').urlQuery;

// matchlist-v2.2
classRef.matchList = function(summonerId, queryOptions) {
  let query = urlQuery(queryOptions);
  let region = this.region;
  console.log(query);
  return request({
    uri: `https://${region}.${url}/${region}/v2.2/matchlist/by-summoner/${summonerId}?${query}api_key=${this.api_key}`,
    json: true
  });
}
// match v2.2
classRef.match = function(matchId) {
  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v2.2/match/${matchId}?api_key=${this.api_key}`,
    json: true
  });
}
