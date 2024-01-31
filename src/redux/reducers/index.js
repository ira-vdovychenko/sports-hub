import { combineReducers } from 'redux';
import authReducer from './authReducer';
import iaReducer from './iaReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  ia: iaReducer
});

export default rootReducer;
