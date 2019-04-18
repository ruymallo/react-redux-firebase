import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';

const getModal = get('modal');

export const getModalProps = pipe(
  getModal,
  get('props')
);

export const getChildren = pipe(
  getModalProps,
  get('children')
);

export const getModalTitle = pipe(
  getModalProps,
  get('title')
);

export const getModalFooter = pipe(
  getModalProps,
  get('footer')
);

export const isModalOpen = pipe(
  getModal,
  get('isOpen')
);

export const getModalImages = pipe(
  getModalProps,
  get('images')
);

export const getModalType = pipe(
  getModalProps,
  get('modalType')
);

export const getModalImage = pipe(
  getModalProps,
  get('image')
);

export const getModalImageProgress = pipe(
  getModalProps,
  get('imageProgress')
);
