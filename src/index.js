'use strict';
const parseApiGwHttpEvent = require('./parse-apigw-http-event');
const parseDynamoDBNewImageEvent = require('./parse-dynamodb-new-image-event');
const parseS3Event = require('./parse-s3-event');
const parseSnsEvent = require('./parse-sns-event');
const parseInvokeEvent = require('./parse-invoke-event');

module.exports = function parseIncomingAWSEvent(event) {
  if (!event) return [];

  // if (!event.Records) {

  // }

  if (!event.Records && !event.httpMethod && !event.body)
    return parseInvokeEvent(event);

  if (!event.Records && event.httpMethod) return parseApiGwHttpEvent(event);

  const eventRecord = event.Records[0];
  if (eventRecord.Sns) return parseSnsEvent(event);
  if (eventRecord.s3) return parseS3Event(event);
  if (eventRecord.dynamo) return parseDynamoDBNewImageEvent(event);
  return event;
};
