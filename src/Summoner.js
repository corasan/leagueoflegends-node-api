const request = require('request-promise');
const Lol = require('./main');

Lol.prototype.findSummoner = function(summonerName) {
  request({
    uri: `https://${this.region}.api.pvp.net/api/lol/na/v1.4/summoner/by-name/${summonerName}?api_key=${this.api_key}`,
    json: true
  })
  .then((response) => console.log(response));
}
