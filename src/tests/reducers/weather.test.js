import reducer from '../../reducers/weather';
import data from '../fixtures/weatherData';

test('should set default state', () => {
  const state = reducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([[], []]);
});

test('should add user data to the state', () => {
  const action = {
    type: 'ADD_USER_DATA_COMPLETE',
    data
  };
  const state = reducer([[], []], action);
  expect(state).toEqual([[data], []]);
});

