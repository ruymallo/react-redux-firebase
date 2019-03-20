import { LOGIN_SUCCESS, LOGIN_ERROR, SIGN_OUT_SUCCESS, SIGN_OUT_ERROR } from '../constants/actionTypes';

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

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    window.getState = getState;
    const firebase = getFirebase();

    firebase.auth().signOut()
      .then(() => dispatch(signOutSuccess()))
      .catch(error => dispatch(signOutError(error)));
  }
}

const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

const signOutError = error => ({
  type: SIGN_OUT_ERROR,
  error
});