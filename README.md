# Lambda Event Parser

[![Build Status](https://travis-ci.org/simalexan/lambda-event-parser.svg?branch=master)](https://travis-ci.org/simalexan/lambda-event-parser)

A simple parse tool to just parses the events triggering your AWS Lambda into a common format, so you don't have to worry.

## The standardized event format

```javascript
{
  sourceType: 'api',
  sourceEvent: originalEvent,
  records: [{
    userId: 123
  }] // array of events (with parameters as properties)
}
```

## How does it work

**API Gateway GET Request Event**:

`?userId=456&name=someoneUnknown`

```javascript
{
  httpMethod: 'GET',
  queryStringParameters: {
    userId: 456,
    name: 'someoneUnknown'
  }
}
}
```

will be translated into ->

```javascript
{
  sourceType: 'api',
  sourceEvent: originalEvent, // the complete, unchanged GET request event objet
  records: [{
    userId: 123,
    name: 'someoneUnknown'
  }] // array of events (with parameters as properties)
}
```

Let's take another example, an S3 Event:

**S3 Event**:

```javascript
{
  Records: [
    {
      s3: {
        object: {
          key: "HappyFace.jpg",
          size: 1024
        }
      }
    }
  ]
}

```

will be translated into:

```javascript
{
  sourceType: 's3',
  sourceEvent: originalEvent, // the complete, unchanged S3 event objet
  records: [{
    key: "HappyFace.jpg",
    size: 1024
  }] // array of events (with parameters as properties)
}
```

## Supported AWS Events (so far)

- [x] SNS
- [x] S3
- [x] API Gateway (GET, POST, PUT, DELETE, PATCH)
- [x] DynamoDB Streams (NEW_IMAGE)
- [ ] SQS
- [ ] Other AWS Lambda
- [ ] CloudWatch
- [ ] Kinesis DataFirehose
- [ ] Kinesis Data Streams
- [ ] SES

## License

MIT

Aleksandar Simovic
