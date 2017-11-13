import React from 'react';
import { connect } from 'react-redux';
import CommuteForm from './CommuteForm';
import { addData } from '../actions/weather';
import CommuteChoiceModal from './CommuteChoiceModal';

export class CommuteFormContainer extends React.Component {
  state = {
    isOpen: false
  }
  onSubmit = (userData) => {
    this.props.addData(userData);
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }
  toggleModal = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }
  render() {
    return (
      <div className='content-container content-container--body'>
        <div className='info'>
          Is it a good day to take the bike to work, or should you take the metro?
          Let Crisp Commute help you stay fresh and dry on your DC commute. 
          After Filling out the form below and hitting submit, Crisp
          Commute will display the forecast for that time and recommend a mode of transportation.
          </div>
        {!!this.props.weather.temperature && // Don't render the modal until the data is ready
          <CommuteChoiceModal 
            weather={this.props.weather}
            toggleModal={this.toggleModal}
            isOpen={this.state.isOpen} 
          />
        }
        <CommuteForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  };
};

const mapDispatchToProps = (dispatch) => ({
  addData: (userData) => dispatch(addData(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommuteFormContainer);
