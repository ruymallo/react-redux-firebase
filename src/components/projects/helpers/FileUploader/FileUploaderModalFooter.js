import React from 'react';
import { connect } from 'react-redux';
import { storage } from '../../../../config/firebaseConfig';
import { closeModal } from '../../../../store/actions/modal';
import { setProjectToCreateData } from '../../../../store/actions/project';
import { setModalProp } from '../../../../store/actions/modal';
import {
  getModalType,
  getModalImage,
  getModalImageProgress
} from '../../../../store/selectors/modal';

import ProgressBar from '../ProgressBar';

const getButtonClassName = className => {
  return `${className ? className + ' ' : ''}waves-effect waves-green btn-flat white-text`;
};

const Button = ({ action, label, className, disabled }) => (
  <button disabled={disabled} onClick={action} className={getButtonClassName(className)}>
    {label}
  </button>
);

const BottomProgressBar = ({ progress }) => (
  <div
    style={{
      position: 'absolute',
      left: '0',
      right: '0',
      top: '-10px'
    }}>
    <ProgressBar progress={progress} />
  </div>
);

const FileUploaderModalFooter = ({
  image,
  modalType,
  progress,
  setModalProp,
  setProjectToCreateData,
  closeModal
}) => {
  const handleImageUpload = () => {
    if (image) {
      const randomString = 'IMAGE-' + (Date.now() + Math.random()).toString();

      const uploadTask = storage.ref(`images/${randomString}${image.name}`).put(image);
      const progress = snapshot => {
        const getSnapshotPercent = () => {
          const transfered = snapshot.bytesTransferred;
          const total = snapshot.totalBytes;
          return Math.floor((transfered * 100) / total);
        };

        setModalProp('imageProgress', getSnapshotPercent());
      };

      const error = err => {
        console.log(err);
      };

      const complete = () => {
        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          setProjectToCreateData(modalType, url);
          closeModal();
        });
      };

      uploadTask.on('state_changed', progress, error, complete);
    }
  };

  return [
    <BottomProgressBar key="progressBar" progress={progress} />,
    <Button key="closeModal" action={closeModal} label="Cancel" className="red left" />,
    <Button
      key="confirmUpload"
      action={handleImageUpload}
      label="Save"
      className="teal"
      disabled={!image}
    />
  ];
};

const mapStateToProps = (state, ownProps) => ({
  image: getModalImage(state),
  modalType: getModalType(state),
  progress: getModalImageProgress(state)
});

const mapDispatchToProps = {
  closeModal,
  setModalProp,
  setProjectToCreateData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUploaderModalFooter);
