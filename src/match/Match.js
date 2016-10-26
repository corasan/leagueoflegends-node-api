'use strict';

const request = require('request-promise');
const LeagueofLegends = require('../LeagueofLegends');
const url = 'api.pvp.net/api/lol';
const classRef = LeagueofLegends.prototype;

const urlQuery = (obj) => {
  obj = (typeof obj !== 'undefined') ?  obj : '';
  let arr = [];
  if (obj !== '') {
    let keys = Object.keys(obj);
    for(let i in keys) {
      let key = keys[i];
      let value = obj[key];
      arr.push(`${key}=${value}&`);
    }
  }
  return arr.join('');
}

// matchlist-v2.2
classRef.matchList = function(summonerId, optional) {
  let query = urlQuery(optional);
  let uri = `https://${this.region}.${url}/${this.region}/v2.2/matchlist/by-summoner/${summonerId}?${query}api_key=${this.api_key}`
  console.log(uri);
  return request({
    uri: `https://${this.region}.${url}/${this.region}/v2.2/matchlist/by-summoner/${summonerId}?${query}api_key=${this.api_key}`,
    json: true
  });
}
