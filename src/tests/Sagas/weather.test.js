import { call, put } from 'redux-saga/effects';
import { addDataAsync } from '../../sagas/weather';
import { addData } from '../../actions/weather';
import getWeather from '../../API/DarkSky';
import data from '../fixtures/weatherData';

// For more information on testing sagas see https://redux-saga.js.org/docs/advanced/Testing.html

describe('testing addDataAsync saga for successfull Api call', () => {
  const response = {};
  const actionObject = addData(data[0]);
  const iterator = addDataAsync(actionObject);
  test('should return value from the first iteration', () => {
    const next = iterator.next().value;
    expect(next).toEqual(call(getWeather, data[0]));
  });
  test('should return value from the second iteration', () => {
    const nextSuccess = iterator.next({ response, undefined }).value;
    expect(nextSuccess).toEqual(put({
      type: 'ADD_DATA_COMPLETE',
      data: { ...data[0] }
    }));
  });
  test('Saga should be finished', () => {
    const next = iterator.next();
    expect(next).toEqual({ done: true, value: undefined });
  });
});

describe('testing addDataAsync saga for failed Api call', () => {
  const error = {};
  const actionObject = addData(data[0]);
  const iterator = addDataAsync(actionObject);
  test('should return value from the first iteration', () => {
    const next = iterator.next().value;
    expect(next).toEqual(call(getWeather, data[0]));
  });
  test('should return value from the second iteration', () => {
    const nextFailure = iterator.next({ undefined, error }).value;
    expect(nextFailure).toEqual(call(console.log, error));
  });
  test('Saga should be finished', () => {
    const next = iterator.next();
    expect(next).toEqual({ done: true, value: undefined });
  });
});
