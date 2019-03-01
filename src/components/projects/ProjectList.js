import React from 'react';

import ProjectSumary from './ProjectSumary'

export default function ProjectList({ projects }) {
  console.log(projects)
  const projectSummaries = projects.map(project => {
    return <ProjectSumary key={project.id} project={project} />;
  });

  return (
    <div className="project-list section" >
      { projectSummaries }
    </div>
  );
}