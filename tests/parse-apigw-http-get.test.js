/*global describe, expect*/
const parser = require('../src/index'),
  apiGetEvent = require('./test-events/apigw-http-get-event.json'),
  structuredEvent = require('./test-events/parsed-event.json');

describe('parse API GW HTTP GET event', () => {
  'use strict';

  test('should properly parse a well structured HTTP GET event', () => {
    const parsedEvent = parser(apiGetEvent);
    expect(parsedEvent.sourceType).toEqual('api');
    expect(parsedEvent.sourceEvent).toEqual(apiGetEvent);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
  
});
