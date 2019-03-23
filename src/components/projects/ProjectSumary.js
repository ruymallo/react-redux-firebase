import React from 'react';
import moment from 'moment';

export default function ProjectSumary({project}) {
  const { content, createdAt, title } = project;

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{content}</p>
        <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
}