'use strict';
const qs = require('querystring'),
  queryPattern = /^\?([^=]+=[^=]+&)+[^=]+(=[^=]+)?$/g;

module.exports = function parseInvokeEvent(event) {
  let parameters = {};
  if (event && event.body) {
    const body = event.body.match(queryPattern)
      ? qs.parse(event.body)
      : JSON.parse(event.body);
    parameters = Object.assign(parameters, body);
  }

  if (event && event.statusCode) {
    parameters = Object.assign(parameters, event.statusCode);
  }

  return {
    sourceType: 'invoke',
    records: [parameters],
    sourceEvent: event
  };
};
