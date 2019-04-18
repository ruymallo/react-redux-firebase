import { CLOSE_MODAL, OPEN_MODAL, SET_MODAL_PROP } from '../constants/actionTypes';

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const openModal = props => ({
  type: OPEN_MODAL,
  props
});

export const setModalProp = (key, value) => ({
  type: SET_MODAL_PROP,
  key,
  value
});
