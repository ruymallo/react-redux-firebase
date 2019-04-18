import React from 'react';

import FileUploaderModalContent from './FileUploaderModalContent';
import FileUploaderModalFooter from './FileUploaderModalFooter';

const FileUploaderModalTrigger = ({ openModal, modalType, label, imageUrl }) => {
  const modalProps = {
    children: <FileUploaderModalContent />,
    title: `Upload ${label} image`,
    footer: <FileUploaderModalFooter />,
    imageProgress: null,
    modalType
  };

  const handleClick = event => {
    event.preventDefault();

    openModal(modalProps);
  };
  return (
    <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      {imageUrl ? (
        <div className="card-image">
          <img src={imageUrl} alt="content to upload" />
        </div>
      ) : null}
      <div className="card-content">
        <span style={{ margin: 0 }} className="card-title">
          Set {label} image
        </span>
      </div>
    </div>
  );
};

export default FileUploaderModalTrigger;
