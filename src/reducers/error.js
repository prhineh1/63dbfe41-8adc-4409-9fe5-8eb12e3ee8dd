
export default(state = null, action) => {
  switch(action.type) {
    case 'DARK_SKY_ERROR':
      return action.error;
    case 'CLEAR_ERROR':
      return null;
    default:
      return state;
  }
};