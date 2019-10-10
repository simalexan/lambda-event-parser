'use strict';
const { S3 } = require('./constants/event');

module.exports = event => {
  if (!event || !event.Records || !Array.isArray(event.Records)) {
    return [];
  }
  const extractMessage = record => record.s3 && record.s3.object,
    extractedRecords = event.Records.map(extractMessage).filter(
      object => object
    );
  return {
    sourceType: S3,
    records: extractedRecords,
    sourceEvent: event
  };
};
