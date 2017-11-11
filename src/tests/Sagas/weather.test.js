import { call, put } from 'redux-saga/effects';
import { addUserDataAsync } from '../../sagas/weather';
import { addUserData } from '../../actions/weather';
import { getWeather } from '../../API/DarkSky';
import data from '../fixtures/weatherData';

describe('testing addUserDataAsync saga', () => {
  const actionObject = addUserData(data[0]);
  const iterator = addUserDataAsync(actionObject);
  test('should return value from the first iteration', () => {
    const next = iterator.next().value;
    expect(next).toEqual(call(getWeather, data[0]));
  });
  test('Saga should be finished', () => {
    const next = iterator.next();
    expect(next).toEqual({ done: true, value: undefined });
  });
});
