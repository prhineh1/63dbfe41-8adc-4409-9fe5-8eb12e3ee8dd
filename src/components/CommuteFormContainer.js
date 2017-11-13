import React from 'react';
import { connect } from 'react-redux';
import CommuteForm from './CommuteForm';
import { addData, clearData } from '../actions/weather';
import { clearError } from '../actions/error';
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
    this.props.clearData();
  }
  clearError = () => {
    if (!!this.props.error) { // only dispatch the action if there is an error
      this.props.clearError();      
    }
  }
  render() {
    return (
      <div className='content-container content-container--body'>
        <div className='info'>
          Is it a good day to take the bike to work, or should you take the metro?
          Let Crisp Commute help you stay fresh and dry on your DC commute. 
          Enter information regarding accpetable whether conditions and
          the time and date of your commute. After hitting submit, Crisp
          Commute will display the forecast for that time and recommend either a bike or the metro.
          </div>
        {!!this.props.weather && // Don't render the modal until data is ready
          <CommuteChoiceModal 
            weather={this.props.weather}
            toggleModal={this.toggleModal}
            isOpen={this.state.isOpen} 
          />
        }
        <CommuteForm onSubmit={this.onSubmit} />
        {this.props.error && 
          <h3 className='error'>{this.props.error.status}: {this.props.error.statusText}. Try Again.</h3>
        }
        {this.props.weather && this.clearError()} {/* clear error once valid data is received */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    weather: state.weather,
    error: state.error
});

const mapDispatchToProps = (dispatch) => ({
  addData: (userData) => dispatch(addData(userData)),
  clearData: () => dispatch(clearData()),
  clearError: () => dispatch(clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommuteFormContainer);
