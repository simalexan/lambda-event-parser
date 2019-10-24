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

  test('should properly parse an invoke event where Records is an object', () => {
    const event = Object.assign({}, invokeEvent);
    event.Records = {};

    const parsedEvent = parseEvent(event);
    expect(parsedEvent.sourceType).toEqual(Invoke);
    expect(parsedEvent.sourceEvent).toEqual(event);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });

  test('should properly parse an invoke event where Records is an array', () => {
    const event = Object.assign({}, invokeEvent);
    event.Records = [];

    const parsedEvent = parseEvent(event);
    expect(parsedEvent.sourceType).toEqual(Invoke);
    expect(parsedEvent.sourceEvent).toEqual(event);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });

  test('should properly parse an invoke event where Records is undefined', () => {
    const event = Object.assign({}, invokeEvent);
    event.Records = undefined;
    const parsedEvent = parseEvent(event);
    expect(parsedEvent.sourceType).toEqual(Invoke);
    expect(parsedEvent.sourceEvent).toEqual(event);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });

  test('should properly parse an invoke event where Records is an boolean', () => {
    const event = Object.assign({}, invokeEvent);
    event.Records = true;
    const parsedEvent = parseEvent(event);
    expect(parsedEvent.sourceType).toEqual(Invoke);
    expect(parsedEvent.sourceEvent).toEqual(event);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });

  test('should properly parse an invoke event where Records is a string', () => {
    const event = Object.assign({}, invokeEvent);
    event.Records = 'hello';
    const parsedEvent = parseEvent(event);
    expect(parsedEvent.sourceType).toEqual(Invoke);
    expect(parsedEvent.sourceEvent).toEqual(event);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });

  test('should properly parse an invoke event where Records is a number', () => {
    const event = Object.assign({}, invokeEvent);
    event.Records = 10000;
    const parsedEvent = parseEvent(event);
    expect(parsedEvent.sourceType).toEqual(Invoke);
    expect(parsedEvent.sourceEvent).toEqual(event);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
});
