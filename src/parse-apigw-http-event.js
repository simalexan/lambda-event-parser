'use strict';
const qs = require('querystring'),
  queryPattern = /^\?([^=]+=[^=]+&)+[^=]+(=[^=]+)?$/g;

module.exports = function parseApiGwHttpEvent(event){
  let parameters = event.pathParameters || {};
  if (event && event.body) {
    const body = event.body.match(queryPattern) ? qs.parse(event.body) : JSON.parse(event.body);
    parameters = Object.assign(parameters, body);
  }

  if (event && event.queryStringParameters) {
    parameters = Object.assign(parameters, event.queryStringParameters);
  }

  return {
    sourceType: 'api',
    records: [parameters],
    sourceEvent: event
  };
};
