import { combineReducers } from 'redux';
import alertReducer from './alert.reducer';
import authReducer from './auth.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
});

export default rootReducer;
