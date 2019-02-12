/*global describe, expect*/
const parser = require('../src/index'),
  s3Event = require('./test-events/s3-event.json'),
  structuredEvent = require('./test-events/parsed-event.json');


describe('parse S3 event', () => {
  'use strict';

  test('should properly parse a well structured S3 event', () => {
    const parsedEvent = parser(s3Event);
    expect(parsedEvent).toEqual(structuredEvent);
  });

});
