import { combineReducers } from "redux";
import concat from 'lodash/concat';

import { CREATE_PROJECT_SUCCESS, CREATE_PROJECT_ERROR } from '../constants/actionTypes';

function projects(state = [], action = {}) {
  if (action.type === CREATE_PROJECT_SUCCESS) {
    return concat(state, action.project);
  }

  if (action.type === CREATE_PROJECT_ERROR) {
    console.log(action.error)
  }
  
  return state;
}

export default combineReducers({
  projects
});
