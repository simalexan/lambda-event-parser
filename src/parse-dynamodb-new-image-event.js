'use strict';
const { DynamoDb } = require('./constants/event');

module.exports = function parseDynamoDBNewImageEvent(event) {
  if (!event || !event.Records || !Array.isArray(event.Records)) {
    return [];
  }
  const extractDynamoDBEntry = record =>
      record.dynamodb && record.dynamodb.NewImage,
    extractedRecords = event.Records.map(extractDynamoDBEntry).filter(
      entry => entry
    );
  return {
    sourceType: DynamoDb,
    records: extractedRecords,
    sourceEvent: event
  };
};
