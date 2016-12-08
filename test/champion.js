'use strict';

require('dotenv').config();

const assert = require('assert');
const api_key = process.env.LOL_API_KEY;

const LeagueofLegends = require('../index');
const lol = new LeagueofLegends(api_key, 'na');

describe('Champion', function() {
  describe('#championAll', function() {
    it('should retrieve all champions', function() {
      return lol.championAll().then((result) => {
        assert.ok(result);
      });
    });
  });

  describe('#championAll', function() {
    it('should retrieve all free champions', function() {
      return lol.championAll(true).then((result) => {
        assert.ok(result);
      });
    });
  });

  describe('#findChampion', function() {
    it('should retrieve the given champion', function() {
      return lol.findChampion('84').then((result) => {
        assert.equal(result.id, '84');
      })
    })
  });
});
