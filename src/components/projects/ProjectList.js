import React from 'react';

import ProjectSumary from './ProjectSumary'

export default function ProjectList() {
  return (
    <div className="project-list section" >
      <ProjectSumary />
      <ProjectSumary />
      <ProjectSumary />
      <ProjectSumary />
    </div>
  );
}