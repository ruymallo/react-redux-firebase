import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/auth';
import { getUserEmail } from '../../store/selectors/auth';

const LoggedInLinks = ({ signOut, email }) => {
  return (
    <ul className="right">
      <li><NavLink to="/create" >New Project</NavLink> </li>
      <li><button onClick={signOut}>Log Out</button></li>
      <li><NavLink to="/" className="btn btn-floating pink" >{email}</NavLink> </li>
    </ul>
  );
}

const mapStateToProps = state => ({
  email: getUserEmail(state)
})

const mapDispatchToProps = {
  signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInLinks);