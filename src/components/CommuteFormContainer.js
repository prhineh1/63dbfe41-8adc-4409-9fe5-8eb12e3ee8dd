import React from 'react';
import { connect } from 'react-redux';
import CommuteForm from './CommuteForm';
import { addUserData } from '../actions/weather';

export class CommuteFormContainer extends React.Component {
  onSubmit = (userData) => {
    this.props.addUserData(userData);
  }
  render() {
    return (
      <div>
        <CommuteForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUserData: (userData) => dispatch(addUserData(userData))
});

export default connect(null, mapDispatchToProps)(CommuteFormContainer);
