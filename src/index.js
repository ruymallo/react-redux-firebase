import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import firebaseConfig from './config/firebaseConfig';

import rootReducer from './store/reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const thunkWithFirebaseAndFirestore = thunk.withExtraArgument({
  getFirebase,
  getFirestore
});

const isEnvDev = process.env.NODE_ENV === 'development';

const middlewares = isEnvDev
  ? [thunkWithFirebaseAndFirestore, logger]
  : [thunkWithFirebaseAndFirestore];

const reactReduxFirebaseConf = {
  useFirestoreForProfile: true,
  userProfile: 'users',
  attachAuthIsReady: true
};

const store = createStore(
  rootReducer,
  compose(
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig, reactReduxFirebaseConf),
    applyMiddleware(...middlewares)
  )
);

window.getState = store.getState;

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();
});
