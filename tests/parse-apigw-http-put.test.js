/*global describe, expect*/
const parser = require('../src/index'),
  apiPutEvent = require('./test-events/apigw-http-put-event.json'),
  structuredEvent = require('./test-events/parsed-event.json');

describe('parse API GW HTTP PUT event', () => {
  'use strict';

  test('should properly parse a well structured HTTP PUT event', () => {
    const parsedEvent = parser(apiPutEvent);
    expect(parsedEvent).toEqual(structuredEvent);
  });
  
});
