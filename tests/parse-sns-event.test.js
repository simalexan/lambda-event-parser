/*global describe, expect*/
const parser = require('../src/index'),
  snsEvent = require('./test-events/sns-event.json');


describe('parse SNS event', () => {
  'use strict';

  test('should properly parse a well structured SNS event', () => {
    const parsedEvent = parser(s3Event);
    expect(parsedEvent).toEqual([]);
  });
  
});
