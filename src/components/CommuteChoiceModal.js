import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import ReactAnimatedWeather from 'react-animated-weather';

const CommuteChoiceModal = (props) => {
  const modeDeclaration = (
    props.weather.mode === 'metro' ? 'You should take the metro.' :
    "You're all clear; bike it."
  );
  return (
    <Modal
      className='modal'
      isOpen={props.isOpen} // propTypes.bool.isRequired
      onRequestClose={props.toggleModal} //propTypes.func
      contentLabel='D.C. Weather and Your Commute' // adds aria-label to the modal
      closeTimeoutMS={200} // for transition effect
    >
      <h2 className='modal__message'>{modeDeclaration}</h2>
      <div className='modal__weather-icon'>
        <ReactAnimatedWeather
          icon={props.weather.icon}
          size={96}
        />
      </div>
      <div className='modal__forecast'> 
        <span className='model__forecast__text'>Forecast for Washington D.C.</span>       
        {/* See https://momentjs.com/docs/#/displaying/ for display formatting of momentObj */}
        <span className='model__forecast__text'>{moment(props.weather.commuteDate * 1000).format('Do MMM, YYYY [at] h:mm A')}</span>
        <span className='model__forecast__text'>{props.weather.summary}</span>  
        <span className='model__forecast__text'>{props.weather.temperature} &#8457;</span>
        <span className='model__forecast__text'>Chance of precipitation: {props.weather.precipProbability * 100}%</span>
        <button className='button button--modal' onClick={props.toggleModal}>Ok</button>
      </div>
    </Modal>
  )
}

export default CommuteChoiceModal;
