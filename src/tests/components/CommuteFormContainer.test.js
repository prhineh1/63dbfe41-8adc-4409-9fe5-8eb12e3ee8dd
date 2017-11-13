import React from 'react';
import { shallow } from 'enzyme';
import { CommuteFormContainer } from '../../components/CommuteFormContainer';
import data from '../fixtures/weatherData';

let wrapper, addData, weather, clearData, error, clearError;

beforeEach(() => {
  addData = jest.fn();
  clearData = jest.fn();
  clearError = jest.fn();
  weather = { ...data[1] };
  error = {
    status: '404',
    statusText: 'not found'
  };
  wrapper = shallow(<CommuteFormContainer 
  addData={addData} 
  weather={weather} 
  clearData={clearData} 
  clearError={clearError} />);
});

test('should render CommuteFormContainer', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render CommuteFormContainer without modal', () => {
  const noModal = wrapper.setProps({ weather: { temperature: '' } });
  expect(noModal).toMatchSnapshot();
});

test('should render CommuteFormContainer with error', () => {
  const withError = wrapper.setProps({ error });
  expect(withError).toMatchSnapshot();
});

test('should handle addData', () => {
  wrapper.find('CommuteForm').prop('onSubmit')(data[0]);
  expect(addData).toHaveBeenLastCalledWith(data[0]);
  expect(wrapper.state('isOpen')).toBe(true);
});

test('toggleModal should flip isOpen', () => {
  wrapper.instance().toggleModal();
  expect(wrapper.state('isOpen')).toBe(true);
  expect(clearData).toHaveBeenCalled();
});

test('should handle clearError', () => {
  const withError = wrapper.setProps({ error }); 
  withError.instance().clearError();
  expect(clearError).toHaveBeenCalled();
});
