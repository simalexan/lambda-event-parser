/*global describe, expect*/
const parser = require('../../src/index'),
  apiPutEvent = require('../test-events/apigw-http-put-event.json');

describe('parse API GW HTTP PUT event', () => {
  'use strict';

  test('should properly parse a well structured HTTP PUT event', () => {
    const parsedEvent = parser(apiPutEvent);
    expect(parsedEvent.sourceType).toEqual('api');
    expect(parsedEvent.sourceEvent).toEqual(apiPutEvent);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
  
});
