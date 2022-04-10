import { SET_ALERT, CLEAR_ALERT } from '../_actions/types';

const initialState = {};

const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return { alert: payload };
    case CLEAR_ALERT:
      return { alert: '' };
    default:
      return state;
  }
};

export default alertReducer;
