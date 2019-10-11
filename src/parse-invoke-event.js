'use strict';
const { Invoke } = require('./constants/event');

module.exports = function parseInvokeEvent(event) {
  let parameters = {};
  if (event) {
    parameters = Object.assign(parameters, event);
  }

  return {
    sourceType: Invoke,
    records: [parameters],
    sourceEvent: event
  };
};
