'use strict';

require('dotenv').config();

const assert = require('assert');
const api_key = process.env.LOL_API_KEY;

const LeagueofLegends = require('../index');
const lol = new LeagueofLegends(api_key, 'na');

describe('Match', function() {
  describe('#matchList', function() {
    it('should retrieve a list of the summoner match history', function() {
      return lol.matchList('48641392').then((result) => {
        assert.notEqual(result['matches'].length, 0);
      });
    });
  });

  describe('#matchList', function() {
    it('should retrieve a list of the summoner match history using optional queries', function() {
      return lol.matchList('48641392', {rankedQueues: ['TEAM_BUILDER_DRAFT_RANKED_5x5']})
      .then((result) => {
        assert.notEqual(result.matches.length, 0);
      });
    });
  });

  describe('#match', function() {
    it('should retrieve match by id', function() {
      return lol.match('2334443527').then((result) => {
        assert.equal(result.matchId, '2334443527');
      });
    });
  });
});
