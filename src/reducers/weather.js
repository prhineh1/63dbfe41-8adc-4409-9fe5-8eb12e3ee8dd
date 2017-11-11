const defaultState = [[], []]; // state[0] stores user data; state[1] will stores data from the API

export default(state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_USER_DATA_COMPLETE':
      return [[action.data], []];
    default:
      return state;
  }
};
