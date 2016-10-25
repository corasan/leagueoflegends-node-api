const request = require('request-promise');
const Lol = require('./main');
const summonerURL = '.api.pvp.net/api/lol/na/v1.4/summoner';

Lol.prototype.findSummoner = function(summonerName) {
  request({
    uri: `https://${this.region}${summonerURL}/by-name/${summonerName}?api_key=${this.api_key}`,
    json: true
  })
  .then((response) => console.log(response));
}
//
// Lol.prototype.summonerById = function(summonerId) {
//
// }
