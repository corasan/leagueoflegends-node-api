require('dotenv').config();
const api_key = process.env.LOL_API_KEY;

const assert = require('assert');
const LeagueofLegends = require('../index');
const lol = new LeagueofLegends(api_key, 'na');


describe('Summoner', function() {
  describe('findSummoner', function() {
    it('should find a summoner by name', function() {
      lol.findSummoner('shp corasan').then((result) => {
          assert.equal(result.name, 'SHP CoraSan');
      });
    });
  })
})
