import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { deleteFirebaseProject } from '../../store/actions/project';

function ProjectSumary({ project, deleteFirebaseProject }) {
  const { content, createdAt, title, id } = project;

  const handleDelete = event => {
    event.preventDefault();
    event.stopPropagation();
    deleteFirebaseProject(id);
  };

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{content}</p>
        <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
      </div>
      <button className="btn waves-effect waves-light red darken-1" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

const mapDispatchToProps = {
  deleteFirebaseProject
};

export default connect(
  null,
  mapDispatchToProps
)(ProjectSumary);
