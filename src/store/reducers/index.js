import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import auth from './auth';
import project from './project';

export default combineReducers({
  auth,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  project
});