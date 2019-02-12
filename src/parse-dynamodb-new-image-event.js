'use strict';

module.exports = function parseDynamoDBNewImageEvent(event) {
  if (!event || !event.Records || !Array.isArray(event.Records)) {
    return [];
  }
  const extractDynamoDBEntry = record => record.dynamodb && record.dynamodb.NewImage,
    extractedRecords = event.Records.map(extractDynamoDBEntry).filter(entry => entry);
  return {
    sourceType: 'dynamodb',
    records: extractedRecords,
    sourceEvent: event
  };
};
