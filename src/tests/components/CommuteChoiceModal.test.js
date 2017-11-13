import React from 'react';
import { shallow, setProps } from 'enzyme';
import CommuteChoiceModal from '../../components/CommuteChoiceModal';
import data from '../fixtures/weatherData';

let wrapper, toggleModal, weather;

beforeEach(() => {
  toggleModal = jest.fn();
  weather = { ...data[1], ...data[0] };
  wrapper = shallow(<CommuteChoiceModal isOpen toggleModal={toggleModal} weather={weather} />);
});

test('should render modal with metro commute', () => {
  const metro = wrapper.setProps({ weather: { mode: 'metro', ...data[1] } });
  expect(metro).toMatchSnapshot();
});

test('should render modal with bike commute', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle toggleModal', () => {
  wrapper.find('button').simulate('click');
  expect(toggleModal).toHaveBeenCalled();
});