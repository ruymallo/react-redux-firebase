import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGN_OUT_ERROR,
  SIGN_OUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS
} from '../constants/actionTypes';

const initialState = {};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: action.error.message
      };
    
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      };
    
    case SIGN_OUT_ERROR:
      console.error(action.error);

      return state;

    case SIGN_OUT_SUCCESS:
      console.log(SIGN_OUT_SUCCESS);
      
      return state;

    case SIGN_UP_ERROR:
      return {
        ...state,
        authError: action.error.message
      };


    case SIGN_UP_SUCCESS:
      return {
        ...state,
        authError: null
      };
      
    default:
      return state
  }
}
