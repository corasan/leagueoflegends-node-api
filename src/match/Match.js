'use strict';

const request = require('request-promise');
const LeagueofLegends = require('../LeagueofLegends');
const url = 'api.pvp.net/api/lol';
const classRef = LeagueofLegends.prototype;
const urlQuery = require('../utils.js').urlQuery;

// matchlist-v2.2
classRef.matchList = function(summonerId, optional) {
  let query = urlQuery(optional);
  return request({
    uri: `https://${this.region}.${url}/${this.region}/v2.2/matchlist/by-summoner/${summonerId}?${query}api_key=${this.api_key}`,
    json: true
  });
}
