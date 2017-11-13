import React from 'react';
import { shallow } from 'enzyme';
import { CommuteFormContainer } from '../../components/CommuteFormContainer';
import data from '../fixtures/weatherData';

let wrapper, addData, weather;

beforeEach(() => {
  addData = jest.fn();
  weather = { ...data[1] };
  wrapper = shallow(<CommuteFormContainer addData={addData} weather={weather} />);
});

test('should render CommuteFormContainer', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render CommuteFormContainer without modal', () => {
  const noModal = wrapper.setProps({ weather: { temperature: '' } });
  expect(noModal).toMatchSnapshot();
});

test('should handle addData', () => {
  wrapper.find('CommuteForm').prop('onSubmit')(data[0]);
  expect(addData).toHaveBeenLastCalledWith(data[0]);
  expect(wrapper.state('isOpen')).toBe(true);
});

test('toggleModal should flip isOpen', () => {
  wrapper.instance().toggleModal();
  expect(wrapper.state('isOpen')).toBe(true);
});
