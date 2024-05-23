import { createStore } from 'redux';
import rootReducer from './reducers/index';

const initialState = {
  auth: {
    user: null,
    token: '',
    role:  null,
    isAdmin:  null, 
  }, 
    
  };
const reduxMockStore = createStore( rootReducer,  initialState);

export default reduxMockStore;
