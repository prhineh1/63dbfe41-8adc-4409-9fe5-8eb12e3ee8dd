import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

const CommuteResultsDisplay = (props) => {
  const modeDeclaration = (
    props.bike ? "You're all clear; bike it" :
    "You should take the metro."
  );
  return (
    <div>
      <h4>{modeDeclaration}</h4>
      <ReactAnimatedWeather
        icon={props.weather.icon}
      />
      <span>
        {props.weather.summary} at 
        {props.weather.temperature} with a 
        {props.weather.precipProbability * 100}% chance of precipitation
      </span>
    </div>
  );
};

export default CommuteResultsDisplay;