import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { storage } from '../../config/firebaseConfig';

import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../store/selectors/auth';
import { LOGIN_ROUTE, HOME_ROUTE } from '../layout/constants';


import { createProject } from '../../store/actions/project';

class CreateProject extends React.Component {
  state = {
    title: '',
    content: '',
    image: null,
    previewImage: null,
    progress: 0,
    imageUrl: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, content } = this.state;
    const project = { 
      title,
      content
    };
    
    this.props.createProject(project);
    this.props.history.push(HOME_ROUTE);
  }

  handleChange = event => {
    const { target } = event;
    this.setState({
      [target.id]: target.value
    })
  }

  handleInputFileChange = event => {
    if (event.target.files[0]) {
      const previewImage = URL.createObjectURL(event.target.files[0]);
      const image = event.target.files[0];
      console.log(image)
      this.setState({
        image,
        previewImage
      })
    }
  }

  handleImageUpload = () => {
    if (this.state.image) {
      
      const { image } = this.state;
      
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      const progress = snapshot => {
        const getSnapshotPercent = () => {
          const transfered = snapshot.bytesTransferred;
          const total = snapshot.totalBytes
          return Math.floor(transfered * 100 / total);
          
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
        console.log(url)
        this.setState({imageUrl: url})
      })
    }
  }

  handlePreviewLoad = event => {
    console.log('width', event.target.naturalWidth)
    console.log('height', event.target.naturalHeight)
  }

  render() {
    const { isLoggedIn } = this.props;
    const { progress, content, title } = this.state;

    const canCreateProject = isEmpty(content) || isEmpty(title);

    if (isLoggedIn) return (
      <div className="container">
        <div className="card white">
          <form className="card-content" onSubmit={this.handleSubmit} >
            <h5 className="grey-text tex-darken-3">CreateProject</h5>
            <div className="input-field">
              <label htmlFor="title">title</label>
              <input type="text" id="title" onChange={this.handleChange} value={title} />
            </div>

            <div className="input-field">
              <label htmlFor="content">content</label>
              <textarea
                id="content"
                className="materialize-textarea"
                onChange={this.handleChange}
                value={this.state.content} >
              </textarea>
            </div>

            <div className="input-field">
              <button disabled={canCreateProject} className="btn pink lighten-1 z-depth-0">CreateProject</button>
            </div>
          </form>
          <div className="card-content">
            <div className="file-field input-field" >
              <div className="btn">
                <span>Picture</span>
                <input accept="image/*" onChange={this.handleInputFileChange} type="file" />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" accept="image/*" onChange={this.handleInputFileChange} type="text" />
              </div>
            </div>
          </div>
          <div className="card-content">
            <button className="btn" onClick={this.handleImageUpload}  >upload image</button>
            <p>Loaded: { progress }%</p>
            <div className="progress">
              <div className="determinate" style={{ width: `${progress}%` } }></div>
            </div>
          </div>
          <div className="card-content" >
            {
              this.state.previewImage ?
              <div className="card-content" >
                <img style={{ height: '100px', width: 'auto'}} onLoad={this.handlePreviewLoad} src={this.state.previewImage} alt="preview"/>
              </div>
              :
              null
            }
          </div>
            {
              this.state.imageUrl ?
              <div className="card-content" >
                <p>Uploaded image</p>
                <img src={this.state.imageUrl} alt="uploaded"/>
              </div>
              :
              null
            }
        </div>
      </div>
    );

    return <Redirect to={LOGIN_ROUTE} />;
  }
}

const mapStateToProps = state => ({
  isLoggedIn: isLoggedIn(state)
});

const mapDispatchToProps = {
  createProject
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);