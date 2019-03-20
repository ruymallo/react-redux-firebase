import { LOGIN_SUCCESS, LOGIN_ERROR, SIGN_OUT_SUCCESS, SIGN_OUT_ERROR } from '../constants/actionTypes';

const initialState = {};

export default function auth(state = initialState, action = {}) {
  if (action.type === LOGIN_SUCCESS) {
    return {
      ...state,
      authError: null
    };
  }

  if (action.type === LOGIN_ERROR) {
    return {
      ...state,
      authError: action.error.message
    };
  }

  if (action.type === SIGN_OUT_ERROR) {
    console.error(action.error);
  }

  if (action.type === SIGN_OUT_SUCCESS) {
    console.log('SIGN_OUT_SUCCESS');
  }
  

  return state;
}
