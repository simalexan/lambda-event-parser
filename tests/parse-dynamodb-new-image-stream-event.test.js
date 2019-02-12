/*global describe, expect*/
const parser = require('../src/index'),
  dynamoDBNewImageEvent = require('./test-events/dynamodb-new-image-stream-event.json'),
  structuredEvent = require('./test-events/parsed-event.json');

describe('parse DynamoDB event', () => {
  'use strict';

  test('should properly parse a well structured DynamoDB event', () => {
    const parsedEvent = parser(dynamoDBNewImageEvent);
    expect(parsedEvent).toEqual(structuredEvent);
  });
  
});
