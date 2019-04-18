import React, { createRef, useEffect, useState } from 'react';
import { bool, func, node, string } from 'prop-types';

function Modal({ children, closeModal, footer, shouldModalOpen, title }) {
  const [modalInstance, setModalInstance] = useState(null);

  const modalRef = createRef();

  const getModalInstance = () => {
    const materialize = window.M;

    const modalOptions = {
      onCloseEnd: closeModal
    };

    return materialize.Modal.init(modalRef.current, modalOptions);
  };

  useEffect(() => {
    if (modalInstance && shouldModalOpen) {
      modalInstance.open();
    }

    if (modalInstance && !shouldModalOpen) {
      modalInstance.close();
      modalInstance.destroy();
      setModalInstance(null);
    }

    if (!modalInstance && shouldModalOpen) {
      setModalInstance(getModalInstance());
    }
  }, [shouldModalOpen, modalInstance]);
  return (
    <div ref={modalRef} id="modal" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>{title}</h4>
        {children}
      </div>
      <div className="modal-footer">
        {footer ? footer : <CloseButton closeModal={closeModal} />}
      </div>
    </div>
  );
}

const CloseButton = ({ closeModal }) => (
  <button onClick={closeModal} className="waves-effect waves-green btn-flat">
    Close
  </button>
);

Modal.propTypes = {
  children: node,
  closeModal: func,
  footer: node,
  shouldModalOpen: bool,
  title: string
};

export default Modal;
