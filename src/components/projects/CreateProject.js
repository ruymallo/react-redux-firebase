import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import {
  createProject,
  resetProjectToCreate,
  setProjectToCreateData
} from '../../store/actions/project';
import { getProjectToCreateData } from '../../store/selectors/project';
import { isLoggedIn } from '../../store/selectors/auth';
import { LOGIN_ROUTE, HOME_ROUTE } from '../layout/constants';

import FileUploaderModalTrigger from './helpers/FileUploader';
import InputField from './helpers/InputField';

const CreateProject = props => {
  const handleSubmit = event => {
    event.preventDefault();

    props.createProject();
    props.history.push(HOME_ROUTE);
  };

  const handleProjectDataChange = ({ target }) => {
    props.setProjectToCreateData(target.id, target.value);
  };
  const { isLoggedIn, title, content } = props;

  const canCreateProject = isEmpty(content) || isEmpty(title);

  if (isLoggedIn)
    return (
      <div className="container">
        <div className="card white">
          <form className="card-content" onSubmit={handleSubmit}>
            <InputField id="title" label="Title" onChange={handleProjectDataChange} value={title} />
            <InputField
              id="content.lead"
              label="Lead"
              onChange={handleProjectDataChange}
              value={content.lead}
            />
            <InputField
              id="content.body"
              label="Content"
              onChange={handleProjectDataChange}
              value={content.body}
            />
            <FileUploaderModalTrigger modalType="images.intro" label="Intro" />
            <FileUploaderModalTrigger modalType="images.full" label="Full" />
            <div className="input-field">
              <button disabled={canCreateProject} className="btn pink lighten-1 z-depth-0">
                CreateProject
              </button>
            </div>
          </form>
        </div>
      </div>
    );

  return <Redirect to={LOGIN_ROUTE} />;
};

const mapStateToProps = state => ({
  content: getProjectToCreateData(state, 'content.body'),
  isLoggedIn: isLoggedIn(state),
  lead: getProjectToCreateData(state, 'content.lead'),
  title: getProjectToCreateData(state, 'title')
});

const mapDispatchToProps = {
  createProject,
  resetProjectToCreate,
  setProjectToCreateData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
