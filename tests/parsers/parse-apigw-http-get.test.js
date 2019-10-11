/*global describe, expect*/
const { parseEvent } = require('../../src/index');
const apiGetEvent = require('../test-events/apigw-http-get-event.json');
const { ApiGateway } = require('../../src/constants/event');

describe('parse API GW HTTP GET event', () => {
  'use strict';

  test('should properly parse a well structured HTTP GET event', () => {
    const parsedEvent = parseEvent(apiGetEvent);
    expect(parsedEvent.sourceType).toEqual(ApiGateway);
    expect(parsedEvent.sourceEvent).toEqual(apiGetEvent);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });

  test('should properly parse a HTTP GET event with undefined pathParams', () => {
    const event = Object.assign({}, apiGetEvent);
    event.pathParameters = undefined;

    const parsedEvent = parseEvent(event);
    expect(parsedEvent.sourceType).toEqual(ApiGateway);
    expect(parsedEvent.sourceEvent).toEqual(event);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
});
