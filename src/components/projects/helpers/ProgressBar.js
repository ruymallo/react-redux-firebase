import React from 'react';
import isNumber from 'lodash/isNumber';

const ProgressBar = ({ progress }) => {
  const isProgressNumber = isNumber(progress);

  return isProgressNumber ? (
    <div className={isProgressNumber ? 'progress' : 'progress null'}>
      <div className="determinate" style={{ width: `${progress}%` }} />
    </div>
  ) : null;
};

export default ProgressBar;
