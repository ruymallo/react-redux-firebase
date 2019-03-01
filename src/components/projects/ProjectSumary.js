import React from 'react';

export default function ProjectSumary({project}) {
  const { content, id, title } = project

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content">
        <span className="card-title">{title} - {id}</span>
        <p>{content}</p>
        <p className="grey-text">{Date.now()}</p>
      </div>
    </div>
  );
}