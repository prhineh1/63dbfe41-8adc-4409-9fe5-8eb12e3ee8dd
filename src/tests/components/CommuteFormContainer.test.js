import React from 'react';
import { shallow } from 'enzyme';
import { CommuteFormContainer } from '../../components/CommuteFormContainer';
import data from '../fixtures/weatherData';

let wrapper, addUserData;

beforeEach(() => {
  addUserData = jest.fn();
  wrapper = shallow(<CommuteFormContainer addUserData={addUserData} />);
});

test('should render CommuteFormContainer', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle addUserData', () => {
  wrapper.find('CommuteForm').prop('onSubmit')(data[0]);
  expect(addUserData).toHaveBeenLastCalledWith(data[0]);
});
