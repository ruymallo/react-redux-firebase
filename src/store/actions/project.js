import { addDocumentToFiresore } from '../../utilities/firestoreActionCreators';
import { CREATE_PROJECT_SUCCESS, CREATE_PROJECT_ERROR, SET__PROJECT_TO_DISPLAY } from '../constants/actionTypes';
import { CREATE_PROJECT_ID } from '../constants/requestsIds';

const createProjectSuccess = project => ({
  type: CREATE_PROJECT_SUCCESS,
  project
});

const createProjectError = error => ({
  type: CREATE_PROJECT_ERROR,
  error
});


const addProjectToFirestore = addDocumentToFiresore({
  collection: 'projects',
  requestId: CREATE_PROJECT_ID,
  successCallback: createProjectSuccess,
  errorCallback: createProjectError
});

export const setProjectToDisplay = projectToDisplay => ({
  type: SET__PROJECT_TO_DISPLAY,
  projectToDisplay
});

export const fetchFirestoreProjectById = id => (dispatch, getState, { getFirestore }) =>{
  const firestore = getFirestore();

  firestore.collection('projects')
    .doc(id).get()
    .then(project => dispatch(setProjectToDisplay(project.data())))
}


export const createProject = addProjectToFirestore;
