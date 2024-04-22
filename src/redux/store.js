import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index.js'; 
import { authMiddleware } from './middleware/authMiddleware.js';

const savedUser = localStorage.getItem('user');
const savedRole = localStorage.getItem('role');
const savedToken = localStorage.getItem('accessToken');
const savedisAdmin = localStorage.getItem('isAdmin');

const initialState = {
  auth: {
    user: savedUser ? JSON.parse(savedUser) : null,
    token: savedToken || null,
    role: savedRole || null,
    isAdmin: savedisAdmin || null, 
  }, 
};
const store = createStore(rootReducer, initialState, applyMiddleware(authMiddleware));

export default store;