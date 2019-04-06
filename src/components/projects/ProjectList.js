import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

import { getFirestoreProjects } from '../../store/selectors/project';
import { setProjectToDisplay } from '../../store/actions/project';

import ProjectSumary from './ProjectSumary';

function ProjectList({ projects, setProjectToDisplay }) {
  const projectSummaries = projects.map(project => {
    const handleProjectLinkClick = () => setProjectToDisplay(project);
    return (
      <Link onClick={handleProjectLinkClick} key={project.id} to={`/project/${project.id}`}>
        <ProjectSumary project={project} />
      </Link>
    );
  });

  return <div className="project-list section">{projectSummaries}</div>;
}

const mapStateToProps = state => ({
  projects: getFirestoreProjects(state)
});

const mapDispatchToProps = {
  setProjectToDisplay
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: 'projects', orderBy: ['createdAt', 'desc'] }])
)(ProjectList);
