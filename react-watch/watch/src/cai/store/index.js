import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import state from './state'
import reducer from './reducer';

//实例store
let store = createStore(
  reducer,
  state,
  applyMiddleware(thunk)
);

export default store;