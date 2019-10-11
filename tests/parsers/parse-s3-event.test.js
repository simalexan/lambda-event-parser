/*global describe, expect*/
/* eslint-env es6 */
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

  test('should return an array of extracted records', () => {
    const event = Object.assign({}, s3Event);
    event.Records[0].s3.object = 'apple';
    event.Records[1].s3.object = 'pear';
    event.Records[2].s3.object = 'orange';
    const parsedEvent = parser(event);
    expect(parsedEvent.sourceType).toEqual(S3);
    expect(parsedEvent.sourceEvent).toEqual(event);
    expect(parsedEvent.records).toEqual(['apple', 'pear', 'orange']);
  });
});
