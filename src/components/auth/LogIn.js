import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { HOME_ROUTE } from '../layout/constants';

import { isLoggedIn } from '../../store/selectors/auth';
import { getAuthErrorMessage } from '../../store/selectors/auth'
import { logIn } from '../../store/actions/auth'


class LogIn extends React.Component {
  state = {
    email: '',
    password: ''
  };
  
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.logIn(this.state);
  }

  handleChange = event => {
    const { target } = event;
    this.setState({
      [target.id]: target.value
    })
  }
  
  render() {
    const { errorMessage, isLoggedIn } = this.props;
    if (isLoggedIn) return <Redirect to={HOME_ROUTE} />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white" >
          <h5 className="grey-text tex-darken-3">Log In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
          <p className="red-text">{errorMessage ? errorMessage : null}</p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: getAuthErrorMessage(state),
  isLoggedIn: isLoggedIn(state)
})

const mapDispatchToProps = {
  logIn
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);