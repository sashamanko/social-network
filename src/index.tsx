// Imports | React
// __________________________________________________
import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS | My
// __________________________________________________
import './styles/index.scss';

// Imports | App
// __________________________________________________
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);