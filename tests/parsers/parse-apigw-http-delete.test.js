/*global describe, expect*/
const parser = require('../../src/index');
const apiDeleteEvent = require('../test-events/apigw-http-delete-event.json');
const { ApiGateway } = require('../../src/constants/event');

describe('parse API GW HTTP GET event', () => {
  'use strict';

  test('should properly parse a well structured HTTP DELETE event', () => {
    const parsedEvent = parser(apiDeleteEvent);
    expect(parsedEvent.sourceType).toEqual(ApiGateway);
    expect(parsedEvent.sourceEvent).toEqual(apiDeleteEvent);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
});
