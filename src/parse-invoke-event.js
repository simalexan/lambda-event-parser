'use strict';
const { Invoke } = require('./constants/event');

/**
 * this is what underscore uses
 **/
function isObject(value) {
  const type = typeof value;
  return type === 'function' || (type === 'object' && !!value);
}

function copy(value) {
  if (Array.isArray(value)) return [...value];
  if (isObject(value)) return { ...value };
  return value;
}

function arrayify(value) {
  if (Array.isArray(value)) return [...value];
  if (value === undefined) return [];

  return [value];
}

module.exports = function parseInvokeEvent(event) {
  const records = arrayify(copy(event));

  return {
    sourceType: Invoke,
    records,
    sourceEvent: event
  };
};
