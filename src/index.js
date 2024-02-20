import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from  './redux/store.js';
import {makeServer} from "./mirage/config.js";
import './index.css';

if (process.env.NODE_ENV === 'development') {
   makeServer({ environment: 'development' });
 }

 ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <App />
   </Provider>,
   
 );
