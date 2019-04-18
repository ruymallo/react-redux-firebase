import { CLOSE_MODAL, OPEN_MODAL, SET_MODAL_PROP } from '../constants/actionTypes';

const modalInitialState = {
  isOpen: false,
  props: {}
};

export default function modal(state = modalInitialState, action = {}) {
  switch (action.type) {
    case CLOSE_MODAL:
      return modalInitialState;

    case OPEN_MODAL:
      return {
        props: action.props,
        isOpen: true
      };

    case SET_MODAL_PROP:
      return {
        ...state,
        props: {
          ...state.props,
          [action.key]: action.value
        }
      };

    default:
      return state;
  }
}
