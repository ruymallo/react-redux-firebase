import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/auth';
import { getUserInitials } from '../../store/selectors/auth';

import { CREATE_ROUTE, HOME_ROUTE } from '../layout/constants';

const LoggedInLinks = ({ signOut, userInitials }) => {
  return (
    <ul className="right">
      <li><NavLink to={CREATE_ROUTE} >New Project</NavLink> </li>
      <li><button onClick={signOut}>Log Out</button></li>
      <li><NavLink to={HOME_ROUTE} className="btn btn-floating pink" >{userInitials}</NavLink> </li>
    </ul>
  );
}

const mapStateToProps = state => ({
  userInitials: getUserInitials(state)
})

const mapDispatchToProps = {
  signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInLinks);