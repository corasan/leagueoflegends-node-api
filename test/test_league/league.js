'use strict';

require('dotenv').config();

const assert = require('assert');
const api_key = process.env.LOL_API_KEY;

const LeagueofLegends = require('../../index');
const lol = new LeagueofLegends(api_key, 'na');

describe('League', function() {
  describe('#league', function() {
    it('should retrieve league info of the specified summoners', function() {
      return lol.league('48641392').then((result) => {
        let key = Object.keys(result)[0];
        assert.equal(result[key][0].participantId, '48641392');
      });
    });
  });
});
