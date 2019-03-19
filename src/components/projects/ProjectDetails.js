import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import { getFirestoreProjectById } from '../../store/selectors/project'

function ProjectDetails({ project }) {
  const formatDate = date => new Date(date).toUTCString();

  if(project) {
    const {
      authorFirstName,
      authorLastName,
      content,
      createdAt,
      title
    } = project;

    return (
      <div className="container section project-ProjectDetails">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>posted by {authorFirstName} - {authorLastName}</div>
            <div>{formatDate(createdAt)}</div>
          </div>
        </div>
      </div>
    );
  }

  return <p style={{ textAlign: 'center'}}>loading...</p>;
}

const mapStateToProps = (state, ownProps) => ({
  project: getFirestoreProjectById(state, ownProps.match.params.id)
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);