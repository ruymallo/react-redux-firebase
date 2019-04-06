import { combineReducers } from 'redux';

import projects from './projects';
import projectToCreate from './projectToCreate';
import projectToDisplay from './projectToDisplay';

export default combineReducers({
  projects,
  projectToCreate,
  projectToDisplay
});
