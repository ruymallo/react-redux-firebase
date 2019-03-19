import { LOGIN_SUCCESS, LOGIN_ERROR } from '../constants/actionTypes';

export const logIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    )
    .then(token => dispatch(logInSuccess(token)))
    
    .catch(err => dispatch(logInError(err)));
  }
}

const logInError = error => ({
  type: LOGIN_ERROR,
  error
});

const logInSuccess = token => ({
  type: LOGIN_SUCCESS,
  token
});