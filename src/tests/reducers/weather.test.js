import reducer from '../../reducers/weather';
import data from '../fixtures/weatherData';

test('should set default state', () => {
  const state = reducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should add weather data to the store', () => {
  const action = {
    type: 'ADD_DATA_COMPLETE',
    data: data[1]
  };
  const state = reducer({}, action);
  expect(state).toEqual(data[1]);
});
