import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootswatch/dist/flatly/bootstrap.min.css';
import './index.css';

import App from './App';
import reducers from './state/reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
