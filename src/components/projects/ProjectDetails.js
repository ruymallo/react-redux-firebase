import React from 'react';

export default function ProjectDetails({match}) {
  const id = match.params.id;

  return (
    <div className="container section project-ProjectDetails">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title id: {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eaque.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>posted by Ruy Mallo</div>
          <div>22-12-19</div>
        </div>
      </div>
    </div>
  );
}