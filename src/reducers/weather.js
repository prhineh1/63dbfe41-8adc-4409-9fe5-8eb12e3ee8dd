
export default(state = {}, action) => {
  switch (action.type) {
    case 'ADD_DATA_COMPLETE':
      return action.data;
    default:
      return state;
  }
};
