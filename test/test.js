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

  describe('#findSummoner', function() {
    it('should find multiple summoners by a list of names', function() {
      return lol.findSummoner(['shp corasan','shp sogeking']).then((result) => {
        var summoners = Object.keys(result);
        assert.equal(summoners.length, 2);
      });
    });
  });

  describe('#summonerById', function() {
    it('should find a summoner by ID', function() {
      return lol.summonerById('48641392').then((result) => {
        var key = Object.keys(result)[0];
        assert.equal(result[key].name, 'SHP CoraSan');
      });
    });
  });

  describe('#summonerById', function() {
    it('should find multiple summoners by a list of IDs', function() {
      return lol.summonerById(['48641392','36475861']).then((result) => {
        var summoners = Object.keys(result);
        assert.equal(summoners.length, 2);
      });
    });
  });

  // describe('#getMasteries', function() {
  //   it('should get the summoner masteries', function() {
  //     lol.getMasteries('48641392', (result))
  //   });
  // });
});
