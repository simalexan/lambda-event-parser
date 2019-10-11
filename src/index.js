'use strict';
const parseApiGwHttpEvent = require('./parse-apigw-http-event');
const parseDynamoDBNewImageEvent = require('./parse-dynamodb-new-image-event');
const parseS3Event = require('./parse-s3-event');
const parseSnsEvent = require('./parse-sns-event');
const parseInvokeEvent = require('./parse-invoke-event');

module.exports = function parseIncomingAWSEvent(event) {
  if (!event) return [];

  const { Records, httpMethod } = event;
  if (!Records && httpMethod) return parseApiGwHttpEvent(event);
  if (Records && Records[0] && Records[0].Sns) return parseSnsEvent(event);
  if (Records && Records[0] && Records[0].s3) return parseS3Event(event);
  if (Records && Records[0] && Records[0].dynamo)
    return parseDynamoDBNewImageEvent(event);
  return parseInvokeEvent(event);
};
