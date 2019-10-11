'use strict';
const { Invoke } = require('./constants/event');

module.exports = function parseInvokeEvent(event) {
  const records = { ...event };

  return {
    sourceType: Invoke,
    records: Array.isArray(records) ? records : [records],
    sourceEvent: event
  };
};
