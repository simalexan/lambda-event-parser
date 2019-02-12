/*global describe, expect*/
const parser = require('../../src/parse-sns-event'),
  snsEvent = require('../test-events/sns-event.json');

describe('parse SNS event', () => {
  'use strict';

  test('should properly parse a well structured SNS event', () => {
    const parsedEvent = parser(snsEvent);
    expect(parsedEvent.sourceType).toEqual('sns');
    expect(parsedEvent.sourceEvent).toEqual(snsEvent);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
  
});
