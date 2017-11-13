import { darkSkyError, clearError } from '../../actions/error';

test('should set up darkSkyError action object', () => {
  const action = darkSkyError('error');
  expect(action).toEqual({
    type: 'DARK_SKY_ERROR',
    error: 'error'
  });
});

test('should set up clearError action object', () => {
  const action = clearError('error');
  expect(action).toEqual({
    type: 'CLEAR_ERROR',
  });
});