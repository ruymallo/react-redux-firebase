import { combineReducers } from "redux";
import concat from 'lodash/concat';

import { CREATE_PROJECT_SUCCESS, CREATE_PROJECT_ERROR, SET__PROJECT_TO_DISPLAY } from '../constants/actionTypes';

function projects(state = [], action = {}) {
  if (action.type === CREATE_PROJECT_SUCCESS) {
    return concat(state, action.project);
  }

  if (action.type === CREATE_PROJECT_ERROR) {
    console.log(action.error)
  }
  
  return state;
}

function projectToDisplay(state = {}, action = {}) {
  if (action.type === SET__PROJECT_TO_DISPLAY) {
    return action.projectToDisplay
  }
  
  return state;
}

export default combineReducers({
  projects,
  projectToDisplay
});
