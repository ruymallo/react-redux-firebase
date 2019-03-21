import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LOGIN_ROUTE } from '../layout/constants';

import { isLoggedIn } from '../../store/selectors/auth';
import { getProjects } from '../../store/selectors/project';

import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends React.Component {
  render() {
    const { projects, isLoggedIn } = this.props;

    if (isLoggedIn) return(
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

    return <Redirect to={LOGIN_ROUTE} />
  }
}

const mapStateToProps = state =>  ({
  projects: getProjects(state),
  isLoggedIn: isLoggedIn(state)
});

export default connect(mapStateToProps)(Dashboard)