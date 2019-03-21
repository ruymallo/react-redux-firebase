import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGN_OUT_ERROR,
  SIGN_OUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS
} from '../constants/actionTypes';

export const logIn = credentials => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
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

const signUpError = error => ({
  type: SIGN_UP_ERROR,
  error
});

const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS
});


export const signUp = user => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      user.email, user.password
    )
    .then(firebaseResponse => firestore
      .collection('users')
      .doc(firebaseResponse.user.uid)
      .set({
        firstName: user.firstName,
        lastName: user.lastName
      })
    ).then(() => dispatch(signUpSuccess()))
    .catch(error => dispatch(signUpError(error)))
  }
}
