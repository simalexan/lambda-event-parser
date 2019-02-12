'use strict';

module.exports = (event) => {
  if (!event || !event.Records || !Array.isArray(event.Records)) {
    return [];
  }
  const extractMessage = record => record.s3 && record.s3.object,
    extractedRecords = event.Records.map(extractMessage).filter(object => object);
  return {
    sourceType: 's3',
    records: extractedRecords,
    sourceEvent: event
  };
};
