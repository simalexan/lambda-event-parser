/*global describe, expect*/
const parser = require('../../src/parse-dynamodb-new-image-event'),
  dynamoDBNewImageEvent = require('../test-events/dynamodb-new-image-stream-event.json');

describe('parse DynamoDB event', () => {
  'use strict';

  test('should properly parse a well structured DynamoDB event', () => {
    const parsedEvent = parser(dynamoDBNewImageEvent);
    expect(parsedEvent.sourceType).toEqual('dynamodb');
    expect(parsedEvent.sourceEvent).toEqual(dynamoDBNewImageEvent);
    expect(parsedEvent.records).toBeInstanceOf(Array);
  });
  
});
