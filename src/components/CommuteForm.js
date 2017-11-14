import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import Timepicker from 'rc-time-picker';

export default class CommuteForm extends React.Component {
  state = {
    tempHi: '',
    tempLow: '',
    precipProbabilityCommute: '',
    commuteDay: moment(),
    commuteTime: moment(),
    calendarFocused: false,
    error: '',
  };
  onLowChange = e => {
    const tempLow = e.target.value;
    if (tempLow.match(/(^\-?(?!0)\d{0,3}$)|^0$|^$/)) { // matches any number between -999 and 999 or an empty string
      this.setState(() => ({ tempLow }));
    }
  };
  onHighChange = e => {
    const tempHi = e.target.value;
    if (tempHi.match(/(^\-?(?!0)\d{0,3}$)|^0$|^$/)) {
      this.setState(() => ({ tempHi }));
    }
  };
  onPrecipChange = e => {
    const precipProbabilityCommute = e.target.value;
    if (precipProbabilityCommute.match(/(^[1-9]\d?$)|100$|^0?$|^$/)) { // matches any number between 0 and 100 or an empty string
      this.setState(() => ({ precipProbabilityCommute }))
    }
  }
  onDayChange = commuteDay => {
    if (commuteDay) {
      this.setState(() => ({ commuteDay }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  isOutsideRange = day => !day.isBetween(moment().subtract(1, 'd'), moment().add(14, 'd')); // Can only select dates within two weeks of today
  onTimeChange = commuteTime => {
    if (commuteTime) {
      this.setState(() => ({ commuteTime }));      
    }
  };
  onSubmit = e => {
    e.preventDefault();

    if (this.state.tempHi.match(/^\-$|^$/) || // matches empty strings and '-'
       this.state.tempLow.match(/^\-$|^$/) ||
      !this.state.precipProbabilityCommute) {
      this.setState(() => ({ error: 'Please provide valid values for the first three fields.' }))
    } else if (parseInt(this.state.tempLow) >= parseInt(this.state.tempHi)) {
      this.setState(() => ({ error: "The Hi temperature (second input) must be greater than the Low temperature (first input)." }))
    } else {
      this.setState(() => ({ error: '' }));

      // create a momentObj combining the year, month and date of commuteDay (value from SingleDatePicker)
      // with the hour (value from TimePicker) from commuteTime to get the appropriate commuteDate
      const commuteDate = moment({  
        year: this.state.commuteDay.year(),
        month: this.state.commuteDay.month(),
        date: this.state.commuteDay.date(),
        hour: this.state.commuteTime.hour(),
        minute: this.state.commuteTime.minute()
      });
      this.props.onSubmit({
        tempLow: parseInt(this.state.tempLow),
        tempHi: parseInt(this.state.tempHi),
        precipProbabilityCommute: parseFloat(this.state.precipProbabilityCommute) / 100,
        commuteDate: commuteDate.unix() // convert momentObj to Unix timestamp for use with DarkSky API
      });
    }
  }
  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input 
          className='text-input'
          type='text'
          placeholder='Low (&#8457;)'
          autoFocus
          value={this.state.tempLow}
          onChange={this.onLowChange}
        />
        <input 
          className='text-input'
          type='text'
          placeholder='Hi (&#8457;)'
          value={this.state.tempHi}
          onChange={this.onHighChange}
        />
        <input 
          className='text-input'
          type='text'
          placeholder='Chance of Precipitation (%)'
          value={this.state.precipProbabilityCommute}
          onChange={this.onPrecipChange}
        />
        <SingleDatePicker 
          date={this.state.commuteDay} // momentPropTypes.momentObj or null
          onDateChange={this.onDayChange} // PropTypes.func.isRequired
          focused={this.state.calendarFocused} // PropTypes.bool
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
          numberOfMonths={1}
          isOutsideRange={this.isOutsideRange} // PropTypes.func
        />
        <Timepicker
          className='time-picker'
          showSecond={false}
          defaultValue={this.state.commuteTime} // momentPropTypes.momentObj or null
          format={'h:mm a'} // See https://momentjs.com/docs/#/parsing/string-format/
          onChange={this.onTimeChange} 
          use12Hours // PropTypes.bool, followed implemenation at http://react-component.github.io/time-picker/examples/12hours.html
        />
        <div>
          <button className='button'>Submit</button>
        </div>
      </form>
    );
  }
}