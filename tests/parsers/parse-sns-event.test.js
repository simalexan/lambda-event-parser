/*global describe, expect*/
const { parseEvent } = require('../../src/index');
const snsEvent = require('../test-events/sns-event.json');
const { Sns } = require('../../src/constants/event');

describe('parse SNS event', () => {
  'use strict';

  test('should properly parse a well structured SNS event', () => {
    const parsedEvent = parseEvent(snsEvent);
    expect(parsedEvent.sourceType).toEqual(Sns);
    expect(parsedEvent.sourceEvent).toEqual(snsEvent);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
});
