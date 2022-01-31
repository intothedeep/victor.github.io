import React from 'react';
import { Provider } from 'react-redux';

import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { history } from './modules'
// import { ConnectedRouter } from 'connected-react-router';
// import { Router } from 'react-router';

import * as serviceWorker from './serviceWorker';
import { store } from './app/store';
import App from './App';

import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <BrowserRouter >
          <App />
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

console.log(process.env);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
