'use strict';

const _ = require('lodash');

module.exports = {
  urlQuery: (obj) => {
    obj = (typeof obj !== 'undefined') ?  obj : '';
    let arr = [];

    _.forEach(obj, (value, key) => arr.push(`${key}=${value}&`) );
    return arr.join('');
  }
}
