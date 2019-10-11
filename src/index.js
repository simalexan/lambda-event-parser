'use strict';
const parseApiGwHttpEvent = require('./parse-apigw-http-event');
const parseDynamoDBNewImageEvent = require('./parse-dynamodb-new-image-event');
const parseS3Event = require('./parse-s3-event');
const parseSnsEvent = require('./parse-sns-event');
const parseInvokeEvent = require('./parse-invoke-event');
const Event = require('./constants/event');

function isRecordsEmpty(event) {
  const { Records } = event;
  return Records && (!Array.isArray(Records) || Records.length === 0);
}

function handleEventSource(event) {
  const { Records } = event;
  if (isRecordsEmpty(event)) throw new Error('Records are empty.');

  if (Records[0].Sns) return parseSnsEvent(event);
  if (Records[0].s3) return parseS3Event(event);
  if (Records[0].dynamodb) return parseDynamoDBNewImageEvent(event);

  throw new Error('eventSource not implemented.');
}

function isHttpEvent(event) {
  const { httpMethod } = event;
  return httpMethod;
}

function isInvokeEvent(event) {
  const { Records } = event;
  return (
    !Records ||
    !Array.isArray(Records) ||
    Records.length === 0 ||
    !Records[0].eventSource
  );
}

function parseEvent(event) {
  if (!event) throw new Error('Event not defined.');

  if (isHttpEvent(event)) return parseApiGwHttpEvent(event);
  if (isInvokeEvent(event)) return parseInvokeEvent(event);

  return handleEventSource(event);
}

module.exports = { parseEvent, Event };
