import { CLOSE_MODAL, OPEN_MODAL } from '../constants/actionTypes';

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const openModal = props => ({
  type: OPEN_MODAL,
  props
});
