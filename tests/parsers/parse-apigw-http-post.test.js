/*global describe, expect*/
const parser = require('../../src/index');
const apiPostEvent = require('../test-events/apigw-http-post-event.json');
const { ApiGateway } = require('../../src/constants/event');

describe('parse API GW HTTP GET event', () => {
  'use strict';

  test('should properly parse a well structured HTTP POST event', () => {
    const parsedEvent = parser(apiPostEvent);
    expect(parsedEvent.sourceType).toEqual(ApiGateway);
    expect(parsedEvent.sourceEvent).toEqual(apiPostEvent);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
});
