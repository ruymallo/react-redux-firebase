import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import { getFirestoreProjects } from '../../store/selectors/project'

import ProjectSumary from './ProjectSumary'

function ProjectList({ projects, firestore }) {
  console.log(firestore);
  
  const projectSummaries = projects.map(project => {
    return <ProjectSumary key={project.id} project={project} />;
  });

  return (
    <div className="project-list section" >
      { projectSummaries }
    </div>
  );
}


const mapStateToProps = state => ({ 
  projects: getFirestoreProjects(state)
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectList);