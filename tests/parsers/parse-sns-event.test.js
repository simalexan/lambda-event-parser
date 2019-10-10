/*global describe, expect*/
/* eslint-env es6 */
const parser = require('../../src/parse-sns-event');
const snsEvent = require('../test-events/sns-event.json');
const { Sns } = require('../../src/constants/event');

describe('parse SNS event', () => {
  'use strict';

  test('should properly parse a well structured SNS event', () => {
    const parsedEvent = parser(snsEvent);
    expect(parsedEvent.sourceType).toEqual(Sns);
    expect(parsedEvent.sourceEvent).toEqual(snsEvent);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
});
