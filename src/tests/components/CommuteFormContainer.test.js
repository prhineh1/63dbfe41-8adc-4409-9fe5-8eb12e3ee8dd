import React from 'react';
import { shallow } from 'enzyme';
import { CommuteFormContainer } from '../../components/CommuteFormContainer';
import data from '../fixtures/weatherData';

let wrapper, addUserData, weather;

beforeEach(() => {
  addUserData = jest.fn();
  weather = data[1];
  wrapper = shallow(<CommuteFormContainer addUserData={addUserData} weather={weather} commute={false} />);
});

test('should render CommuteFormContainer', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle addUserData', () => {
  wrapper.find('CommuteForm').prop('onSubmit')(data[0]);
  expect(addUserData).toHaveBeenLastCalledWith(data[0]);
  expect(wrapper.state('isOpen')).toBe(true);
});

test('toggleModal should flip isOpen', () => {
  wrapper.instance().toggleModal();
  expect(wrapper.state('isOpen')).toBe(true);
});
