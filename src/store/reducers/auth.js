import { LOGIN_SUCCESS, LOGIN_ERROR } from '../constants/actionTypes';

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

  return state;
}
