import { loadingRequestStart, loadingRequestEnd } from '../store/actions/loadingRequestStatus';

export const addDocumentToFiresore = ({
  collection, requestId, successCallback, errorCallback
}) => {
  return data => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
      dispatch(loadingRequestStart(requestId));

      const firestore = getFirestore();
      firestore.collection(collection).add({
      ...data
      })
      .then(() => {
        dispatch(loadingRequestEnd(requestId));

        dispatch(successCallback(data));
      })
      .catch(error => {
        dispatch(loadingRequestEnd(requestId));

        dispatch(errorCallback(error));
      })
    }
  }
};