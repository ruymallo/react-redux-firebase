import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import auth from './auth';
import project from './project';

export default combineReducers({
  auth,
  firestore: firestoreReducer,
  project
});