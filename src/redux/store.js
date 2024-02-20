import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index.js'; 
import { authMiddleware } from './middleware/authMiddleware.js';

const persistedUser = localStorage.getItem('user');
const persistedToken = localStorage.getItem('accessToken');
const persistedisAdmin = localStorage.getItem('isAdmin');

const initialState = {
  auth: {
    user: persistedUser ? JSON.parse(persistedUser) : null,
    token: persistedToken || null,
    isAdmin: persistedisAdmin || null, 
  }, 
};
const store = createStore(rootReducer, initialState, applyMiddleware(authMiddleware));
console.log('Initial state:', store.getState());
export default store;