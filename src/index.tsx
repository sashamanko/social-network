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
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import "./firebase";

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);