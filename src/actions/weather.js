
// actions for setting Redux store

export const addUserDataComplete = (data) => ({
  type: 'ADD_USER_DATA_COMPLETE',
  data
});

export const addApiDataComplete = (data) => ({
  type: 'ADD_API_DATA_COMPLETE',
  data
});

// actions for triggering corresponding Saga

export const addUserData = (data) => ({
  type: 'ADD_USER_DATA',
  data
});
