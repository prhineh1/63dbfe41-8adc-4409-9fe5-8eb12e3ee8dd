import * as Actions from '../../actions/weather';
import data from '../fixtures/weatherData';

test('should set up addDataComplete action object', () => {
  const action = Actions.addDataComplete(data[1]);
  expect(action).toEqual({
    type: 'ADD_DATA_COMPLETE',
    data: data[1]
  });
});

test('should set up clearData action object', () => {
  const action = Actions.clearData();
  expect(action).toEqual({
    type: 'CLEAR_DATA',
  });
});

test('should set up addData action object', () => {
  const action = Actions.addData(data[0]);
  expect(action).toEqual({
    type: 'ADD_DATA',
    data: data[0]
  });
});
