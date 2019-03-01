import { combineReducers } from "redux";
import concat from 'lodash/concat';

import { CREATE_PROJECT_SUCCESS } from '../constants/actionTypes';

const projectsInitialState = [
  { id: '1', title: 'Lorem, ipsum dolor.', content: 'Content lorem ipsum dolor sit.' },
  { id: '2', title: 'Lorem, ipsum dolor.', content: 'Content lorem ipsum dolor sit.' },
  { id: '3', title: 'Lorem, ipsum dolor.', content: 'Content lorem ipsum dolor sit.' }
];

function projects(state = projectsInitialState, action = {}) {
  if (action.type === CREATE_PROJECT_SUCCESS) {
    return concat(state, action.project);
  }
  
  return state;
}

export default combineReducers({
  projects
});
