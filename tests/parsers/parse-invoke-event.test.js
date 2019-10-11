/*global describe, expect*/
/* eslint-env es6 */
const parser = require('../../src/index');
const invokeEvent = require('../test-events/invoke-event.json');
const { Invoke } = require('../../src/constants/event');

describe('parse direct invoke event', () => {
  'use strict';

  test('should properly parse an invoke event', () => {
    const parsedEvent = parser(invokeEvent);
    expect(parsedEvent.sourceType).toEqual(Invoke);
    expect(parsedEvent.sourceEvent).toEqual(invokeEvent);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });

  test('should properly parse an invoke event with Records', () => {
    const event = Object.assign({}, invokeEvent);
    event.Records = {};

    const parsedEvent = parser(event);
    expect(parsedEvent.sourceType).toEqual(Invoke);
    expect(parsedEvent.sourceEvent).toEqual(event);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });

  test('should properly parse an invoke event with an array of Records', () => {
    const event = Object.assign({}, invokeEvent);
    event.Records = [];

    const parsedEvent = parser(event);
    expect(parsedEvent.sourceType).toEqual(Invoke);
    expect(parsedEvent.sourceEvent).toEqual(event);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
});
