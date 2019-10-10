'use strict';
const { Sns } = require('./constants/event');

module.exports = function parseSnsEvent(event) {
  if (!event || !event.Records || !Array.isArray(event.Records)) {
    return [];
  }
  const extractMessage = record => record.Sns && record.Sns.Message,
    extractedRecords = event.Records.map(extractMessage).filter(
      message => message
    );
  return {
    sourceType: Sns,
    records: extractedRecords,
    sourceEvent: event
  };
};
