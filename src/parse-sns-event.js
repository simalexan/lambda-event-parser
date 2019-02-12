'use strict';

module.exports = function parseSnsEvent(event){
  if (!event || !event.Records || !Array.isArray(event.Records)) {
		return [];
  }
  const extractMessage = record => record.Sns && record.Sns.Message,
    extractedRecords = event.Records.map(extractMessage).filter(message => message);
  return {
    sourceType: 'sns',
    records: extractedRecords,
    sourceEvent: event
  };
};
