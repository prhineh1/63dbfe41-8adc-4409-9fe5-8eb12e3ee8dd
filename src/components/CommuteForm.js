import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import Timepicker from 'rc-time-picker';

export default class CommuteForm extends React.Component {
  state = {
    tempHi: '',
    tempLow: '',
    precipProbability: '',
    commuteDay: moment(),
    commuteTime: moment(),
    calendarFocused: false,
    error: '',
  };
  onLowChange = e => {
    const tempLow = e.target.value;
    if (!tempLow || tempLow.match(/^[1-9][0-9]{0,2}?$/)) { //matches any number between 0 and 1000
      this.setState(() => ({ tempLow }));
    }
  };
  onHighChange = e => {
    const tempHi = e.target.value;
    if (!tempHi || tempHi.match(/^[1-9][0-9]{0,2}?$/)) {
      this.setState(() => ({ tempHi }));
    }
  };
  onPrecipChange = e => {
    const precipProbability = e.target.value;
    if (!precipProbability || precipProbability.match(/(^[1-9][0-9]?$)|100?$|^0?$/)) { //matches any number between 0 and 100
      this.setState(() => ({ precipProbability }))
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

    if(!this.state.tempHi || !this.state.tempLow || !this.state.precipProbability) {
      this.setState(() => ({ error: 'Please provide values for the first three fields.' }))
    } else if (parseInt(this.state.tempLow) > parseInt(this.state.tempHi)) {
      this.setState(() => ({ error: "The Hi temperature (second input) must be greater than the low temperature (first input)." }))
    } else {
      this.setState(() => ({ error: '' }));

      // create a momentObj combining the year, month and date of commuteDay
      // with the hour from commuteTime to get the appropriate commuteDate
      const commuteDate = moment({  
        year: this.state.commuteDay.year(),
        month: this.state.commuteDay.month(),
        date: this.state.commuteDay.date(),
        hour: this.state.commuteTime.hour()
      });
      this.props.onSubmit({
        tempLow: parseInt(this.state.tempLow),
        tempHi: parseInt(this.state.tempHi),
        precipProbability: parseFloat(this.state.precipProbability) / 100,
        commuteDate: commuteDate.unix() // convert momentObj to Unix timestamp for use with DarkSky API
      });
    }
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <input 
          type='text'
          placeholder='Low'
          autoFocus
          value={this.state.tempLow}
          onChange={this.onLowChange}
        />
        <input 
          type='text'
          placeholder='Hi'
          value={this.state.tempHi}
          onChange={this.onHighChange}
        />
        <input 
          type='text'
          placeholder='Chance of Rain'
          value={this.state.precipProbability}
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
          showSecond={false}
          defaultValue={this.state.commuteTime} // momentPropTypes.momentObj or null
          format={'h:mm a'} // See https://momentjs.com/docs/#/parsing/string-format/
          onChange={this.onTimeChange} 
          use12Hours // PropTypes.bool, followed implemenation at http://react-component.github.io/time-picker/examples/12hours.html
        />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}