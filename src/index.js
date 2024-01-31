import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import serverSetup from "./mirage/server";

 if (process.env.NODE_ENV === 'development') {
  serverSetup();
} 

ReactDOM.createRoot(document.getElementById('root')).render(
   /*  <React.StrictMode> */
      <App />
  /*   </React.StrictMode> */
  );
