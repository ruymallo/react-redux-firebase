import { CREATE_PROJECT_SUCCESS } from '../constants/actionTypes';

export const createProject = project => {
  return dispatch => {
    dispatch(createProjectSuccess(project));
  }
};

const createProjectSuccess = project => ({
  type: CREATE_PROJECT_SUCCESS,
  project
});
