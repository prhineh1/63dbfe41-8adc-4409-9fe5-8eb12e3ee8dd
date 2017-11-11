import * as Actions from '../../actions/weather';
import data from '../fixtures/weatherData';

test('should set up addUserDataComplete action object', () => {
  const action = Actions.addUserDataComplete(data);
  expect(action).toEqual({
    type: 'ADD_USER_DATA_COMPLETE',
    data
  });
});

test('should set up addApiDataComplete action object', () => {
  const action = Actions.addApiDataComplete(data);
  expect(action).toEqual({
    type: 'ADD_API_DATA_COMPLETE',
    data
  });
});

test('should set up addUserData action object', () => {
  const action = Actions.addUserData(data);
  expect(action).toEqual({
    type: 'ADD_USER_DATA',
    data
  });
});
