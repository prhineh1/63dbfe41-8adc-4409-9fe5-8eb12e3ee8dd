
// actions for setting Redux store

export const addDataComplete = (data) => ({
  type: 'ADD_DATA_COMPLETE',
  data
});

// actions for triggering corresponding Saga

export const addData = (data) => ({
  type: 'ADD_DATA',
  data
});
