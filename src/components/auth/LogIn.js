import React from 'react';


export default class LogIn extends React.Component {
  state = {
    email: '',
    password: ''
  };
  
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
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
        </form>
      </div>
    );
  }
}