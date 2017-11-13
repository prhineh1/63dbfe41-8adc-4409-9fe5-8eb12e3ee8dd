
// actions for setting Redux store

export const addDataComplete = (data) => ({
  type: 'ADD_DATA_COMPLETE',
  data
});

export const clearData = () => ({ type: 'CLEAR_DATA' });

// actions for triggering a Saga

export const addData = (data) => ({
  type: 'ADD_DATA',
  data
});

