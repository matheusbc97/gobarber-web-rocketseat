import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './hooks/auth';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
