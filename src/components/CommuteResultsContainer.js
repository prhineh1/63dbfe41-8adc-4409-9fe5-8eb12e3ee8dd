import React from 'react';
import { connect } from 'react-redux';
import CommuteResultsDisplay from './CommuteResultsDisplay';

export const CommuteResultsContainer = (props) => {
  return (
    <CommuteResultsDisplay weather={props.weather} />
  ); 
}
const mapStateToProps = (state) => {
  return {
    weather: state.weather
  };
};

export default connect(mapStateToProps)(CommuteResultsContainer);