import { combineReducers } from 'redux';
import { authReducer } from './authReducer.js';
import { iaReducer  }from './iaReducer.js';
import { teamReducer } from './teamReducer.js';

const rootReducer = combineReducers({
  auth: authReducer,
  ia: iaReducer,
  team: teamReducer
});

export default rootReducer;
