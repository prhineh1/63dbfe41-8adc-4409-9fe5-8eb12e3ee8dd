import React from 'react';
import { shallow, setProps } from 'enzyme';
import CommuteChoiceModal from '../../components/CommuteChoiceModal';
import data from '../fixtures/weatherData';

let wrapper, toggleModal;

beforeEach(() => {
  toggleModal = jest.fn();
  wrapper = shallow(<CommuteChoiceModal isOpen toggleModal={toggleModal} weather={data[1]} />);
});

test('should render modal when with bike commute', () => {
  const bike = wrapper.setProps({ commute: false });
  expect(bike).toMatchSnapshot();
});

test('should render modal when with metro commute', () => {
  const bike = wrapper.setProps({ commute: true });
  expect(bike).toMatchSnapshot();
});

test('should handle toggleModal', () => {
  wrapper.find('button').simulate('click');
  expect(toggleModal).toHaveBeenCalled();
});