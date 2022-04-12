import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './_reducers';

const store = createStore(
  rootReducer,
  //   applyMiddleware(thunk),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
