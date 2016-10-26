require('dotenv').config();

const assert = require('assert');
const api_key = process.env.LOL_API_KEY;

const LeagueofLegends = require('../index');
const lol = new LeagueofLegends(api_key, 'na');

describe('Summoner', function() {
  describe('#findSummoner', function() {
    it('should find a summoner by name', function() {
      return lol.findSummoner('shp corasan').then((result) => {
        var key = Object.keys(result)[0];
        assert.equal(result[key].name, 'SHP CoraSan');
      });
    });
  });

  describe('#summonerById', function() {
    it('should find a summoner by ID', function() {
      lol.summonerById('48641392', (result) => {
        var key = Object.keys(result)[0];
        assert.equal(result[key].id, '48641392');
      });
    })
  })
});
