import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import auth from './auth';
import modal from './modal';
import project from './project';

export default combineReducers({
  auth,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  modal,
  project
});
