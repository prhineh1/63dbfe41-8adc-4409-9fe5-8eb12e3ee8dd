
// action for setting Redux store
export const addUserDataComplete = (data) => ({
  type: 'ADD_USER_DATA_COMPLETE',
  data
});

// action for triggering corresponding Saga
export const addUserData = (data) => ({
  type: 'ADD_USER_DATA',
  data
});
