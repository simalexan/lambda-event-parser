/*global describe, expect*/
const { parseEvent } = require('../../src/index');
const s3Event = require('../test-events/s3-event.json');
const { S3 } = require('../../src/constants/event');

describe('parse S3 event', () => {
  'use strict';

  test('should properly parse a well structured S3 event', () => {
    const parsedEvent = parseEvent(s3Event);
    expect(parsedEvent.sourceType).toEqual(S3);
    expect(parsedEvent.sourceEvent).toEqual(s3Event);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });

  test('should return an array of extracted records', () => {
    const event = Object.assign({}, s3Event);
    event.Records[0].s3.object = 'apple';
    event.Records[1].s3.object = 'pear';
    event.Records[2].s3.object = 'orange';
    const parsedEvent = parseEvent(event);
    expect(parsedEvent.sourceType).toEqual(S3);
    expect(parsedEvent.sourceEvent).toEqual(event);
    expect(parsedEvent.records).toEqual(['apple', 'pear', 'orange']);
  });
});
