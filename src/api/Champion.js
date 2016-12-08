'use strict';
const request = require('request-promise');
const LeagueofLegends = require('../LeagueofLegends');
const url = 'api.pvp.net/api/lol';
const classRef = LeagueofLegends.prototype;

classRef.championAll = function(freeToPlay) {
  freeToPlay = (typeof freeToPlay !== 'undefined') ?  `freeToPlay=${freeToPlay}` : '';
  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v1.2/champion?${freeToPlay}&api_key=${this.api_key}`,
    json: true
  });
}

classRef.findChampion = function(championId) {
  if (championId === 'undefined') console.log('You must provide a champion ID');

  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v1.2/champion/${championId}?api_key=${this.api_key}`,
    json: true
  });
}
