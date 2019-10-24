'use strict';
const { DynamoDb } = require('./constants/event');

module.exports = function parseDynamoDBNewImageEvent(event) {
  const extractDynamoDBEntry = record =>
    record.dynamodb && record.dynamodb.NewImage;

  const extractedRecords = event.Records.map(extractDynamoDBEntry).filter(
    entry => entry
  );
  return {
    sourceType: DynamoDb,
    records: extractedRecords,
    sourceEvent: event
  };
};
