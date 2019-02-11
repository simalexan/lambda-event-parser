/*global describe, expect*/
const parser = require('../src/index'),
  apiPostEvent = require('./test-events/apigw-http-post-event.json');

describe('parse API GW HTTP GET event', () => {
  'use strict';

  test('should properly parse a well structured HTTP POST event', () => {
    const parsedEvent = parser(apiPostEvent);
    expect(parsedEvent).toEqual([]);
  });
  
});
