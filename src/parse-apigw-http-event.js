'use strict';
const qs = require('querystring');
const queryPattern = /^\?([^=]+=[^=]+&)+[^=]+(=[^=]+)?$/g;
const { ApiGateway } = require('./constants/event');

function arrayify(value) {
  if (Array.isArray(value)) return [...value];
  if (value === undefined) return [];

  return [value];
}

function getRecords(event) {
  let parameters = event.pathParameters || {};
  if (event && event.body) {
    if (!event.body.match(queryPattern)) {
      return arrayify(JSON.parse(event.body));
    }

    const body = qs.parse(event.body);
    parameters = Object.assign(parameters, body);
  }

  if (event && event.queryStringParameters) {
    parameters = Object.assign(parameters, event.queryStringParameters);
  }

  return [parameters];
}

module.exports = function parseApiGwHttpEvent(event) {
  return {
    sourceType: ApiGateway,
    records: getRecords(event),
    sourceEvent: event
  };
};
