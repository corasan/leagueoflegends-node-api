'use strict';

require('dotenv').config();

const assert = require('assert');
const api_key = process.env.LOL_API_KEY;

const LeagueofLegends = require('../index');
const lol = new LeagueofLegends(api_key, 'na');

describe('Stats', function() {
  describe('#rankedStats', function() {
    it('should get the stats of the summoner', function() {
      return lol.rankedStats('48641392').then((result) => {
        assert.equal(result.summonerId, '48641392');
      });
    });
  });

  describe('#rankedStats', function() {
    it('should get the stats of the summoner specifying season', function() {
      return lol.rankedStats('48641392', 'SEASON2015').then((result) => {
        assert.equal(result.summonerId, '48641392');
      });
    });
  });

  describe('#statsSummary', function() {
    it('should get a summary of the summoner stats', function() {
      return lol.statsSummary('48641392').then((result) => {
        assert.notEqual(result.playerStatSummaries.length, 0);
      })
    });
  });

  describe('#statsSummary', function() {
    it('should get the stats of the summoner specifying season', function() {
      return lol.statsSummary('48641392', 'SEASON2015').then((result) => {
        assert.equal(result.summonerId, '48641392');
      });
    });
  });
});
