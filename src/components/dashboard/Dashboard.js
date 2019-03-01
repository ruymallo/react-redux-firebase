import React from 'react';
import { connect } from 'react-redux';

import { getProjects } from '../../store/selectors/project';

import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends React.Component {
  render() {
    const projects = this.props.projects;

    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects}  />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>  ({
  projects: getProjects(state)
});

export default connect(mapStateToProps)(Dashboard)