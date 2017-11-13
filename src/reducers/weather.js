
export default(state = null, action) => {
  switch (action.type) {
    case 'ADD_DATA_COMPLETE':
      return action.data;
    case 'CLEAR_DATA':
      return null;
    default:
      return state;
  }
};
