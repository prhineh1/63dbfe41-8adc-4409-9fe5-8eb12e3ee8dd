import React from 'react';
import { shallow, setState } from 'enzyme';
import moment from 'moment';
import CommuteForm from '../../components/CommuteForm';

let wrapper, onSubmit;

beforeEach(() => {
  onSubmit = jest.fn();
  wrapper = shallow(<CommuteForm onSubmit={onSubmit} />);
});

test('should render CommuteForm', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should set tempLow on input change', () => {
  const value = '50';
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('tempLow')).toBe(value);
});

test('should set tempHi on input change', () => {
  const value = '85';
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('tempHi')).toBe(value);
});

test('should set precipProbabilityCommute on input change', () => {
  const value = '67';
  wrapper.find('input').at(2).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('precipProbabilityCommute')).toBe(value);
});

test('should set new date on date change', () => {
  const time = moment();
  wrapper.find('SingleDatePicker').prop('onDateChange')(time);
  expect(wrapper.state('commuteDay')).toEqual(time);
});

test('should set calendar focus on change', () => {
  const focused = true;
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});

test('should set new date on time change', () => {
  const time = moment();
  wrapper.find('Picker').prop('onChange')(time); // Timepicker component is Rendered as 'Picker' (see snapshot)
  expect(wrapper.state('commuteTime')).toEqual(time);
});

test('isOutsideRange should return true', () => {
  const time = moment().add(3, 'w');
  const instance = wrapper.instance().isOutsideRange(time);
  expect(instance).toEqual(true);
});

test('isOutsideRange should return false', () => {
  const time = moment().add(1, 'w');
  const instance = wrapper.instance().isOutsideRange(time);
  expect(instance).toEqual(false);
});

test('should render error for invalid form submission (missing input)', () => {
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission (tempLow > tempHi)', () => {
  const state = {
    tempHi: '45',
    tempLow: '89',
    precipProbabilityCommute: '25'
  };
  wrapper.setState(state);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission (tempLow === "-")', () => {
  const state = {
    tempHi: '45',
    tempLow: '-',
    precipProbabilityCommute: '25'
  };
  wrapper.setState(state);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit prop for valid form submission', () => {
  const state = {
    tempHi: '89',
    tempLow: '43',
    precipProbabilityCommute: '25',
    commuteDay: moment(),
    commuteTime: moment().hour(9),
    calendarFocused: false,
    error: 'error'
  };
  wrapper.setState(state);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmit).toHaveBeenLastCalledWith({
    tempHi: 89,
    tempLow: 43,
    precipProbabilityCommute: 0.25,
    commuteDate: moment().hour(9).unix()
  });
});
