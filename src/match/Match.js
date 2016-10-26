// matchlist-v2.2
const request = require('request-promise');
const LeagueofLegends = require('../LeagueofLegends');
const url = 'api.pvp.net/api/lol';
const classRef = LeagueofLegends.prototype;

classRef.matchList = function(summonerId) {
  return request({
    uri: `https://${this.region}.${url}/${this.region}/v2.2/matchlist/by-summoner/${summonerId}?api_key=${this.api_key}`,
    json: true
  });
}
