import reducer from '../../reducers/weather';
import data from '../fixtures/weatherData';

test('should set default state', () => {
  const state = reducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add user data to the state', () => {
  const action = {
    type: 'ADD_USER_DATA_COMPLETE',
    data: data[0]
  };
  const state = reducer([], action);
  expect(state).toEqual([[data[0]]]);
});

test('should add DarkSky Api data to the state', () => {
  const action = {
    type: 'ADD_API_DATA_COMPLETE',
    data: data[1]
  };
  const state = reducer([[data[0]]], action);
  expect(state).toEqual([[data[0]], [data[1]]]);
});

