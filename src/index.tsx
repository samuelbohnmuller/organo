import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!); //Com o ! garanto que vai ter retorno do elemento root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);