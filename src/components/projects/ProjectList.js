import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

import { getFirestoreProjects } from '../../store/selectors/project'

import ProjectSumary from './ProjectSumary'

function ProjectList({ projects }) {
  
  const projectSummaries = projects.map(project => {
    return (
      <Link key={project.id} to={`/project/${project.id}`}>
        <ProjectSumary project={project} />
      </Link>
    );
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