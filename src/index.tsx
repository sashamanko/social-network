// Imports | React, React router, React redux 
// __________________________________________________
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Imports | Firebase
// __________________________________________________
import "./utils/firebase";

// Redux | My store
// __________________________________________________
import { store } from './redux/store';

// CSS | My
// __________________________________________________
import './styles/index.scss';

// Imports | App
// __________________________________________________
import App from './App';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);