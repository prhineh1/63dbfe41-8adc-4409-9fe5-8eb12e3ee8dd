import { call, put } from 'redux-saga/effects';
import { addUserDataAsync } from '../../sagas/weather';
import { addUserData } from '../../actions/weather';
import { getWeather } from '../../API/DarkSky';
import data from '../fixtures/weatherData';

// For more information on testing sagas see https://redux-saga.js.org/docs/advanced/Testing.html

describe('testing addUserDataAsync saga for successfull Api call', () => {
  const response = {
    temperature: 45,
    precipProbability: 0.0,
    summary: 'cloudy'
  };
  const actionObject = addUserData(data[0]);
  const iterator = addUserDataAsync(actionObject);
  test('should return value from the first iteration', () => {
    const next = iterator.next().value;
    expect(next).toEqual(call(getWeather, data[0]));
  });
  test('should return value from the second iteration', () => {
    const nextSuccess = iterator.next({ response, undefined }).value;
    expect(nextSuccess).toEqual(put({
      type: 'ADD_USER_DATA_COMPLETE',
      data: { ...data[0] }
    }));
  });
  test('should return value from the third iteration', () => {
    const next = iterator.next().value;
    expect(next).toEqual(put({
      type: 'ADD_API_DATA_COMPLETE',
      data: { ...response }
    }));
  });
  test('Saga should be finished', () => {
    const next = iterator.next();
    expect(next).toEqual({ done: true, value: undefined });
  });
});

describe('testing addUserDataAsync saga for failed Api call', () => {
  const error = {
    TypeError: 'Something went wrong'
  };
  const actionObject = addUserData(data[0]);
  const iterator = addUserDataAsync(actionObject);
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
