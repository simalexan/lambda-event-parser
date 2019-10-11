'use strict';
const qs = require('querystring');
const queryPattern = /^\?([^=]+=[^=]+&)+[^=]+(=[^=]+)?$/g;
const { Sns } = require('./constants/event');

module.exports = function parseSnsEvent(event) {
  const extractMessage = record => record.Sns && record.Sns.Message;

  const extractedRecords = event.Records.map(extractMessage).filter(message =>
    message.match(queryPattern) ? qs.parse(message) : JSON.parse(message)
  );
  return {
    sourceType: Sns,
    records: extractedRecords,
    sourceEvent: event
  };
};
