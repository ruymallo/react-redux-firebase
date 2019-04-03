import { SET_PROJECT_TO_DISPLAY } from '../../constants/actionTypes';

export default function projectToDisplay(state = {}, action = {}) {
  if (action.type === SET_PROJECT_TO_DISPLAY) {
    return action.projectToDisplay;
  }

  return state;
}
