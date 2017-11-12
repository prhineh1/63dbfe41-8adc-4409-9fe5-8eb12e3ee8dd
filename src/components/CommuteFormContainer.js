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
      <div>
        {!!this.props.weather.temperature && 
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
