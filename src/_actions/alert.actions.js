import { SET_ALERT, CLEAR_ALERT } from './types';

export const setAlert = (alert) => ({
  type: SET_ALERT,
  payload: alert,
});

export const clearAlert = () => ({
  type: CLEAR_ALERT,
});
