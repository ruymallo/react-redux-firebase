import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';

const getModal = get('modal');

const getModalProps = pipe(
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

export const isModalOpen = pipe(
  getModal,
  get('isOpen')
);
