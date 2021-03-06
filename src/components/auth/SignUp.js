import React from 'react';
import { connect } from 'react-redux';

import { signUp } from '../../store/actions/auth';

import { HOME_ROUTE } from '../layout/constants';
import { Redirect } from 'react-router-dom';
import { isLoggedIn, getAuthErrorMessage } from '../../store/selectors/auth';


class SingUp extends React.Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.signUp(this.state);
  }

  handleChange = event => {
    const { target } = event;
    this.setState({
      [target.id]: target.value
    })
  }

  render() {
    const { isLoggedIn, errorMessage } = this.props;
    if (isLoggedIn) return <Redirect to={HOME_ROUTE} />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white" >
          <h5 className="grey-text tex-darken-3">SignUp</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">lastName</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">SingUp</button>
          </div>
        </form>
        <p className="red-text">{errorMessage ? errorMessage : null}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: isLoggedIn(state),
  errorMessage: getAuthErrorMessage(state),
});

const mapDispatchToProps = {
  signUp: signUp
};

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);