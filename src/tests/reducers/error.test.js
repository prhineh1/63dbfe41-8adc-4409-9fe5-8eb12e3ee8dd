import reducer from '../../reducers/error';

test('should set default state', () => {
  const state = reducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(null);
});

test('should add an error to the store', () => {
  const action = {
    type: 'DARK_SKY_ERROR',
    error: 'error'
  };
  const state = reducer(null, action);
  expect(state).toEqual('error');
});

test('should clear error from the store', () => {
  const action = {
    type: 'CLEAR_ERROR',
  };
  const state = reducer('error', action);
  expect(state).toEqual(null);
});

test('should trigger default case', () => {
  const action = {
    type: 'DEFAULT',
  };
  const state = reducer('error', action);
  expect(state).toEqual('error');
});
