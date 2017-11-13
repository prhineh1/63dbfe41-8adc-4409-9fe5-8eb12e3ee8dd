
// actions for setting Redux store

export const darkSkyError = (error) => ({
  type: 'DARK_SKY_ERROR',
  error
});

export const clearError = () => ({ type: 'CLEAR_ERROR' });