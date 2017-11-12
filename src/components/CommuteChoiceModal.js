import React from 'react';
import Modal from 'react-modal';
import ReactAnimatedWeather from 'react-animated-weather';

const CommuteChoiceModal = (props) => {
  const modeDeclaration = (
    props.weather.mode === 'metro' ? 'You should take the metro.' :
    "You're all clear; bike it."
  );
  return (
    <Modal
      isOpen={props.isOpen} // propTypes.bool.isRequired
      onRequestClose={props.toggleModal} //propTypes.func
      contentLabel='The Weather and Your Commute' // adds aria-label to the modal
      closeTimeoutMS={200}
    >
      <h4>{modeDeclaration}</h4>
      <div>
        <ReactAnimatedWeather
          icon={props.weather.icon}
        />
        <span>
          {props.weather.summary} at  
          {props.weather.temperature} with a 
          {props.weather.precipProbability * 100}% chance of precipitation
        </span>
      </div>
      <button onClick={props.toggleModal}>Ok</button>
    </Modal>
  )
}

export default CommuteChoiceModal;
