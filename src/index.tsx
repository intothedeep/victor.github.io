import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import {  HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './app/store';
import { history } from './modules'
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <ConnectedRouter history={history} >
          <App/>  
        </ConnectedRouter>
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
