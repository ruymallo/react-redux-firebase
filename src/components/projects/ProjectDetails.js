import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';

import { getProjectToDisplay, getIdParam } from '../../store/selectors/project';
import {
  fetchFirestoreProjectById,
  setProjectToDisplay,
  deleteFirebaseProject
} from '../../store/actions/project';

const Spinner = () => (
  <div style={{ margin: 20 }} className="center-align">
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-green-only">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
  </div>
);

const ProjectDetails = props => {
  const handleProjectDelete = () => props.deleteFirebaseProject(getIdParam(props));

  if (isEmpty(props.project)) {
    props.fetchFirestoreProjectById(getIdParam(props));
  }

  const cleanUp = () => {
    if (!isEmpty(props.project)) {
      console.log('not empty');
      props.setProjectToDisplay({});
    }
  };

  useEffect(() => cleanUp);

  if (!isEmpty(props.project)) {
    const { authorFirstName, authorLastName, content, createdAt, title, imageUrl } = props.project;

    const formatDate = date => moment(date.toDate()).calendar();
    return (
      <div className="container section project-ProjectDetails">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{content.lead}</p>
            <p>{content.body}</p>
            {imageUrl ? <img src={imageUrl} alt="intro" /> : null}
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              posted by {authorFirstName} {authorLastName}
            </div>
            <div>{formatDate(createdAt)}</div>
            <button
              className="btn waves-effect waves-light red darken-1"
              onClick={handleProjectDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <Spinner />;
};

const mapStateToProps = state => ({
  project: getProjectToDisplay(state)
});

const mapDispatchToProps = {
  fetchFirestoreProjectById,
  setProjectToDisplay,
  deleteFirebaseProject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetails);
