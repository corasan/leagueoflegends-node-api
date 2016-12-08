'use strict';

require('dotenv').config();

const assert = require('assert');
const api_key = process.env.LOL_API_KEY;

const LeagueofLegends = require('../index');
const lol = new LeagueofLegends(api_key, 'na');

describe('Games', function() {
  describe('#game', function() {
    it('should get recent games by summoner id', function() {
      return lol.game('48641392').then((result) => {
        assert.ok(result.games);
      });
    });
  });

  describe('#featuredGames', function() {
    it('should get list of featured games', function() {
      return lol.featuredGames().then((result) => {
        assert.ok(result.gameList);
      });
    });
  });
});
