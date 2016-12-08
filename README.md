# League of Legends API
League of Legends Node.js unofficial API. Easier way to use the official [Riot API](https://developer.riotgames.com/).

[Full documentation](https://corasan.gitbooks.io/league-of-legends-api/content/)

## Installation
`npm i --save leagueoflegends-node-api`

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
This is what I have so far (version 0.15.5):
- [x] **summoner-v1.4**
  - [x] Find a summoner using the summoner name - `findSummoner()`
  - [x] Find a summoner using the id - `findSummonerById()`
  - [x] Get the specified summoner runes and masteries - `getRunes()` and `getMasteries()`
  - [x] Get summoner name using the summoner id - `getSummonerName()`

- [x] **stats-v1.3**
  - [x] Get ranked stats of specified summoner using the summoner id - `statsRanked()`
  - [x] Get summary of specified summoner stats - `statsSummary()`

- [x] **matchlist-v2.2**
  - [x] Get match list by summoner id - `matchList()`

- [x] **league-v2.5**
  - [x] Get league info of the given summoner IDs - `league()`
  - [x] Get league entries of the given summoner IDs - `leagueEntries()`
  - [x] Get Master tier league - `master()`
  - [x] Get Challenger tier league - `challenger()`

- [x] **Game**
  - [x] game-v1.3 - `game()`
  - [x] featured-games-v1.0 - `featuredGames()`
  - [x] current-game-v1.0 - `currentGame()`

Working on:
- [ ] **Champions**
  - [ ] Retrieve all champions
  - [ ] Retrieve champion by ID
