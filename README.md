# League of Legends API
League of Legends Node.js unofficial API using the official [Riot API](https://developer.riotgames.com/).

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
This is what I have so far (version 0.10.1):
- [x] **summoner-v1.4**
  - [x] Find a summoner using the summoner name - `findSummoner`
  - [x] Find a summoner using the id - `summonerById`
  - [x] Get the specified summoner runes and masteries - `getRunes` and `getMasteries`
  - [x] Get summoner name using the summoner id - `summonerName`

- [x] **stats-v1.3**
  - [x] Get ranked stats of specified summoner using the summoner id - `statsRanked`
  - [x] Get summary of specified summoner stats - `statsSummary`

- [x] **matchlist-v2.2**
  - [x] Get match list by summoner id - `matchList`

Working on:

- [ ] **league-v2.5**
  - [x] Get league info of the given summoner IDs - `league`
  - [x] Get league entries of the given summoner IDs - `leagueEntries`
  - [ ] Get Master tier league
  - [ ] Get Challenger tier league
