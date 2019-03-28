import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty'
import moment from 'moment';

import { getProjectToDisplay, getIdParam } from '../../store/selectors/project'
import { fetchFirestoreProjectById, setProjectToDisplay } from '../../store/actions/project';

class ProjectDetails extends React.Component {
  componentDidMount() {
    if(isEmpty(this.props.project)) {
      this.props.fetchFirestoreProjectById(getIdParam(this.props));
    }
  }

  componentWillUnmount() {
    this.props.setProjectToDisplay({})
  }
  
  render() {
    const formatDate = date => moment(date.toDate()).calendar();

    if (isEmpty(this.props.project)) return <p className="center" >loading...</p>;

    const {
      authorFirstName,
      authorLastName,
      content,
      createdAt,
      title
    } = this.props.project;

    return (
      <div className="container section project-ProjectDetails">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>posted by {authorFirstName} {authorLastName}</div>
            <div>{formatDate(createdAt)}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: getProjectToDisplay(state)
});

const mapDispatchToProps = {
  fetchFirestoreProjectById,
  setProjectToDisplay
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);