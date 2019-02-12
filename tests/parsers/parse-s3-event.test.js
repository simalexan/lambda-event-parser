/*global describe, expect*/
const parser = require('../../src/parse-s3-event'),
  s3Event = require('../test-events/s3-event.json');

describe('parse S3 event', () => {
  'use strict';

  test('should properly parse a well structured S3 event', () => {
    const parsedEvent = parser(s3Event);
    expect(parsedEvent.sourceType).toEqual('s3');
    expect(parsedEvent.sourceEvent).toEqual(s3Event);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });

});
