# League of Legends API
[![npm version](https://badge.fury.io/js/leagueoflegends-api.svg)](https://badge.fury.io/js/leagueoflegends-api)

League of Legends Node.js unofficial API. Easier way to use the official [Riot API](https://developer.riotgames.com/).

[Full documentation](https://corasan.gitbooks.io/league-of-legends-api/content/)

## Installation
`npm i --save leagueoflegends-api`

## Basic Usage
This is a basic example on how to use the API, soon I will have full documentation covering how to use every function available.

Require the package into your project.
```javascript
const LeagueofLegends = require('leagueoflegends-api');
// or with ES6
import LeagueofLegends from 'leagueoflegends-api';
```

Create a new instance of the API with your `API_KEY` and target region.
```javascript
const lol = new LeagueofLegends(YOUR_API_KEY, 'na');

lol.findSummoner('shp corasan').then((result) => console.log(result));
```
You will get an object like this:
```json
{
  "shpcorasan": {
    "id": 48641392,
    "name": "SHP CoraSan",
    "profileIconId": 1301,
    "revisionDate": 1477504931000,
    "summonerLevel": 30
  }
}
```
**Note:** All functions return a `Promise`.

## Progress
This is what I have so far (version 1.0.2):
- [x] **summoner-v1.4**
  - [x] Find a summoner using the summoner name - `findSummoner(summonerNames)`
  - [x] Find a summoner using the id - `findSummonerById(summonerIds)`
  - [x] Get the specified summoner runes and masteries - `getRunes(summonerIds)` and `getMasteries(summonerIds)`
  - [x] Get summoner name using the summoner id - `getSummonerName(summonerIds)`

- [x] **stats-v1.3**
  - [x] Get ranked stats of specified summoner using the summoner id - `statsRanked(summonerId, season)`
  - [x] Get summary of specified summoner stats - `statsSummary(summonerId, season)`

- [x] **matchlist-v2.2**
  - [x] Get match list by summoner id - `matchList(summonerId, queryOptions)`

- [x] **match v2.2**
  - [x] Retrieve match by match ID - `match(matchId)`

- [x] **league-v2.5**
  - [x] Get league info of the given summoner IDs - `league(summonerIds)`
  - [x] Get league entries of the given summoner IDs - `leagueEntries(summonerIds)`
  - [x] Get Master tier league - `master(type)`
  - [x] Get Challenger tier league - `challenger(type)`

- [x] **Game**
  - [x] game-v1.3 - `game(summonerId)`
  - [x] featured-games-v1.0 - `featuredGames()`
  - [x] current-game-v1.0 - `currentGame(summonerId, platformId)`

- [x] **champion v1.2**
  - [x] Retrieve all champions - `championAll(freeToPlay)`
  - [x] Retrieve champion by ID - `findChampion(championId)`

Working on:

- [ ] **championmastery**
- [ ] **lol-static-data-v1.2**
- [ ] **lol-status-v1.0**
 
 
