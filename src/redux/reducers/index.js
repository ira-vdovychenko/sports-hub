import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import iaReducer from './iaReducer.js';

const rootReducer = combineReducers({
  auth: authReducer,
  ia: iaReducer
});

export default rootReducer;
