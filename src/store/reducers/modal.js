import { CLOSE_MODAL, OPEN_MODAL } from '../constants/actionTypes';

const modalInitialState = {
  isOpen: false,
  props: {}
};

export default function modal(state = modalInitialState, action = {}) {
  switch (action.type) {
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false
      };

    case OPEN_MODAL:
      return {
        props: action.props,
        isOpen: true
      };

    default:
      return state;
  }
}
