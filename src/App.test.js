import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './App';
import reducers from './state/reducers';


it('renders without crashing', () => {
  const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <App />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
