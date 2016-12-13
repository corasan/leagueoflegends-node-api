# League of Legends API
[![npm version](https://badge.fury.io/js/leagueoflegends-api.svg)](https://badge.fury.io/js/leagueoflegends-api)

Npm package for the official [League of Legends API](https://developer.riotgames.com/).

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

Version 1.0.2 supports the following APIs:

- [x] **summoner-v1.4**
- [x] **stats-v1.3**
- [x] **matchlist-v2.2**
- [x] **match v2.2**
- [x] **league-v2.5**
- [x] **Game**
- [x] **champion v1.2**

Coming soon:

- [ ] **championmastery**
- [ ] **lol-static-data-v1.2**
- [ ] **lol-status-v1.0**
 
 
