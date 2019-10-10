/*global describe, expect*/
/* eslint-env es6 */
const parser = require('../../src/parse-dynamodb-new-image-event');
const dynamoDBNewImageEvent = require('../test-events/dynamodb-new-image-stream-event.json');
const { DynamoDb } = require('../../src/constants/event');

describe('parse DynamoDB event', () => {
  'use strict';

  test('should properly parse a well structured DynamoDB event', () => {
    const parsedEvent = parser(dynamoDBNewImageEvent);
    expect(parsedEvent.sourceType).toEqual(DynamoDb);
    expect(parsedEvent.sourceEvent).toEqual(dynamoDBNewImageEvent);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
});
