'use strict';
const { Invoke } = require('./constants/event');

module.exports = function parseInvokeEvent(event) {
  const records = Array.isArray(event) ? [...event] : [{ ...event }];

  return {
    sourceType: Invoke,
    records: records,
    sourceEvent: event
  };
};
