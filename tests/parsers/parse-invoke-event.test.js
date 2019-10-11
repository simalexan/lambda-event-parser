/*global describe, expect*/
const { parseEvent } = require('../../src/index');
const invokeEvent = require('../test-events/invoke-event.json');
const { Invoke } = require('../../src/constants/event');

describe('parse direct invoke event', () => {
  'use strict';

  test('should properly parse an invoke event', () => {
    const parsedEvent = parseEvent(invokeEvent);
    expect(parsedEvent.sourceType).toEqual(Invoke);
    expect(parsedEvent.sourceEvent).toEqual(invokeEvent);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });

  test('should properly parse an invoke event with Records', () => {
    const event = Object.assign({}, invokeEvent);
    event.Records = {};

    const parsedEvent = parseEvent(event);
    expect(parsedEvent.sourceType).toEqual(Invoke);
    expect(parsedEvent.sourceEvent).toEqual(event);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });

  test('should properly parse an invoke event with an array of Records', () => {
    const event = Object.assign({}, invokeEvent);
    event.Records = [];

    const parsedEvent = parseEvent(event);
    expect(parsedEvent.sourceType).toEqual(Invoke);
    expect(parsedEvent.sourceEvent).toEqual(event);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
});
