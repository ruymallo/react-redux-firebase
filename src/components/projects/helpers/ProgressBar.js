import React from 'react';

const ProgressBar = ({ progress }) => {
  return progress ? (
    <div className={progress ? 'progress' : 'progress null'}>
      <div className="determinate" style={{ width: `${progress}%` }} />
    </div>
  ) : null;
};

export default ProgressBar;
