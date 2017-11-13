import reducer from '../../reducers/weather';
import data from '../fixtures/weatherData';

test('should set default state', () => {
  const state = reducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(null);
});

test('should add weather data to the store', () => {
  const action = {
    type: 'ADD_DATA_COMPLETE',
    data: data[1]
  };
  const state = reducer(null, action);
  expect(state).toEqual(data[1]);
});

test('should clear weather data to the store', () => {
  const action = {
    type: 'CLEAR_DATA'
  };
  const state = reducer(data[1], action);
  expect(state).toEqual(null);
});

test('should trigger default case', () => {
  const action = {
    type: 'DEFAULT',
  };
  const state = reducer(data[1], action);
  expect(state).toEqual(data[1]);
});
