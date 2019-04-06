import { loadingRequestStart, loadingRequestEnd } from '../store/actions/loadingRequestStatus';
import { getUid, getProfile } from '../store/selectors/auth';
import { getProjectToCreateData } from '../store/selectors/project';

export const addDocumentToFirestore = ({
  collection,
  requestId,
  successCallback,
  errorCallback
}) => {
  return project => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
      dispatch(loadingRequestStart(requestId));

      const firestore = getFirestore();

      const state = getState();

      const { firstName, lastName } = getProfile(state);

      const newProject = {
        title: getProjectToCreateData(state, 'title'),
        content: {
          body: getProjectToCreateData(state, 'content.body'),
          lead: getProjectToCreateData(state, 'content.lead')
        },
        images: getProjectToCreateData(state, 'images'),
        createdAt: new Date(),
        authorFirstName: firstName,
        authorLastName: lastName,
        authorId: getUid(state)
      };

      firestore
        .collection(collection)
        .add(newProject)
        .then(() => {
          dispatch(loadingRequestEnd(requestId));

          dispatch(successCallback(newProject));
        })
        .catch(error => {
          dispatch(loadingRequestEnd(requestId));

          dispatch(errorCallback(error));
        });
    };
  };
};
