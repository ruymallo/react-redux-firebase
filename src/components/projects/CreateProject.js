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
import { storage } from '../../config/firebaseConfig';

import FileInput from './helpers/FileInput';
import InputField from './helpers/InputField';
import ProgressBar from './helpers/ProgressBar';

class CreateProject extends React.Component {
  state = {
    image: null,
    progress: 0,
    imageUrl: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, content, images } = this.state;
    const project = {
      title,
      content,
      images
    };

    this.props.createProject(project);
    this.props.history.push(HOME_ROUTE);
  };

  handleProjectDataChange = ({ target }) => {
    this.props.setProjectToCreateData(target.id, target.value);
  };

  handleImageUpload = () => {
    if (this.state.image) {
      const { image } = this.state;

      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      const progress = snapshot => {
        const getSnapshotPercent = () => {
          const transfered = snapshot.bytesTransferred;
          const total = snapshot.totalBytes;
          return Math.floor((transfered * 100) / total);
        };

        this.setState({
          progress: getSnapshotPercent()
        });
      };

      const error = err => {
        console.log(err);
      };

      const complete = () => {
        console.log('complete', uploadTask.snapshot);
      };

      uploadTask.on('state_changed', progress, error, complete);

      uploadTask.snapshot.ref.getDownloadURL().then(url => {
        this.setState({ imageUrl: url });
      });
    }
  };

  handlePreviewLoad = event => {
    console.log('width', event.target.naturalWidth);
    console.log('height', event.target.naturalHeight);
  };

  render() {
    const { progress } = this.state;
    const { isLoggedIn, title, content } = this.props;

    const canCreateProject = isEmpty(content) || isEmpty(title);

    if (isLoggedIn)
      return (
        <div className="container">
          <div className="card white">
            <form className="card-content" onSubmit={this.handleSubmit}>
              <InputField
                id="title"
                label="Title"
                onChange={this.handleProjectDataChange}
                value={title}
              />
              <InputField
                id="content.lead"
                label="Lead"
                onChange={this.handleProjectDataChange}
                value={content.lead}
              />
              <InputField
                id="content.body"
                label="Content"
                onChange={this.handleProjectDataChange}
                value={content.body}
              />
              <FileInput id="images.intro" label="Intro image" />
              <FileInput id="images.full" label="Full image" />
              <ProgressBar progress={progress} />
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
  }
}

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
