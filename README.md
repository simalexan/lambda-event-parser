# Lambda Event Parser

[![Build Status](https://travis-ci.org/simalexan/lambda-event-parser.svg?branch=master)](https://travis-ci.org/simalexan/lambda-event-parser)

A simple parse tool to parse the events triggering your AWS Lambda into a common format, so you don't have to worry.

## Setup Instructions

Install package to your project

```bash
npm install lambda-event-parse
```

or

```bash
yarn add lambda-event-parse
```

Import the package

```javascript
const { parserEvent, Event } = require('lambda-event-parse');

parserEvent(event);
```

## The standardized event format

```javascript
{
  sourceType: "api",
  sourceEvent: originalEvent,
  records: [
    {
      userId: 123
    }
  ] // array of events (with parameters as properties)
}
```

## How does it work

**API Gateway GET Request Event**:

`?userId=456&name=someoneUnknown`

```javascript
{
  "httpMethod": "GET",
  "queryStringParameters": {
    "userId": 456,
    "name": "someoneUnknown"
  }
}
```

will be translated into ->

```javascript
{
  sourceType: "api",
  sourceEvent: originalEvent, // the complete, unchanged GET request event objet
  records: [
    {
      userId: 123,
      name: "someoneUnknown"
    }
  ] // array of events (with parameters as properties)
}
```

Let's take another example, an S3 Event:

**S3 Event**:

```javascript
{
  "Records": [
    {
      "s3": {
        "object": {
          "key": "HappyFace.jpg",
          "size": 1024
        }
      }
    }
  ];
}
```

will be translated into:

```javascript
{
  sourceType: "s3",
  sourceEvent: originalEvent, // the complete, unchanged S3 event objet
  records: [
    {
      "key": "HappyFace.jpg",
      "size": 1024
    }
  ] // array of events (with parameters as properties)
}
```

**DynamoDb Event**:

```javascript
{
  "Records": [
    {
      "eventID": "7de3041dd709b024af6f29e4fa13d34c",
      "eventName": "INSERT",
      "eventVersion": "1.1",
      "eventSource": "aws:dynamodb",
      "awsRegion": "us-west-2",
      "dynamodb": {
        "ApproximateCreationDateTime": 1479499740,
        "Keys": {
          "Timestamp": {
            "S": "2016-11-18:12:09:36"
          },
          "Username": {
            "S": "John Doe"
          }
        },
        "NewImage": {
          "Timestamp": {
            "S": "2016-11-18:12:09:36"
          },
          "Message": {
            "S": "This is a bark from the Woofer social network"
          },
          "Username": {
            "S": "John Doe"
          }
        },
        "SequenceNumber": "13021600000000001596893679",
        "SizeBytes": 112,
        "StreamViewType": "NEW_IMAGE"
      },
      "eventSourceARN": "arn:aws:dynamodb:us-east-1:123456789012:table/BarkTable/stream/2016-11-16T20:42:48.104"
    }
  ]
}
```

will be translated into:

```javascript
{
  sourceType: "dynamodb",
  sourceEvent: originalEvent, // the complete, unchanged dynamodb event objet
  records: [
    {
      key: "HappyFace.jpg",
      size: 1024
    }
  ] // array of events (with parameters as properties)
}
```

**API Gateway Event**:

```javascript
{
  "httpMethod": "GET",
  "pathParameters": {
    "id": 1,
    "name": "test"
  },
  "queryStringParameters": {
    "search": "Happy Face"
  }
}
```

will be translated into:

```javascript
{
  sourceType: "api",
  sourceEvent: originalEvent,
  records: [
    {
      key: "HappyFace.jpg",
      size: 1024
    }
  ]
}
```

**Direct Invoke Event**:

```javascript
[1, 2, 3]; //array
```

will be translated into:

```javascript
{
  sourceType: "invoke",
  sourceEvent: originalEvent,
  records: [1, 2, 3]
}
```

**Direct Invoke Event**:

```javascript
{
  "pokemon": ["pikachu", "sudowoodo"] //object
}
```

will be translated into:

```javascript
{
  sourceType: "invoke",
  sourceEvent: originalEvent,
  records: [{ "pokemon": ["pikachu", "sudowoodo"] }]
}
```

## Supported AWS Events (so far)

- [x] SNS
- [x] S3
- [x] API Gateway (GET, POST, PUT, DELETE, PATCH)
- [x] DynamoDB Streams (NEW_IMAGE)
- [x] SQS
- [x] Invoke
- [ ] Other AWS Lambda
- [ ] CloudWatch
- [ ] Kinesis Data Firehose
- [ ] Kinesis Data Streams
- [ ] SES

## License

MIT

Aleksandar Simovic
