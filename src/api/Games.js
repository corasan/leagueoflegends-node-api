'use strict';
const request = require('request-promise');
const LeagueofLegends = require('../LeagueofLegends');
const url = 'api.pvp.net/api/lol';
const obeserverUrl = 'api.pvp.net/observer-mode/rest';
const classRef = LeagueofLegends.prototype;

classRef.game = function(summonerId) {
  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v1.3/game/by-summoner/${summonerId}/recent?api_key=${this.api_key}`,
    json: true
  });
}

classRef.featuredGames = function() {
  return request({
    uri: `https://${this.region}.${obeserverUrl}/featured?api_key=${this.api_key}`,
    json: true
  });
}

classRef.currentGame = function(summonerId, platformId) {
  return request({
    uri: `https://${this.region}.${obeserverUrl}/consumer/getSpectatorGameInfo/${platformId}/${summonerId}?api_key=${this.api_key}`,
    json: true
  });
}
