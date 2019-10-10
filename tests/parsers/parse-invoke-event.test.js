/*global describe, expect*/
const parser = require('../../src/index');
const invokeEvent = require('../test-events/invoke-event.json');
const { Invoke } = require('../../src/constants/event');

describe('parse direct invoke event', () => {
  'use strict';

  test('should properly parse a well structured invoke event', () => {
    const parsedEvent = parser(invokeEvent);
    expect(parsedEvent.sourceType).toEqual(Invoke);
    expect(parsedEvent.sourceEvent).toEqual(invokeEvent);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });

  test('should properly parse a HTTP GET event with undefined pathParams', () => {
    const event = Object.assign({}, invokeEvent);
    event.pathParameters = undefined;

    const parsedEvent = parser(event);
    expect(parsedEvent.sourceType).toEqual(Invoke);
    expect(parsedEvent.sourceEvent).toEqual(event);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
});
