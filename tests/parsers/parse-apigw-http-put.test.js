/*global describe, expect*/
/* eslint-env es6 */
const parser = require('../../src/index');
const apiPutEvent = require('../test-events/apigw-http-put-event.json');
const { ApiGateway } = require('../../src/constants/event');

describe('parse API GW HTTP PUT event', () => {
  'use strict';

  test('should properly parse a well structured HTTP PUT event', () => {
    const parsedEvent = parser(apiPutEvent);
    expect(parsedEvent.sourceType).toEqual(ApiGateway);
    expect(parsedEvent.sourceEvent).toEqual(apiPutEvent);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
});
