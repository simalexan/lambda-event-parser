/*global describe, expect*/
const parser = require('../src/index'),
  apiDeleteEvent = require('./test-events/apigw-http-delete-event.json');

describe('parse API GW HTTP GET event', () => {
  'use strict';

  test('should properly parse a well structured HTTP DELETE event', () => {
    const parsedEvent = parser(apiDeleteEvent);
    expect(parsedEvent).toEqual([]);
  });
  
});
