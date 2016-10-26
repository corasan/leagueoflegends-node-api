'use strict';

require('dotenv').config();

const assert = require('assert');
const api_key = process.env.LOL_API_KEY;

const LeagueofLegends = require('../../index');
const lol = new LeagueofLegends(api_key, 'na');

describe('Match', function() {
  describe('#matchList', function() {
    it('should return a list of the summoner match history', function() {
      return lol.matchList('48641392').then((result) => {
        assert.notEqual(result['matches'].length, 0);
      });
    });
  });
});
