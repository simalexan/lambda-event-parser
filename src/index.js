'use strict';
const parseApiGwHttpEvent = require('./parse-apigw-http-event'),
  parseDynamoDBNewImageEvent = require('./parse-dynamodb-new-image-event'),
  parseS3Event = require('./parse-s3-event'),
  parseSnsEvent = require('./parse-sns-event');

module.exports = function parseIncomingAWSEvent(event){
  if (!event || (!event.Records && !event.httpMethod && !event.body)) return [];

  if (!event.Records) return parseApiGwHttpEvent(event);

  const eventRecord = event.Records[0];
  if (eventRecord.Sns) return parseSnsEvent(event);
  if (eventRecord.s3) return parseS3Event(event);
  if (eventRecord.dynamo) return parseDynamoDBNewImageEvent(event);
  return event;
};
