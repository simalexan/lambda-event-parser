/*global describe, expect*/
const parser = require('../../src/parse-s3-event');
const s3Event = require('../test-events/s3-event.json');
const { S3 } = require('../../src/constants/event');

describe('parse S3 event', () => {
  'use strict';

  test('should properly parse a well structured S3 event', () => {
    const parsedEvent = parser(s3Event);
    expect(parsedEvent.sourceType).toEqual(S3);
    expect(parsedEvent.sourceEvent).toEqual(s3Event);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
});
