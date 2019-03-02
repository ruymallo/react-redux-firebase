import { addDocumentToFiresore } from '../../utilities/firestoreActionCreators';
import { CREATE_PROJECT_SUCCESS } from '../constants/actionTypes';
import { CREATE_PROJECT_ID } from '../constants/requestsIds';

const createProjectSuccess = project => ({
  type: CREATE_PROJECT_SUCCESS,
  project
});

export const createProject = addDocumentToFiresore({
  collection: 'projects',
  requestId: CREATE_PROJECT_ID,
  successCallback: createProjectSuccess,
  errorCallback: console.log
});

