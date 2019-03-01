import React from 'react';
import { connect } from 'react-redux';

import { createProject } from '../../store/actions/project';

class CreateProject extends React.Component {
  state = {
    title: '',
    content: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.createProject(this.state);
  }

  handleChange = event => {
    const { target } = event;
    this.setState({
      [target.id]: target.value
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white" >
          <h5 className="grey-text tex-darken-3">CreateProject</h5>
          <div className="input-field">
            <label htmlFor="title">title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange} >
            </textarea>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">CreateProject</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createProject
}

export default connect(null, mapDispatchToProps)(CreateProject);