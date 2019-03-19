import { addDocumentToFiresore } from '../../utilities/firestoreActionCreators';
import { CREATE_PROJECT_SUCCESS, CREATE_PROJECT_ERROR } from '../constants/actionTypes';
import { CREATE_PROJECT_ID } from '../constants/requestsIds';

const createProjectSuccess = project => ({
  type: CREATE_PROJECT_SUCCESS,
  project
});

const createProjectError = error => ({
  type: CREATE_PROJECT_ERROR,
  error
});

const addProjectMetadata = actionCreator => project => {
  const finalObject = {
    ...project,
    createdAt: Date.now(),
    authorFirstName: 'FAKE_FIRST_NAME',
    authorLastName: 'FAKE_LAST_NAME',
  };

  return actionCreator(finalObject);
};


const addProjectToFirestore = addProjectMetadata(addDocumentToFiresore({
  collection: 'projects',
  requestId: CREATE_PROJECT_ID,
  successCallback: createProjectSuccess,
  errorCallback: createProjectError
}));

export const createProject = addProjectToFirestore
