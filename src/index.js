import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { UserAuthContextProvider } from './Context/UserAuthContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
require('typeface-playfair-display');
require('typeface-pacifico');
ReactDOM.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <App />
    </UserAuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
