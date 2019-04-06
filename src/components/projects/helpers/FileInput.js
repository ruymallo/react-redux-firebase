import React, { useState } from 'react';

const FileInput = ({ onChange, label, id }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleInputFileChange = event => {
    if (event.target.files.length) {
      const image = event.target.files[0];
      const previewImage = URL.createObjectURL(image);
      setPreviewImage(previewImage);
    }
  };

  return (
    <div className="fileUploader">
      <div className="file-field input-field">
        <div className="btn">
          <span>{label}</span>
          <input id={id} accept="image/*" onChange={handleInputFileChange} type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" accept="image/*" onChange={onChange} type="text" />
        </div>
      </div>
      {previewImage ? (
        <div className="image-preview">
          <img src={previewImage} alt={previewImage} />
        </div>
      ) : null}
    </div>
  );
};

export default FileInput;
