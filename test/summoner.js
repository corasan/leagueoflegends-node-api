'use strict';

require('dotenv').config();

const assert = require('assert');
const api_key = process.env.LOL_API_KEY;

const LeagueofLegends = require('../index');
const lol = new LeagueofLegends(api_key, 'na');

describe('Summoner', function() {
  describe('#findSummoner', function() {
    it('should find a summoner by name', function() {
      return lol.findSummoner('shp corasan').then((result) => {
        let key = Object.keys(result)[0];
        assert.equal(result[key].name, 'SHP CoraSan');
      });
    });
  });

  describe('#findSummoner', function() {
    it('should find multiple summoners by a list of names', function() {
      return lol.findSummoner(['shp corasan','shp sogeking']).then((result) => {
        let summoners = Object.keys(result);
        assert.equal(summoners.length, 2);
      });
    });
  });

  describe('#findSummonerById', function() {
    it('should find a summoner by ID', function() {
      return lol.findSummonerById('48641392').then((result) => {
        let key = Object.keys(result)[0];
        assert.equal(result[key].name, 'SHP CoraSan');
      });
    });
  });

  describe('#findSummonerById', function() {
    it('should find multiple summoners by a list of IDs', function() {
      return lol.findSummonerById(['48641392','36475861']).then((result) => {
        let summoners = Object.keys(result);
        assert.equal(summoners.length, 2);
      });
    });
  });

  describe('#getMasteries', function() {
    it('should get the summoner masteries', function() {
      return lol.getMasteries('48641392').then((result) => {
        let key = Object.keys(result)[0];
        assert.equal(result[key].summonerId, '48641392');
      });
    });
  });

  describe('#getRunes', function() {
    it('should get the summoner masteries', function() {
      return lol.getRunes('48641392').then((result) => {
        let key = Object.keys(result)[0];
        assert.equal(result[key].summonerId, '48641392');
      });
    });
  });

  describe('#summonerName', function() {
    it('should get the summoner masteries', function() {
      return lol.getSummonerName('48641392').then((result) => {
        assert.equal(result['48641392'], 'SHP CoraSan');
      });
    });
  });
});
